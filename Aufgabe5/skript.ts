//Emissionen 2008


var emissionEuropa2008:number = 4965.7;
var emissionNordamerika2008:number = 6600.4;
var emissionSuedamerika2008:number = 1132.6;
var emissionAfrika2008:number = 1028.0;
var emissionAsien2008:number = 12954.7;
var emissionAustralien2008:number = 1993.0;

var alle2008:number = emissionEuropa2008 + emissionNordamerika2008 + emissionSuedamerika2008 + emissionAfrika2008 + emissionAsien2008 + emissionAustralien2008;

//Emissionen 2018

var emissionEuropa2018:number = 4209.3;
var emissionNordamerika2018:number = 6035.6;
var emissionSuedamerika2018:number = 1261.5;
var emissionAfrika2018:number = 1235.5;
var emissionAsien2018:number = 16274.1;
var emissionAustralien2018:number = 2100.5;

var alle2018:number = emissionEuropa2018 + emissionNordamerika2018 + emissionSuedamerika2018 + emissionAfrika2018 + emissionAsien2018 + emissionAustralien2018;

//ProzentEuropa

function europa() {

    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#Zahl1").innerHTML = "4209.3";
    document.querySelector("#Zahl2").innerHTML = "13.5";
    document.querySelector("#title2").innerHTML = "Europe";
    document.querySelector("#Zahl3").innerHTML = "-15.2";
    document.querySelector("#Zahl4").innerHTML = "-756.4";
    
    document.querySelector(".chart").setAttribute("style", "height:" + prozentEU1 + '%');
    }

var prozentEU1:number = emissionEuropa2018 * 100 / alle2018;
var prozentEU2:number = emissionEuropa2018 - emissionEuropa2008;
var prozentEU3:number = prozentEU2 / emissionEuropa2008 * 100;

window.addEventListener("load", function () {
    document.querySelector(".Europe").addEventListener("click", Europe);
});

//ProzentNordamerika

var prozentNA1:number = emissionNordamerika2018 * 100 / alle2018;
var prozentNA2:number = emissionNordamerika2018 - emissionNordamerika2008;
var prozentNA3:number = prozentNA2 / emissionNordamerika2008 * 100;

//ProzentSuedamerika

var prozentSA1:number = emissionSuedamerika2018 * 100 / alle2018;
var prozentSA2:number = emissionSuedamerika2018 - emissionSuedamerika2008;
var prozentSA3:number = prozentSA2 / emissionSuedamerika2008 * 100;

//ProzentAfrika
function Afrika(){
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#Zahl1").innerHTML = "1235.5";
    document.querySelector("#Zahl2").innerHTML = "3.97%";
    document.querySelector("#Zahl1a").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#Zahl3").innerHTML = "20.2%";
    document.querySelector("#Zahl4").innerHTML = "507.4";
    
    document.querySelector(".chart").setAttribute("style", "height:" + prozentAF1 + '%');
    }

var prozentAF1:number = emissionAfrika2018 * 100 / alle2018;
var prozentAF2:number = emissionAfrika2018 - emissionAfrika2008;
var prozentAF3:number = prozentAF2 / emissionAfrika2008 * 100;

window.addEventListener("load", function () {
    document.querySelector(".africa").addEventListener("click", Afrika);
});
//ProzentAsien

var prozentAS1:number = emissionAsien2018 * 100 / alle2018;
var prozentAS2:number = emissionAsien2018 - emissionAsien2008;
var prozentAS3:number = prozentAS2 / emissionAsien2008 * 100;

//ProzentAustralien

var prozentAU1:number = emissionAustralien2018 * 100 / alle2018;
var prozentAU2:number = emissionAustralien2018 - emissionAustralien2008;
var prozentAU3:number = prozentAU2 / emissionAustralien2008 * 100;

//Abkürzungen

var EU:string = "Europa";
var NA:string = "Nordamerika";
var SA:string = "Südamerika";
var AF:string = "Afrika";
var AS:string = "Asien";
var AU:string = "Australien";

var a:string = "Die Emission von";
var b:string = "ist:";
var c:string = "kg Co2. ";
var d:string = "Relativ zur Gesamtemission der Welt verursacht";
var e:string = "damit";
var f:string = "%";
var g:string = " Für";
var h:string = "hat sich 2018 im Vergleich zu 2008 die Emission um";
var i:string = "verändert. ";
var j:string = "2018 im Vergleich zu 2008 sind das";

//Konsole

console.log(a+EU+b+emissionEuropa2018+f+c+d+EU+e+prozentEU1+g+EU+h+prozentEU3+f+i+j+prozentEU2+f);
console.log(a+NA+b+emissionNordamerika2018+f+c+d+NA+e+prozentNA1+g+NA+h+prozentNA3+f+i+j+prozentNA2+f);
console.log(a+SA+b+emissionSuedamerika2018+f+c+d+NA+e+prozentSA1+g+NA+h+prozentSA3+f+i+j+prozentNA2+f);
console.log(a+AF+b+emissionAfrika2018+f+c+d+AF+e+prozentAF1+g+AF+h+prozentAF3+f+i+j+prozentAF2+f);
console.log(a+AS+b+emissionAsien2018+f+c+d+AS+e+prozentAS1+g+AS+h+prozentAS3+f+i+j+prozentAS2+f);
console.log(a+AU+b+emissionAustralien2018+f+c+d+AU+e+prozentAU1+g+AU+h+prozentAU3+f+i+j+prozentAU2+f);

//


window.addEventListener("load", function () {
    document.querySelector(".europa").addEventListener("click", Europe);
});

function northamerica() {
document.querySelector("#title").innerHTML = "NorthAmerica";
document.querySelector("#Zahl1").innerHTML = "6035.6";
document.querySelector("#Zahl2").innerHTML = "13.5";
document.querySelector("#title2").innerHTML = "NorthAmerica";
document.querySelector("#Zahl3").innerHTML = "-15.2";
document.querySelector("#Zahl4").innerHTML = "-756.4";

document.querySelector(".chart").setAttribute("style", "height:" + prozentEU1 + '%');
}
window.addEventListener("load", function () {
    document.querySelector(".northamerica").addEventListener("click", NordAmerika);
});