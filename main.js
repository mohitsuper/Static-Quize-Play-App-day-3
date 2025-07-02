const qutionsBox = document.querySelectorAll(".qutions-box");
qutionsBox.forEach((value)=>{
    let qutionsOption = value.querySelectorAll("p");
    let answer = value.querySelector(".answer");
    let displayAnswer = value.querySelector(".Massage");
    let displayRightAnswer = value.querySelector(".answer");
    qutionsOption.forEach((qution)=>{
        qution.addEventListener("click",function(){
            if(answer.value.trim().substring(13) == qution.innerHTML.substring(3)){
             displayAnswer.type = "text";
             displayAnswer.value = "Correct";
             displayAnswer.style.color = "green";
             displayRightAnswer.type = "text";
            }
            else{
             displayAnswer.type = "text";
             displayAnswer.value = "Wrong";
             displayAnswer.style.color = "red";
             displayRightAnswer.type = "text";
            }
        })
    })
})


