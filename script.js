console.log("running..")
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const ham = document.querySelector('.ham');
const cross = document.querySelector('.cross');

if (sidebar && hamburger && ham && cross) {
    cross.style.display = 'none';
    const toggleSidebar = () => {
        sidebar.classList.toggle('sidebargo');
        const isClosed = sidebar.classList.contains('sidebargo');
        ham.style.display = isClosed ? 'inline' : 'none';
        cross.style.display = isClosed ? 'none' : 'inline';
    };
    hamburger.addEventListener("click", toggleSidebar);
    hamburger.addEventListener("keydown", (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleSidebar();
        }
    });
}

const legacyContactForm = document.querySelector('.contactform form');
if (legacyContactForm) {
    legacyContactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const button = legacyContactForm.querySelector('button[type="submit"]');
        const status = document.getElementById('form-status');
        const originalText = button.textContent;
        button.disabled = true;
        button.textContent = 'Sending...';

        try {
            const response = await fetch(legacyContactForm.action, {
                method: legacyContactForm.method,
                body: new FormData(legacyContactForm),
                headers: { Accept: 'application/json' }
            });
            if (!response.ok) {
                throw new Error('Submission failed');
            }
            legacyContactForm.reset();
            status.textContent = 'Thanks for reaching out! Your message was sent successfully.';
            status.style.color = 'green';
        } catch (error) {
            console.error('Contact form submission failed:', error);
            status.textContent = 'We could not send your message. Please try again.';
            status.style.color = 'red';
        } finally {
            button.disabled = false;
            button.textContent = originalText;
        }
    });
}