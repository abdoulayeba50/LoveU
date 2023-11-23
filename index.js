// function love(){
//     let beugel = "khady";
    
//     if(beugel == "mamy"){
//         console.log("I love you");
//     }else( console.log("heart break"));
// }
// love();




let bouton = document.getElementById("monBouton");

bouton.addEventListener("click", function() {
    function loveMessage(){
        let message ="";
         for( let i = 0; i < 1; i++ ){
            message += "I love you baby ❤️" ;
         }
         return message;
        }   
        console.log(loveMessage());
          const root = document.getElementById('root');
          root.textContent=loveMessage();
});






  