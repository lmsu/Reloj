const hourHand = document.getElementById("hour"); // Obtiene el elemento con el ID "hour" y lo asigna a la variable hourHand
const minuteHand = document.getElementById("minute"); // Obtiene el elemento con el ID "minute" y lo asigna a la variable minuteHand
const secondHand = document.getElementById("second"); // Obtiene el elemento con el ID "second" y lo asigna a la variable secondHand

function setClock() { // Define la función setClock
    const now = new Date(); // Crea un nuevo objeto Date que contiene la fecha y hora actuales

    const seconds = now.getSeconds(); // Obtiene los segundos actuales
    const minutes = now.getMinutes(); // Obtiene los minutos actuales
    const hours = now.getHours(); // Obtiene las horas actuales
    const day = now.getDate();  // Obtiene el día del mes actual

    const secondDeg = ((seconds / 60) * 360); // Calcula el ángulo de rotación para la manecilla de los segundos
    const minuteDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6); // Calcula el ángulo de rotación para la manecilla de los minutos
    const hourDeg = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30); // Calcula el ángulo de rotación para la manecilla de las horas

    secondHand.style.transform = `rotate(${secondDeg}deg)`; // Aplica la rotación calculada a la manecilla de los segundos
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`; // Aplica la rotación calculada a la manecilla de los minutos
    hourHand.style.transform = `rotate(${hourDeg}deg)`; // Aplica la rotación calculada a la manecilla de las horas

    // Actualizar la fecha en el cuadro
    document.getElementById("date").textContent = day; // Actualiza el contenido del elemento con el ID "date" con el día actual
}

setInterval(setClock, 1000); // Llama a la función setClock cada 1000 milisegundos (1 segundo)

setClock(); // Llama a la función setClock inmediatamente para establecer la hora inicial
/* Este código JavaScript se encarga de actualizar un reloj analógico y mostrar la fecha actual. Cada segundo, la función setClock se ejecuta para recalcular y aplicar las rotaciones necesarias a las manecillas del reloj, asegurando que el reloj se mantenga en tiempo real.*/ 
