function convertTemperature() 
{
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unitInput = document.getElementById("unitInput").value;
    let result;

    if (unitInput === "celsius") 
    {
        result = 
        {
            celsius: temperatureInput,
            fahrenheit: (temperatureInput * 9/5) + 32,
            kelvin: temperatureInput + 273.15
        };
    }
    else if (unitInput === "fahrenheit") 
    {
        result = 
        {
            celsius: (temperatureInput - 32) * 5/9,
            fahrenheit: temperatureInput,
            kelvin: (temperatureInput - 32) * 5/9 + 273.15
        };
    } 
    else if (unitInput === "kelvin") 
    {
        result = 
        {
            celsius: temperatureInput - 273.15,
            fahrenheit: (temperatureInput - 273.15) * 9/5 + 32,
            kelvin: temperatureInput
        };
    }

    document.getElementById("result").innerText =
        `Celsius: ${result.celsius.toFixed(2)}°C\nFahrenheit: ${result.fahrenheit.toFixed(2)}°F\nKelvin: ${result.kelvin.toFixed(2)}K`;
}
