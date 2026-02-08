document.addEventListener('DOMContentLoaded', function () {

    var banner = document.getElementById('cookieBanner');
    var acceptBtn = document.getElementById('acceptCookies');
    var rejectBtn = document.getElementById('declineCookies');

    function getCookie(name) {
        var value = '; ' + document.cookie;
        var parts = value.split('; ' + name + '=');
        return parts.length == 2 ? parts.pop().split(';').shift() : '';
    }
    if (getCookie('cookiesAccepted')) {
        banner.classList.add('hidden');
        return;
    }
    banner.classList.remove('hidden');

    acceptBtn.addEventListener('click', function () {
        document.cookie = 'cookiesAccepted=true';
        banner.classList.add('hidden');
    });
    rejectBtn.addEventListener('click', function () {
        window.location.href = 'https://duckduckgo.com/';
    });


});