const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexcolor = "#";
    for(let i =0; i < 6; i++){
        hexcolor = hexcolor+hex[getrandomNumber()];
        console.log(hexcolor);
        console.log(getrandomNumber());
        
        color.textContent = hexcolor;
        document.body.style.backgroundColor = hexcolor;
    };
    
});
function getrandomNumber(){
    return Math.floor(Math.random()*hex.length);
}