let pdfResizeForm = document.getElementById("pdfResizeForm");

//URL of API
let pdfResizeApi = "http://172.27.4.135/ImageResizePDF/ImageDownload";

pdfResizeForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let imageFile = document.getElementById("imageFile").files;
  let pdfFile = document.getElementById("pdfFile").files;
  let excelFile = document.getElementById("excelFile").files;
  let formData = new FormData();

  if (imageFile.length > 0) {
    for (let i = 0; i < imageFile.length; i++) {
      const file = imageFile[i];
      formData.append("pdf", file, file.name);
    }
  }
  if (pdfFile.length > 0) {
    for (let i = 0; i < pdfFile.length; i++) {
      const file = pdfFile[i];
      formData.append("pdf", file, file.name);
    }
  }
  if (excelFile.length > 0) {
    for (let i = 0; i < excelFile.length; i++) {
      const file = excelFile[i];
      formData.append("pdf", file, file.name);
    }
  }

  try {
    const response = await fetch(pdfResizeApi, {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "*/*",
      },
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Unable to connect to API");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    alert("Unable fetch file. Check internet connection");
    console.error(err);
  }
});
