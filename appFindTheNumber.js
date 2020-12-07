let start = document.getElementById("doYou");
let restart = document.getElementById("restart");
let react = document.getElementById("testAnswer");

/* au click sur commencer */
start.addEventListener("click", function (){
    start.style.display = "none";

    let random = Math.ceil(Math.random()*100);  /* choisi un nombre random */
    /* à validation */
    document.getElementById("test").addEventListener("click", function (){
        let userNbr = parseInt(document.getElementById("try").value);
        console.log(typeof userNbr);
        if(isNaN(userNbr)) {
            alert("vous devez entrez un nombre !")
            document.getElementById("try").value = "";
        }
        else {
            /* compare les 2 chiffres */
            if(userNbr === random){
                document.getElementById("try").value = "";
                react.innerHTML = "BRAVO !!! Vous avez gagné !!!"
                react.style.visibility = "visible";
            }
            else if(userNbr < random){
                document.getElementById("try").value = "";
                react.innerHTML = "Entrez un nombre plus grand";
                react.style.visibility = "visible";
            }
            else {
                document.getElementById("try").value = "";
                react.innerHTML = "Entrez un nombre plus petit";
                react.style.visibility = "visible";
            }
        }

    })
})

restart.addEventListener("click", function (){
    start.style.display = "block";
})