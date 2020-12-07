let start = document.getElementById("restart");
let react = document.getElementById("testAnswer");

/* au start */
document.getElementById("restart").addEventListener("click", function (){

    start.innerHTML = "RESTART";  /* renomme le bouton start */

    let random = Math.ceil(Math.random()*100);  /* choisi un nombre random */
    console.log(random);
    console.log(typeof random);

    /* à validation */
    document.getElementById("test").addEventListener("click", function (){
        let userNbr = parseInt(document.getElementById("try").value);
        console.log(typeof userNbr);
        if(userNbr === random){
            react.style.visibility = "visible";
        }
            })
})



// /* demande un chiffre entre 1 et 100 */
// let nbr = document.getElementById("try");
//
// /* au click sur valider */
// /* function */
//
//
//
//
// /* compare les 2 chiffres */
// if( nbr === secret){
//
// }
//
// else if(number > secret) {
//     let numDeux = prompt("essai avec un chiffre plus petit");
//
//     if (numDeux === secret){
//         alert("Bravo, " + name + ", tu as gagné !");
//     }
//
//     else{
//         alert("Désolé, " + name + ", tu as perdu :(")
//     }
// }
//
// else {
//     let numTrois = prompt("essai avec un chiffre plus grand");
//
//     if (numTrois === secret){
//         alert("Bravo, " + name + ", tu as gagné !");
//     }
// }