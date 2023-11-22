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
            centimeter = convertMeterToCentimeter(meter);
            inch = convertMeterToInch(meter);
            feet = convertMeterToFeet(meter);

            // Oppdater de andre feltene
            let displayCentimeter = document.querySelector("#input-centimeter")
            let displayInch = document.querySelector("#input-inch")
            let displayFeet = document.querySelector("#input-feet")

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
            inch = convertMeterToInch(meter);
            feet = convertMeterToFeet(meter);

            // Oppdater de andre feltene
            let displayMeter = document.querySelector("#input-meter")
            let displayInch = document.querySelector("#input-inch")
            let displayFeet = document.querySelector("#input-feet")

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
            centimeter = convertMeterToCentimeter(meter);
            inch = convertMeterToInch(meter);

            // Oppdater de andre feltene
            let displayMeter = document.querySelector("#input-meter")
            let displayCentimeter = document.querySelector("#input-centimeter")
            let displayInch = document.querySelector("#input-inch")

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
            centimeter = convertMeterToCentimeter(meter);
            feet = convertMeterToFeet(meter);

            // Oppdater de andre feltene
            let displayMeter = document.querySelector("#input-meter")
            let displayCentimeter = document.querySelector("#input-centimeter")
            let displayFeet = document.querySelector("#input-feet")

            displayMeter.value = meter.toFixed(2)
            displayCentimeter.value = centimeter.toFixed(2)
            displayFeet.value = feet.toFixed(2)
            break; 
        }
    }
    })
})


function convertMeterToFeet(meter) {
    let feet = meter * 3.280839895
    
    return feet
}

function convertFeetToMeter(feet) {
    let meter = feet * 0.3048

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