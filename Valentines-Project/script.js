function congrats(){
    const image = document.getElementById("image");
    const question = document.getElementById("question1");
    question.style.display="none";
    image.style.display="flex";
}

function swap(){
    var noButton = document.getElementById("no-button");
    var yesButton = document.getElementById("yes-button");
    noButton.onclick=congrats;
    noButton.onmouseover=null;
    yesButton.onclick=null;
    yesButton.onmouseover=swap;
    noButton.innerHTML="YES";
    yesButton.innerHTML="NO";
    noButton.className="button-1";
    yesButton.className="button-2";
    noButton.id="yes-button";
    yesButton.id="no-button";
}

