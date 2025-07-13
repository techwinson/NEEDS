// To handles feedback form submission via AJAX for static HTML

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const statusDiv = document.createElement('div');
    statusDiv.style.marginTop = '16px';
    form.appendChild(statusDiv);

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        statusDiv.textContent = 'Sending...';
        const formData = {
            name: form.name.value,
            email: form.email.value,
            mobile: form.mobile.value,
            message: form.message.value
        };
        try {
            const response = await fetch('https://formspree.io/f/xnnzajgb', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                statusDiv.textContent = 'Thank you for your feedback!';
                form.reset();
            } else {
                statusDiv.textContent = 'Something went wrong. Please try again.';
            }
        } catch (error) {
            statusDiv.textContent = 'Error sending feedback.';
        }
    });
});