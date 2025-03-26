const canvas = document.getElementById('photo-canvas');
const ctx = canvas.getContext('2d');
const imageInput = document.getElementById('image-input');
const saveButton = document.getElementById('save-button');

let image;

imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        image = new Image();
        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
        };
        image.src = event.target.result;
    };

    reader.readAsDataURL(file);
});

saveButton.addEventListener('click', () => {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'edited-image.png';
    link.click();
});

// Call functions from other modules when needed.