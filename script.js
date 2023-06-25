const correctAnswers=['A','B','B','A'];// the correct answer value for each question is in this array.
const form=document.querySelector('.quiz-form');
const result=document.querySelector(".result");
const reset=document.querySelector(".reset");
const emoji=document.querySelector(".emoji");
const popup=document.querySelector(".popup-wrapper");
const close=document.querySelectorAll(".popup-close");
const retry=document.querySelector(".retry");


form.addEventListener('submit',e=>{
    e.preventDefault();// avoids refresh of screen when submitting the form.
    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    // the answer value given by user is stored here.

    //check answers
    userAnswers.forEach((answer,index)=>{
        if(answer === correctAnswers[index]){
            score+=25;
        }
    });// the answerarray and the array of value given by user is checked for every question and score is incremented by 25 for each right answer.

    //show result on page
    scrollTo(0,0);// take us to the top of the page to show score.
    
    result.classList.remove('d-none');// the result section is shown on screen.
    
    let output=0;
    // after every 10milliseconds the output will increase until it reaches the score value creating a better animation effect to display score.
    const timer=setInterval(() => {
    result.querySelector('span').textContent=`${output}%`;
    if(output===score) clearInterval(timer);
    else output++;
    }, 10);
    if(score===25){
        emoji.textContent="😒😒😒";
    }
    else if(score===50){
        emoji.textContent="😐😐😐";
    }
    else if(score===75){
        emoji.textContent="😊😊😊";
    }
    else if(score===100){
        retry.style.display="none";
        popup.style.display="block";  
    }
    else{
        emoji.textContent="😫😫🤐😓😞";
    }
})  

// restart the test again

reset.addEventListener("click",()=>{
    location.reload();
});

close[0].addEventListener("click",()=>{
    popup.style.display="block";
    location.reload();
})

close[1].addEventListener("click",()=>{
    popup.style.display="block";
    location.reload();
})

popup.addEventListener("click",()=>{
    popup.style.display="none";
    location.reload();
})

