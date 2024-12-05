const formData = new FormData();
formData.append("image", imageFile);

fetch("http://127.0.0.1:5000/detect", {
    method: "POST",
    body: formData
})
    .then(response => response.json())
    .then(data => {
        console.log("Detections:", data.detections);
        // Display data on your website
    })
    .catch(error => console.error("Error:", error));
