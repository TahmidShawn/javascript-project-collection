const extractFunc = () => {
    const fileInput = document.getElementById("uploadImage");
    const outputDiv = document.getElementById("outputDiv");

    const imageFile = fileInput.files[0];

    if (!imageFile) {
        outputDiv.textContent = "Please select an image";
        return;
    }

    Tesseract.recognize(imageFile, "eng")
        .then(({ data }) => {
            outputDiv.textContent = data.text;
        })
        .catch((err) => {
            outputDiv.textContent = "error";
            console.log("error..", err);
        });
};
