//script start when html dom loaded
window.onload = function () {
    var addButton = document.getElementById("add-button");
    addButton.onclick = function () {
        //alert("You click add");
        var textList = document.getElementById("input-text").value;
        document.getElementById("demo").innerHTML += textList +"<br>" ;
    };
};
