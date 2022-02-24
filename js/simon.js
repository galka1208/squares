"use strict";

function blinkSquare(id) {
    $('#'+id).addClass('active');
    setTimeout(() => { 
        $('#'+id).removeClass('active'); 
    }, 800)
}

let steps = []; 
let stepNum = 0; 
let canPlay = false;

$(function() {
    const squaresCount = $('.kvadratik').length;
    $('button').on('click', function() {
        stepNum = 0;
        
        for(let i = 0; i < squaresCount; i++) { 
            steps[i] = Math.floor(1 + Math.random() * (squaresCount + 1 - 1));
        }
        
        let index = 0; 
        let inverval = setInterval(() => {  
            if( index < steps.length) { 
                blinkSquare(steps[index]); 
                index++; 
            } else { 
                canPlay = true;
                clearInterval(inverval)
            }
        }, 1000) 
    })
    
    $('.kvadratik').on('click', function() { 
        if(!canPlay) { return; }

        blinkSquare($(this).attr('id')); 
        if ($(this).attr('id') != steps[stepNum]) {
            alert('Вы проиграли');
        }

        if(stepNum == steps.length -1) {
            alert("Вы выйграли")
        }

        stepNum++;
    });
});
