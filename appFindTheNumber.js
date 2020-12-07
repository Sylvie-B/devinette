let start = document.getElementById("doYou");
let restart = document.getElementById("restart");
let react = document.getElementById("testAnswer");
let wronNumber = document.getElementsByClassName("testedNbr");
let result = document.getElementById("result");




start.addEventListener("click", function (){   /* au click sur commencer */
    let trial = 0;                                  /* compte le nbr d'essai */
    start.style.display = "none";
    result.style.visibility = "visible";
    result.innerHTML = "il vous reste 10 essai";

    let random = Math.ceil(Math.random()*100);  /* choisi un nombre random */

    let userNbr = "";

    document.getElementById("test").addEventListener("click", function (){  /* à validation */
        userNbr = parseInt(document.getElementById("try").value);       /* recup l'entree */
        if(trial < 9) {
            if(isNaN(userNbr)) {
                react.innerHTML = "vous devez entrez un nombre !"
                document.getElementById("try").value = "";
            }
            else {
                /* compare les 2 chiffres */
                if(userNbr === random){
                    document.getElementById("try").value = "";
                    wronNumber[trial].innerHTML = userNbr.toString();
                    react.innerHTML = "BRAVO !!! Vous avez gagné !!!"
                    result.style.visibility ="hidden";
                }
                else if(userNbr < random){
                    document.getElementById("try").value = "";
                    react.innerHTML = "Entrez un nombre plus grand";
                    wronNumber[trial].innerHTML = userNbr.toString();
                }
                else {
                    document.getElementById("try").value = "";
                    react.innerHTML = "Entrez un nombre plus petit";
                    react.style.visibility = "visible";
                    wronNumber[trial].innerHTML = userNbr.toString();
                }
            result.innerHTML = "il vous reste " + (9-trial) + " essai(s)";
            ++ trial;          /* incermente le nbr d'essai(s) */
            }
        }
        else {
            wronNumber[trial].innerHTML = userNbr.toString();
            react.innerHTML = "Vous avez perdu !!!"
            restart.style.visibility = "visible";
            result.style.visibility = "hidden";
            document.getElementById("try").value = "";
            trial = 0;

        }
    })
})

restart.addEventListener("click", function (){
    react.style.visibility = "hidden";
    restart.style.visibility = "hidden";
    for(let i = 0 ; i < wronNumber.length ; i++){
        wronNumber[i].innerHTML = "";
    }
    start.style.display = "block";
})
