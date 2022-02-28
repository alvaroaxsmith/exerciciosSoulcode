/*Crie um site com um botão e uma imagem de uma lâmpada apagada. 
Quando se clicar no botão e a imagem for uma lâmpada apagada, 
você trocará para a imagem de uma lâmpada acesa. Quando se clicar 
no botão e a imagem for uma lâmpada acesa, você trocará para a imagem 
de uma lâmpada pagada.*/

const BTN = document.getElementById("btn")
const IMG = document.getElementById("img")

BTN.addEventListener('click', () => {

    console.log(BTN)
    if(BTN.innerText === "Acender"){
        BTN.innerText = "Apagar"
        IMG.src = "lampada-acesa-png.png"
    }else{        
        BTN.innerText = "Acender"
        IMG.src = "lampada-apagada-png.png"
    }

})