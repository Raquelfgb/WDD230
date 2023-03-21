
let temp = parseFloat(document.querySelector("#current-temp").textContent);
let speed = parseFloat(document.querySelector("#speed").textContent); 
let wind = "";
if (temp <= 50 && speed > 3) {
  wind = windChill(temp, speed);
  wind = `${wind}&#176;F`;
} else {
  wind = "N/A";
}
function windChill(temp, speed) {
  wind.textContent =    (
      35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16).toFixed(2) + "°F";
}
