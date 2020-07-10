function addBtn () {
    var textList = document.getElementById("input-text").value;
        document.getElementById("list-demo").innerHTML += textList+"<button ><i class='fas fa-trash-alt'></i></button> <button><i class='fas fa-edit'></i></button>" +"<br>" ;
        // for clearing the input box
        document.getElementById('input-text').value = '';
    }
