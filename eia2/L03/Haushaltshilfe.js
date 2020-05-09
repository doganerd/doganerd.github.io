var myNodelist = document.getElementsByTagName("LI");
var x;
for (x = 0; x < myNodelist.length; x++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "closing";
    span.appendChild(txt);
    myNodelist[x].appendChild(span);
}
var closing = document.getElementsByClassName("closing");
for (x = 0; x < closing.length; x++) {
    closing[x].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
}
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("newtask").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("please enter your task first!");
    }
    else {
        document.getElementById("tasks").appendChild(li);
    }
    document.getElementById("newtask").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "closing";
    span.appendChild(txt);
    li.appendChild(span);
    for (x = 0; x < closing.length; x++) {
        closing[x].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}