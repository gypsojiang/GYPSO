const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();

// 配置文件上传
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, 'uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// 中间件
app.use(express.json());
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// 数据存储
let images = [];
let works = [];
let aboutContent = {
    en: '',
    es: '',
    zh: ''
};

// API 路由
// 图片上传
app.post('/api/upload-image', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: '没有上传文件' });
    }

    const image = {
        id: Date.now().toString(),
        name: req.body.name,
        url: `/uploads/${req.file.filename}`
    };

    images.push(image);
    res.json(image);
});

// 获取所有图片
app.get('/api/images', (req, res) => {
    res.json(images);
});

// 删除图片
app.delete('/api/images/:id', (req, res) => {
    const id = req.params.id;
    const image = images.find(img => img.id === id);
    
    if (!image) {
        return res.status(404).json({ error: '图片不存在' });
    }

    // 删除文件
    const filePath = path.join(__dirname, 'uploads', path.basename(image.url));
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }

    // 从数组中移除
    images = images.filter(img => img.id !== id);
    res.json({ success: true });
});

// 作品上传
app.post('/api/upload-work', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: '没有上传文件' });
    }

    const work = {
        id: Date.now().toString(),
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        imageUrl: `/uploads/${req.file.filename}`
    };

    works.push(work);
    res.json(work);
});

// 获取所有作品
app.get('/api/works', (req, res) => {
    res.json(works);
});

// 获取单个作品
app.get('/api/works/:id', (req, res) => {
    const work = works.find(w => w.id === req.params.id);
    if (!work) {
        return res.status(404).json({ error: '作品不存在' });
    }
    res.json(work);
});

// 更新作品
app.put('/api/works/:id', upload.single('image'), (req, res) => {
    const id = req.params.id;
    const workIndex = works.findIndex(w => w.id === id);
    
    if (workIndex === -1) {
        return res.status(404).json({ error: '作品不存在' });
    }

    const work = works[workIndex];
    
    // 如果有新图片上传
    if (req.file) {
        // 删除旧图片
        const oldFilePath = path.join(__dirname, 'uploads', path.basename(work.imageUrl));
        if (fs.existsSync(oldFilePath)) {
            fs.unlinkSync(oldFilePath);
        }
        
        work.imageUrl = `/uploads/${req.file.filename}`;
    }

    // 更新其他字段
    work.title = req.body.title || work.title;
    work.category = req.body.category || work.category;
    work.description = req.body.description || work.description;

    res.json(work);
});

// 删除作品
app.delete('/api/works/:id', (req, res) => {
    const id = req.params.id;
    const work = works.find(w => w.id === id);
    
    if (!work) {
        return res.status(404).json({ error: '作品不存在' });
    }

    // 删除图片文件
    const filePath = path.join(__dirname, 'uploads', path.basename(work.imageUrl));
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }

    // 从数组中移除
    works = works.filter(w => w.id !== id);
    res.json({ success: true });
});

// 更新 About 内容
app.post('/api/update-about', (req, res) => {
    aboutContent = {
        en: req.body.en || aboutContent.en,
        es: req.body.es || aboutContent.es,
        zh: req.body.zh || aboutContent.zh
    };
    res.json(aboutContent);
});

// 获取 About 内容
app.get('/api/about', (req, res) => {
    res.json(aboutContent);
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在端口 ${PORT}`);
}); 