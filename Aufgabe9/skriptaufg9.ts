


var myNodelist: string = document.getElementsByTagName("LI");
var x: number;
for (x = 0; x < myNodelist.length; x++) {
    var span: string = document.createElement("SPAN");
    var txt: string = document.createTextNode("\u00D7");
    span.className = "closing";
    span.appendChild(txt);
    myNodelist[x].appendChild(span);
}


var closing: string = document.getElementsByClassName("closing");
for (x = 0; x < closing.length; x++) {
    closing[x].onclick = function (): void {
        var div: string = this.parentElement;
        div.style.display = "none";
    };
}


function newElement(): void {
    var li: string = document.createElement("li");
    var inputValue: string = document.getElementById("newtask").value;
    var t: string = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("please enter your task first!");
    } else {
        document.getElementById("tasks").appendChild(li);
    }
    document.getElementById("newtask").value = "";

    var span: string = document.createElement("SPAN");
    var txt: string = document.createTextNode("\u00D7");
    span.className = "closing";
    span.appendChild(txt);
    li.appendChild(span);

    for (x = 0; x < closing.length; x++) {
        closing[x].onclick = function (): void {
            var div: string = this.parentElement;
            div.style.display = "none";
        };
    }
} 