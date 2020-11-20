let a = document.getElementById("headup")
    let b = document.getElementById("button")
    console.log(a)
    console.log(b)

    a.state = 'unclicked'
    /*
    a.addEventListener('click', ()=>{
        if (a.state === 'unclicked'){
            document.getElementById("button").style.display = 'flex'
            a.state = 'clicked'
        }else if (a.state === 'clicked'){
            document.getElementById("button").style.display = 'none'
            a.state = 'unclicked'
        }
    })
    */

    a.addEventListener('mouseover', ()=>{

            document.getElementById("button").style.display = 'flex'
            
    })

    a.addEventListener('mouseout', ()=>{

        document.getElementById("button").style.display = 'none'
        
})


