$(document).ready(function () {
    $('button').click(function () {
        logSDk.sendLog({test:'test'});
    });
});
