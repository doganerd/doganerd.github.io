var memory;
(function (memory) {
    console.log("start");
    var chosenSequence;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        var game = document.querySelector("div#game");
        game.addEventListener("click", chooseCards);
        document.addEventListener("mousedown", chooseSequence);
    }
    function chooseCards(_event) {
        //console.log(_event);
        var game = _event.target;
        var cards = document.createElement("span");
    }
    function chooseSequence(_event) {
        //console.log(_event);
        var chosenSequence = _event;
    }
})(memory || (memory = {}));
//# sourceMappingURL=memory.js.map