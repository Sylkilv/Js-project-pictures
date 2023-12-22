function openModal(imageSrc) {
    let modal = document.getElementById('myModal');
    let modalImg = document.getElementById('modalImage');

    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

function closeModal() {
    let modal = document.getElementById('myModal');
    modal.style.display = 'none';
}


window.onclick = function(event) {
    let modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
};

// 2
let imagePaths = [
    'older.jpg',
    'twl.jpg',
    'flatline.jpg',
    'tmh.jpg',
    'idw.jpg',
    'red.jpg',
    'memai.jpg',
    'party.jpg'
];
function generateRandomImage() {
    let container = document.getElementById('randomImageContainer');

    let randomIndex = Math.floor(Math.random() * imagePaths.length);

    let imgElement = document.createElement('img');

    imgElement.src = imagePaths[randomIndex];

    container.innerHTML = '';
    container.appendChild(imgElement);
}




