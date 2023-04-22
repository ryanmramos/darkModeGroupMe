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

let handlePillar = function () {
    console.log("In handlePillar");
    const appDiv = document.querySelector('body #app');

    // interval to wait for pillar element
    const interval = setInterval(() => {
        const asideBar = appDiv.querySelector('aside');
        if (asideBar) {
            const pillar = asideBar.querySelector('.pillar');
            if (pillar) {
                clearInterval(interval);
                console.log(pillar);
                pillar.style.backgroundColor = '#202226';
    
                // can now call handleTray as tray element is a child of
                handleTray(asideBar);
            }
        }
    }, 50);
}

let handleTray = function (asideBar) {
    console.log("In handleTray");
    const tray = asideBar.querySelector('#tray');

    // set color of Chats title
    tray.style.backgroundColor = '#2F3037';

    const trayHeader = tray.querySelector('.tray-header');

    // set color of "Chats" text (color inherited from list-title)
    const listTitle = trayHeader.querySelector('div .list-title');
    console.log(listTitle);
    listTitle.style.color = '#FFFFFF';

    // set the color of the Search element
    const search = tray.querySelector('.list-search');
    search.style.backgroundColor = '#2F3037';
    search.style.borderBottom = "1px solid #EAEAEA";

    // set the color of the tray list
    const trayList = tray.querySelector('.tray-list');
    trayList.style.backgroundColor = '#2F3037';

    // const listItems = trayList.querySelectorAll('div .chat-list div div .list .list-item');

    // interval to wait for list items to be populated
    const interval = setInterval(() => {
        const listItems = trayList.querySelectorAll('div .chat-list div div .list .list-item');
        if (listItems.length > 0) {
            clearInterval(interval);
            console.log(listItems);
            listItems.forEach(element => {
                // set the background color
                element.style.backgroundColor = '#2F3037';
            });
        }
    }, 50);
}