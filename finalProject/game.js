let cards = document.querySelectorAll(".card-front")
let firstClick = false
let count = 0
let cardPair = []
let maxScore = cards.length / 2
let score = 0

for (let i = 0; i < cards.length; i++){
    cards[i].state = 'unclicked'
}

shuffle()


for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', ()=>{
        if (!firstClick){time()}
        firstClick = true

        if (cards[i].state === 'unclicked'){
            cards[i].style.transform = 'rotateY(180deg)'
            cards[i].state = 'clicked'
            count++
            cardPair.push(cards[i])
            check()

        }else if (cards[i].state === 'clicked'){
            cards[i].style.transform = 'rotateY(0deg)'
            cards[i].state = 'unclicked'
            count--
            cardPair = []
        }
    })

}

function time() {
    let ms = 0
    let s = 0
    let MM = 0
    let SS = 0

    let timer = setInterval(() => {
        ms++
        if (ms === 60){ms = 0; s++}
        if (ms < 10){MM = `0${ms}`}else {MM = `${ms}`}
        if (s < 10){SS = `0${s}`}else {SS = `${s}`}

        document.querySelector('#time').innerHTML = `${SS}:${MM}`

        if (score === maxScore){
            alert(`Congratulation you beat the game in ${SS}:${MM}`)
            clearInterval(timer)
        }
    }, 1000);

}

function check(){
    if (count == 2){
        if (cardPair[0].children[1].querySelector('img').src === cardPair[1].children[1].querySelector('img').src){
            matched()
        }else {
            unmatched(cardPair[0], cardPair[1])
        }
    }
}

function matched(){
    cardPair[0].state = 'blocked'
    cardPair[1].state = 'blocked'
    count = 0
    cardPair = []
    score++
    document.querySelector("#score").innerHTML = score
}

function unmatched(x, y){
    setTimeout(() => {
        x.style.transform = 'rotateY(0deg)'
        y.style.transform = 'rotateY(0deg)'
    }, 500)
    cardPair[0].state = 'unclicked'
    cardPair[1].state = 'unclicked'
    count = 0
    cardPair = []
}

function shuffle(){
    let fillClass = document.querySelectorAll(".fill")
    //console.log(fillClass)
    //let classList = ['js', 'css', 'html', 'node', 'python', 'java', 'php', 'ruby', 'c', 'atom', 'vsc', 'sublime']
    let className = ['fill js', 'fill css', 'fill html', 'fill node', 'fill python', 'fill java', 'fill php', 'fill ruby', 'fill c', 'fill atom', 'fill vsc', 'fill sublime']
    let src = ["img/jslogo.png", "img/csslogo.png", "img/htmllogo.png", "img/nodelogo.png", "img/pythonlogo.png", "img/javalogo.png", "img/phplogo.png", "img/rubylogo.png", "img/clogo.png", "img/atomlogo.png", "img/vsclogo.png", "img/sublimelogo.png"]

    let totalGambar = fillClass.length / 2 // total variasi gambar yg akan di pakai
    let srcBaru = [] // menampung gambar dan duplikatnya
    let classNameBaru = []
    //let classListBaru = []

    for (let i = 0; i < 2; i++){ // cloning src ke siap pakai
        for (let j = 0; j < totalGambar; j++){
            srcBaru.push(src[j])
            classNameBaru.push(className[j])
            //classListBaru.push(classList[j])
        } 
    }

    for (let i = fillClass.length - 1; i > 0; i--){
        let shuffle = Math.floor(Math.random() * i)
        
        let temp = srcBaru[i]
        srcBaru[i] = srcBaru[shuffle]
        srcBaru[shuffle] = temp
        //temp = ''
        temp = classNameBaru[i]
        classNameBaru[i] = classNameBaru[shuffle]
        classNameBaru[shuffle] = temp
        //temp = ''
        //temp = classListBaru[i]
        //classListBaru[i] = classListBaru[shuffle]
        //classListBaru[shuffle] = temp
    }
    //console.log(fillClass[0].classList)
    for (let i = 0; i < fillClass.length; i++){
        fillClass[i].firstChild.src = srcBaru[i]
        fillClass[i].className = classNameBaru[i]
    }
    //console.log(fillClass)
}

//function notif(){
       // document.getElementsById("notif").style.visibility = 'hidden';
//}
/*
console.log(cards)
console.log(cards[0].children[1])
console.log(cards[0].children[1].className)
console.log(cards[0].children[1].firstChild.src)
*/
console.log(document.getElementById("notif"))