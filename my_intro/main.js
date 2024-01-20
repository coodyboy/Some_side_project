
let i=0;
const myPic = document.querySelector('#my-pic');
let topLeftLetter = document.querySelector('#top-left-letter')
let topRightLetter = document.querySelector('#top-right-letter')
let bottomLeftLetter = document.querySelector('#bottom-right-letter')
let bottomRightLetter = document.querySelector('#bottom-left-letter')

setTimeout(displayTheLight1,1500,i);

function displayTheLight1(index){
    i++;
    const theLight = document.querySelectorAll(`.ball`);
    theLight[index].style.display = 'block';
    setTimeout(displayTheLight2,1000,i);
    topLeftLetter.style.opacity = '1'
}

function displayTheLight2(index){
    // i++;
    i=3;
    const theLight = document.querySelectorAll(`.ball`);
    theLight[index].style.display = 'block';
    setTimeout(displayTheLight4,1000,i);
    topRightLetter.style.opacity = '1'
}

function displayTheLight4(index){
    i=2;
    const theLight = document.querySelectorAll(`.ball`);
    theLight[index].style.display = 'block';
    setTimeout(displayTheLight3,1000,i);
    bottomRightLetter.style.opacity = '1'
}

function displayTheLight3(index){
    const theLight = document.querySelectorAll(`.ball`);
    theLight[index].style.display = 'block';
    setTimeout(displayTheLight4,1000,i);
    bottomLeftLetter.style.opacity = '1'
    setTimeout(()=>{
        myPic.style.display = 'block';
    },1000);
}