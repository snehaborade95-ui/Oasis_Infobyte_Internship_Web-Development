function convertTemp() {
    const degrees = document.getElementById("degrees").value;
    const type = document.getElementById("type").value;
    const result = document.getElementById("result");

    if (degrees === "" || isNaN(degrees)) {
        result.value = "Invalid input";
        return;
    }

    let output;

    if (type === "fahrenheit") {
        output = (degrees - 32) * 5/9;
        result.value = output.toFixed(4) + " °C";
    }
    else if (type === "celsius") {
        output = (degrees * 9/5) + 32;
        result.value = output.toFixed(4) + " °F";
    }
    else if (type === "kelvin") {
        output = degrees - 273.15;
        result.value = output.toFixed(4) + " °C";
    }
}
