const calcius = document.getElementById('calcius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

calcius.addEventListener('input', calciusToFahrenheitAndKelvin);
fahrenheit.addEventListener('input', fahrenheitToCalciusAndKelvin);
kelvin.addEventListener('input', kelvinToCalciusAndFahrenheit);


function calciusToFahrenheitAndKelvin(){
    let cTemp = parseFloat(calcius.value);
    let fTemp = (cTemp * (9/5)) + 32;
    let kTemp = cTemp + 273.15;
    fahrenheit.value = fTemp;
    kelvin.value = kTemp;
}
calciusToFahrenheitAndKelvin();

function fahrenheitToCalciusAndKelvin(){
    let fTemp = parseFloat(fahrenheit.value);
    let cTemp = (fTemp - 32) * (5/9);
    let kTemp = (fTemp + 459.67) * (5/9);
    calcius.value = cTemp;
    kelvin.value = kTemp;
}
fahrenheitToCalciusAndKelvin();

function kelvinToCalciusAndFahrenheit(){
    let kTemp = parseFloat(kelvin.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp * (9/5)) - 459.67;
    calcius.value = cTemp;
    fahrenheit.value = fTemp;
}
kelvinToCalciusAndFahrenheit();























// function calciusResult(){
//     let c = (fahrenheit - 32)*5/9;
//     let cf = (calcius *9/5) + 32;
//     let ck = calcius + 273.15;
// }
// calciusResult();

// function fahrenheitResult(){
//     let f = (calcius *9/5) + 32;
//     let fc = (fahrenheit - 32)*5/9;
//     let fk = (fahrenheit - 32) * 5/9 + 273.15
// }
// fahrenheitResult();

// function kelvinResult(){
//     let k = calcius + 273.15;
//     let Kf = (kelvin - 273.15) * 9/5 + 32;
//     let kc = kelvin - 273.15;
// }
// kelvinResult();

