let outputType = "jpeg"; // Default output file type is JPEG

function setOutputType(type) {
  outputType = type;
  const outputButton = document.querySelector("#outputButton");
  outputButton.textContent = `Output File Type: ${type.toUpperCase()}`;
}

async function processZipFile(file) {
  const zip = await JSZip.loadAsync(file);

  const imageFiles = Object.values(zip.files).filter((file) => {
    const extension = file.name.split('.').pop().toLowerCase();
    return ['jpg', 'jpeg', 'png', 'webp', 'avif'].includes(extension);
  });

  if (imageFiles.length === 0) {
    alert('The ZIP file does not contain any supported image files (jpg, jpeg, png, webp, avif).');
    return;
  }

  const imageFilePromises = imageFiles.map(async (imageFile) => {
    const dataURL = await imageFile.async('base64');
    const extension = outputType === "jpg" ? "jpeg" : outputType;
    return {
      name: `${imageFile.name.split(".")[0]}.${extension}`,
      dataURL: dataURL.split(",")[1]
    };
  });

  return await Promise.all(imageFilePromises);
}

async function convertAndDownload() {
  const files = document.getElementById("fileInput").files;
  const progressBar = document.getElementById("progressBar");
  const downloadLink = document.getElementById("downloadLink");

  if (files.length === 0) {
    alert("Please select one or more images or a ZIP file.");
    return;
  }

  progressBar.style.display = "block";
  downloadLink.style.display = "none";
  document.getElementById("adds").innerHTML = "";

  if (files.length === 1 && files[0].name.endsWith('.zip')) {
    // If there's only one zip file, process it separately
    try {
      const imageFiles = await processZipFile(files[0]);
      if (imageFiles && imageFiles.length > 0) {
        // Create a zip for the converted images
        const zip = new JSZip();
        imageFiles.forEach((imageFile) => {
          zip.file(imageFile.name, imageFile.dataURL, { base64: true });
        });

        zip.generateAsync({ type: "blob" })
          .then(function (content) {
            const url = URL.createObjectURL(content);
            downloadLink.href = url;
            downloadLink.download = `converted_images.zip`;
            downloadLink.style.display = "block";
            progressBar.style.display = "none";
          });
      }
    } catch (error) {
      alert('Error processing the ZIP file.');
      progressBar.style.display = "none";
    }
  } else {
    // Handle conversion for individual image files
    const zip = new JSZip();

    let processedCount = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.name.endsWith('.zip')) {
        // Skip zip files, we already handled them above
        processedCount++;
        continue;
      }

      const reader = new FileReader();
      reader.onloadend = async function () {
        const dataURL = reader.result;
        const extension = outputType === "jpg" ? "jpeg" : outputType; // jpg should be converted to jpeg
        zip.file(`${file.name.split(".")[0]}.${extension}`, dataURL.split(",")[1], { base64: true });

        processedCount++;
        if (processedCount === files.length) {
          zip.generateAsync({ type: "blob" })
            .then(function (content) {
              const url = URL.createObjectURL(content);
              downloadLink.href = url;
              downloadLink.download = `converted_images.zip`;
              downloadLink.style.display = "block";
              progressBar.style.display = "none";
            });
        }
      };
      reader.readAsDataURL(file);
    }
  }
}
