const formData = {
    email: '',
    message: '',
};

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailField = form.elements.email;
const messageField = form.elements.message;

function restoreState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
        const parsed = JSON.parse(saved);
        if (parsed.email) { emailField.value = parsed.email; formData.email = parsed.email; }
        if (parsed.message) { messageField.value = parsed.message; formData.message = parsed.message; }
    } catch (_) {
    }
};

restoreState();

form.addEventListener('input', e => {
    const { name, value } = e.target;
    if (name in formData) {
        formData[name] = value.trim();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const { email, message } = formData;

    if (!email || !message) {
        alert('Fill please all fields');
        return;
    }


    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
    form.reset();
});