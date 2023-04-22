window.addEventListener('load', function() {

    // handle body
    const body = document.querySelector('body');
    if (body) {
        console.log(body);
        body.style.backgroundColor = '#36383E';
    }
    else {
        console.log("Body element does not exist.");
    }

    // handle app
    const appDiv = body.querySelector('#app')
    console.log(appDiv);
    if (appDiv) {
        appDiv.style.backgroundColor = '#92959B';
    }
    else {
        console.log('Could not get appDiv');
    }
    
    // handle pillar element
    handlePillar();
});

function handlePillar() {
    console.log("In handlePillar");
    const appDiv = body.querySelector('body #app');

    // interval to wait for pillar element
    const interval = setInterval(() => {
        const pillar = appDiv.querySelector('aside .pillar');
        if (pillar) {
            clearInterval(interval);
            console.log(pillar);
            pillar.style.backgroundColor = '#202226';
        }
    }, 50);
}