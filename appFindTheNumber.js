
let start = document.getElementById("start");   /* div : commencer */
let retour = document.getElementById("retour");     /* entrez un nbr ou */
let wrongNbr = document.getElementsByClassName("wrongNbr");
let info = document.getElementById("info");


start.addEventListener("click", function (){   /* au click sur commencer */
    start.style.display = "none";
    let trial = 0;                                  /* compteur nbr d'essai */
    let random = Math.ceil(Math.random()*100);  /* choisi un nombre random */

    document.getElementById("valider").addEventListener("click", function (){
        let userNbr = parseInt(document.getElementById("try").value);       /* recup l'entree */
        if(trial < 9) {             /* test s'il reste des essais */
            if(isNaN(userNbr)) {      /*  test si l'entrée et un nbr */
                retour.innerHTML = "vous devez entrez un nombre !"
                document.getElementById("try").value = "";
            }
            else {         /* compare les 2 chiffres */
                if(userNbr === random){
                    document.getElementById("try").value = "";
                    wrongNbr[trial].innerHTML = userNbr.toString();
                    retour.innerHTML = "BRAVO !!! Vous avez gagné !!!";
                    document.getElementById("win").style.display = "block";
                }
                else if(userNbr < random){
                    document.getElementById("try").value = "";
                    retour.innerHTML = "Entrez un nombre plus grand";
                    wrongNbr[trial].innerHTML = userNbr.toString();
                }
                else {
                    document.getElementById("try").value = "";
                    retour.innerHTML = "Entrez un nombre plus petit";
                    wrongNbr[trial].innerHTML = userNbr.toString();
                }
                if(retour.innerHTML === "BRAVO !!! Vous avez gagné !!!" ){
                    info.innerHTML = "En " + (trial + 1) + " essai(s)"
                }
                else {
                    info.innerHTML = "Il reste " + (9-trial) + " essai(s)";
                    ++ trial;          /* incermente le nbr d'essai(s) */
                }
            }
        }
        else {
            wrongNbr[trial].innerHTML = userNbr.toString();
            retour.innerHTML = "Vous avez perdu !!! C'était le numéro " + random;
            info.innerHTML = "Vous n'avez plus d'essais";
            document.getElementById("try").value = "";
            document.getElementById("loose").style.visibility = "visible"
            trial = 0;
        }
    })
})
