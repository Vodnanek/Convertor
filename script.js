document.addEventListener("DOMContentLoaded", function () {
    const selectElements = document.querySelectorAll(".menu"); // Vybere všechny selecty

    selectElements.forEach((select) => {
        new Choices(select, {
            searchEnabled: false,
            itemSelectText: "",
            shouldSort: false,
        });
    });
});
document.getElementById("lengthInput").addEventListener("input", convertLength);
document.getElementById("unitSelectLength").addEventListener("change", convertLength);
document.getElementById("tempInput").addEventListener("input", convertTemperature);
document.getElementById("unitSelectTemperature").addEventListener("change", convertTemperature);
document.getElementById("weightInput").addEventListener("input", convertWeight);
document.getElementById("unitSelectWeight").addEventListener("change", convertWeight);
window.addEventListener("load", convertTemperature);
window.addEventListener("load", convertLength);


function formatNumber(num) {
    if (num === 0) return "0"; // Pokud je číslo přesně 0, zobraz "0"
    return parseFloat(num.toFixed(100)); // 50 významných číslic
}


  

  // Funkce pro změnu zobrazeného kódu
  document.getElementById('converter').addEventListener('change', function() {
    // Skrytí všech kódů
    document.getElementById('temperature-code').style.display = 'none';
    document.getElementById('length-code').style.display = 'none';
    document.getElementById('weight-code').style.display = 'none';

    // Zobrazení kódu podle výběru
    if (this.value === 'temperature') {
        document.getElementById('temperature-code').style.display = 'block';
    } else if (this.value === 'length') {
        document.getElementById('length-code').style.display = 'block';
    } else if (this.value === 'weight') {
        document.getElementById('weight-code').style.display = 'block';
    }
});

// Aktivace výběru při načtení stránky (první možnost je již aktivní)
document.getElementById('converter').dispatchEvent(new Event('change'));

//Funkce pro převod jednotek teploty
function convertTemperature() {
    let inputUnit = document.getElementById("unitSelectTemperature").value;
    let inputValue = parseFloat(document.getElementById("tempInput").value);

    if (isNaN(inputValue)) {
        resetTemperatureOutputs();
        return;
    }

    let celsius;
    switch (inputUnit) {
        case "celsius":
            celsius = inputValue;
            break;
        case "fahrenheit":
            celsius = (inputValue - 32) * 5 / 9;
            break;
        case "kelvin":
            celsius = inputValue - 273.15;
            break;
        case "newton":
            celsius = inputValue * (100 / 33);
            break;
    }

    let fahrenheit = celsius * 9 / 5 + 32;
    let kelvin = celsius + 273.15;
    let newton = celsius * 33 / 100;

    document.getElementById("celsiusOutput").textContent = formatNumber(celsius) + ' °C';
    document.getElementById("fahrenheitOutput").textContent = formatNumber(fahrenheit) + ' °F';
    document.getElementById("kelvinOutput").textContent = formatNumber(kelvin) + ' K';
    document.getElementById("newtonOutput").textContent = formatNumber(newton) + ' °N';
}

function resetTemperatureOutputs() {
    document.getElementById("celsiusOutput").textContent = "--";
    document.getElementById("fahrenheitOutput").textContent = "--";
    document.getElementById("kelvinOutput").textContent = "--";
    document.getElementById("newtonOutput").textContent = "--";
}




//Funkce pro převod jednotek délky
function convertLength() {
    let inputUnit = document.getElementById("unitSelectLength").value;
    let inputValue = parseFloat(document.getElementById("lengthInput").value);

    if (isNaN(inputValue)) {
        resetLengthOutputs();
        return;
    }

    let milimetr;
    switch (inputUnit) {
        case "pikometr":
            milimetr = inputValue * 0.000000000001; 
            break;
        case "nanometr":
            milimetr = inputValue * 0.000000001; 
            break;
        case "mikrometr":
            milimetr = inputValue * 0.000001; 
            break;
        case "milimetr":
            milimetr = inputValue;
            break;
        case "centimetr":
            milimetr = inputValue * 10;
            break;
        case "decimetr":
            milimetr = inputValue * 100;
            break;
        case "metr":
            milimetr = inputValue * 1000;
            break;
        case "kilometr":
            milimetr = inputValue * 1000000;
            break;
    }

    let pikometr = milimetr * 1000000000000;
    let nanometr = milimetr * 1000000000;
    let mikrometr = milimetr * 1000000;
    let centimetr = milimetr / 10;
    let decimetr = milimetr / 100;
    let metr = milimetr / 1000;
    let kilometr = milimetr / 1000000;

    document.getElementById("pikometrOutput").textContent = formatNumber(pikometr) + ' pm';
    document.getElementById("nanometrOutput").textContent = formatNumber(nanometr) + ' nm';
    document.getElementById("mikrometrOutput").textContent = formatNumber(mikrometr) + ' µm';
    document.getElementById("milimetrOutput").textContent = formatNumber(milimetr) + ' mm';
    document.getElementById("centimetrOutput").textContent = formatNumber(centimetr) + ' cm';
    document.getElementById("decimetrOutput").textContent = formatNumber(decimetr) + ' dm';
    document.getElementById("metrOutput").textContent = formatNumber(metr) + ' m';
    document.getElementById("kilometrOutput").textContent = formatNumber(kilometr) + ' km';
}

function resetLengthOutputs() {
    document.getElementById("pikometrOutput").textContent = "--";
    document.getElementById("nanometrOutput").textContent = "--";
    document.getElementById("mikrometrOutput").textContent = "--";
    document.getElementById("milimetrOutput").textContent = "--";
    document.getElementById("centimetrOutput").textContent = "--";
    document.getElementById("decimetrOutput").textContent = "--";
    document.getElementById("metrOutput").textContent = "--";
    document.getElementById("kilometrOutput").textContent = "--";
}




//Funkce pro převod jednotek hmotnosti
function convertWeight() {
    let inputUnit = document.getElementById("unitSelectWeight").value;
    let inputValue = parseFloat(document.getElementById("weightInput").value);

    if (isNaN(inputValue)) {
        resetWeightOutputs();
        return;
    }

    let gram;
    switch (inputUnit) {
        case "gram":
            gram = inputValue;
            break;
        case "dekagram":
            gram = inputValue * 10;
            break;
        case "kilogram":
            gram = inputValue * 1000;
            break;
        case "tuna":
            gram = inputValue * 1000000;
            break;
    }

    let dekagram = gram / 100;
    let kilogram = gram / 1000;
    let tuna = gram / 1000000;

    document.getElementById("gramOutput").textContent = formatNumber(gram) + ' g';
    document.getElementById("dekagramOutput").textContent = formatNumber(dekagram) + ' dkg';
    document.getElementById("kilogramOutput").textContent = formatNumber(kilogram) + ' kg';
    document.getElementById("tunaOutput").textContent = formatNumber(tuna) + ' t';
}

function resetWeightOutputs() {
    document.getElementById("gramOutput").textContent = "--";
    document.getElementById("dekagramOutput").textContent = "--";
    document.getElementById("kilogramOutput").textContent = "--";
    document.getElementById("tunaOutput").textContent = "--";
}

const dropdownHeader = document.querySelector('.dropdown-header');
const dropdownMenu = document.querySelector('.dropdown-menu');
const vyberJednotek = document.querySelector('.vyber-jednotek');

const dropdownContainer = document.querySelector('.dropdown-container');
const materialSymbolsOutlined = document.querySelector('.dropdown-container > .material-symbols-outlined');
const form = document.querySelector('form');
const hiddenInput = document.createElement('input');

vyberJednotek.addEventListener('mouseover', () => {
    dropdownHeader.classList.add('open');
    dropdownMenu.classList.add('open');
    materialSymbolsOutlined.classList.add('open');
});
vyberJednotek.addEventListener('mouseleave', () => {
    dropdownHeader.classList.remove('open');
    dropdownMenu.classList.remove('open');
    materialSymbolsOutlined.classList.remove('open');
});
dropdownHeader.addEventListener('click', () => {
    dropdownHeader.classList.toggle('open');
    dropdownMenu.classList.toggle('open');
    materialSymbolsOutlined.classList.toggle('open');

});


dropdownMenu.addEventListener('click', (event) => {
    const selectedItem = event.target;
    if (selectedItem.dataset.value) {
        dropdownHeader.textContent = selectedItem.textContent;
        hiddenInput.value = selectedItem.dataset.value;
        dropdownMenu.classList.remove('open');
    }
});