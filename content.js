window.addEventListener('load', function() {
    const body = document.querySelector('body');
    if (body) {
        console.log(body);
        body.style.backgroundColor = '#36383E';
    }
    else {
        console.log("Body element does not exist.");
    }
});