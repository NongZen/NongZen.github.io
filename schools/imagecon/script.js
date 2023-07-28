let outputType = "jpeg"; // Default output file type is JPEG

function setOutputType(type) {
  outputType = type;
  const outputButton = document.querySelector("#outputButton");
  outputButton.textContent = `Output File Type: ${type.toUpperCase()}`;
}

function convertAndDownload() {
  const files = document.getElementById("fileInput").files;
  const progressBar = document.getElementById("progressBar");
  const downloadLink = document.getElementById("downloadLink");

  if (files.length === 0) {
    alert("Please select one or more images.");
    return;
  }

  progressBar.style.display = "block";
  downloadLink.style.display = "none";

  if (files.length === 1) {
    // If there's only one image, directly download without zipping
    document.getElementById("adds").innerHTML = ""
    const file = files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      const dataURL = reader.result;
      const link = document.createElement("a");
      downloadLink.href = dataURL;
      downloadLink.download = `${file.name.split(".")[0]}_${outputType.toUpperCase()}`;;
      downloadLink.style.display = "block";
      progressBar.style.display = "none";
    };
    reader.readAsDataURL(file);
  } else {
    // If there are multiple images, create a zip file
    document.getElementById("adds").innerHTML = "s"
    const zip = new JSZip();

    let processedCount = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onloadend = function () {
        const dataURL = reader.result;
        const extension = outputType === "jpg" ? "jpeg" : outputType; // jpg should be converted to jpeg
        zip.file(`${file.name.split(".")[0]}.${extension}`, dataURL.split(",")[1], { base64: true });

        processedCount++;
        if (processedCount === files.length) {
          zip.generateAsync({ type: "blob" })
            .then(function (content) {
              const url = URL.createObjectURL(content);
              downloadLink.href = url;
              downloadLink.download = `converted_image.zip`;
              downloadLink.style.display = "block";
              progressBar.style.display = "none";
            });
        }
      };
      reader.readAsDataURL(file);
    }
  }
}
