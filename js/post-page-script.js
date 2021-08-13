var catagIcon = document.getElementById("catagories");
var catagBox = document.getElementsByClassName("catagory-list");
catagBox[0].style.display = 'none';

var num = 0;
function catagClick(x){
    num += x;
    if(num==2){
        num = 0;
    }

    if(num == 0){
        catagBox[0].style.display = 'block';
    }
    else if(num == 1){
        catagBox[0].style.display = 'none';
    }
}
