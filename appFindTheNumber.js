let start = document.getElementById("doYou");
let restart = document.getElementById("restart");
let react = document.getElementById("testAnswer");
let wronNumber = document.getElementsByClassName("testedNbr");
let result = document.getElementById("result");




start.addEventListener("click", function (){   /* au click sur commencer */

    start.style.display = "none";

    let random = Math.ceil(Math.random()*100);  /* choisi un nombre random */
    let trial = 0;                                  /* compte le nbr d'essai */

    document.getElementById("test").addEventListener("click", function (){  /* à validation */
        let userNbr = parseInt(document.getElementById("try").value);       /* recup l'entree */
        if(trial < 9) {
            if(isNaN(userNbr)) {
                react.style.visibility = "visible";
                react.innerHTML = "vous devez entrez un nombre !"
                document.getElementById("try").value = "";
            }
            else {
                /* compare les 2 chiffres */
                if(userNbr === random){
                    document.getElementById("try").value = "";
                    react.innerHTML = "BRAVO !!! Vous avez gagné !!!"
                    react.style.visibility = "visible";
                    restart.style.visibility = "visible";
                    result.style.display = "none";
                    trial = 0;

                }
                else if(userNbr < random){
                    document.getElementById("try").value = "";
                    react.innerHTML = "Entrez un nombre plus grand";
                    react.style.visibility = "visible";
                    wronNumber[trial].innerHTML = userNbr.toString();
                }
                else {
                    document.getElementById("try").value = "";
                    react.innerHTML = "Entrez un nombre plus petit";
                    react.style.visibility = "visible";
                    wronNumber[trial].innerHTML = userNbr.toString();
                }
                document.getElementById("result").style.visibility = "visible";
                document.getElementById("result").innerHTML = "il vous reste " + (9-trial) + " essai(s)";
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
