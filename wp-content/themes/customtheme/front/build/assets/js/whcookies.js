function WHCreateCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    let expires = "; expires=" + date.toGMTString();
    document.cookie = name+"="+value+expires+"; path=/";
}
function WHReadCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.onload = WHCheckCookies;

function WHCheckCookies() {
    if(WHReadCookie('cookies_accepted') != 'T') {
        let message_container = document.createElement('div');
        message_container.id = 'cookies-message-container';
        let html_code = '<div id="cookies-message">' +
            'Korzystając z naszej strony, zgadzasz się na używanie plików cookies, które są instalowane na Twoim urządzeniu końcowym. Pliki cookies są stosowane\n' +
            'w szczególności w celach prawidłowego świadczenia usług, analiz, statystyk. ' +
            '<a href="javascript:WHCloseCookiesWindow();" id="accept-cookies-checkbox" name="accept-cookies">Akceptuj</a></div>';
        message_container.innerHTML = html_code;
        document.body.appendChild(message_container);
    }
}

function WHCloseCookiesWindow() {
    WHCreateCookie('cookies_accepted', 'T', 365);
    document.getElementById('cookies-message-container').removeChild(document.getElementById('cookies-message'));
}