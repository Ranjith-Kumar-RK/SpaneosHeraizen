answers=["A","B","C"]
quizform=document.getElementById("quizform");
subBtn=document.getElementById("idSummit");
result=document.getElementById("result");
function showResult(useranswers){
    count=0;
    for(let i=0; i<answers.length; i++){
        if (answers[i]==useranswers[i]){
            count++;
        }
    }
    percentage = count / answers.length *100;
    setResult(()=>{
        result.style.display="block";
        for (let i=1; i<=percentage; i++){
            result.innerHTML=`You have scored ${Math.floor(i)}%`
        }
    },1000);
}

subBtn.addEventListener("click",e=>{
    e.preventDefault();
    usernames=[quizform.q1.value,quizform.q2.value,quizform.q3.value]
    quizform.reset();
    showResult(useranswers);
});