const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

const alerta = alert("Esta en una calculadora basica, diseñada simplemente como metodo de aprendizaje para JavaScript. Aqui lo que importa es el funcionamiendo de la misma y el codigo Js.");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonapretado = boton.textContent;

        if (boton.id === "ac") {
            pantalla.textContent = "0";
            return "0";
        }

        if (boton.id === "del") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Syntax Error") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                // Verificar si la expresión contiene división por cero
                if (/\/0/.test(pantalla.textContent)) {
                    throw new Error("Division by zero");
                }
                pantalla.textContent = eval(pantalla.textContent);
            } catch (error) {
                if (error.message === "Division by zero") {
                    pantalla.textContent = "Syntax Error";
                    alert("No se puede dividir entre 0");
                } else {
                    pantalla.textContent = "Syntax Error";
                }
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Syntax Error") {
            pantalla.textContent = botonapretado;
        } else {
            pantalla.textContent += botonapretado;
        }
    });
});
