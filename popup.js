function submit() {
    var value = document.getElementById('url').value;

    chrome.tabs.getSelected(null, function(tab) {
        var key = tab.url;

        chrome.runtime.sendMessage({method: 'set', key: key, value: value}, function(response) {
            var message = document.getElementById('message');
            message.innerText = 'Please reload the page.';

            setTimeout(function() {
                message.innerText = '';
            }, 5000);
        });
    });
}

function main() {
    document.getElementById('submit').onclick = submit;
}

window.addEventListener('load', main, false);
