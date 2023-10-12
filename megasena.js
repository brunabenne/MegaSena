
function btnApostar() {
    var elementAposta = document.getElementById("input-aposta").value;
    var apostaArray = elementAposta.split(",");

    if (apostaArray.length !== 6) {
        alert("Por favor, insira exatamente 6 números separados por vírgula sem espaços.");
        return;
    }

    const circles = document.querySelectorAll(".circle");
    const uniqueRandomNumbers = [];

    // Gerar números aleatórios únicos
    while (uniqueRandomNumbers.length < circles.length) {
        const randomNumber = Math.floor(Math.random() * 60) + 1;
        if (!uniqueRandomNumbers.includes(randomNumber)) {
            uniqueRandomNumbers.push(randomNumber);
        }
    }

    // Classificar os números em ordem crescente
    uniqueRandomNumbers.sort((a, b) => a - b);

    // Atribuir números únicos aos círculos em ordem e adc CSS
    circles.forEach((circle, index) => {
        circle.textContent = uniqueRandomNumbers[index];
        circle.style.color = "beige";
        circle.style.backgroundColor = "green";
        circle.style.border = "solid black";
    });

    // Comparar os números da aposta com os números gerados e contar os acertos
    var acertos = 0;
    for (var i = 0; i < apostaArray.length; i++) {
        var numeroAposta = parseInt(apostaArray[i], 10);
        if (uniqueRandomNumbers.includes(numeroAposta)) {
            acertos++;
        }
    }

    let texto = "";
    if (acertos == 6) {
        texto = "GANHOU!"        
    }
    else if (acertos == 5) {
        texto = "QUINA!"               
    }
    else if (acertos == 4) {
        texto = "QUADRA!"            
    }
    else if (acertos == 3) {
        texto = "Você teve 3 acertos! Tente novamente!"        
    }
    else if (acertos == 2) {
        texto = "Você teve 2 acertos! Tente novamente!"        
    }
    else if (acertos == 1) {
        texto = "Você teve 1 acerto! Tente novamente!"        
    }
    else if (acertos == 0) {
        texto = "Você teve ZERO acertos! Tente novamente!" 
       ;     
    }

    const resultadoDiv = document.getElementById("acertos"); 
    resultadoDiv.textContent = texto;
       
}



