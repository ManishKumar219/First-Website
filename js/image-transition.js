var countDiv = document.getElementById('count');
var slides = document.getElementsByClassName('slides');

var count = 1;

// setInterval(auto, 2000);

// function auto(){
//     count+=1;
// }

function transition(x){
    
    count = count + x;
    if(count == slides.length){
        count = 0;
    }
    if(count < 0){
        count = slides.length-1;
    }
    abc(count);
    changeCounter(count);
}

function abc(num){
    for(let x of slides){
        x.style.display = 'none';
    }

    slides[num].style.display = 'block';
}

abc(count);

function changeCounter(num){
    countDiv.innerHTML = num+1 + ' / ' + slides.length;
}


