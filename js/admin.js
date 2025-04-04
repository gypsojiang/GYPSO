document.addEventListener('DOMContentLoaded', function() {
    // 导航菜单切换
    const navLinks = document.querySelectorAll('.admin-nav a');
    const sections = document.querySelectorAll('.admin-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // 更新活动链接
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // 显示目标部分
            sections.forEach(section => {
                section.style.display = section.id === targetId ? 'block' : 'none';
            });
        });
    });

    // 图片上传处理
    const imageUploadForm = document.getElementById('imageUploadForm');
    if (imageUploadForm) {
        imageUploadForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(imageUploadForm);
            
            try {
                const response = await fetch('/api/upload-image', {
                    method: 'POST',
                    body: formData
                });
                
                if (response.ok) {
                    alert('图片上传成功！');
                    imageUploadForm.reset();
                    loadImages(); // 重新加载图片列表
                } else {
                    throw new Error('上传失败');
                }
            } catch (error) {
                alert('图片上传失败，请重试');
                console.error('Error:', error);
            }
        });
    }

    // 作品上传处理
    const workUploadForm = document.getElementById('workUploadForm');
    if (workUploadForm) {
        workUploadForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(workUploadForm);
            
            try {
                const response = await fetch('/api/upload-work', {
                    method: 'POST',
                    body: formData
                });
                
                if (response.ok) {
                    alert('作品上传成功！');
                    workUploadForm.reset();
                    loadWorks(); // 重新加载作品列表
                } else {
                    throw new Error('上传失败');
                }
            } catch (error) {
                alert('作品上传失败，请重试');
                console.error('Error:', error);
            }
        });
    }

    // About 内容更新处理
    const aboutForm = document.getElementById('aboutForm');
    if (aboutForm) {
        aboutForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(aboutForm);
            
            try {
                const response = await fetch('/api/update-about', {
                    method: 'POST',
                    body: formData
                });
                
                if (response.ok) {
                    alert('About 内容更新成功！');
                } else {
                    throw new Error('更新失败');
                }
            } catch (error) {
                alert('About 内容更新失败，请重试');
                console.error('Error:', error);
            }
        });
    }

    // 加载图片列表
    async function loadImages() {
        try {
            const response = await fetch('/api/images');
            const images = await response.json();
            
            const galleryGrid = document.querySelector('.gallery-grid');
            if (galleryGrid) {
                galleryGrid.innerHTML = images.map(image => `
                    <div class="gallery-item">
                        <img src="${image.url}" alt="${image.name}">
                        <div class="actions">
                            <button onclick="deleteImage('${image.id}')">删除</button>
                        </div>
                    </div>
                `).join('');
            }
        } catch (error) {
            console.error('Error loading images:', error);
        }
    }

    // 加载作品列表
    async function loadWorks() {
        try {
            const response = await fetch('/api/works');
            const works = await response.json();
            
            const worksGrid = document.querySelector('.works-grid');
            if (worksGrid) {
                worksGrid.innerHTML = works.map(work => `
                    <div class="work-item">
                        <img src="${work.imageUrl}" alt="${work.title}">
                        <div class="actions">
                            <button onclick="editWork('${work.id}')">编辑</button>
                            <button onclick="deleteWork('${work.id}')">删除</button>
                        </div>
                    </div>
                `).join('');
            }
        } catch (error) {
            console.error('Error loading works:', error);
        }
    }

    // 删除图片
    window.deleteImage = async function(imageId) {
        if (!confirm('确定要删除这张图片吗？')) return;
        
        try {
            const response = await fetch(`/api/images/${imageId}`, {
                method: 'DELETE'
            });
            
            if (response.ok) {
                alert('图片删除成功！');
                loadImages();
            } else {
                throw new Error('删除失败');
            }
        } catch (error) {
            alert('图片删除失败，请重试');
            console.error('Error:', error);
        }
    };

    // 删除作品
    window.deleteWork = async function(workId) {
        if (!confirm('确定要删除这个作品吗？')) return;
        
        try {
            const response = await fetch(`/api/works/${workId}`, {
                method: 'DELETE'
            });
            
            if (response.ok) {
                alert('作品删除成功！');
                loadWorks();
            } else {
                throw new Error('删除失败');
            }
        } catch (error) {
            alert('作品删除失败，请重试');
            console.error('Error:', error);
        }
    };

    // 编辑作品
    window.editWork = async function(workId) {
        try {
            const response = await fetch(`/api/works/${workId}`);
            const work = await response.json();
            
            // 填充编辑表单
            const editForm = document.getElementById('workEditForm');
            if (editForm) {
                editForm.querySelector('[name="title"]').value = work.title;
                editForm.querySelector('[name="category"]').value = work.category;
                editForm.querySelector('[name="description"]').value = work.description;
                editForm.dataset.workId = workId;
                
                // 显示编辑表单
                editForm.style.display = 'block';
            }
        } catch (error) {
            console.error('Error loading work:', error);
        }
    };

    // 初始加载
    loadImages();
    loadWorks();
}); 