let imageURL;

function upload() {
    const fileinp = document.getElementById('filepicker');
    const image = fileinp.files[0];
    const fdata = new FormData();
    fdata.append("image_file", image);
    fdata.append('size', 'auto')
    const apikey = "RAR7cQuM2sgzV3htTNd7YxKF"
    fetch('https://api.remove.bg/v1.0/removebg', {
        method: "POST",
        headers: {
            'X-Api-Key': apikey,
        },
        body: fdata
    })
        .then(function (response) {
            return response.blob();
        })
        .then(function (blob) {
            const url = URL.createObjectURL(blob);
            imageURL = url;
            const img = document.createElement('img');
            img.src = url;
            img.classList.add('img-fluid');
            const resultContainer = document.getElementById('result-container');
            resultContainer.innerHTML = '';
            resultContainer.appendChild(img);
        })
        .catch();
}
function downloadf() {
    var anchorElement = document.createElement('a');
    anchorElement.href = imageURL;
    anchorElement.download = 'Removed-BG.png';
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
}

