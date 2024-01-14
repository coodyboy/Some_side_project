
let motherBox = document.getElementById('mother-box')
motherBox.style.border = '2px solid'
let opacity = 0.2;
let mousedown = false;
// motherBox.style.cssText = 'display:grid;grid-template-columns:repeat(36,auto);;flex-wrap:wrap;border:2px solid;'
// document.body.append(motherBox)

let userInput = Number(prompt('Enter the number:'))

for(let i=0;i<userInput*userInput;i++){
    const div = document.createElement('div')
    div.style.cssText = 'width:16px;height:16px;'
    div.setAttribute('hover-time','4')
    motherBox.append(div)
    div.setAttribute('special','1')
    div.addEventListener('mousedown',()=>{mousedown=true})
    div.addEventListener('mouseup',()=>{mousedown=false})
    div.addEventListener('mouseover',changedBackground)
}

function changedBackground(event){
    if(mousedown){
        event.target.style.backgroundColor = 'black'
        let hoverTime = Number(event.target.getAttribute('hover-time'))+1
        event.target.setAttribute('hover-time',hoverTime)
        // console.log(hoverTime)
        // console.log(event.target.getAttribute('hover-time'))
        if(event.target.getAttribute('hover-time')==='10'){
            event.target.setAttribute('hover-time','10')
        }else{
            event.target.style.opacity = `${hoverTime/10}`
        }
    }
    // for(let i=2;i<11;i++){
    //     if(event.target.style.opacity === `0.2`){
    //         event.target.style.opacity =`${opacity+1}`
    //         console.log(event.target.style.opacity) 
    //     }else{
    //         event.target.style.opacity = ''+opacity
    //     }
    // }
    // if(currentDiv == event.target){
    //     dwellTime+=0.1
    // }else{
    //     dwellTime =0
    // }
}