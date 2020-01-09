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



btnDo1.addEventListener('click', function(){do1.play()})
btnRe1.addEventListener('click', function(){re1.play()})
btnMi.addEventListener('click', function(){mi.play()})
btnFa.addEventListener('click', function(){fa.play()})
btnSol.addEventListener('click', function(){sol.play()})
btnLa.addEventListener('click', function(){la.play()})
btnSi.addEventListener('click', function(){si.play()})
btnDo2.addEventListener('click', function(){do2.play()})

btnDo1.addEventListener('mouseup', function(){do1.pause(); do1.currentTime = 0;})
btnRe1.addEventListener('mouseup', function(){re1.pause(); re1.currentTime = 0 ;})
btnMi.addEventListener('mouseup', function(){mi.pause(); mi.currentTime = 0 ;})
btnFa.addEventListener('mouseup', function(){fa.pause(); fa.currentTime = 0 ;})
btnSol.addEventListener('mouseup', function(){sol.pause(); sol.currentTime = 0 ;})
btnLa.addEventListener('mouseup', function(){la.pause(); la.currentTime = 0 ;})
btnSi.addEventListener('mouseup', function(){si.pause(); si.currentTime = 0 ;})
btnDo2.addEventListener('mouseup', function(){do2.pause(); do2.currentTime = 0 ;})


window.addEventListener('keydown', function(noteMusique){
    switch (noteMusique.key){
        
        case "q":
            do1.play()
            break;
        case "s":
            re1.play()
        break;
        case "d":
            mi.play()
        break;
        case "f":
            fa.play()
        break;
        case "g":
            sol.play()
        break;
        case "h":
            la.play()
        break;
        case "j":
            si.play()
        break;
        case "k":
            do2.play()
        break;

            default:
    }
})
//son.currentTime=0; remet la musique a zero
window.addEventListener('keyup', function(stopMusique){
    switch (stopMusique.key){
        
        case "q":
            do1.pause()
            do1.currentTime = 0;
            break;
        case "s":
            re1.pause()
            re1.currentTime = 0;
        break;
        case "d":
            mi.pause()
            mi.currentTime = 0;
        break;
        case "f":
            fa.pause()
            fa.currentTime = 0;
        break;
        case "g":
            sol.pause()
            sol.currentTime = 0;
        break;
        case "h":
            la.pause()
            la.currentTime = 0;
        break;
        case "j":
            si.pause()
            si.currentTime = 0;
        break;
        case "k":
            do2.pause()
            do2.currentTime = 0;
        break;

            
            default:
    }
})

// btnDo1
// btnRe1
// btnMi
// btnFa
// btnSol
// btnLa
// btnSi
// btnDo2