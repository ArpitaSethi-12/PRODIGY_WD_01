// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple form validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Success animation
    const button = this.querySelector('.send-btn');
    const originalText = button.textContent;
    
    button.textContent = 'SENDING...';
    button.style.background = 'linear-gradient(45deg, #4caf50, #388e3c)';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = 'SENT! ✓';
        button.style.background = 'linear-gradient(45deg, #4caf50, #388e3c)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'linear-gradient(45deg, #e91e63, #ad1457)';
            button.disabled = false;
            this.reset();
        }, 2000);
    }, 1500);
});

// Add interactive hover effects to form inputs
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.transform = 'translateY(-2px)';
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.style.transform = 'translateY(0)';
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Add floating animation to geometric shapes
function animateShapes() {
    const triangles = document.querySelectorAll('.triangle');
    triangles.forEach((triangle, index) => {
        const delay = index * 1000;
        setTimeout(() => {
            setInterval(() => {
                const currentTransform = triangle.style.transform || 'rotate(0deg)';
                const rotation = currentTransform.match(/rotate\(([-\d]+)deg\)/);
                const currentRotation = rotation ? parseInt(rotation[1]) : 0;
                triangle.style.transform = `rotate(${currentRotation + (Math.random() > 0.5 ? 5 : -5)}deg)`;
            }, 3000);
        }, delay);
    });
}

// Add parallax effect on mouse move
document.addEventListener('mousemove', function(e) {
    const mouseX = (e.clientX / window.innerWidth) - 0.5;
    const mouseY = (e.clientY / window.innerHeight) - 0.5;
    
    const illustration = document.querySelector('.illustration');
    const triangles = document.querySelectorAll('.triangle');
    
    illustration.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    
    triangles.forEach((triangle, index) => {
        const multiplier = (index + 1) * 10;
        triangle.style.transform += ` translate(${mouseX * multiplier}px, ${mouseY * multiplier}px)`;
    });
});

// Initialize animations
window.addEventListener('load', function() {
    animateShapes();
    
    // Add entrance animations
    const elements = document.querySelectorAll('.contact-section, .illustration');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Remove active class from all links
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
    });
});
