
// const input = document.querySelector('input');
// const circle = document.querySelector('#circle');
// const toltip = document.querySelector('.toltip');
// const tw = document.querySelector('.toltip-wraper');
// const search = document.querySelector('.search');

// let count = 0;

// input.onblur = () => {
   
//     if(input.value == ''){
//         search.style.borderColor = "red"
//         circle.style.display = "block"
//         toltip.style.display = "none"
//     }else{
//         search.style.borderColor = "black"
//         circle.style.display = "none"
//     }
//     count++;
// }

// input.onfocus = () =>{

//     search.style.borderColor = "black"
//     circle.style.display = "none"
//     toltip.style.display = "none"

//     if(input.value == '' && count > 0){
//         toltip.style.display = "block"
        

//     }else{
//         toltip.style.display = "none"

//     }

   
   
// }

// input.onkeyup = () =>{
//     if(input.value == ''){
//         toltip.style.display = "block"
//     }else{
//         toltip.style.display = "none"
//     }

// }


// facebook===============>
const button = document.querySelector('#my-btn');
const modal = document.querySelector('.haq-modal');
const close = document.querySelector('.close');
const fastname = document.querySelector('#fast_name');
const lastname = document.querySelector('#last_name');
const email = document.querySelector('#email');
const emails = document.querySelector('#emails');
const password = document.querySelector('#password');
const passwords = document.querySelector('#passwords');
const search1 = document.querySelector('.search1');
const search2 = document.querySelector('.search2');
const search3 = document.querySelector('.search3');
const search4 = document.querySelector('.search4 input');
const circle1 = document.querySelector('#circle1');
const tw = document.querySelector('.tw');
const toltip1 = document.querySelector('.toltip1');
const toltip2 = document.querySelector('.toltip2');
const toltip3 = document.querySelector('.toltip3');
const toltip4 = document.querySelector('.toltip4');
const circle2 = document.querySelector('#circle2');
const circle3 = document.querySelector('#circle3');
const circle4 = document.querySelector('#circle4');
const my_form = document.querySelector('#my-form');


button.onclick = () => {
    modal.style.display = "flex"
    return  false;

}


close.onclick = () => {
    modal.style.display = "none";
    

}

// fast name =============>

let counter = 0;


fastname.onblur = () => {
    if(fastname.value == ''){
        search1.style.borderColor = "red";
    circle1.style.display = "block";
    circle1.style.color = "red";
    toltip1.style.display = "none"
        

    }else{
        search1.style.borderColor = "black";
    circle1.style.display = "none"
    }
    counter++;

    
}
fastname.onfocus = () => {

    search1.style.borderColor = "black"
        circle1.style.display = "none"
        toltip1.style.display = "none"
    
        if(fastname.value == '' && counter > 0){
            toltip1.style.display = "block"
            
    
        }else{
            toltip1.style.display = "none"
           
    
        }

    
   }

   fastname.onkeyup = () => {
    if(fastname.value == ''){
                toltip1.style.display = "block"
            }else{
                toltip1.style.display = "none"
            }

   }



   // last name=============>

   
let counters = 0;


lastname.onblur = () => {
    if(lastname.value == ''){
        search2.style.borderColor = "red";
    circle2.style.display = "block";
    circle2.style.color = "red";
    toltip2.style.display = "none"
        

    }else{
        search2.style.borderColor = "black";
    circle2.style.display = "none"
    }
    counters++;

    
}
lastname.onfocus = () => {

    search2.style.borderColor = "black"
        circle2.style.display = "none"
        toltip2.style.display = "none"
    
        if(lastname.value == '' && counters > 0){
            toltip2.style.display = "block"
            
    
        }else{
            toltip2.style.display = "none"
           
    
        }

    
   }

   lastname.onkeyup = () => {
    if(lastname.value == ''){
                toltip2.style.display = "block"
            }else{
                toltip2.style.display = "none"
            }

   }



   // email=============>

   let counterss = 0;


   emails.onblur = () => {
    if(emails.value == ''){
        search3.style.borderColor = "red";
        circle3.style.display = "block";
        circle3.style.color = "red";
    toltip3.style.display = "none"
        

    }else{
        search3.style.borderColor = "black";
        circle3.style.display = "none"
    }
    counterss++;

    
}
emails.onfocus = () => {

    search3.style.borderColor = "black"
    circle3.style.display = "none"
        toltip3.style.display = "none"
    
        if(emails.value == '' && counterss > 0){
            toltip3.style.display = "block"
            
    
        }else{
            toltip3.style.display = "none"
           
    
        }

    
   }

   emails.onkeyup = () => {
    if(emails.value == ''){
        toltip3.style.display = "block"
            }else{
                toltip3.style.display = "none"
            }

   }



   // password ==========================>

   
   let counterss1 = 0;


   passwords.onblur = () => {
    if(passwords.value == ''){
        search4.style.borderColor = "red";
        circle4.style.display = "block";
        circle4.style.color = "red";
        toltip4.style.display = "none"
        

    }else{
        search4.style.borderColor = "black";
        circle4.style.display = "none"
    }
    counterss1++;

    
}
passwords.onfocus = () => {

    search4.style.borderColor = "black"
    circle4.style.display = "none"
    toltip4.style.display = "none"
    
        if(passwords.value == '' && counterss1 > 0){
            toltip4.style.display = "block"
            
    
        }else{
            toltip4.style.display = "none"
           
    
        }

    
   }

   passwords.onkeyup = () => {
    if(passwords.value == ''){
        toltip4.style.display = "block"
            }else{
                toltip4.style.display = "none"
            }

   }





