function login(e) {
    console.log("login");
    var username = document.getElementById("inputUsername").value;
    var password = document.getElementById("inputPassword").value;
    document.getElementById("inputUsername").value = "";
    document.getElementById("inputPassword").value = "";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/controls", true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Authorization", 'Basic ' + btoa(`${username}:${password}`));
    xhr.onload = function () {
        if (xhr.status == 200) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "/socket.io", true);
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", 'Basic ' + btoa(`${username}:${password}`));
            xhr.onload = function () {
                window.location.replace("/controls");
            };
            xhr.send();
        } else {
            $('#errAl').show();
            setTimeout(function(){ $('#errAl').hide(); }, 3000);
        }
    };
    xhr.send();
}

window.onload = function () {
    $('#errAl').hide();
    $('body').hide();
    //automatically login if login header is set
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/controls", true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Authorization", 'Basic ' + btoa(`a:a`));
    xhr.onload = function () {
        if (xhr.status == 200) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "/socket.io", true);
            xhr.withCredentials = true;
            xhr.setRequestHeader("Authorization", 'Basic ' + btoa(`${username}:${password}`));
            xhr.onload = function () {
                window.location.replace("/controls");
            };
            xhr.send();
        } else {
            $('body').show();
        }
    };
    xhr.send();
}

