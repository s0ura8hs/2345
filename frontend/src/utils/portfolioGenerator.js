// Portfolio Generator Utility
export const generatePortfolioFiles = (formData) => {
  const { personal, skills, education, certificates, projects, blogs, contact } = formData;

  // Generate HTML
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personal.name || 'Portfolio'}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="cursor-glow"></div>
    <div class="neural-network"></div>
    
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <h2>${personal.name || 'Portfolio'}</h2>
            </div>
            <div class="nav-menu">
                <a href="#home" class="nav-link">Home</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#education" class="nav-link">Education</a>
                ${projects.length > 0 ? '<a href="#projects" class="nav-link">Projects</a>' : ''}
                ${blogs.length > 0 ? '<a href="#blogs" class="nav-link">Blogs</a>' : ''}
                <a href="#contact" class="nav-link">Contact</a>
                ${personal.resume ? '<a href="#" class="nav-link download-resume" onclick="downloadResume()">Download Resume</a>' : ''}
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1 class="hero-name">${personal.name || 'Your Name'}</h1>
            <p class="hero-title">${personal.position || 'Your Position'}</p>
            <p class="hero-description">${personal.about || 'Your description'}</p>
            <div class="hero-buttons">
                ${projects.length > 0 ? '<button class="btn btn-primary" onclick="scrollToSection(\'projects\')">View My Work</button>' : ''}
                <button class="btn btn-outline" onclick="scrollToSection('contact')">Get In Touch</button>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3 class="about-subtitle">${personal.position || 'Professional Title'}</h3>
                    <p class="about-description">${personal.about || 'About description'}</p>
                    <div class="about-tags">
                        ${skills.slice(0, 6).map(skill => `<span class="tag">${skill.name}</span>`).join('')}
                    </div>
                </div>
                <div class="about-image">
                    ${personal.profilePhoto ? `<img src="${personal.profilePhoto}" alt="${personal.name}" class="profile-img">` : '<div class="profile-placeholder">No Image</div>'}
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">Skills & Expertise</h2>
            <div class="skills-grid">
                ${skills.map(skill => `
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-percentage">${skill.percentage}%</span>
                        </div>
                        <div class="skill-progress">
                            <div class="skill-progress-bar" style="width: ${skill.percentage}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="education">
        <div class="container">
            <h2 class="section-title">Education & Certifications</h2>
            <div class="education-grid">
                <div class="education-column">
                    <h3 class="column-title">Education</h3>
                    ${education.map(edu => `
                        <div class="education-item">
                            <h4 class="education-title">${edu.degree}</h4>
                            <p class="education-institution">${edu.institution}</p>
                            <p class="education-year">${edu.year}</p>
                            ${edu.description ? `<p class="education-description">${edu.description}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
                <div class="education-column">
                    <h3 class="column-title">Certifications</h3>
                    ${certificates.map(cert => `
                        <div class="education-item">
                            <h4 class="education-title">${cert.name}</h4>
                            <p class="education-institution">${cert.issuer}</p>
                            <p class="education-year">${cert.year}</p>
                            ${cert.link ? `<a href="${cert.link}" target="_blank" class="cert-link">View Certificate</a>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>

    ${projects.length > 0 ? `
    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">Featured Projects</h2>
            <div class="projects-grid">
                ${projects.map(project => `
                    <div class="project-card">
                        ${project.image ? `<img src="${project.image}" alt="${project.name}" class="project-image">` : ''}
                        <div class="project-content">
                            <h3 class="project-title">${project.name}</h3>
                            <p class="project-description">${project.description}</p>
                            ${project.technologies ? `<div class="project-tech">${project.technologies.split(',').map(tech => `<span class="tech-tag">${tech.trim()}</span>`).join('')}</div>` : ''}
                            <div class="project-links">
                                ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="project-link">Live Demo</a>` : ''}
                                ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="project-link">GitHub</a>` : ''}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    ${blogs.length > 0 ? `
    <!-- Blogs Section -->
    <section id="blogs" class="blogs">
        <div class="container">
            <h2 class="section-title">Recent Blogs</h2>
            <div class="blogs-grid">
                ${blogs.map(blog => `
                    <div class="blog-card">
                        ${blog.image ? `<img src="${blog.image}" alt="${blog.title}" class="blog-image">` : ''}
                        <div class="blog-content">
                            <h3 class="blog-title">${blog.title}</h3>
                            <p class="blog-description">${blog.description}</p>
                            <div class="blog-links">
                                <a href="${blog.link}" target="_blank" class="blog-link">Read More</a>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <p class="contact-description">Let's connect and discuss opportunities!</p>
                <div class="contact-links">
                    <a href="mailto:${contact.email}" class="contact-link">
                        <span class="contact-icon">📧</span>
                        Email
                    </a>
                    <a href="${contact.github}" target="_blank" class="contact-link">
                        <span class="contact-icon">🐙</span>
                        GitHub
                    </a>
                    <a href="${contact.linkedin}" target="_blank" class="contact-link">
                        <span class="contact-icon">💼</span>
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 ${personal.name || 'Your Name'}. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>`;

  // Generate CSS
  const css = `/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.6;
    color: #ffffff;
    background: linear-gradient(135deg, #0a192f 0%, #112240 50%, #1e3a8a 100%);
    overflow-x: hidden;
    position: relative;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Cursor Glow Effect */
.cursor-glow {
    position: fixed;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, rgba(255, 215, 0, 0.2) 50%, transparent 100%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: screen;
    transition: transform 0.1s ease-out;
}

/* Neural Network Background */
.neural-network {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    opacity: 0.3;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(10, 25, 47, 0.9);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo h2 {
    color: #ffd700;
    font-weight: 700;
    font-size: 1.5rem;
}

.nav-menu {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav-link {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-link:hover {
    color: #ffd700;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ffd700;
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.download-resume {
    background: linear-gradient(45deg, #ffd700, #ffa500);
    color: #000;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-weight: 600;
}

.download-resume:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    background: linear-gradient(135deg, rgba(10, 25, 47, 0.8) 0%, rgba(17, 34, 64, 0.8) 100%);
}

.hero-content h1 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #ffd700, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-title {
    font-size: 1.5rem;
    color: #64ffda;
    margin-bottom: 1rem;
    font-weight: 600;
}

.hero-description {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
    max-width: 600px;
    line-height: 1.8;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    text-align: center;
}

.btn-primary {
    background: linear-gradient(45deg, #ffd700, #ffa500);
    color: #000;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
}

.btn-outline {
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.5);
}

.btn-outline:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}

/* Section Styles */
section {
    padding: 5rem 0;
    position: relative;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    color: #64ffda;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(45deg, #ffd700, #ffa500);
}

/* About Section */
.about {
    background: rgba(17, 34, 64, 0.5);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.about-subtitle {
    font-size: 1.5rem;
    color: #ffd700;
    margin-bottom: 1rem;
    font-weight: 600;
}

.about-description {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.8;
    margin-bottom: 2rem;
}

.about-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag {
    background: rgba(100, 255, 218, 0.2);
    color: #64ffda;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
}

.about-image {
    text-align: center;
}

.profile-img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #ffd700;
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
}

.profile-placeholder {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.2rem;
    margin: 0 auto;
}

/* Skills Section */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.skill-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease;
}

.skill-item:hover {
    transform: translateY(-5px);
}

.skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.skill-name {
    font-weight: 600;
    color: #ffffff;
}

.skill-percentage {
    color: #ffd700;
    font-weight: 600;
}

.skill-progress {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
}

.skill-progress-bar {
    height: 100%;
    background: linear-gradient(45deg, #ffd700, #ffa500);
    border-radius: 4px;
    transition: width 0.3s ease;
}

/* Education Section */
.education {
    background: rgba(17, 34, 64, 0.5);
}

.education-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.column-title {
    font-size: 1.5rem;
    color: #64ffda;
    margin-bottom: 2rem;
    font-weight: 600;
}

.education-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;
}

.education-item:hover {
    transform: translateY(-5px);
}

.education-title {
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.education-institution {
    color: #ffd700;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.education-year {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.education-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    line-height: 1.6;
}

.cert-link {
    color: #64ffda;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
}

.cert-link:hover {
    text-decoration: underline;
}

/* Projects Section */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.project-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-10px);
}

.project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project-content {
    padding: 1.5rem;
}

.project-title {
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.project-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.tech-tag {
    background: rgba(100, 255, 218, 0.2);
    color: #64ffda;
    padding: 0.25rem 0.5rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
}

.project-links {
    display: flex;
    gap: 1rem;
}

.project-link {
    color: #ffd700;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border: 1px solid #ffd700;
    border-radius: 25px;
    transition: all 0.3s ease;
}

.project-link:hover {
    background: #ffd700;
    color: #000;
}

/* Blogs Section */
.blogs {
    background: rgba(17, 34, 64, 0.5);
}

.blogs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.blog-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
}

.blog-card:hover {
    transform: translateY(-10px);
}

.blog-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.blog-content {
    padding: 1.5rem;
}

.blog-title {
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.blog-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.blog-links {
    display: flex;
    gap: 1rem;
}

.blog-link {
    color: #64ffda;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border: 1px solid #64ffda;
    border-radius: 25px;
    transition: all 0.3s ease;
}

.blog-link:hover {
    background: #64ffda;
    color: #000;
}

/* Contact Section */
.contact {
    text-align: center;
}

.contact-description {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.contact-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: #ffffff;
    text-decoration: none;
    padding: 1.5rem;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    min-width: 150px;
}

.contact-link:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
}

.contact-icon {
    font-size: 2rem;
}

/* Footer */
.footer {
    background: rgba(10, 25, 47, 0.8);
    padding: 2rem 0;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer p {
    color: rgba(255, 255, 255, 0.7);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-menu {
        display: none;
    }
    
    .hero-content h1 {
        font-size: 2.5rem;
    }
    
    .about-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .education-grid {
        grid-template-columns: 1fr;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .contact-links {
        flex-direction: column;
        align-items: center;
    }
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.8s ease-out;
}

/* Scroll Animations */
.scroll-animate {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
}

.scroll-animate.active {
    opacity: 1;
    transform: translateY(0);
}`;

  // Generate JavaScript
  const js = `// Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Cursor glow effect
    const cursorGlow = document.querySelector('.cursor-glow');
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        const diffX = mouseX - glowX;
        const diffY = mouseY - glowY;
        
        glowX += diffX * 0.1;
        glowY += diffY * 0.1;
        
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';
        
        requestAnimationFrame(animateGlow);
    }
    
    animateGlow();

    // Neural network background
    createNeuralNetwork();
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });

    // Add scroll animation classes
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('scroll-animate');
    });

    // Skill progress animation
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
});

// Neural network background
function createNeuralNetwork() {
    const container = document.querySelector('.neural-network');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    container.appendChild(canvas);
    
    const nodes = [];
    const connections = [];
    const nodeCount = 50;
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw nodes
        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;
            
            // Bounce off edges
            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            
            // Draw node
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(100, 255, 218, 0.6)';
            ctx.fill();
        });
        
        // Draw connections
        nodes.forEach((node, i) => {
            nodes.slice(i + 1).forEach(otherNode => {
                const dx = node.x - otherNode.x;
                const dy = node.y - otherNode.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(otherNode.x, otherNode.y);
                    ctx.strokeStyle = \`rgba(100, 255, 218, \${(100 - distance) / 100 * 0.2})\`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function downloadResume() {
    const resumeData = '${personal.resume || ''}';
    if (resumeData) {
        const link = document.createElement('a');
        link.href = resumeData;
        link.download = '${personal.name || 'resume'}_resume.pdf';
        link.click();
    }
}`;

  return {
    'index.html': html,
    'style.css': css,
    'script.js': js
  };
};

// Create ZIP file
export const createZipFile = (files) => {
  // This would typically use a library like JSZip
  // For now, we'll return a mock implementation
  return {
    files,
    download: () => {
      // Mock download functionality
      alert('In a real implementation, this would download the ZIP file with all portfolio files!');
    }
  };
};