  //function to select random selection for player2
let player2Play=()=>{
    if(count>0){
    let result= Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    switch(result){
        case 1:{
            return "scissor"
        }
        case 2:{
            return "paper"
        }
        case 3:{
            return "stone"
        }
        case 4:{
            return "paper"
        }
        case 5:{
            return "scissor"
        }
        case 6:{
            return "stone"
        }
    }}
}
// console.log(randomCheck());

//jquery for Final result
$(document).ready(function() {
    $('.player1ImgClass').click(function(){
        if(count>0){
        var objPlayer1 = this;
        $(".imgPlayer1").attr('src',objPlayer1.src);
        let resultPlayer2=player2Play()
        switch(resultPlayer2){
            case "scissor":{
                let resultScore=score(objPlayer1.id,resultPlayer2)
                let srcimgPlayer2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57BN2jfc60TZnnE3urvL5Byd0JHz_cuRsFQ&usqp=CAU"
                $(".imgPlayer2").attr('src',srcimgPlayer2);
                document.getElementById("player1Score").innerHTML=resultScore
                break
            }
            case "paper":{
                let resultScore=score(objPlayer1.id,resultPlayer2)
                let srcimgPlayer2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQed8Lc3BvKhYgLqBkwRW_85QKHELE5acQmwg&usqp=CAU"
                $(".imgPlayer2").attr('src',srcimgPlayer2);
                document.getElementById("player1Score").innerHTML=resultScore
                break
            }
            case "stone":{
               let resultScore=score(objPlayer1.id,resultPlayer2)
               let srcimgPlayer2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7a20f1VC5ZdEvdO9o17dAC3I_kdA4kyvrfA&usqp=CAU"
                $(".imgPlayer2").attr('src',srcimgPlayer2);
                document.getElementById("player1Score").innerHTML=resultScore
                break
            }
        }
        }else{
            document.getElementById("selectToPlay").innerText="Maximum Clicks Reached"
        }
 });
});


//To check click count
var count = 10;
document.getElementById("player1ClickCount").innerHTML = count;
document.getElementById("player1").addEventListener("click", function() {
    if(count>0){
    count--;
    document.getElementById("player1ClickCount").innerHTML = count;
    }
  });

//function to check score
let player1Point=0;
let score=(player1,player2)=>{
    if(player1==player2){
        ++count
        return player1Point
    }else if(player1=="scissor"){
        if(player2=="paper"){
           return ++player1Point
        }
        else{
            return --player1Point
        }
    }
    else if(player1=="paper"){
        if(player2=="scissor"){
            return --player1Point
        }
        else{
            return ++player1Point
        }
    }
    else{if(player2=="scissor"){
        return ++player1Point
        }else{
            return --player1Point
            }
    }
}

