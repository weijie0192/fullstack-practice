 function addBtn () {
    var textList = document.getElementById("input-text").value;
        document.getElementById("list-demo").innerHTML += textList+"<button >X</button> <button>Edit</button>" +"<br>" ;
        // for clearing the input box
        document.getElementById('input-text').value = '';
    }
