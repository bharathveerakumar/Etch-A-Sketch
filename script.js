let range=document.querySelector('.matrix')
let css=document.querySelector(':root')
let colors=document.querySelector('.color')
let but=document.querySelector('button')
let lab=document.querySelector('label')

let rangeVal=6, temp=6, temp1=6, color='blue'

change()

function change(){
    let cont=document.querySelector('.cont')
    lab.innerHTML=`${rangeVal} * ${rangeVal}`
    while(temp>0){
        let row=document.createElement('div')
        row.className='row';
        temp1=rangeVal
        while(temp1>0){
            let col=document.createElement('div')
            col.className='col'
            col.addEventListener('mouseover', ()=>{
                col.style.backgroundColor=color;
            })
            row.appendChild(col)
            temp1--;
        }
        temp--, cont.appendChild(row)
    }
}

range.addEventListener('input', ()=>{
    rangeVal=range.value;
    css.style.setProperty('--wid', `${100/rangeVal}%`)
    temp=rangeVal

    let cont=document.querySelector('.cont')
    while(cont.firstChild) cont.removeChild(cont.firstChild)

    change();
})

colors.addEventListener('input', ()=>{
    color=colors.value;
})

but.addEventListener('click', ()=>{
    let c=document.querySelectorAll('.col')
    c.forEach(e=>{
        e.style.backgroundColor='white'
    })
})



