export function mngMenu(){

    console.log('hola mundo')
    let oMenuButton = document.querySelector('#btnMenu')
    console.log(oMenuButton)
    oMenuButton.addEventListener('click', toogleMenuMobile)

    function toogleMenuMobile(oEvent){
        console.log('has hecho click en boton')
    }
}