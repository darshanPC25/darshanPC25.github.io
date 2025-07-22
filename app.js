// Portfolio Application Data
const portfolioData = {
  // personalInfo: {
  //   name: "Alex GreenCode",
  //   title: "Senior Data Scientist & AI Engineer",
  //   tagline: "Evolving Data into Intelligence",
  //   email: "alex@greencode.dev",
  //   location: "Portland, OR",
  //   bio: "Data scientist specializing in sustainable AI and green computing solutions. 5+ years of Education building efficient ML systems that minimize environmental impact while maximizing business value."
  // },
  skills: {
    technical: [
      {"name": "Python", "level": 75, "icon": "🐍", "color": "#00ff88"},
      {"name": "SQL/NoSQL", "level": 70, "icon": "🗄️", "color": "#00ff88"},
      {"name": "Java", "level": 68, "icon": "☕", "color": "#40e0d0"},
      {"name": "C/C++", "level": 68, "icon": "🖥️", "color": "#32cd32"},
      // {"name": "Machine Learning", "level": 50, "icon": "🤖", "color": "#32cd32"},
      // {"name": "TensorFlow/PyTorch", "level": 30, "icon": "🧠", "color": "#40e0d0"},
      // {"name": "AWS/GCP", "level": 85, "icon": "☁️", "color": "#32cd32"},
      // {"name": "Docker/Kubernetes", "level": 82, "icon": "🐳", "color": "#40e0d0"}
      
    ],
    analytics: [
      {"name": "Data Visualization", "level": 94, "icon": "📊", "color": "#00ff88"},
      {"name": "Statistical Analysis", "level": 91, "icon": "📈", "color": "#32cd32"},
      // {"name": "A/B Testing", "level": 87, "icon": "⚗️", "color": "#40e0d0"},
      // {"name": "Time Series", "level": 89, "icon": "⏰", "color": "#00ff88"}
    ],
    bigdata: [
      {"name": "Apache Hadoop", "level": 80, "icon": "🐘", "color": "#00ff88"},
      {"name": "Apache Hive", "level": 70, "icon": "🐝", "color": "#00ff88"},
      {"name": "Apache Pig", "level": 68, "icon": "🐖", "color": "#40e0d0"},
      {"name": "Apache HBase", "level": 68, "icon": "🖥️", "color": "#32cd32"},
      {"name": "Apache Spark/pyspark", "level": 50, "icon": "🤖", "color": "#32cd32"},
    ]
  },
  projects: [
    {
      title: "Enumeration of URLs of Active Hidden Servers",
      description: "The Onion Routing (TOR) network serves as an overlay anonymous network over the internet, providing both anonymity for clients accessing the network and a platform for hosting servers anonymously. However, this anonymity has been exploited by malicious actors, necessitating the development of tools to identify and enumerate active hidden servers hosting potentially harmful content or engaging in illicit activities.",
      tech: ["Python", "Flask", "Beautiful Soup", "React", "Java Script"],
      link: "https://github.com/darshanPC25/TornetGranted",
      gradient: "linear-gradient(135deg, #00ff88 0%, #32cd32 100%)",
      glow: "#00ff88"
    },
    {
      title: "Handwritten Digit Recognition Using CNN",
      description: "A deep learning web application that recognizes handwritten digits (0-9) using Convolutional Neural Networks (CNN) and deploys the model through a Flask web interface.",
      tech: ["Python", "tensorflow", "flask", "numpy", "CNN"],
      link: "https://github.com/darshanPC25/HandwrittenDigitRecognitionUsingCNN",
      gradient: "linear-gradient(135deg, #32cd32 0%, #40e0d0 100%)",
      glow: "#32cd32"
    },
    {
      title: "Titanic Dataset - Exploratory Data Analysis",
      description: "This project provides a comprehensive Exploratory Data Analysis (EDA) of the famous Titanic disaster dataset. The analysis aims to uncover patterns, relationships, and insights about passenger survival factors during the tragic sinking of RMS Titanic on April 15, 1912.",
      tech: ["Python", "pandas", "numpy", "matplotlib", "seaborn", "scipy"],
      link: "https://github.com/darshanPC25/ExploratoryDataAnalysisTitanicDataset",
      gradient: "linear-gradient(135deg, #40e0d0 0%, #20b2aa 100%)",
      glow: "#40e0d0"
    },
    // {
    //   title: "Green Logistics Optimizer",
    //   description: "Route optimization algorithms for delivery companies to minimize fuel consumption and emissions.",
    //   tech: ["Python", "OR-Tools", "GraphQL", "Docker"],
    //   category: "optimization",
    //   impact: "30% reduction in fuel usage",
    //   gradient: "linear-gradient(135deg, #00ff88 0%, #228b22 100%)",
    //   glow: "#00ff88"
    // }
  ],
  Education: [
    {
      title: "B.Tech CSE - Data Science",
      company: "Maharana Pratap Engineering College",
      period: "2022 - Present",
      description: "Mandhana, Bahlolpur, Uttar Pradesh",
      color: "#00ff88"
    },
    {
      title: "Intermediate",
      company: "Kendriya Vidyalaya No.1 A.F.S",
      period: "2021 - 2022", 
      description: "Chakeri, Kanpur, Uttar Pradesh",
      color: "#32cd32"
    },
    {
      title: "High School",
      company: "Kendriya Vidyalaya No.1 A.F.S",
      period: "2019 - 2020", 
      description: "Chakeri, Kanpur, Uttar Pradesh",
      color: "#32cd32"
    }
  ],
  certifications: [
    {"name": "Python for Data Science", "color": "#00ff88"},
    {"name": "Data Analytics with Python", "color": "#32cd32"},
    {"name": "Programming with Java", "color": "#40e0d0"},
    {"name": "DSA with Java", "color": "#00ff88"},
  ]
};

// Global variables
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
let particles = [];
let canvas, ctx;
let magneticElements = [];
let isLoaded = false;
let isMobile = false;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  isMobile = window.innerWidth <= 768;
  
  if (!isMobile) {
    initCursor();
  }
  initParticleSystem();
  initNavigation();
  initScrollAnimations();
  initMagneticElements();
  initFormInteractions();
  populateSkills();
  populateProjects();
  populateEducation();
  initCodeTerminal();
  initContactForm();
  
  // Mark as loaded for animations
  setTimeout(() => {
    isLoaded = true;
    document.body.classList.add('loaded');
    triggerEntranceAnimations();
  }, 500);
});

// Custom Cursor System
function initCursor() {
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  
  if (!cursorDot || !cursorOutline) return;

  // Mouse move handler with enhanced tracking
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update cursor dot position immediately
    cursorDot.style.left = mouseX - 4 + 'px';
    cursorDot.style.top = mouseY - 4 + 'px';
  });

  // Smooth cursor outline animation
  function animateCursorOutline() {
    targetX += (mouseX - targetX) * 0.15;
    targetY += (mouseY - targetY) * 0.15;
    
    cursorOutline.style.left = targetX - 16 + 'px';
    cursorOutline.style.top = targetY - 16 + 'px';
    
    requestAnimationFrame(animateCursorOutline);
  }
  animateCursorOutline();

  // Enhanced cursor state handlers
  const hoverElements = document.querySelectorAll('a, button, .btn, .nav-link, .skill-item, .project-card, .magnetic');
  const textElements = document.querySelectorAll('input, textarea');

  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
      createCursorRipple();
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });

  textElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-text');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-text');
    });
  });

  // Click ripple effect
  document.addEventListener('click', createClickRipple);
}

// Create cursor ripple effect
function createCursorRipple() {
  if (isMobile) return;
  
  if (Math.random() > 0.7) { // Occasional ripples
    const ripple = document.createElement('div');
    ripple.className = 'cursor-ripple';
    ripple.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border: 2px solid #00ff88;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      left: ${mouseX - 10}px;
      top: ${mouseY - 10}px;
      animation: ripple-expand 0.6s ease-out forwards;
    `;
    
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
}

// Click ripple effect
function createClickRipple(e) {
  if (isMobile) return;
  
  const ripple = document.createElement('div');
  ripple.className = 'click-ripple';
  ripple.style.cssText = `
    position: fixed;
    width: 4px;
    height: 4px;
    background: #00ff88;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    left: ${e.clientX - 2}px;
    top: ${e.clientY - 2}px;
    box-shadow: 0 0 20px #00ff88;
    animation: ripple-click 0.8s ease-out forwards;
  `;
  
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 800);
}

// Enhanced Particle System
function initParticleSystem() {
  canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  
  ctx = canvas.getContext('2d');
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Initialize particles with enhanced interactivity
  const particleCount = isMobile ? 25 : 50;
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  
  animateParticles();
}

// Enhanced Particle class with better cursor interaction
class Particle {
  constructor() {
    this.reset();
    this.y = Math.random() * canvas.height;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.baseSpeed = Math.random() * 2 + 0.5;
    this.speed = this.baseSpeed;
    this.magneticRadius = 120; // Increased interaction radius
  }
  
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = -10;
    this.speed = Math.random() * 2 + 0.5;
    this.size = Math.random() * 3 + 1;
    this.color = this.getRandomGreenColor();
    this.life = 1;
    this.decay = Math.random() * 0.02 + 0.005;
    this.vx = 0;
    this.vy = this.speed;
  }
  
  getRandomGreenColor() {
    const colors = ['#00ff88', '#32cd32', '#40e0d0', '#20b2aa'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  update() {
    // Enhanced mouse interaction
    if (!isMobile) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < this.magneticRadius) {
        const force = (this.magneticRadius - distance) / this.magneticRadius;
        const angle = Math.atan2(dy, dx);
        
        // Attraction to cursor
        this.vx += Math.cos(angle) * force * 0.5;
        this.vy += Math.sin(angle) * force * 0.5;
        
        // Enhanced visual effects near cursor
        this.opacity = Math.min(1, this.opacity + force * 0.3);
        this.size = Math.min(5, this.size + force * 2);
      } else {
        // Return to normal behavior
        this.opacity = Math.max(0.2, this.opacity - 0.01);
        this.size = Math.max(1, this.size - 0.05);
        this.vx *= 0.95;
        this.vy = this.baseSpeed;
      }
    }
    
    // Apply velocity
    this.x += this.vx;
    this.y += this.vy;
    
    // Damping
    this.vx *= 0.98;
    
    // Life cycle
    this.life -= this.decay;
    
    if (this.y > canvas.height || this.life <= 0 || this.x < -50 || this.x > canvas.width + 50) {
      this.reset();
    }
  }
  
  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity * this.life;
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = this.size * 2;
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  }
}

// Animate particles with enhanced connections
function animateParticles() {
  if (!ctx) return;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw enhanced connections between nearby particles
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        ctx.save();
        ctx.globalAlpha = (150 - distance) / 150 * 0.3;
        ctx.strokeStyle = '#00ff88';
        ctx.lineWidth = 1;
        ctx.shadowColor = '#00ff88';
        ctx.shadowBlur = 2;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
        ctx.restore();
      }
    }
  }
  
  // Update and draw particles
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });
  
  requestAnimationFrame(animateParticles);
}

// Enhanced Navigation with better mobile support
function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Mobile menu toggle with enhanced animation
  navToggle?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const isActive = navToggle.classList.contains('active');
    
    if (isActive) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    } else {
      navToggle.classList.add('active');
      navMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    
    // Enhanced bar animation
    const bars = navToggle.querySelectorAll('.bar');
    if (!isActive) {
      bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      bars[1].style.opacity = '0';
      bars[1].style.transform = 'translateX(20px)';
      bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      bars[0].style.transform = 'none';
      bars[1].style.opacity = '1';
      bars[1].style.transform = 'none';
      bars[2].style.transform = 'none';
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navToggle?.classList.remove('active');
      navMenu?.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Enhanced smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Close mobile menu with animation
        if (navMenu && navMenu.classList.contains('active')) {
          navToggle?.classList.remove('active');
          navMenu?.classList.remove('active');
          document.body.style.overflow = '';
          
          // Reset hamburger animation
          const bars = navToggle?.querySelectorAll('.bar');
          if (bars) {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[1].style.transform = 'none';
            bars[2].style.transform = 'none';
          }
        }
        
        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

  // Update active nav on scroll
  window.addEventListener('scroll', throttle(updateActiveNav, 100));
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`[href="#${id}"]`);
      activeLink?.classList.add('active');
    }
  });
}

// Magnetic Elements with enhanced effects
function initMagneticElements() {
  magneticElements = document.querySelectorAll('.magnetic');
  
  if (isMobile) return; // Skip on mobile
  
  magneticElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-magnetic');
    });
    
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-magnetic');
      el.style.transform = 'translate(0, 0)';
    });
    
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const strength = 0.4;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
  });
}

// Form Interactions with enhanced feedback
function initFormInteractions() {
  const formControls = document.querySelectorAll('.form-control');
  
  formControls.forEach(control => {
    control.addEventListener('focus', (e) => {
      const glow = e.target.nextElementSibling;
      if (glow && glow.classList.contains('input-glow')) {
        glow.style.opacity = '1';
      }
      
      // Enhanced typing particles
      createInputParticles(e.target);
    });
    
    control.addEventListener('blur', (e) => {
      const glow = e.target.nextElementSibling;
      if (glow && glow.classList.contains('input-glow')) {
        glow.style.opacity = '0';
      }
    });
    
    control.addEventListener('input', (e) => {
      if (Math.random() > 0.7) {
        createInputParticles(e.target);
      }
      
      // Real-time validation feedback
      if (e.target.type === 'email' && e.target.value) {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
        e.target.style.borderColor = isValid ? '#32cd32' : '#ff4757';
      }
    });
  });
}

function createInputParticles(element) {
  const rect = element.getBoundingClientRect();
  
  for (let i = 0; i < 3; i++) {
    const particle = document.createElement('div');
    
    particle.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: #00ff88;
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      left: ${rect.right - 30 + Math.random() * 20}px;
      top: ${rect.top + rect.height / 2 + Math.random() * 10 - 5}px;
      animation: input-particle 1.2s ease-out forwards;
    `;
    
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1200);
  }
}

// Populate Skills with enhanced animations
function populateSkills() {
  const skillList = document.querySelector('.skill-list');
  const analyticsList = document.querySelector('.analytics-list');
  const certList = document.querySelector('.cert-list');
  const bdList = document.querySelector('.bd-list');
  
  if (skillList) {
    portfolioData.skills.technical.forEach((skill, index) => {
      const skillElement = createSkillElement(skill, index);
      skillList.appendChild(skillElement);
    });
  }
  
  if (analyticsList) {
    portfolioData.skills.analytics.forEach((skill, index) => {
      const skillElement = createSkillElement(skill, index);
      analyticsList.appendChild(skillElement);
    });
  }
  
  if (certList) {
    portfolioData.certifications.forEach((cert, index) => {
      const certElement = createCertElement(cert, index);
      certList.appendChild(certElement);
    });
  }

if (bdList) {
    portfolioData.skills.bigdata.forEach((skill, index) => {
      const skilElement = createSkillElement(skill, index);
      bdList.appendChild(skilElement);
    });
  }
}

function createSkillElement(skill, index) {
  const skillDiv = document.createElement('div');
  skillDiv.className = 'skill-item animate-in';
  skillDiv.style.animationDelay = `${index * 0.1}s`;
  
  skillDiv.innerHTML = `
    <div class="skill-header">
      <span class="skill-icon">${skill.icon}</span>
      <span class="skill-name">${skill.name}</span>
      <span class="skill-level">${skill.level}%</span>
    </div>
    <div class="skill-bar">
      <div class="skill-progress" style="width: 0%; background: ${skill.color}; box-shadow: 0 0 10px ${skill.color}"></div>
    </div>
  `;
  
  // Enhanced progress bar animation
  setTimeout(() => {
    const progressBar = skillDiv.querySelector('.skill-progress');
    if (progressBar) {
      progressBar.style.width = skill.level + '%';
      progressBar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
      
      // Add pulse effect when animation completes
      setTimeout(() => {
        progressBar.style.animation = 'progress-pulse 2s ease-in-out infinite';
      }, 1500);
    }
  }, index * 200 + 1000);
  
  return skillDiv;
}

function createCertElement(cert, index) {
  const certDiv = document.createElement('div');
  certDiv.className = 'cert-item animate-in';
  certDiv.style.animationDelay = `${index * 0.15}s`;
  
  certDiv.innerHTML = `
    <div class="cert-badge" style="background: ${cert.color}; box-shadow: 0 0 15px ${cert.color}40">
      <span class="cert-icon">🏅</span>
    </div>
    <span class="cert-name">${cert.name}</span>
  `;
  
  return certDiv;
}

// Populate Projects with enhanced effects
function populateProjects() {
  const projectsGrid = document.querySelector('.projects-grid');
  if (!projectsGrid) return;
  
  portfolioData.projects.forEach((project, index) => {
    const projectCard = createProjectCard(project, index);
    projectsGrid.appendChild(projectCard);
  });
}

function createProjectCard(project, index) {
  const card = document.createElement('div');
  card.className = 'project-card glass-card animate-in magnetic';
  card.style.animationDelay = `${index * 0.2}s`;
  
  card.innerHTML = `
    <div class="card-glow"></div>
    <div class="project-header">
    <h3 class="project-title">${project.title}</h3>
    <a href=${project.link} target="_blank">
      <div class="project-impact" style="color: ${project.glow}; background: ${project.glow}20; border: 1px solid ${project.glow}40;">
          GitHub
      </div>
    </a>
    </div>
    <p class="project-description">${project.description}</p>
    <div class="project-tech">
      ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
    </div>
    <div class="project-gradient" style="background: ${project.gradient}; height: 4px; border-radius: 2px; margin-top: auto;"></div>
  `;
  
  // Enhanced hover effects
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = `0 25px 50px rgba(0, 0, 0, 0.4), 0 0 30px ${project.glow}40`;
    card.style.transform = 'translateY(-12px) rotateX(5deg)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
    card.style.transform = '';
  });
  
  return card;
}

// Populate Education Timeline
function populateEducation() {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;
  
  portfolioData.Education.forEach((exp, index) => {
    const timelineItem = createTimelineItem(exp, index);
    timeline.appendChild(timelineItem);
  });
}

function createTimelineItem(exp, index) {
  const item = document.createElement('div');
  item.className = `timeline-item animate-in ${index % 2 === 0 ? 'left' : 'right'}`;
  item.style.animationDelay = `${index * 0.3}s`;
  
  item.innerHTML = `
    <div class="timeline-content glass-card">
      <div class="card-glow"></div>
      <div class="timeline-marker" style="background: ${exp.color}; box-shadow: 0 0 20px ${exp.color}"></div>
      <h3 class="exp-title" style="color: ${exp.color}">${exp.title}</h3>
      <h4 class="exp-company">${exp.company}</h4>
      <span class="exp-period">${exp.period}</span>
      <p class="exp-description">${exp.description}</p>
    </div>
  `;
  
  return item;
}

// Enhanced Code Terminal Animation
function initCodeTerminal() {
  const codeLines = document.querySelector('.code-lines');
  if (!codeLines) return;
  
const code = [
  "// Meet Paridarshan Sahoo 💻🚀",
  "import big_data as bd",
  // "import sentiment_analysis as sa",
  // "import hadoop_ecosystem as he",
  "",
  "class DataEngineer:",
  "    def __init__(self, name):",
  "        self.name = name",
  "        self.skills = ['Python', 'Hadoop', 'Spark', 'Hive', 'HBase']",
  // "        self.projects = ['Reddit Sentiment Analysis', 'Clickstream Mining']",
  "",
  "    def process_data(self, data):",
  "        cleaned = bd.clean(data)",
  "        insights = sa.analyze(cleaned)",
  "        return insights",
  "",
  "# Initialize the engineer",
  "darshan = DataEngineer('Paridarshan Sahoo')",
  "data = bd.fetch('reddit_posts')",
  "insights = darshan.process_data(data)",
  "",
  "print('📊 Insights ready from real-time data!')",
  "print('👨‍💻 Crafted by Paridarshan — turning data into decisions')"
];

  
  let lineIndex = 0;
  let charIndex = 0;
  let isRunning = false;
  
  function typeCode() {
    if (isRunning) return;
    isRunning = true;
    
    if (lineIndex < code.length) {
      const currentLine = code[lineIndex];
      
      if (charIndex < currentLine.length) {
        const lineElement = codeLines.children[lineIndex] || createCodeLine();
        if (!codeLines.children[lineIndex]) {
          codeLines.appendChild(lineElement);
        }
        
        lineElement.textContent = currentLine.substring(0, charIndex + 1) + '█';
        charIndex++;
        
        setTimeout(() => {
          isRunning = false;
          typeCode();
        }, 30 + Math.random() * 70);
      } else {
        // Remove cursor and move to next line
        if (codeLines.children[lineIndex]) {
          codeLines.children[lineIndex].textContent = currentLine;
        }
        lineIndex++;
        charIndex = 0;
        setTimeout(() => {
          isRunning = false;
          typeCode();
        }, 200);
      }
    } else {
      // Restart animation after delay
      setTimeout(() => {
        codeLines.innerHTML = '';
        lineIndex = 0;
        charIndex = 0;
        isRunning = false;
        typeCode();
      }, 8000);
    }
  }
  
  function createCodeLine() {
    const line = document.createElement('div');
    line.className = 'code-line';
    const colors = ['#00ff88', '#32cd32', '#40e0d0'];
    line.style.color = colors[lineIndex % colors.length];
    line.style.textShadow = `0 0 5px ${colors[lineIndex % colors.length]}`;
    return line;
  }
  
  // Start typing animation with observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isRunning && codeLines.children.length === 0) {
        setTimeout(typeCode, 1000);
      }
    });
  });
  
  observer.observe(codeLines);
}

// Enhanced Contact Form with better animations
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const btn = form.querySelector('button[type="submit"]');
    const btnText = btn.querySelector('.btn-text');
    const btnParticles = btn.querySelector('.btn-particles');
    
    // Get form data for validation
    const formData = new FormData(form);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const subject = formData.get('subject')?.trim();
    const message = formData.get('message')?.trim();
    
    // Enhanced validation
    if (!name || !email || !subject || !message) {
      showNotification('Please fill in all fields before sending.', 'error');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }
    
    // Show enhanced loading state
    btnText.textContent = 'Sending...';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    btn.style.transform = 'scale(0.98)';
    
    // Create enhanced sending particles
    createEnhancedSendingParticles(btnParticles);
    
    // Simulate form submission with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Enhanced success animation
    btnText.textContent = 'Message Sent! ✅';
    btn.style.background = 'linear-gradient(135deg, #32cd32, #40e0d0)';
    btn.style.transform = 'scale(1.05)';
    btn.style.boxShadow = '0 8px 30px rgba(50, 205, 50, 0.6)';
    
    // Create success explosion effect
    createSuccessExplosion(btn);
    
    // Enhanced success notification
    showNotification('📩 Message sent! Thank you for reaching out. I\'ll get back to you soon to discuss meaningful data-driven solutions.', 'success');

    
    // Reset form with enhanced animation
    setTimeout(() => {
      form.reset();
      btnText.textContent = 'Send Message';
      btn.disabled = false;
      btn.style.opacity = '1';
      btn.style.background = '';
      btn.style.transform = '';
      btn.style.boxShadow = '';
    }, 4000);
  });
}

function createEnhancedSendingParticles(container) {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 6px;
        height: 6px;
        background: linear-gradient(45deg, #00ff88, #32cd32);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: enhanced-particle-float 1.5s ease-out forwards;
        box-shadow: 0 0 15px #00ff88;
      `;
      container.appendChild(particle);
      setTimeout(() => particle.remove(), 1500);
    }, i * 80);
  }
}

function createSuccessExplosion(button) {
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    const angle = (i / 20) * Math.PI * 2;
    const velocity = 100 + Math.random() * 50;
    
    particle.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      background: #32cd32;
      border-radius: 50%;
      left: ${centerX}px;
      top: ${centerY}px;
      animation: success-explosion 1s ease-out forwards;
      box-shadow: 0 0 10px #32cd32;
      z-index: 10001;
    `;
    
    particle.style.setProperty('--angle', angle + 'rad');
    particle.style.setProperty('--velocity', velocity + 'px');
    
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  }
}

// Scroll Animations with enhanced timing
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        
        // Add stagger effect to child elements
        const children = entry.target.querySelectorAll('.skill-item, .tech-tag, .cert-item');
        children.forEach((child, index) => {
          child.style.animationDelay = `${index * 0.1}s`;
          child.classList.add('animate-in');
        });
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

// Enhanced entrance animations
function triggerEntranceAnimations() {
  const heroElements = document.querySelectorAll('.hero .animate-in');
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('stagger-' + (index + 1));
      el.style.animationPlayState = 'running';
    }, index * 300);
  });
}

// Enhanced notification system
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existing = document.querySelectorAll('.notification');
  existing.forEach(n => n.remove());
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  
  const colors = {
    success: '#32cd32',
    error: '#ff4757',
    info: '#00ff88',
    warning: '#ffa502'
  };
  
  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️',
    warning: '⚠️'
  };
  
  notification.innerHTML = `
    <div class="notification-icon">${icons[type]}</div>
    <div class="notification-content">
      <div class="notification-message">${message}</div>
    </div>
    <button class="notification-close">×</button>
  `;
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: rgba(13, 40, 24, 0.95);
    border: 1px solid ${colors[type]};
    color: #e8ffe8;
    padding: 20px;
    border-radius: 12px;
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px ${colors[type]}40;
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    max-width: 420px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
  `;
  
  // Style sub-elements
  const iconEl = notification.querySelector('.notification-icon');
  iconEl.style.cssText = 'font-size: 1.2em; flex-shrink: 0; margin-top: 2px;';
  
  const contentEl = notification.querySelector('.notification-content');
  contentEl.style.cssText = 'flex: 1; line-height: 1.5;';
  
  const closeEl = notification.querySelector('.notification-close');
  closeEl.style.cssText = `
    background: none;
    border: none;
    color: inherit;
    font-size: 1.5em;
    cursor: pointer;
    padding: 0;
    opacity: 0.7;
    transition: opacity 0.2s ease;
    flex-shrink: 0;
  `;
  
  closeEl.addEventListener('click', () => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 400);
  });
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto remove based on message length
  const duration = Math.max(5000, message.length * 50);
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 400);
    }
  }, duration);
}

// Utility function
function throttle(func, delay) {
  let timeoutId;
  let lastExecTime = 0;
  
  return function (...args) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}

// Enhanced CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple-expand {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(3); opacity: 0; }
  }
  
  @keyframes ripple-click {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(20); opacity: 0; }
  }
  
  @keyframes input-particle {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-40px) scale(0); opacity: 0; }
  }
  
  @keyframes enhanced-particle-float {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-60px) scale(0); opacity: 0; }
  }
  
  @keyframes success-explosion {
    0% { 
      transform: translate(0, 0) scale(1); 
      opacity: 1; 
    }
    100% { 
      transform: translate(
        calc(cos(var(--angle)) * var(--velocity)), 
        calc(sin(var(--angle)) * var(--velocity))
      ) scale(0); 
      opacity: 0; 
    }
  }
  
  @keyframes progress-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  
  .skill-item {
    background: rgba(0, 255, 136, 0.05);
    border: 1px solid rgba(0, 255, 136, 0.2);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }
  
  .skill-item:hover {
    background: rgba(0, 255, 136, 0.1);
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 255, 136, 0.2);
    border-color: rgba(0, 255, 136, 0.4);
  }
  
  .skill-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }
  
  .skill-icon {
    font-size: 1.3em;
    filter: drop-shadow(0 0 5px currentColor);
  }
  
  .skill-name {
    flex: 1;
    font-weight: 600;
    color: #e8ffe8;
    font-size: 1.1em;
  }
  
  .skill-level {
    font-weight: 700;
    color: #00ff88;
    font-size: 1em;
    text-shadow: 0 0 5px #00ff88;
  }
  
  .skill-bar {
    background: rgba(0, 255, 136, 0.1);
    border-radius: 8px;
    height: 8px;
    overflow: hidden;
    position: relative;
  }
  
  .skill-progress {
    height: 100%;
    border-radius: 8px;
    position: relative;
    background: linear-gradient(90deg, currentColor, rgba(255,255,255,0.2));
  }
  
  .skill-progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    animation: progress-shimmer 2s ease-in-out infinite;
  }
  
  @keyframes progress-shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }
  
  .cert-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    background: rgba(0, 255, 136, 0.05);
    border: 1px solid rgba(0, 255, 136, 0.2);
    border-radius: 12px;
    margin-bottom: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }
  
  .cert-item:hover {
    transform: translateX(12px);
    background: rgba(0, 255, 136, 0.1);
    border-color: rgba(0, 255, 136, 0.4);
  }
  
  .cert-badge {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4em;
    position: relative;
    overflow: hidden;
  }
  
  .cert-badge::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    padding: 2px;
    background: conic-gradient(from 0deg, currentColor, transparent, currentColor);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }
  
  .timeline-item {
    position: relative;
    margin: 50px 0;
  }
  
  .timeline-item.left .timeline-content {
    margin-right: calc(50% + 40px);
  }
  
  .timeline-item.right .timeline-content {
    margin-left: calc(50% + 40px);
  }
  
  .timeline-content {
    position: relative;
    padding: 30px;
  }
  
  .timeline-marker {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 30px;
    border: 3px solid #0a1a0a;
  }
  
  .timeline-item.left .timeline-marker {
    right: -50px;
  }
  
  .timeline-item.right .timeline-marker {
    left: -50px;
  }
  
  .exp-title {
    color: #00ff88;
    font-size: 1.4em;
    font-weight: 700;
    margin-bottom: 10px;
    text-shadow: 0 0 10px currentColor;
  }
  
  .exp-company {
    color: #32cd32;
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 12px;
  }
  
  .exp-period {
    color: #40e0d0;
    font-size: 1em;
    font-weight: 600;
    background: rgba(64, 224, 208, 0.15);
    padding: 8px 16px;
    border-radius: 20px;
    display: inline-block;
    margin-bottom: 16px;
    border: 1px solid rgba(64, 224, 208, 0.3);
  }
  
  .exp-description {
    color: #e8ffe8;
    line-height: 1.7;
    margin: 0;
    font-size: 1.05em;
  }
  
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 16px;
  }
  
  .project-title {
    color: #00ff88;
    font-size: 1.4em;
    font-weight: 700;
    flex: 1;
    margin: 0;
    text-shadow: 0 0 8px currentColor;
  }
  
  .project-impact {
    font-size: 0.9em;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 25px;
    white-space: nowrap;
    backdrop-filter: blur(10px);
  }
  
  .project-description {
    color: #e8ffe8;
    line-height: 1.7;
    margin: 0 0 24px 0;
    font-size: 1.05em;
  }
  
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 24px;
  }
  
  .tech-tag {
    background: rgba(0, 255, 136, 0.1);
    color: #00ff88;
    font-size: 0.85em;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 25px;
    border: 1px solid rgba(0, 255, 136, 0.3);
    transition: all 0.3s ease;
  }
  
  .tech-tag:hover {
    background: rgba(0, 255, 136, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 255, 136, 0.3);
  }
  
  @media (max-width: 768px) {
    .timeline-item.left .timeline-content,
    .timeline-item.right .timeline-content {
      margin-left: 40px;
      margin-right: 0;
    }
    
    .timeline-item.left .timeline-marker,
    .timeline-item.right .timeline-marker {
      left: -50px;
      right: auto;
    }
    
    .timeline::before {
      left: 20px;
    }
    
    .skill-item,
    .cert-item,
    .timeline-content {
      padding: 16px;
    }
  }
`;

document.head.appendChild(style);

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('🌱 GreenCode Portfolio Initialized');
  });
} else {
  console.log('🌱 GreenCode Portfolio Initialized');
}
