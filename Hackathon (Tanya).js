document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedback-form");

    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(feedbackForm);
        const feedbackData = {};
        formData.forEach((value, key) => {
            feedbackData[key] = value;
        });

        // Here, you can send feedbackData to your server for processing and storage using AJAX or fetch.

        // For a simple demonstration, we'll log the feedback data to the console.
        console.log(feedbackData);

        // Clear the form fields
        feedbackForm.reset();
    });
});
