const magicNumber = Math.floor (Math.random()*10);
let userNumber;
let attempts = 3;

do {

    userNumber = Number(prompt("Ingresá un número entre 0 y 10. ¡Recordá que solo tenés 3 intentos!"));

    if (userNumber < 0 || userNumber > 10) {
        alert("¡El número ingresado no está entre 0 y 10!");
        continue;
    }

    if (userNumber < magicNumber) {
        alert("¡El número mágico es mayor!");
        attempts--;

    } else if (userNumber > magicNumber) {
        alert("¡El número mágico es menor!");
        attempts--;

    } else {
        alert("¡Felicitaciones, encontraste el número mágico! Ahora sos un ser superior");
    
    }

} while (userNumber !== magicNumber && attempts > 0);
