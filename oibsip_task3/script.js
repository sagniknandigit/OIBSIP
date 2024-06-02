function convert() {
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var temperature = parseFloat(document.getElementById('temperature').value);
    var convertedValue;

    if (isNaN(temperature)) {
        alert("Please enter a valid temperature");
        return;
    }

    switch (fromUnit) {
        case 'C':
            if (toUnit == 'F') {
                convertedValue = (temperature * 9 / 5) + 32;
            } else if (toUnit == 'K') {
                convertedValue = temperature + 273.15;
            } else if (toUnit == 'R') {
                convertedValue = (temperature + 273.15) * 9 / 5;
            } else if (toUnit == 'Re') {
                convertedValue = temperature * 4 / 5;
            } else {
                convertedValue = temperature;
            }
            break;
        case 'F':
            if (toUnit == 'C') {
                convertedValue = (temperature - 32) * 5 / 9;
            } else if (toUnit == 'K') {
                convertedValue = (temperature - 32) * 5 / 9 + 273.15;
            } else if (toUnit == 'R') {
                convertedValue = temperature + 459.67;
            } else if (toUnit == 'Re') {
                convertedValue = (temperature - 32) * 4 / 9;
            } else {
                convertedValue = temperature;
            }
            break;
        case 'K':
            if (toUnit == 'C') {
                convertedValue = temperature - 273.15;
            } else if (toUnit == 'F') {
                convertedValue = (temperature - 273.15) * 9 / 5 + 32;
            } else if (toUnit == 'R') {
                convertedValue = temperature * 9 / 5;
            } else if (toUnit == 'Re') {
                convertedValue = (temperature - 273.15) * 4 / 5;
            } else {
                convertedValue = temperature;
            }
            break;
        case 'R':
            if (toUnit == 'C') {
                convertedValue = (temperature - 491.67) * 5 / 9;
            } else if (toUnit == 'F') {
                convertedValue = temperature - 459.67;
            } else if (toUnit == 'K') {
                convertedValue = temperature * 5 / 9;
            } else if (toUnit == 'Re') {
                convertedValue = (temperature - 491.67) * 4 / 9;
            } else {
                convertedValue = temperature;
            }
            break;
        case 'Re':
            if (toUnit == 'C') {
                convertedValue = temperature * 5 / 4;
            } else if (toUnit == 'F') {
                convertedValue = temperature * 9 / 4 + 32;
            } else if (toUnit == 'K') {
                convertedValue = temperature * 5 / 4 + 273.15;
            } else if (toUnit == 'R') {
                convertedValue = temperature * 9 / 4 + 491.67;
            } else {
                convertedValue = temperature;
            }
            break;
        default:
            alert("Invalid unit");
            return;
    }

    document.getElementById('result').value = convertedValue;
}
