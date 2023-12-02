
function calculateBMI() {
    let height = parseInt(document.getElementById('height').value)
    let weight = parseInt(document.getElementById('weight').value)

    let height_in_meters = height / 100;

    let bmi = weight / (height_in_meters * height_in_meters)

    console.log( bmi.toFixed(2) )

    document.getElementById('result').innerHTML = bmi.toFixed(2)

    document.getElementById('description').innerHTML = getBMICategory( bmi )
}

function getBMICategory( bmi ) {
    if ( bmi < 18.5 ) {
        return "Underweight"
    } else if (( bmi >= 18.5 ) && ( bmi < 24.9)) {
        return "Normal Weight"
    } else if (( bmi >= 25 ) && ( bmi < 29.9)) {
        return "Overweight"
    } else if (( bmi >= 30 ) && ( bmi < 34.9)) {
        return "Obese Class 1"
    } else if (( bmi >= 35 ) && ( bmi < 39.9)) {
        return "Obese Class 2"
    } else {
        return "Obese Class 3"
    }
}