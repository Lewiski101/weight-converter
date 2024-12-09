// Function to convert the weight
function convertWeight() {
    // Get user input and selected units
    let inputWeight = parseFloat(document.getElementById("input-weight").value);
    let fromUnit = document.getElementById("from-unit").value;
    let toUnit = document.getElementById("to-unit").value;

    // If no weight input, show an error message
    if (isNaN(inputWeight)) {
        document.getElementById("result-text").textContent = "Please enter a valid weight.";
        return;
    }

    // Conversion factors for different units
    const conversionRates = {
        kg: {
            g: 1000,
            lb: 2.20462,
            oz: 35.274
        },
        g: {
            kg: 0.001,
            lb: 0.00220462,
            oz: 0.035274
        },
        lb: {
            kg: 0.453592,
            g: 453.592,
            oz: 16
        },
        oz: {
            kg: 0.0283495,
            g: 28.3495,
            lb: 0.0625
        }
    };

    // Perform the conversion
    let result = inputWeight * conversionRates[fromUnit][toUnit];

    // Display the result
    document.getElementById("result-text").textContent = `Result: ${result.toFixed(2)} ${toUnit.toUpperCase()}`;
}
