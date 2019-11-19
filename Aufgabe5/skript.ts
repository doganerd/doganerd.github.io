//Emissionen 2008

var emissionEuropa2008 = 4965.7;
var emissionNordamerika2008 = 6600.4;
var emissionSuedamerika2008 = 1132.6;
var emissionAfrika2008 = 1028.0;
var emissionAsien2008 = 12954.7;
var emissionAustralien2008 = 1993.0;

var alle2008 = emissionEuropa2008 + emissionNordamerika2008 + emissionSuedamerika2008 + emissionAfrika2008 + emissionAsien2008 + emissionAustralien2008;

//Emissionen 2018

var emissionEuropa2018 = 4209.3;
var emissionNordamerika2018 = 6035.6;
var emissionSuedamerika2018 = 1261.5;
var emissionAfrika2018 = 1235.5;
var emissionAsien2018 = 16274.1;
var emissionAustralien2018 = 2100.5;

var alle2018 = emissionEuropa2018 + emissionNordamerika2018 + emissionSuedamerika2018 + emissionAfrika2018 + emissionAsien2018 + emissionAustralien2018;

//ProzentEuropa

var prozentEU1 = emissionEuropa2018 * 100 / alle2018;
var prozentEU2 = emissionEuropa2018 - emissionEuropa2008;
var prozentEU3 = prozentEU2 / emissionEuropa2008 * 100;

//ProzentNordamerika

var prozentNA1 = emissionNordamerika2018 * 100 / alle2018;
var prozentNA2 = emissionNordamerika2018 - emissionNordamerika2008;
var prozentNA3 = prozentNA2 / emissionNordamerika2008 * 100;

//ProzentSuedamerika

var prozentSA1 = emissionSuedamerika2018 * 100 / alle2018;
var prozentSA2 = emissionSuedamerika2018 - emissionSuedamerika2008;
var prozentSA3 = prozentSA2 / emissionSuedamerika2008 * 100;

//ProzentAfrika

var prozentAF1 = emissionAfrika2018 * 100 / alle2018;
var prozentAF2 = emissionAfrika2018 - emissionAfrika2008;
var prozentAF3 = prozentAF2 / emissionAfrika2008 * 100;

//ProzentAsien

var prozentAS1 = emissionAsien2018 * 100 / alle2018;
var prozentAS2 = emissionAsien2018 - emissionAsien2008;
var prozentAS3 = prozentAS2 / emissionAsien2008 * 100;

//ProzentAustralien

var prozentAU1 = emissionAustralien2018 * 100 / alle2018;
var prozentAU2 = emissionAustralien2018 - emissionAustralien2008;
var prozentAU3 = prozentAU2 / emissionAustralien2008 * 100;

//Abkürzungen

var EU = "Europa";
var NA = "Nordamerika";
var SA = "Südamerika";
var AF = "Afrika";
var AS = "Asien";
var AU = "Australien";

var a = "Die Emission von";
var b = "ist:";
var c = "kg Co2. ";
var d = "Relativ zur Gesamtemission der Welt verursacht";
var e = "damit";
var f = "%";
var g = " Für";
var h = "hat sich 2018 im Vergleich zu 2008 die Emission um";
var i = "verändert. ";
var j = "2018 im Vergleich zu 2008 sind das";

//Konsole

console.log(a+EU+b+emissionEuropa2018+f+c+d+EU+e+prozentEU1+g+EU+h+prozentEU3+f+i+j+prozentEU2+f);
console.log(a+NA+b+emissionNordamerika2018+f+c+d+NA+e+prozentNA1+g+NA+h+prozentNA3+f+i+j+prozentNA2+f);
console.log(a+SA+b+emissionSuedamerika2018+f+c+d+NA+e+prozentSA1+g+NA+h+prozentSA3+f+i+j+prozentNA2+f);
console.log(a+AF+b+emissionAfrika2018+f+c+d+AF+e+prozentAF1+g+AF+h+prozentAF3+f+i+j+prozentAF2+f);
console.log(a+AS+b+emissionAsien2018+f+c+d+AS+e+prozentAS1+g+AS+h+prozentAS3+f+i+j+prozentAS2+f);
console.log(a+AU+b+emissionAustralien2018+f+c+d+AU+e+prozentAU1+g+AU+h+prozentAU3+f+i+j+prozentAU2+f);
