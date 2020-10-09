document.querySelector("#target").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    let inputData = e.target[0].value;
    sendAjax("http://127.0.0.1:3000/searching", inputData);
});

function sendAjax(url, data) {
    let value = { search: data };
    value = JSON.stringify(value);
    console.log(value);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content_Type", "application/json");
    xhr.send(value);

    xhr.addEventListener("load", () => {
        let result = JSON.parse(xhr.responseText);
        console.log(result);
        document.querySelector(".result").innerHTML = result.search;
    });
}
