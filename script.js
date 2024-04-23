function convertToJPEG() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (file) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = function() {
      const img = new Image();
      img.src = fileReader.result;

      img.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const jpegData = canvas.toDataURL('image/jpeg');
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = jpegData;
        downloadLink.style.display = 'inline';
      }
    }
  }
}

document.getElementById('fileInput').addEventListener('change', function() {
  const convertButton = document.getElementById('convertButton');
  convertButton.disabled = false;
});
