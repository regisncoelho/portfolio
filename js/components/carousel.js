var pixels = 0

document.querySelector('.button-arrow.-right').addEventListener('click',function (){
    pixels = pixels - 100
    document.querySelector('.elements').style = `transform: translateX(${pixels}px)`
})

//busca o seletor de classe e adiciona um listener para o clique
document.querySelector('.button-arrow.-left').addEventListener('click',function (){
    pixels = pixels + 100
    document.querySelector('.elements').style = `transform: translateX(${pixels}px)`
})