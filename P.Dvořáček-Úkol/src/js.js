function submitText(){
    var myDiv = document.getElementById("output");

    var newP = document.createElement("p");
    var newTit = document.createElement("h4");

    var input = document.getElementById("inputs").value;
    var title = document.getElementById("titles").value;

    newP.innerHTML = input;
    newTit.innerHTML = title;

    myDiv.appendChild(newTit);
    myDiv.appendChild(newP);
}