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
            millimeter = convertMeterToMillimeter(meter);
            decimeter = convertMeterToDecimeter(meter);
            centimeter = convertMeterToCentimeter(meter);
            inch = convertMeterToInch(meter);
            feet = convertMeterToFeet(meter);

            // Oppdater de andre feltene
            let displayCentimeter = document.querySelector("#input-centimeter")
            let displayInch = document.querySelector("#input-inch")
            let displayFeet = document.querySelector("#input-feet")
            let displayMillimeter = document.querySelector("#input-millimeter")
            let displayDecimeter = document.querySelector("#input-decimeter")

            displayMillimeter.value = millimeter.toFixed(2)
            displayDecimeter.value = decimeter.toFixed(2)
            displayCentimeter.value = centimeter.toFixed(2)
            displayInch.value = inch.toFixed(2)
            displayFeet.value = feet.toFixed(2)           
            break; 
        }

        case "input-millimeter": {
            console.log("changed input millimeter")
            let millimeter = Number(event.target.value)
            // Converter fra meter
            meter = convertMillimeterToMeter(millimeter);
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

            displayMeter.value = meter.toFixed(2)
            displayDecimeter.value = decimeter.toFixed(2)
            displayCentimeter.value = centimeter.toFixed(2)
            displayInch.value = inch.toFixed(2)
            displayFeet.value = feet.toFixed(2)           
            break; 
        }

        case "input-decimeter": {
            console.log("changed input decimeter")
            let decimeter = Number(event.target.value)
            // Converter fra meter
            meter = convertDecimeterToMeter(decimeter);
            millimeter = convertMeterToMillimeter(meter);
            centimeter = convertMeterToCentimeter(meter);
            inch = convertMeterToInch(meter);
            feet = convertMeterToFeet(meter);

            // Oppdater de andre feltene
            let displayMeter = document.querySelector("#input-meter")
            let displayInch = document.querySelector("#input-inch")
            let displayFeet = document.querySelector("#input-feet")
            let displayMillimeter = document.querySelector("#input-millimeter")
            let displayCentimeter = document.querySelector("#input-centimeter")

            displayMillimeter.value = millimeter.toFixed(2)
            displayMeter.value = meter.toFixed(2)
            displayCentimeter.value = centimeter.toFixed(2)
            displayInch.value = inch.toFixed(2)
            displayFeet.value = feet.toFixed(2)           
            break; 
        }

        case "input-centimeter": {
            console.log("changed input centimeter")
            let centimeter = Number(event.target.value)
            // Converter fra centimeter
            meter = convertCentimeterToMeter(centimeter);
            millimeter = convertMeterToMillimeter(meter);
            decimeter = convertMeterToDecimeter(meter);
            inch = convertMeterToInch(meter);
            feet = convertMeterToFeet(meter);

            // Oppdater de andre feltene
            let displayMeter = document.querySelector("#input-meter")
            let displayInch = document.querySelector("#input-inch")
            let displayFeet = document.querySelector("#input-feet")
            let displayMillimeter = document.querySelector("#input-millimeter")
            let displayDecimeter = document.querySelector("#input-decimeter")

            displayMillimeter.value = millimeter.toFixed(2)
            displayDecimeter.value = decimeter.toFixed(2)
            displayMeter.value = meter.toFixed(2)            
            displayInch.value = inch.toFixed(2)
            displayFeet.value = feet.toFixed(2)
            break; 
        }

        case "input-feet": {
            console.log("changed input feet")
            let feet = Number(event.target.value)
            // Converter til føtter
            meter = convertFeetToMeter(feet);
            millimeter = convertMeterToMillimeter(meter);
            decimeter = convertMeterToDecimeter(meter);
            centimeter = convertMeterToCentimeter(meter);
            inch = convertMeterToInch(meter);

            // Oppdater de andre feltene
            let displayMeter = document.querySelector("#input-meter")
            let displayCentimeter = document.querySelector("#input-centimeter")
            let displayInch = document.querySelector("#input-inch")
            let displayMillimeter = document.querySelector("#input-millimeter")
            let displayDecimeter = document.querySelector("#input-decimeter")

            displayMillimeter.value = millimeter.toFixed(2)
            displayDecimeter.value = decimeter.toFixed(2)
            displayMeter.value = meter.toFixed(2)
            displayCentimeter.value = centimeter.toFixed(2)
            displayInch.value = inch.toFixed(2)
            break; 
        }
        
        case "input-inch": {
            console.log("changed input inch")
            let inch = Number(event.target.value)
            // Converter til inch
            meter = convertInchToMeter(inch);
            millimeter = convertMeterToMillimeter(meter);
            decimeter = convertMeterToDecimeter(meter);
            centimeter = convertMeterToCentimeter(meter);
            feet = convertMeterToFeet(meter);

            // Oppdater de andre feltene
            let displayMeter = document.querySelector("#input-meter")
            let displayCentimeter = document.querySelector("#input-centimeter")
            let displayFeet = document.querySelector("#input-feet")
            let displayMillimeter = document.querySelector("#input-millimeter")
            let displayDecimeter = document.querySelector("#input-decimeter")

            displayMillimeter.value = millimeter.toFixed(2)
            displayDecimeter.value = decimeter.toFixed(2)
            displayMeter.value = meter.toFixed(2)
            displayCentimeter.value = centimeter.toFixed(2)
            displayFeet.value = feet.toFixed(2)
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

function convertMeterToMillimeter(meter) {
    let millimeter = meter * 1000
    
    return millimeter
}

function convertMillimeterToMeter(millimeter) {
    let meter = millimeter / 1000

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