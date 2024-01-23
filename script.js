



var button = document.getElementById("submit-button") //button

button.addEventListener('click', function () {
    
    var franceOption = document.getElementsByName('france')//option1

    var planetOption=document.getElementsByName('planet') //option2

    var earthOption=document.getElementsByName('earth') //option3

    

    var initialScore=0

    for(var i=0;i<franceOption.length;i++)
    {
        if(franceOption[i].checked && franceOption[i].value==='paris')
        {
            initialScore=initialScore+1
        }
    }
    
    for(var i=0;i<planetOption.length;i++)
    {
        if(planetOption[i].checked && planetOption[i].value==='mars')
        {
            initialScore=initialScore+1
        }
    }

    for(var i=0;i<earthOption.length;i++)
    {
        if(earthOption[i].checked && earthOption[i].value=='blue whale')
        {
            initialScore=initialScore+1
        }
    }
    
    // alert("score is: " +initialScore )
    var scoreBoard=document.getElementById('score-board')
    
    scoreBoard.textContent="Score:"+initialScore
    // console.log(scoreBoard.textContent+initialScore)


    var resultPage=document.getElementById('result-page')

    resultPage.style.display="block"

    var choosePart=document.getElementById("choose-part")

    choosePart.style.display="none"

  })

