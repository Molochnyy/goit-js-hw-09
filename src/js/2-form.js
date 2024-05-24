document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".feedback-form");
    const formData = {
        email: "",
        message: ""
    };

    const storedFormData = localStorage.getItem("feedback-form-state");
    if (storedFormData) {
        const parsedFormData = JSON.parse(storedFormData);
        formData.email = parsedFormData.email;
        formData.message = parsedFormData.message;
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }

    form.addEventListener('input', function (event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value.trim();
        formData[fieldName] = fieldValue;
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    });


    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (formData.email === "" || formData.message === "") {
            alert("Fill please all fields");
            return;
        }
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        form.reset();
    });
});