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
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">
</head>
<body>
    <div class="mouse-glow"></div>
    <div class="neural-bg"></div>
    
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <h2>${personal.name || 'Portfolio'}</h2>
            </div>
            <div class="nav-menu" id="nav-menu">
                <a href="#home" class="nav-link">Home</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#education" class="nav-link">Education</a>
                ${projects.length > 0 ? '<a href="#projects" class="nav-link">Projects</a>' : ''}
                ${blogs.length > 0 ? '<a href="#blogs" class="nav-link">Blogs</a>' : ''}
                <a href="#contact" class="nav-link">Contact</a>
                ${personal.resume ? '<a href="#" class="nav-link download-resume" onclick="downloadResume()">📄 Download Resume</a>' : ''}
            </div>
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1 class="hero-name">${personal.name || 'Your Name'}</h1>
            <p class="hero-title">${personal.position || 'Your Position'}</p>
            <p class="hero-description">${personal.about || 'Crafting digital experiences with interactive effects and cutting-edge technologies'}</p>
            <div class="hero-buttons">
                ${projects.length > 0 ? '<button class="btn btn-primary" onclick="scrollToSection(\'projects\')">View My Work</button>' : ''}
                <button class="btn btn-outline" onclick="scrollToSection('contact')">Get In Touch</button>
            </div>
        </div>
        <div class="scroll-indicator">
            <div class="scroll-arrow">↓</div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3 class="about-subtitle">Passionate Developer & Creative ${personal.position ? personal.position.split(' ').pop() : 'Professional'}</h3>
                    <p class="about-description">${personal.about || 'I\'m a full-stack developer who believes in creating not just functional applications, but digital experiences that captivate and inspire. With expertise in modern web technologies and a keen eye for interactive design, I bring ideas to life through code.'}</p>
                    <div class="about-additional">
                        <p>Beyond coding, I'm passionate about photography, capturing moments that tell stories and exploring the intersection of technology and art. This creative perspective enhances my approach to software development and user experience design.</p>
                    </div>
                    <div class="about-tags">
                        ${skills.slice(0, 8).map(skill => `<span class="tag">${skill.name}</span>`).join('')}
                        ${skills.length === 0 ? '<span class="tag">JavaScript</span><span class="tag">React</span><span class="tag">Node.js</span><span class="tag">Python</span><span class="tag">UI/UX</span><span class="tag">Photography</span>' : ''}
                    </div>
                </div>
                <div class="about-image">
                    ${personal.profilePhoto ? `<img src="${personal.profilePhoto}" alt="${personal.name}" class="profile-img">` : '<div class="profile-placeholder"><div class="placeholder-content"><span>📷</span><p>Profile Photo</p></div></div>'}
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">Skills & Expertise</h2>
            <div class="skills-grid">
                ${skills.length > 0 ? skills.map(skill => `
                    <div class="skill-item" data-skill="${skill.percentage}">
                        <div class="skill-icon">🔥</div>
                        <div class="skill-content">
                            <div class="skill-header">
                                <span class="skill-name">${skill.name}</span>
                                <span class="skill-percentage">${skill.percentage}%</span>
                            </div>
                            <div class="skill-progress">
                                <div class="skill-progress-bar" data-width="${skill.percentage}%"></div>
                            </div>
                        </div>
                    </div>
                `).join('') : `
                    <div class="skill-item" data-skill="95">
                        <div class="skill-icon">🔥</div>
                        <div class="skill-content">
                            <div class="skill-header">
                                <span class="skill-name">Frontend Development</span>
                                <span class="skill-percentage">95%</span>
                            </div>
                            <div class="skill-progress">
                                <div class="skill-progress-bar" data-width="95%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="skill-item" data-skill="90">
                        <div class="skill-icon">⚙️</div>
                        <div class="skill-content">
                            <div class="skill-header">
                                <span class="skill-name">Backend Development</span>
                                <span class="skill-percentage">90%</span>
                            </div>
                            <div class="skill-progress">
                                <div class="skill-progress-bar" data-width="90%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="skill-item" data-skill="85">
                        <div class="skill-icon">🗄️</div>
                        <div class="skill-content">
                            <div class="skill-header">
                                <span class="skill-name">Database Design</span>
                                <span class="skill-percentage">85%</span>
                            </div>
                            <div class="skill-progress">
                                <div class="skill-progress-bar" data-width="85%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="skill-item" data-skill="92">
                        <div class="skill-icon">🔗</div>
                        <div class="skill-content">
                            <div class="skill-header">
                                <span class="skill-name">API Integration</span>
                                <span class="skill-percentage">92%</span>
                            </div>
                            <div class="skill-progress">
                                <div class="skill-progress-bar" data-width="92%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="skill-item" data-skill="88">
                        <div class="skill-icon">📷</div>
                        <div class="skill-content">
                            <div class="skill-header">
                                <span class="skill-name">Photography</span>
                                <span class="skill-percentage">88%</span>
                            </div>
                            <div class="skill-progress">
                                <div class="skill-progress-bar" data-width="88%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="skill-item" data-skill="85">
                        <div class="skill-icon">✨</div>
                        <div class="skill-content">
                            <div class="skill-header">
                                <span class="skill-name">UI/UX Design</span>
                                <span class="skill-percentage">85%</span>
                            </div>
                            <div class="skill-progress">
                                <div class="skill-progress-bar" data-width="85%"></div>
                            </div>
                        </div>
                    </div>
                `}
            </div>
        </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="education">
        <div class="container">
            <h2 class="section-title">Education & Certifications</h2>
            <div class="education-grid">
                <div class="education-column">
                    <div class="column-header">
                        <div class="column-icon">🎓</div>
                        <h3 class="column-title">Education</h3>
                    </div>
                    ${education.length > 0 ? education.map(edu => `
                        <div class="education-item">
                            <div class="education-icon">📚</div>
                            <div class="education-content">
                                <h4 class="education-title">${edu.degree}</h4>
                                <p class="education-institution">${edu.institution}</p>
                                <p class="education-year">${edu.year}</p>
                                ${edu.description ? `<p class="education-description">${edu.description}</p>` : ''}
                            </div>
                        </div>
                    `).join('') : `
                        <div class="education-item">
                            <div class="education-icon">📚</div>
                            <div class="education-content">
                                <h4 class="education-title">Bachelor of Science in Computer Science</h4>
                                <p class="education-institution">Tech University</p>
                                <p class="education-year">2018 - 2022</p>
                                <p class="education-description">Focused on software engineering, algorithms, and web development</p>
                            </div>
                        </div>
                        <div class="education-item">
                            <div class="education-icon">📚</div>
                            <div class="education-content">
                                <h4 class="education-title">Master of Science in Software Engineering</h4>
                                <p class="education-institution">Advanced Tech Institute</p>
                                <p class="education-year">2022 - 2024</p>
                                <p class="education-description">Specialized in full-stack development and system architecture</p>
                            </div>
                        </div>
                    `}
                </div>
                <div class="education-column">
                    <div class="column-header">
                        <div class="column-icon">🏆</div>
                        <h3 class="column-title">Certifications</h3>
                    </div>
                    ${certificates.length > 0 ? certificates.map(cert => `
                        <div class="education-item">
                            <div class="education-icon">🏅</div>
                            <div class="education-content">
                                <h4 class="education-title">${cert.name}</h4>
                                <p class="education-institution">${cert.issuer}</p>
                                <p class="education-year">${cert.year}</p>
                                ${cert.link ? `<a href="${cert.link}" target="_blank" class="cert-link">🔗 View Certificate</a>` : ''}
                            </div>
                        </div>
                    `).join('') : `
                        <div class="education-item">
                            <div class="education-icon">🏅</div>
                            <div class="education-content">
                                <h4 class="education-title">AWS Certified Developer</h4>
                                <p class="education-institution">Amazon Web Services</p>
                                <p class="education-year">2023</p>
                                <a href="#" class="cert-link">🔗 View Certificate</a>
                            </div>
                        </div>
                        <div class="education-item">
                            <div class="education-icon">🏅</div>
                            <div class="education-content">
                                <h4 class="education-title">Professional Photography Certificate</h4>
                                <p class="education-institution">Photography Academy</p>
                                <p class="education-year">2021</p>
                                <a href="#" class="cert-link">🔗 View Certificate</a>
                            </div>
                        </div>
                    `}
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
                        ${project.image ? `<div class="project-image-container"><img src="${project.image}" alt="${project.name}" class="project-image"></div>` : '<div class="project-image-placeholder"><span>📱</span><p>Project Image</p></div>'}
                        <div class="project-content">
                            <h3 class="project-title">${project.name}</h3>
                            <p class="project-description">${project.description}</p>
                            ${project.technologies ? `<div class="project-tech">${project.technologies.split(',').map(tech => `<span class="tech-tag">${tech.trim()}</span>`).join('')}</div>` : ''}
                            <div class="project-links">
                                ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="project-link primary">Live Demo</a>` : ''}
                                ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="project-link secondary">GitHub</a>` : ''}
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
                        ${blog.image ? `<div class="blog-image-container"><img src="${blog.image}" alt="${blog.title}" class="blog-image"></div>` : '<div class="blog-image-placeholder"><span>📝</span><p>Blog Image</p></div>'}
                        <div class="blog-content">
                            <h3 class="blog-title">${blog.title}</h3>
                            <p class="blog-description">${blog.description}</p>
                            <a href="${blog.link}" target="_blank" class="blog-link">Read More →</a>
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
                    ${contact.email ? `<a href="mailto:${contact.email}" class="contact-link"><span class="contact-icon">📧</span><span>Email</span></a>` : '<a href="mailto:contact@example.com" class="contact-link"><span class="contact-icon">📧</span><span>Email</span></a>'}
                    ${contact.github ? `<a href="${contact.github}" target="_blank" class="contact-link"><span class="contact-icon">🐙</span><span>GitHub</span></a>` : '<a href="#" class="contact-link"><span class="contact-icon">🐙</span><span>GitHub</span></a>'}
                    ${contact.linkedin ? `<a href="${contact.linkedin}" target="_blank" class="contact-link"><span class="contact-icon">💼</span><span>LinkedIn</span></a>` : '<a href="#" class="contact-link"><span class="contact-icon">💼</span><span>LinkedIn</span></a>'}
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

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.6;
    color: #ffffff;
    background: linear-gradient(135deg, #0a192f 0%, #112240 50%, #1e3a8a 100%);
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Mouse Glow Effect - Silver Yellowish */
.mouse-glow {
    position: fixed;
    width: 30px;
    height: 30px;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, rgba(192, 192, 192, 0.6) 50%, transparent 100%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: screen;
    transition: transform 0.1s ease-out;
    opacity: 0;
}

/* Neural Network Background */
.neural-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    opacity: 0.4;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(10, 25, 47, 0.95);
    backdrop-filter: blur(15px);
    z-index: 1000;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(100, 255, 218, 0.2);
    transition: all 0.3s ease;
}

.navbar.scrolled {
    background: rgba(10, 25, 47, 0.98);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
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
    color: #64ffda;
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 1px;
}

.nav-menu {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.5rem 0;
}

.nav-link:hover {
    color: #64ffda;
    transform: translateY(-2px);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #64ffda, #ffd700);
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.download-resume {
    background: linear-gradient(45deg, #ffd700, #ffa500) !important;
    color: #000 !important;
    padding: 0.5rem 1.5rem !important;
    border-radius: 25px !important;
    font-weight: 600 !important;
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.download-resume:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4) !important;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 0.5rem;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: #64ffda;
    margin: 3px 0;
    transition: 0.3s;
    border-radius: 2px;
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    background: linear-gradient(135deg, rgba(10, 25, 47, 0.9) 0%, rgba(17, 34, 64, 0.9) 50%, rgba(30, 58, 138, 0.9) 100%);
    padding-top: 80px;
}

.hero-content {
    max-width: 800px;
    z-index: 2;
}

.hero-name {
    font-size: 4.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #ffd700, #ffffff, #64ffda);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: 2px;
    animation: heroNameFloat 3s ease-in-out infinite;
}

@keyframes heroNameFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

.hero-title {
    font-size: 1.8rem;
    color: #64ffda;
    margin-bottom: 1.5rem;
    font-weight: 600;
    letter-spacing: 1px;
    opacity: 0;
    animation: fadeInUp 1s ease-out 0.5s forwards;
}

.hero-description {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 2.5rem;
    max-width: 600px;
    line-height: 1.8;
    opacity: 0;
    animation: fadeInUp 1s ease-out 1s forwards;
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    opacity: 0;
    animation: fadeInUp 1s ease-out 1.5s forwards;
}

.btn {
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
}

.btn:hover::before {
    left: 100%;
}

.btn-primary {
    background: linear-gradient(45deg, #ffd700, #ffa500);
    color: #000;
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.5);
}

.btn-outline {
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(100, 255, 218, 0.5);
    box-shadow: 0 4px 15px rgba(100, 255, 218, 0.2);
}

.btn-outline:hover {
    background: rgba(100, 255, 218, 0.1);
    border-color: #64ffda;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(100, 255, 218, 0.3);
}

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
}

.scroll-arrow {
    font-size: 2rem;
    color: #64ffda;
    opacity: 0.7;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
}

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

/* Section Styles */
section {
    padding: 6rem 0;
    position: relative;
}

.section-title {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 4rem;
    color: #64ffda;
    position: relative;
    letter-spacing: 1px;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(45deg, #ffd700, #ffa500);
    border-radius: 2px;
}

/* About Section */
.about {
    background: rgba(17, 34, 64, 0.3);
    position: relative;
}

.about::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(100,255,218,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 2;
}

.about-subtitle {
    font-size: 1.8rem;
    color: #ffd700;
    margin-bottom: 1.5rem;
    font-weight: 600;
    letter-spacing: 1px;
}

.about-description {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.8;
    margin-bottom: 1.5rem;
}

.about-additional {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.7;
    margin-bottom: 2rem;
}

.about-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.tag {
    background: rgba(100, 255, 218, 0.15);
    color: #64ffda;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid rgba(100, 255, 218, 0.3);
    transition: all 0.3s ease;
}

.tag:hover {
    background: rgba(100, 255, 218, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(100, 255, 218, 0.2);
}

.about-image {
    text-align: center;
    position: relative;
}

.profile-img {
    width: 320px;
    height: 320px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #ffd700;
    box-shadow: 0 15px 35px rgba(255, 215, 0, 0.3), 0 0 0 10px rgba(100, 255, 218, 0.1);
    transition: all 0.3s ease;
}

.profile-img:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(255, 215, 0, 0.4), 0 0 0 15px rgba(100, 255, 218, 0.2);
}

.profile-placeholder {
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.5);
    margin: 0 auto;
    border: 3px dashed rgba(100, 255, 218, 0.3);
    position: relative;
    overflow: hidden;
}

.placeholder-content {
    text-align: center;
}

.placeholder-content span {
    font-size: 3rem;
    display: block;
    margin-bottom: 0.5rem;
    opacity: 0.6;
}

.placeholder-content p {
    font-size: 1rem;
    opacity: 0.7;
}

/* Skills Section */
.skills {
    position: relative;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.skill-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid rgba(100, 255, 218, 0.2);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.skill-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(100, 255, 218, 0.05) 0%, rgba(255, 215, 0, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.skill-item:hover::before {
    opacity: 1;
}

.skill-item:hover {
    transform: translateY(-10px);
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 10px 25px rgba(100, 255, 218, 0.2);
}

.skill-icon {
    font-size: 2.5rem;
    min-width: 60px;
    text-align: center;
}

.skill-content {
    flex: 1;
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
    font-size: 1.2rem;
}

.skill-percentage {
    color: #ffd700;
    font-weight: 700;
    font-size: 1.1rem;
}

.skill-progress {
    width: 100%;
    height: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    overflow: hidden;
    position: relative;
}

.skill-progress-bar {
    height: 100%;
    background: linear-gradient(45deg, #ffd700, #ffa500, #64ffda);
    border-radius: 5px;
    width: 0%;
    transition: width 1.5s ease-out;
    position: relative;
}

.skill-progress-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

/* Education Section */
.education {
    background: rgba(17, 34, 64, 0.3);
    position: relative;
}

.education-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
}

.column-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
    justify-content: center;
}

.column-icon {
    font-size: 2.5rem;
}

.column-title {
    font-size: 2rem;
    color: #64ffda;
    font-weight: 600;
    letter-spacing: 1px;
}

.education-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid rgba(100, 255, 218, 0.2);
    margin-bottom: 2rem;
    transition: all 0.3s ease;
    display: flex;
    gap: 1.5rem;
    position: relative;
    overflow: hidden;
}

.education-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #ffd700, #64ffda);
    transform: scaleY(0);
    transition: transform 0.3s ease;
}

.education-item:hover::before {
    transform: scaleY(1);
}

.education-item:hover {
    transform: translateX(10px);
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 8px 20px rgba(100, 255, 218, 0.15);
}

.education-icon {
    font-size: 2rem;
    min-width: 50px;
    text-align: center;
    margin-top: 0.5rem;
}

.education-content {
    flex: 1;
}

.education-title {
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    line-height: 1.4;
}

.education-institution {
    color: #64ffda;
    font-weight: 500;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.education-year {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
    font-weight: 500;
}

.education-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 0.75rem;
}

.cert-link {
    color: #ffd700;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
}

.cert-link:hover {
    color: #ffffff;
    transform: translateX(5px);
}

/* Projects Section */
.projects {
    position: relative;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
}

.project-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    border: 1px solid rgba(100, 255, 218, 0.2);
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
}

.project-card:hover {
    transform: translateY(-15px);
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 15px 30px rgba(100, 255, 218, 0.2);
}

.project-image-container {
    position: relative;
    overflow: hidden;
    height: 220px;
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:hover .project-image {
    transform: scale(1.1);
}

.project-image-placeholder {
    height: 220px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(100, 255, 218, 0.2);
}

.project-image-placeholder span {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

.project-content {
    padding: 2rem;
}

.project-title {
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
    line-height: 1.3;
}

.project-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.tech-tag {
    background: rgba(100, 255, 218, 0.15);
    color: #64ffda;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.85rem;
    font-weight: 500;
    border: 1px solid rgba(100, 255, 218, 0.3);
}

.project-links {
    display: flex;
    gap: 1rem;
}

.project-link {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    text-align: center;
    flex: 1;
}

.project-link.primary {
    background: linear-gradient(45deg, #ffd700, #ffa500);
    color: #000;
}

.project-link.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
}

.project-link.secondary {
    border: 2px solid rgba(100, 255, 218, 0.5);
    color: #64ffda;
}

.project-link.secondary:hover {
    background: rgba(100, 255, 218, 0.1);
    border-color: #64ffda;
    transform: translateY(-2px);
}

/* Blogs Section */
.blogs {
    background: rgba(17, 34, 64, 0.3);
    position: relative;
}

.blogs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
}

.blog-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    border: 1px solid rgba(100, 255, 218, 0.2);
    overflow: hidden;
    transition: all 0.3s ease;
}

.blog-card:hover {
    transform: translateY(-15px);
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 15px 30px rgba(100, 255, 218, 0.2);
}

.blog-image-container {
    position: relative;
    overflow: hidden;
    height: 220px;
}

.blog-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.blog-card:hover .blog-image {
    transform: scale(1.1);
}

.blog-image-placeholder {
    height: 220px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(100, 255, 218, 0.2);
}

.blog-image-placeholder span {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

.blog-content {
    padding: 2rem;
}

.blog-title {
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
    line-height: 1.3;
}

.blog-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.blog-link {
    color: #64ffda;
    text-decoration: none;
    font-weight: 500;
    padding: 0.75rem 1.5rem;
    border: 2px solid rgba(100, 255, 218, 0.5);
    border-radius: 25px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    display: inline-block;
}

.blog-link:hover {
    background: rgba(100, 255, 218, 0.1);
    border-color: #64ffda;
    transform: translateY(-2px);
}

/* Contact Section */
.contact {
    text-align: center;
    position: relative;
}

.contact-description {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    max-width: 800px;
    margin: 0 auto;
}

.contact-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #ffffff;
    text-decoration: none;
    padding: 2rem;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(100, 255, 218, 0.2);
    transition: all 0.3s ease;
    min-width: 180px;
    position: relative;
    overflow: hidden;
}

.contact-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(255, 215, 0, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.contact-link:hover::before {
    opacity: 1;
}

.contact-link:hover {
    transform: translateY(-10px);
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 10px 25px rgba(100, 255, 218, 0.2);
}

.contact-icon {
    font-size: 2.5rem;
    z-index: 2;
    position: relative;
}

.contact-link span:last-child {
    font-weight: 600;
    font-size: 1.1rem;
    z-index: 2;
    position: relative;
}

/* Footer */
.footer {
    background: rgba(10, 25, 47, 0.9);
    padding: 3rem 0;
    text-align: center;
    border-top: 1px solid rgba(100, 255, 218, 0.2);
    position: relative;
}

.footer p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
}

/* Scroll Animations */
.scroll-animate {
    opacity: 0;
    transform: translateY(50px);
    transition: all 1s ease-out;
}

.scroll-animate.active {
    opacity: 1;
    transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background: rgba(10, 25, 47, 0.98);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        padding: 2rem 0;
        gap: 1rem;
    }

    .nav-menu.active {
        left: 0;
    }

    .hamburger {
        display: flex;
    }
    
    .hero-name {
        font-size: 3rem;
    }
    
    .hero-title {
        font-size: 1.4rem;
    }
    
    .hero-description {
        font-size: 1rem;
    }
    
    .about-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 3rem;
    }
    
    .education-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .contact-links {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }
    
    .skills-grid {
        grid-template-columns: 1fr;
    }
    
    .projects-grid,
    .blogs-grid {
        grid-template-columns: 1fr;
    }
    
    .section-title {
        font-size: 2.5rem;
    }
    
    .skill-item {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    .education-item {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 1rem;
    }
    
    .hero-name {
        font-size: 2.5rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .about-subtitle {
        font-size: 1.5rem;
    }
    
    .profile-img {
        width: 250px;
        height: 250px;
    }
    
    .profile-placeholder {
        width: 250px;
        height: 250px;
    }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #64ffda, #ffd700);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #ffd700, #64ffda);
}

/* Selection */
::selection {
    background: rgba(100, 255, 218, 0.3);
    color: #ffffff;
}

::-moz-selection {
    background: rgba(100, 255, 218, 0.3);
    color: #ffffff;
}`;

  // Generate JavaScript
  const js = `// Portfolio JavaScript - Enhanced with Neural Network & Mouse Effects
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all effects and functionality
    initializeNavigation();
    initializeMouseGlow();
    initializeNeuralNetwork();
    initializeScrollAnimations();
    initializeSkillAnimations();
    
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
});

// Navigation functionality - smooth scrolling to sections
function initializeNavigation() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.getElementById('nav-menu');
                const hamburger = document.getElementById('hamburger');
                if (navMenu && hamburger) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
}

// Mouse glow effect - Silver yellowish glitter following mouse
function initializeMouseGlow() {
    const mouseGlow = document.querySelector('.mouse-glow');
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    
    // Track mouse movement
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        mouseGlow.style.opacity = '1';
    });
    
    // Hide glow when mouse leaves window
    document.addEventListener('mouseleave', function() {
        mouseGlow.style.opacity = '0';
    });
    
    // Smooth animation loop for glow following mouse
    function animateGlow() {
        const diffX = mouseX - glowX;
        const diffY = mouseY - glowY;
        
        glowX += diffX * 0.15;
        glowY += diffY * 0.15;
        
        mouseGlow.style.left = glowX + 'px';
        mouseGlow.style.top = glowY + 'px';
        
        requestAnimationFrame(animateGlow);
    }
    
    animateGlow();
}

// Neural Network Background with current flowing effect
function initializeNeuralNetwork() {
    const container = document.querySelector('.neural-bg');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    container.appendChild(canvas);
    
    // Neural network nodes and connections
    const nodes = [];
    const connections = [];
    const nodeCount = 80;
    const maxDistance = 150;
    
    // Create nodes with random positions and velocities
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            size: Math.random() * 3 + 2,
            pulse: Math.random() * Math.PI * 2
        });
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw nodes
        nodes.forEach((node, index) => {
            // Update position
            node.x += node.vx;
            node.y += node.vy;
            
            // Bounce off edges
            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            
            // Keep nodes in bounds
            node.x = Math.max(0, Math.min(canvas.width, node.x));
            node.y = Math.max(0, Math.min(canvas.height, node.y));
            
            // Update pulse for glowing effect
            node.pulse += 0.02;
            
            // Draw node with pulsing glow
            const glowIntensity = 0.5 + Math.sin(node.pulse) * 0.3;
            const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 3);
            gradient.addColorStop(0, \`rgba(100, 255, 218, \${glowIntensity})\`);
            gradient.addColorStop(0.5, \`rgba(100, 255, 218, \${glowIntensity * 0.3})\`);
            gradient.addColorStop(1, 'rgba(100, 255, 218, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw core node
            ctx.fillStyle = \`rgba(100, 255, 218, \${glowIntensity})\`;
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Draw connections with current flow effect
        connections.length = 0; // Clear previous connections
        
        nodes.forEach((nodeA, i) => {
            nodes.slice(i + 1).forEach((nodeB) => {
                const dx = nodeA.x - nodeB.x;
                const dy = nodeA.y - nodeB.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    const opacity = (maxDistance - distance) / maxDistance * 0.4;
                    const flowOffset = (Date.now() * 0.001) % 1;
                    
                    // Create gradient for current flow effect
                    const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
                    const flowPosition = (Math.sin(Date.now() * 0.002 + distance * 0.01) + 1) / 2;
                    
                    gradient.addColorStop(0, \`rgba(100, 255, 218, 0)\`);
                    gradient.addColorStop(Math.max(0, flowPosition - 0.1), \`rgba(100, 255, 218, 0)\`);
                    gradient.addColorStop(flowPosition, \`rgba(255, 215, 0, \${opacity * 2})\`);
                    gradient.addColorStop(Math.min(1, flowPosition + 0.1), \`rgba(100, 255, 218, \${opacity})\`);
                    gradient.addColorStop(1, \`rgba(100, 255, 218, \${opacity * 0.5})\`);
                    
                    // Draw connection line
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(nodeA.x, nodeA.y);
                    ctx.lineTo(nodeB.x, nodeB.y);
                    ctx.stroke();
                    
                    // Add flowing particles along connections
                    const particleCount = 3;
                    for (let p = 0; p < particleCount; p++) {
                        const progress = (flowOffset + p / particleCount) % 1;
                        const particleX = nodeA.x + (nodeB.x - nodeA.x) * progress;
                        const particleY = nodeA.y + (nodeB.y - nodeA.y) * progress;
                        
                        ctx.fillStyle = \`rgba(255, 215, 0, \${opacity * 3})\`;
                        ctx.beginPath();
                        ctx.arc(particleX, particleY, 1.5, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
}

// Scroll animations
function initializeScrollAnimations() {
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

    // Add scroll animation to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('scroll-animate');
        observer.observe(section);
    });
}

// Skill progress bar animations
function initializeSkillAnimations() {
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 300);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Download resume functionality
function downloadResume() {
    const resumeData = '${personal.resume || ''}';
    if (resumeData && resumeData.startsWith('data:')) {
        const link = document.createElement('a');
        link.href = resumeData;
        link.download = '${personal.name || 'resume'}_resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        // Show message if no resume available
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(10, 25, 47, 0.95);
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            border: 2px solid #64ffda;
            z-index: 10000;
            font-family: Inter, sans-serif;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        \`;
        notification.textContent = 'Resume not available for download';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 3000);
    }
}

// Utility function for smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Add some interactive effects for better UX
document.addEventListener('mouseover', function(e) {
    // Add glow effect to buttons and links
    if (e.target.matches('.btn, .nav-link, .contact-link, .project-link, .blog-link, .cert-link')) {
        e.target.style.transform = 'translateY(-2px)';
    }
});

document.addEventListener('mouseout', function(e) {
    // Remove glow effect
    if (e.target.matches('.btn, .nav-link, .contact-link, .project-link, .blog-link, .cert-link')) {
        e.target.style.transform = '';
    }
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect for hero title after page loads
window.addEventListener('load', function() {
    const heroName = document.querySelector('.hero-name');
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroName && heroTitle) {
        // Add some delay before starting typing effect
        setTimeout(() => {
            const originalTitle = heroTitle.textContent;
            typeWriter(heroTitle, originalTitle, 150);
        }, 1000);
    }
});`;

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