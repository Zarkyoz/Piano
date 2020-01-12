var body = document.querySelector('body');
var header = document.createElement('header');
var main = document.createElement('main');
var article1 = document.createElement('article')

body.appendChild(header);
body.appendChild(main);
header.appendChild(article1)

var hr = document.createElement('hr')
article1.appendChild(hr)
var hr1 = document.createElement('hr')
article1.appendChild(hr1)
var hr2 = document.createElement('hr')
article1.appendChild(hr2)
var hr3 = document.createElement('hr')
article1.appendChild(hr3)
var hr4 = document.createElement('hr')
article1.appendChild(hr4)

var btnDo1 = document.createElement('button');
var btnRe1 = document.createElement('button');
var btnMi = document.createElement('button');
var btnFa = document.createElement('button');
var btnSol = document.createElement('button');
var btnLa = document.createElement('button');
var btnSi = document.createElement('button');
var btnDo2 = document.createElement('button');

btnDo1.classList = "touchePiano";
btnRe1.classList = "touchePiano";
btnMi.classList = "touchePiano";
btnFa.classList = "touchePiano";
btnSol.classList = "touchePiano";
btnLa.classList = "touchePiano";
btnSi.classList = "touchePiano";
btnDo2.classList = "touchePiano";

btnDo1.textContent = "Do";
btnRe1.textContent = "Re";
btnMi.textContent = "Mi";
btnFa.textContent = "Fa";
btnSol.textContent = "Sol";
btnLa.textContent = "La";
btnSi.textContent = "Si";
btnDo2.textContent = "Do";

btnDo1.id = "noteDo1"
btnRe1.id = "noteRe1"
btnMi.id = "noteMi"
btnFa.id = "noteFa"
btnSol.id = "noteSol"
btnLa.id = "noteLa"
btnSi.id = "noteSi"
btnDo2.id = "noteDo2"


main.appendChild(btnDo1)
main.appendChild(btnRe1)
main.appendChild(btnMi)
main.appendChild(btnFa)
main.appendChild(btnSol)
main.appendChild(btnLa)
main.appendChild(btnSi)
main.appendChild(btnDo2)


var do1 = new Audio("son/do1.mp3")
var re1 = new Audio("son/re1.mp3")
var mi = new Audio("son/mi.mp3")
var fa = new Audio("son/fa.mp3")
var sol = new Audio("son/sol.mp3")
var la = new Audio("son/la.mp3")
var si = new Audio("son/si.mp3")
var do2 = new Audio("son/do2.mp3")



btnDo1.appendChild(do1)
btnRe1.appendChild(re1)
btnMi.appendChild(mi)
btnFa.appendChild(fa)
btnSol.appendChild(sol)
btnLa.appendChild(la)
btnSi.appendChild(si)
btnDo2.appendChild(do2)


var colorDown = "white"
var imageX = 20;
var imageY = 20;
var positionDepart = 1;
var vitesse = 50;

btnDo1.addEventListener('click', Do1)
function Do1() {
    var pos = positionDepart; var temps = setInterval(frame, vitesse); 
    do1.play(); do1.currentTime = 0; var noteDo1 = new Image (imageX, imageY); noteDo1.src = "image/noteWhite.png"; noteDo1.classList = "note"; noteDo1.style.top = 73 + "%";
    function frame(){article1.appendChild(noteDo1); noteDo1.style.left = pos + "%"; pos++;
    if (pos===90){
        clearInterval(temps); article1.removeChild(noteDo1)
    }
    if (pos===80){
        noteDo1.style.opacity = 0.3;
    }
}
}
btnRe1.addEventListener('click', Re1)
function Re1() {
    var pos = positionDepart; var temps = setInterval(frame, vitesse);
    re1.play(); re1.currentTime = 0; var noteRe1 = new Image (imageX, imageY); noteRe1.src = "image/noteRed.png"; noteRe1.classList = "note"; noteRe1.style.top = 63 + "%" 
    function frame(){article1.appendChild(noteRe1); noteRe1.style.left = pos + "%"; pos++; 
    if (pos===90){
        clearInterval(temps); article1.removeChild(noteRe1)
    }
    if (pos===80){
        noteRe1.style.opacity = 0.3;
    }
}
}
btnMi.addEventListener('click', Mi)
function Mi() {
    var pos = positionDepart; var temps = setInterval(frame, vitesse);
    mi.play(); mi.currentTime = 0; var noteMi = new Image (imageX, imageY); noteMi.src = "image/noteOrange.png"; noteMi.classList = "note"; noteMi.style.top = 53 + "%"
    function frame(){article1.appendChild(noteMi); noteMi.style.left = pos + "%"; pos++; 
    if (pos===90){
        clearInterval(temps); article1.removeChild(noteMi)
    }
    if (pos===80){
        noteMi.style.opacity = 0.3;
    }
    }
}
btnFa.addEventListener('click', Fa)
function Fa() {
    var pos = positionDepart; var temps = setInterval(frame, vitesse);
    fa.play(); fa.currentTime = 0; var noteFa = new Image (imageX, imageY); noteFa.src = "image/noteYellow.png"; noteFa.classList = "note"; noteFa.style.top = 43 + "%"
    function frame(){article1.appendChild(noteFa);  noteFa.style.left = pos + "%"; pos++;  
    if (pos===90){
        clearInterval(temps); article1.removeChild(noteFa)
    }
    if (pos===80){
        noteFa.style.opacity = 0.3;
    }
}
}
btnSol.addEventListener('click', Sol)
function Sol() {
    var pos = positionDepart; var temps = setInterval(frame, vitesse);
    sol.play(); sol.currentTime = 0; var noteSol = new Image (imageX, imageY); noteSol.src = "image/noteGreen.png"; noteSol.classList = "note"; noteSol.style.top = 33 + "%"  
    function frame(){article1.appendChild(noteSol);noteSol.style.left = pos + "%"; pos++; 
    if (pos===90){
        clearInterval(temps); article1.removeChild(noteSol)
    }
    if (pos===80){
        noteSol.style.opacity = 0.3;
    }
}
}
btnLa.addEventListener('click', La)
function La() {
    var pos = positionDepart; var temps = setInterval(frame, vitesse);
    la.play(); la.currentTime = 0; var noteLa = new Image (imageX, imageY); noteLa.src = "image/noteBlue1.png"; noteLa.classList = "note"; noteLa.style.top = 23 + "%" 
    function frame(){article1.appendChild(noteLa); noteLa.style.left = pos + "%"; pos++; 
    if (pos===90){
        clearInterval(temps); article1.removeChild(noteLa)
    }
    if (pos===80){
        noteLa.style.opacity = 0.3;
    }
}
}

btnSi.addEventListener('click', Si)
function Si() {
    var pos = positionDepart; var temps = setInterval(frame, vitesse);
    si.play(); si.currentTime = 0; var noteSi = new Image (imageX, imageY); noteSi.src = "image/noteBlue2.png"; noteSi.classList = "note"; noteSi.style.top = 13 + "%"  
    function frame(){article1.appendChild(noteSi);noteSi.style.left = pos + "%"; pos++; 
    if (pos===90){
        clearInterval(temps); article1.removeChild(noteSi)
    }
    if (pos===80){
        noteSi.style.opacity = 0.3;
    }
}
}
btnDo2.addEventListener('click', Do2)
function Do2() {
    var pos = positionDepart; var temps = setInterval(frame, vitesse);
    do2.play(); do2.currentTime = 0; var noteDo2 = new Image (imageX, imageY); noteDo2.src = "image/notePurple.png"; noteDo2.classList = "note"; noteDo2.style.top = 3 + "%"      
    function frame(){article1.appendChild(noteDo2);noteDo2.style.left = pos + "%"; pos++; 
    if (pos===90){
        clearInterval(temps); article1.removeChild(noteDo2)
    }
    if (pos===80){
        noteDo2.style.opacity = 0.3;
    }
}
}





//Partie a resoudre






// if (window.matchMedia("(max-width: 1200px)").matches) {
//     btnDo1.addEventListener('mousedown', function(){this.style.backgroundColor = "black"; this.style.color = "white";})
//     btnRe1.addEventListener('mousedown', function(){this.style.backgroundColor = "black"; this.style.color= "white";})
//     btnMi.addEventListener('mousedown', function(){this.style.backgroundColor = "black"; this.style.color= "white";})
//     btnFa.addEventListener('mousedown', function(){this.style.backgroundColor = "black"; this.style.color= "white";})
//     btnSol.addEventListener('mousedown', function(){this.style.backgroundColor = "black"; this.style.color= "white";})
//     btnLa.addEventListener('mousedown', function(){this.style.backgroundColor = "black"; this.style.color= "white";})
//     btnSi.addEventListener('mousedown', function(){this.style.backgroundColor = "black"; this.style.color= "white";})
//     btnDo2.addEventListener('mousedown', function(){this.style.backgroundColor = "black"; this.style.color= "white";})
    
//     btnDo1.addEventListener('mouseup', function(){this.style.backgroundColor = "white"; this.style.color = "black";})
//     btnRe1.addEventListener('mouseup', function(){this.style.backgroundColor = "red"; this.style.color = "white";})
// btnMi.addEventListener('mouseup', function(){this.style.backgroundColor = "orange"; this.style.color = "white";})
// btnFa.addEventListener('mouseup', function(){this.style.backgroundColor = "yellow"; this.style.color = "white";})
// btnSol.addEventListener('mouseup', function(){this.style.backgroundColor = "green"; this.style.color = "white";})
// btnLa.addEventListener('mouseup', function(){this.style.backgroundColor = "rgb(0, 204, 255)"; this.style.color = "white";})
// btnSi.addEventListener('mouseup', function(){this.style.backgroundColor = "rgb(0, 0, 255)"; this.style.color = "white";})
// btnDo2.addEventListener('mouseup', function(){this.style.backgroundColor = "purple"; this.style.color = "white";})
// }else{

// }



window.addEventListener('keydown', function (noteMusique) {
    switch (noteMusique.key) {

        case "q":
            Do1()
            btnDo1.style.backgroundColor = "black"; btnDo1.style.color = "white"
            break;
        case "s":
            Re1()
            btnRe1.style.backgroundColor = "black"; btnRe1.style.color = "white";
            break;
        case "d":
            Mi()
            btnMi.style.backgroundColor = "black"; btnMi.style.color = "white";
            break;
        case "f":
            Fa()
            btnFa.style.backgroundColor = "black"; btnFa.style.color = "white";
            break;
        case "g":
            Sol()
            btnSol.style.backgroundColor = "black"; btnSol.style.color = "white";
            break;
        case "h":
            La()
            btnLa.style.backgroundColor = "black"; btnLa.style.color = "white";
            break;
        case "j":
            Si()
            btnSi.style.backgroundColor = "black"; btnSi.style.color = "white";
            break;
        case "k":
            Do2()
            btnDo2.style.backgroundColor = "black"; btnDo2.style.color = "white";
            break;

        default:

    }
})
//son.currentTime=0; remet la musique a zero

window.addEventListener('keyup', function (stopMusique) {
    switch (stopMusique.key) {

        case "q":
            btnDo1.style.backgroundColor = "white"; btnDo1.style.color = "black";
            break;
        case "s":
            btnRe1.style.backgroundColor = "red"; btnRe1.style.color = "white";
            break;
        case "d":
            btnMi.style.backgroundColor = "orange"; btnMi.style.color = "white";
            break;
        case "f":
            btnFa.style.backgroundColor = "yellow"; btnFa.style.color = "white";
            break;
            case "g":
                btnSol.style.backgroundColor = "green"; btnSol.style.color = "white";
            break;
            case "h":
                btnLa.style.backgroundColor = "rgb(0, 204, 255)"; btnLa.style.color = "white";
            break;
        case "j":
            btnSi.style.backgroundColor = "rgb(0, 0, 255)"; btnSi.style.color = "white";
            break;
        case "k":
            btnDo2.style.backgroundColor = "purple" ; btnDo2.style.color = "white";
            break;


        default:
    }
})





// window.addEventListener('keyup', function(stopMusique){
//     switch (stopMusique.key){

//         case "q":
//             do1.pause();
//             do1.currentTime = 0;
//             break;
//         case "s":
//             re1.pause()
//             re1.currentTime = 0;
//         break;
//         case "d":
//             mi.pause()
//             mi.currentTime = 0;
//         break;
//         case "f":
//             fa.pause()
//             fa.currentTime = 0;
//         break;
//         case "g":
//             sol.pause()
//             sol.currentTime = 0;
//         break;
//         case "h":
//             la.pause()
//             la.currentTime = 0;
//         break;
//         case "j":
//             si.pause()
//             si.currentTime = 0;
//         break;
//         case "k":
//             do2.pause()
//             do2.currentTime = 0;
//         break;


//             default:
//     }
// })

// btnDo1
// btnRe1
// btnMi
// btnFa
// btnSol
// btnLa
// btnSi
// btnDo2