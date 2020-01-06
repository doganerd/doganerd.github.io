var numberoftasks: number = 0;

window.addEventListener("load", function (): void {
    document.querySelector(".row").addEventListener("click", addtask);
    document.querySelector(".taskamounts").addEventListener("click", addtask);

});

function addtask(): void {
    var anothertask: string = (<HTMLInputElement>document.querySelector(".anothertask")).value;
    console.log(anothertask);
    add(anothertask);
    var line = document.querySelector(".row");
    var newtasks: number = line.children.length;
    numberoftasks = newtasks;
    console.log("This many to-dos are left:" + newtasks);
    document.querySelector(".taskamounts").innerHTML = newtasks + " in total";
}

function add(taskload: string): void {
    var button = document.createElement("div");
    button.setAttribute("class", "icons");
    button.setAttribute("id", "taskid" + numberoftasks);
    var iconfont: string = "";
    iconfont += "<button onclick=\"CheckedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + numberoftasks + "\"></button>";
    iconfont += "<input class=\"firsttask\" id=\"firsttask" + numberoftasks + "\" value=\"" + taskload + "\" ></input>";
    iconfont += "<button onclick=\"DeleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + numberoftasks + "\"></button>";
    button.innerHTML = iconfont;
    document.querySelector(".Rahmen").appendChild(button); // Hinzufügen vom Template
    console.log("addTasktoList:" + taskload);
}

function deleting (removetask): void {
    console.log("deleting task");
    removetask.parentElement.remove();
    var line = document.querySelector(".row");
    var newtasks = line.children.length;
    document.querySelector(".taskamounts").innerHTML = newtasks + " in total";
}


function checkbox(checkbutton): void {
    if (checkbutton.classList.contains("fa-circle")) {
        checkbutton.classList.remove("fa-circle");
        checkbutton.classList.add("fa-check-circle");
    } else {
        checkbutton.classList.remove("fa-check-circle");
        checkbutton.classList.add("fa-circle");
    }
}