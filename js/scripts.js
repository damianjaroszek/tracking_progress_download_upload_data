var xhr = new XMLHttpRequest(),
    data = new FormData(),
    dProgress = document.querySelector("#download"),
    uProgress = document.querySelector("#upload");

xhr.open("POST", "odbierz.php", true);

xhr.onreadystatechange = function(e) {

    if(this.readyState === 4 && this.status >= 200 && this.status < 300) {
        console.log(this.response);
    }

};

data.append("firstName", "Jan");
data.append("lastName", "Kowalski");

xhr.send(data);