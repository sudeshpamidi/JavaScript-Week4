$(document).ready(function() {


    let callAjaxBtn = document.getElementById("callAjax");
    let resultsDiv = document.getElementById("results");
    let resetBtn = document.getElementById("reset");

    callAjaxBtn.onclick = callAjax;
    resetBtn.onclick = reset;

    function callAjax() {


        results.style.display = "block";

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let json = JSON.parse(this.responseText);
                let html = "";
                Object.keys(json).forEach((k, i) => {
                    html = html + k + ": " + json[k] + "<br>";
                });
                resultsDiv.innerHTML = html;
            };
        };
        let url = "https://jsonplaceholder.typicode.com/todos/2";
        xhr.open("GET", url, true);
        xhr.send();
    };

    function reset() {
        results.style.display = "none";
    }
});