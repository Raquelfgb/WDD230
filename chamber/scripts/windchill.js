let temp = parseFloat(document.querySelector("#temp").textContent);
let speed = parseFloat(document.querySelector("#wind").textContent);
let wind = "";

if (temp <= 50 && speed > 3) {
  windchill = windChill(temp, speed);
  windchill = `${windchill}&#176;F`;
} else {
  windchill = "N/A";
}
// output
document.querySelector("#wind").innerHTML = windchill;

function windChill(temp, speed) {
  windChillElement.textContent = (35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16).toFixed(2) + "°F";
}
