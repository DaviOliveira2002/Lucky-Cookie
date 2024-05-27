const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const luckyCookie = document.querySelector("#luckyCookie");
const tryAgain = document.querySelector("#tryAgain");
const randomText = document.querySelector("#randomText")

function drawText(){
    let texts = ["A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.", 
        "Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.", 
        "A perseverança é a mãe da boa sorte.",
        "O homem é assim o árbitro constante de sua própria sorte. Ele pode aliviar o seu suplício ou prolongá-lo indefinidamente. Sua felicidade ou sua desgraça dependem da sua vontade de fazer o bem.",
        "Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca.",
        "Sorte é estar pronto quando a oportunidade vem.",
        "Custa menos ao nosso amor-próprio caluniar a sorte do que acusar a nossa má conduta.",
        "Quanto mais eu treino, mais sorte eu tenho.",
        "A solidão é a sorte de todos os espíritos excepcionais.",
        "Não ser amado é falta de sorte, mas não amar é a própria infelicidade."
    ];

    let text = Math.floor(Math.random() * texts.length);

    randomText.innerText = texts[text];
}

function drawCookie(){
    drawText();

    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function tryDrawAgain(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

luckyCookie.addEventListener("click", drawCookie);
tryAgain.addEventListener("click", tryDrawAgain);




