let check = 0;
let animation = 0;
function Oferta(){
    document.getElementById("Oferta02").style.display= "flex";
    if(check==1){
        Wylacz();
    }
    else check = 1;
}

 function Wylacz(){
    document.getElementById("Oferta02").style.display= "none";
    check = 0;
}
function Szukaj(){
    document.getElementById("Szukaj").style.display= "flex";
}
function Left(){
    if(animation==0){
    document.getElementById("Photo").style.animation= "animation01 0.7s ease-out forwards";
    animation = 1
    }
    else{
    document.getElementById("Photo").style.animation= "animation02 0.7s ease-out forwards";  
    animation = 0 
    }
}
function Right(){
    if(animation==0){
        document.getElementById("Photo").style.animation= "animation01 0.7s ease-out forwards";
        animation = 1
        }
        else{
        document.getElementById("Photo").style.animation= "animation02 0.7s ease-out forwards";
        animation = 0   
        }
}
function Rozwin(){
    document.getElementById("Rozwijak").style.display= "none";
    document.getElementById("gradient").style.display= "none";
}    