var body = document.querySelector('body');
var header = document.createElement('header');
var main = document.createElement('main');

body.appendChild(header);
body.appendChild(main);

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


main.appendChild(btnDo1)
main.appendChild(btnRe1)
main.appendChild(btnMi)
main.appendChild(btnFa)
main.appendChild(btnSol)
main.appendChild(btnLa)
main.appendChild(btnSi)
main.appendChild(btnDo2)


var do1 = new Audio ("son/do1.mp3")
var re1 = new Audio ("son/re1.mp3")
var mi = new Audio ("son/mi.mp3")
var fa = new Audio ("son/fa.mp3")
var sol = new Audio ("son/sol.mp3")
var la = new Audio ("son/la.mp3")
var si = new Audio ("son/si.mp3")
var do2 = new Audio ("son/do2.mp3")



btnDo1.appendChild(do1)
btnRe1.appendChild(re1)
btnMi.appendChild(mi)
btnFa.appendChild(fa)
btnSol.appendChild(sol)
btnLa.appendChild(la)
btnSi.appendChild(si)
btnDo2.appendChild(do2)

var colorUp = "white"
var colorDown = "red"

btnDo1.addEventListener('click', function(){do1.play(); do1.currentTime = 0; })
btnRe1.addEventListener('click', function(){re1.play(); re1.currentTime = 0 ;})
btnMi.addEventListener('click', function(){mi.play(); mi.currentTime = 0;})
btnFa.addEventListener('click', function(){fa.play(); fa.currentTime = 0 ;})
btnSol.addEventListener('click', function(){sol.play(); sol.currentTime = 0 ;})
btnLa.addEventListener('click', function(){la.play(); la.currentTime = 0 ;})
btnSi.addEventListener('click', function(){si.play(); si.currentTime = 0 ;})
btnDo2.addEventListener('click', function(){do2.play(); do2.currentTime = 0 ;})

// btnDo1.addEventListener('mousedown', function(){this.style.backgroundColor = colorDown;})
// btnRe1.addEventListener('mousedown', function(){this.style.backgroundColor = colorDown;})
// btnMi.addEventListener('mousedown', function(){this.style.backgroundColor = colorDown;})
// btnFa.addEventListener('mousedown', function(){this.style.backgroundColor = colorDown;})
// btnSol.addEventListener('mousedown', function(){this.style.backgroundColor = colorDown;})
// btnLa.addEventListener('mousedown', function(){this.style.backgroundColor = colorDown;})
// btnSi.addEventListener('mousedown', function(){this.style.backgroundColor = colorDown;})
// btnDo2.addEventListener('mousedown', function(){this.style.backgroundColor = colorDown;})

// btnDo1.addEventListener('mouseup', function(){this.style.backgroundColor = colorUp;})
// btnRe1.addEventListener('mouseup', function(){this.style.backgroundColor = colorUp;})
// btnMi.addEventListener('mouseup', function(){this.style.backgroundColor = colorUp;})
// btnFa.addEventListener('mouseup', function(){this.style.backgroundColor = colorUp;})
// btnSol.addEventListener('mouseup', function(){this.style.backgroundColor = colorUp;})
// btnLa.addEventListener('mouseup', function(){this.style.backgroundColor = colorUp;})
// btnSi.addEventListener('mouseup', function(){this.style.backgroundColor = colorUp;})
// btnDo2.addEventListener('mouseup', function(){this.style.backgroundColor = colorUp;})



window.addEventListener('keydown', function(noteMusique){
    switch (noteMusique.key){
        
        case "q":
            do1.play()
            do1.currentTime = 0;
            btnDo1.style.backgroundColor = colorDown;
            break;
        case "s":
            re1.play()
            re1.currentTime = 0;
            btnRe1.style.backgroundColor = colorDown;
        break;
        case "d":
            mi.play()
            mi.currentTime = 0;
            btnMi.style.backgroundColor = colorDown;
        break;
        case "f":
            fa.play()
            fa.currentTime = 0;
            btnFa.style.backgroundColor = colorDown;
        break;
        case "g":
            sol.play()
            sol.currentTime = 0;
            btnSol.style.backgroundColor = colorDown;
        break;
        case "h":
            la.play()
            la.currentTime = 0;
            btnLa.style.backgroundColor = colorDown;
        break;
        case "j":
            si.play()
            si.currentTime = 0;
            btnSi.style.backgroundColor = colorDown;
        break;
        case "k":
            do2.play()
            do2.currentTime = 0;
            btnDo2.style.backgroundColor = colorDown;
        break;

            default:
              
    }
})
//son.currentTime=0; remet la musique a zero

window.addEventListener('keyup', function(stopMusique){
    switch (stopMusique.key){
        
        case "q":
            btnDo1.style.backgroundColor = colorUp;
            break;
        case "s":
            btnRe1.style.backgroundColor = colorUp;
        break;
        case "d":
            btnMi.style.backgroundColor = colorUp;
        break;
        case "f":
            btnFa.style.backgroundColor = colorUp;
        break;
        case "g":
            btnSol.style.backgroundColor = colorUp;
        break;
        case "h":
            btnLa.style.backgroundColor = colorUp;
        break;
        case "j":
            btnSi.style.backgroundColor = colorUp;
        break;
        case "k":
            btnDo2.style.backgroundColor = colorUp;
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