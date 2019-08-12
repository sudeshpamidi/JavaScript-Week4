/**
 * Description : Ajax Call 
 * Author: Sudesh Pamidi
 */
"use strict"
$(document).ready(function() {

    let callAjaxBtn = document.getElementById("callAjax");
    let resultsDiv = document.getElementById("results");
    let resetBtn = document.getElementById("reset");
    let tbody = document.getElementById("tbody");

    callAjaxBtn.onclick = callAjax;
    resetBtn.onclick = reset;

    /**
     * Callback function for btn event
     */
    function callAjax() {
        results.style.display = "none";
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let json = JSON.parse(this.responseText);
                //showItems(json);
                displayData(json);
            };
        };
        let url = "https://jsonplaceholder.typicode.com/users";
        xhr.open("GET", url, true);
        xhr.send();
    };

    /**
     * Clear the result. Resetting the screen.
     */
    function reset() {
        results.style.display = "none";
        thead.innerHTML = "";
        tbody.innerHTML = "";
    };

    /**
     * display the json object in result Div
     * @param {object} json 
     */
    function showItems(json) {
        let html = "";
        Object.keys(json[0]).forEach((k, i) => {
            let type = typeof(json[0][k]);
            switch (type) {
                case "number":
                case "string":
                    html = html + k + ": " + json[0][k] + "<br>";
                    break;
                case "object":
                    //Object.keys(json[0][k]).forEach((x, y) => {
                    //    html = html + k + ": " + json[0][k][x] + "<br>";
                    //});
                    //break;
            };
        });
        resultsDiv.innerHTML = html;
    };

    /**
     * Create the header -th in table.
     * @param {object} json 
     */
    function addTableHeader(json) {
        let thead = document.getElementById("thead");
        let tr = thead.insertRow(0);
        Object.keys(json[0]).forEach((k, i) => {
            let th
            let type = typeof(json[0][k]);
            switch (type) {
                case "number":
                case "string":
                    th = document.createElement("th");
                    th.innerHTML = k;
                    tr.appendChild(th);
                    break;
                case "object":
                    //Object.keys(json[0][k]).forEach((x, y) => {
                    //    html = html + k + ": " + json[0][k][x] + "<br>";
                    //});
                    //break;
            };

        });
    };

    /**
     * add the data to tbody
     * @param {Object} json 
     */
    function addToTable(json) {
        let tbody = document.getElementById("tbody");

        for (let i = 0; i < json.length; i++) {
            let tr = tbody.insertRow(i); // remember 0th row is header. start with 1.
            Object.keys(json[i]).forEach((k, j) => {
                let td
                let type = typeof(json[i][k]);
                switch (type) {
                    case "number":
                    case "string":
                        td = document.createElement("td");
                        td.innerHTML = json[i][k];
                        tr.appendChild(td);
                        break;
                    case "object":
                        //Object.keys(json[0][k]).forEach((x, y) => {
                        //    html = html + k + ": " + json[0][k][x] + "<br>";
                        //});
                        //break;
                };
            });
        };
    };

    /**
     * Display the json data in table.
     * @param {json object} json 
     */
    function displayData(json) {
        thead.innerHTML = "";
        tbody.innerHTML = "";
        addTableHeader(json);
        addToTable(json);
    };
});