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
            var socketxhr = new XMLHttpRequest();
            socketxhr.open("GET", "/socket.io/", true);
            socketxhr.withCredentials = true;
            socketxhr.setRequestHeader("Authorization", 'Basic ' + btoa(`${username}:${password}`));
            socketxhr.onload = function () {
                window.location.replace("/controls");
            };
            socketxhr.send();
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
            window.location.replace("/controls");
        } else {
            $('body').show();
        }
    };
    xhr.send();
}

