const locate = window.location.host;
const origin = window.location.origin;
let webUrl = document.getElementById('webUrl');
document.getElementById('webUrl').innerHTML = locate;
webUrl.setAttribute('href', origin);