let inputElements = document.querySelectorAll("input")


inputElements.forEach((element) =>{
    console.log(element)
    
    element.addEventListener("change", (event) => {
//Hent ut og navngi de forskjellige variablene først
        let inputType = event.target.id;

    switch (inputType) {
        case "input-meter": {
            console.log("changed input meter")
            let meter = Number(event.target.value)
            // Converter fra meter
            kilometer = convertMeterToKilometer(meter);
            decimeter = convertMeterToDecimeter(meter);
            centimeter = convertMeterToCentimeter(meter);
            inch = convertMeterToInch(meter);
            feet = convertMeterToFeet(meter);

            // Oppdater de andre feltene
            let displayCentimeter = document.querySelector("#input-centimeter")
            let displayInch = document.querySelector("#input-inch")
            let displayFeet = document.querySelector("#input-feet")
            let displayKilometer = document.querySelector("#input-kilometer")
            let displayDecimeter = document.querySelector("#input-decimeter")

            displayKilometer.value = kilometer.toFixed(3)
            displayDecimeter.value = decimeter.toFixed(3)
            displayCentimeter.value = centimeter.toFixed(3)
            displayInch.value = inch.toFixed(3)
            displayFeet.value = feet.toFixed(3)           
            break; 
        }

        case "input-kilometer": {
            console.log("changed input kilometer")
            let kilometer = Number(event.target.value)
            // Converter fra meter
            meter = convertKilometerToMeter(kilometer);
            decimeter = convertMeterToDecimeter(meter);
            centimeter = convertMeterToCentimeter(meter);
            inch = convertMeterToInch(meter);
            feet = convertMeterToFeet(meter);

            // Oppdater de andre feltene
            let displayCentimeter = document.querySelector("#input-centimeter")
            let displayInch = document.querySelector("#input-inch")
            let displayFeet = document.querySelector("#input-feet")
            let displayMeter = document.querySelector("#input-meter")
            let displayDecimeter = document.querySelector("#input-decimeter")

            displayMeter.value = meter.toFixed(3)
            displayDecimeter.value = decimeter.toFixed(3)
            displayCentimeter.value = centimeter.toFixed(3)
            displayInch.value = inch.toFixed(3)
            displayFeet.value = feet.toFixed(3)           
            break; 
        }

        case "input-decimeter": {
            console.log("changed input decimeter")
            let decimeter = Number(event.target.value)
            // Converter fra meter
            meter = convertDecimeterToMeter(decimeter);
            kilometer = convertMeterToKilometer(meter);
            centimeter = convertMeterToCentimeter(meter);
            inch = convertMeterToInch(meter);
            feet = convertMeterToFeet(meter);

            // Oppdater de andre feltene
            let displayMeter = document.querySelector("#input-meter")
            let displayInch = document.querySelector("#input-inch")
            let displayFeet = document.querySelector("#input-feet")
            let displayKilometer = document.querySelector("#input-kilometer")
            let displayCentimeter = document.querySelector("#input-decimeter")

            displayKilometer.value = kilometer.toFixed(3)
            displayMeter.value = meter.toFixed(3)
            displayCentimeter.value = centimeter.toFixed(3)
            displayInch.value = inch.toFixed(3)
            displayFeet.value = feet.toFixed(3)           
            break; 
        }

        case "input-centimeter": {
            console.log("changed input centimeter")
            let centimeter = Number(event.target.value)
            // Converter fra centimeter
            kilometer = convertMeterToKilometer(meter);
            decimeter = convertMeterToDecimeter(meter);
            meter = convertCentimeterToMeter(centimeter);
            inch = convertMeterToInch(meter);
            feet = convertMeterToFeet(meter);

            // Oppdater de andre feltene
            let displayMeter = document.querySelector("#input-meter")
            let displayInch = document.querySelector("#input-inch")
            let displayFeet = document.querySelector("#input-feet")
            let displayKilometer = document.querySelector("#input-kilometer")
            let displayDecimeter = document.querySelector("#input-decimeter")

            displayKilometer.value = kilometer.toFixed(3)
            displayDecimeter.value = decimeter.toFixed(3)
            displayMeter.value = meter.toFixed(3)            
            displayInch.value = inch.toFixed(3)
            displayFeet.value = feet.toFixed(3)
            break; 
        }

        case "input-feet": {
            console.log("changed input feet")
            let feet = Number(event.target.value)
            // Converter til føtter
            kilometer = convertMeterToKilometer(meter);
            decimeter = convertMeterToDecimeter(meter);
            meter = convertFeetToMeter(feet);
            centimeter = convertMeterToCentimeter(meter);
            inch = convertMeterToInch(meter);

            // Oppdater de andre feltene
            let displayMeter = document.querySelector("#input-meter")
            let displayCentimeter = document.querySelector("#input-centimeter")
            let displayInch = document.querySelector("#input-inch")
            let displayKilometer = document.querySelector("#input-kilometer")
            let displayDecimeter = document.querySelector("#input-decimeter")

            displayKilometer.value = kilometer.toFixed(3)
            displayDecimeter.value = decimeter.toFixed(3)
            displayMeter.value = meter.toFixed(3)
            displayCentimeter.value = centimeter.toFixed(3)
            displayInch.value = inch.toFixed(3)
            break; 
        }
        
        case "input-inch": {
            console.log("changed input inch")
            let inch = Number(event.target.value)
            // Converter til inch
            kilometer = convertMeterToKilometer(meter);
            decimeter = convertMeterToDecimeter(meter);
            meter = convertInchToMeter(inch);
            centimeter = convertMeterToCentimeter(meter);
            feet = convertMeterToFeet(meter);

            // Oppdater de andre feltene
            let displayMeter = document.querySelector("#input-meter")
            let displayCentimeter = document.querySelector("#input-centimeter")
            let displayFeet = document.querySelector("#input-feet")
            let displayKilometer = document.querySelector("#input-kilometer")
            let displayDecimeter = document.querySelector("#input-decimeter")

            displayKilometer.value = kilometer.toFixed(3)
            displayDecimeter.value = decimeter.toFixed(3)
            displayMeter.value = meter.toFixed(3)
            displayCentimeter.value = centimeter.toFixed(3)
            displayFeet.value = feet.toFixed(3)
            break; 
        }
    }
    })
})


//Kalkulator
function convertMeterToFeet(meter) {
    let feet = meter * 3.280839895
    
    return feet
}

function convertFeetToMeter(feet) {
    let meter = feet * 0.3048

    return meter
}

function convertMeterToKilometer(meter) {
    let kilometer = meter / 1000
    
    return kilometer
}

function convertKilometerToMeter(kilometer) {
    let meter = kilometer * 1000

    return meter
}

function convertMeterToDecimeter(meter) {
    let decimeter = meter * 10
    
    return decimeter
}

function convertDecimeterToMeter(decimeter) {
    let meter = decimeter / 10

    return meter
}

function convertMeterToCentimeter(meter) {
    let centimeter = meter * 100

    return centimeter
}

function convertCentimeterToMeter(centimeter) {
    let meter = centimeter / 100

    return meter
}

function convertMeterToInch(meter) {
    let inch = meter * 39.3700787
    
    return inch
}

function convertInchToMeter(inch) {
    let meter = inch / 39.3700787

    return meter
}