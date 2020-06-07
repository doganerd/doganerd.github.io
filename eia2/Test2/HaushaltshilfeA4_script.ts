"use strict";
var HaushaltshilfeA4;
(function (HaushaltshilfeA4) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        HaushaltshilfeA4.generateContent(HaushaltshilfeA4.data);
        let form = document.querySelector("#form");
        form.addEventListener("change", handleChange);
        document.querySelector("#button")?.addEventListener("click", handleClick);
    }
    function handleClick() {
        alert("Vielen Dank für ihre Bestellung! Sie wird sofort bearbeitet :)");
    }
    function handleChange(_event) {
        //console.log(_event);
        let order = document.querySelector("#order");
        order.innerHTML = "";
        let data = new FormData(document.forms[0]);
        let total = 0;
        for (let entry of data) {
            if (entry[0] == "Artikel") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                let price = Number(item.getAttribute("price"));
                let amount = Number(data.get(entry[1] + "Menge"));
                let einheit = (item.getAttribute("einheit"));
                total += price * amount;
                order.innerHTML += item.value + " | " + amount + " " + einheit + ": " + price * amount + " €" + "<br> <br>";
            }
            if (entry[0] == "Geld") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                let betrag = Number(data.get("Betrag"));
                order.innerHTML += item.value + ": " + betrag + " €" + " <br>" + " Gebühr: 5€ <br> <br>";
                total += 5;
            }
            if (entry[0] == "Hausarbeiten") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                let price = Number(item.getAttribute("price"));
                total += price;
                order.innerHTML += item.value + ": " + price + " €" + "<br> <br>";
            }
            if (entry[0] == "Zahlung") {
                let item = document.querySelector("[value='" + entry[1] + "']");
                order.innerHTML += "--------------------------------- <br> Zahlungsmethode: " + item.value + "<br> <br>";
            }
        }
        let supermarkt = data.get("Supermarkt");
        order.innerHTML += "Supermarkt Präferenz: " + supermarkt + "<br>" + "______________________ <br>" + "Total: " + total + "€";
    }
})(HaushaltshilfeA4 || (HaushaltshilfeA4 = {}));
//# sourceMappingURL=HaushaltshilfeA4_script.js.map