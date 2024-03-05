const temperatureInput = document.getElementById("temperature");

const toCelsius = document.getElementById("toCelsius");

const convertTemperature = () => {
  const temperature = parseFloat(temperatureInput.value);

  if (isNaN(temperature)) {
    alert("Please enter a valid number");
    return;
  }

  let resultText = "";
  if (toCelsius.checked) {
    const celsius = convertToCelsius(temperature).toFixed(2);
    resultText = `Celsius is ${celsius}`;
  } else {
    const fahrenheit = convertToFahrenheit(temperature).toFixed(2);
    resultText = `Fahrenheit is ${fahrenheit}`;
  }

  const display = document.getElementById("result");
  display.innerText = resultText;
};

const convertToCelsius = (temperature) => ((temperature - 32) * 5) / 9;

const convertToFahrenheit = (temperature) => (temperature * 9) / 5 + 32;
