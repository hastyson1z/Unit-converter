function convertWeight() {

    let value = parseFloat(document.getElementById("weightValue").value);


    let fromUnit = document.getElementById("weightFromUnit").value;
    let toUnit = document.getElementById("weightToUnit").value;

    let result = 0;

    
    if (fromUnit === "kilograms" && toUnit === "grams") {
        result = value * 1000;
    } else if (fromUnit === "grams" && toUnit === "kilograms") {
        result = value / 1000;
    } else {
        result = value; 
    }

    
    document.getElementById("weightResult").innerText = `Result: ${result} ${toUnit}`;
}


function convertTemperature() {
    
    let value = parseFloat(document.getElementById("tempValue").value);

    
    let fromUnit = document.getElementById("tempFromUnit").value;
    let toUnit = document.getElementById("tempToUnit").value;

    let result = 0;

    
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (value * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (value - 32) * 5/9;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = value + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = value - 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (value - 32) * 5/9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (value - 273.15) * 9/5 + 32;
    } else {
        result = value; 
    }

    
    document.getElementById("tempResult").innerText = `Result: ${result} ${toUnit}`;
}


function convertLength() {
    
    let value = parseFloat(document.getElementById("lengthValue").value);

    
    let fromUnit = document.getElementById("lengthFromUnit").value;
    let toUnit = document.getElementById("lengthToUnit").value;

    let result = 0;

    
    if (fromUnit === "meters" && toUnit === "kilometers") {
        result = value / 1000;
    } else if (fromUnit === "kilometers" && toUnit === "meters") {
        result = value * 1000;
    } else {
        result = value; 
    }

    
    document.getElementById("lengthResult").innerText = `Result: ${result} ${toUnit}`;
}
