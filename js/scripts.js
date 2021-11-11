var xhr = new XMLHttpRequest(), // obiekt dzięki któremu możemy wysyłać zapytania
    data = new FormData(),      // obiekt formularza ułatwiający wysyłkę danych
    dProgress = document.querySelector("#download"), //przypięcie elementów html do zmiennych
    uProgress = document.querySelector("#upload");

xhr.open("POST", "odbierz.php", true); //"netoda", "pod jaki adres", czy asynchronicznie?

xhr.onreadystatechange = function(e) {

    if(this.readyState === 4 && this.status >= 200 && this.status < 300) { // komunikaty potwierdzające poprawność komunikacji
        console.log(this.response);
    }

};

//DOWNLOAD
xhr.onprogress = function(e){
        //console.log(e); zwróci ProgressEvent a w w nim m.in lengthComputable czyli parametr czy w ogóle możemy dokonywać obliczeń, zwróci też loadedi total.
    if(e.lengthComputable) {
        var percent = (e.loaded / e.total) * 100; //(ilość przesłanych danych / wszystkie dane) * 100

        dProgress.value=percent; // przypisanie bierzacej wartosci do <progress id="download" max="100" value="0"></progress> - zmiana value powoduje ruch paska
         
    }
};

//UPLOAD
xhr.upload.onprogress = function(e){ // to samo co download tylko musimy się najpierw odwołać do upload a później onprogress wynika to z prototypu --> sprawdź w dir(xhr)

    if(e.lengthComputable) {
        var percent = (e.loaded / e.total) * 100;

        uProgress.value=percent;
    }
};

data.append("firstName", "Jan"); //przypiecie danych klucz-->wartość
data.append("lastName", "Kowalski"); 

xhr.send(data); //wysyłka danych