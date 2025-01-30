document.addEventListener("DOMContentLoaded", () => {
    const uploadForm = document.getElementById("uploadForm");
    const galleryContainer = document.getElementById("galleryContainer");

    uploadForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const mediaInput = document.getElementById("media");

        if (mediaInput.files.length === 0) {
            alert("Please upload a file.");
            return;
        }

        const file = mediaInput.files[0];
        const fileURL = URL.createObjectURL(file);
        const fileType = file.type.split("/")[0];

        // Create a new container for the uploaded item
        const mediaElement = document.createElement(fileType === "image" ? "img" : "video");
        mediaElement.src = fileURL;
        mediaElement.alt = title;
        mediaElement.controls = fileType === "video";
        mediaElement.title = title;

        galleryContainer.appendChild(mediaElement);

        // Reset the form
        uploadForm.reset();
        alert("Upload successful!");
    });
});
