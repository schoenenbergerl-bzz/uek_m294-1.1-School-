let name = prompt("Bitte geben Sie Ihren Namen ein:");

let hours = new Date().getHours();

let greeting;

    if (hours >= 5 && hours < 12) {
        greeting = "Guten Morgen";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Guten Tag";
    } else if (hours >= 18 && hours < 22) {
        greeting = "Guten Abend";
    } else {
        greeting = "Gute Nacht";
    }

alert(greeting + " " + name);
