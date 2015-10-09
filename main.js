var count = 0;

function main() {
    var elements = document.getElementsByClassName('board-main-content');

    if (elements.length == 0) {
        count += 1;
        if (count < 10)
            setTimeout(main, 100);
    } else if (elements.length == 1) {
        chrome.runtime.sendMessage({method: "get", key: location.href}, function(response) {
            var data = response.data;
            if (data) {
                elements[0].style.backgroundSize = 'cover';
                elements[0].style.backgroundPosition = 'center center';
                elements[0].style.backgroundImage = 'url(' + data + ')';
            }
        });
    }
}

window.addEventListener('load', main, false);
