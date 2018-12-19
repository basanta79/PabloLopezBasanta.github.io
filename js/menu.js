export function mngMenu(){

    console.log('hola mundo')
    let oMenuButton = document.querySelector('#btnMenu')
    let oMenuSelection = document.querySelector('#btnSelection')
    let arrMenu = document.querySelectorAll('.mnu-btn')
    console.log(arrMenu)
    oMenuButton.addEventListener('click', toogleMenuMobile)
    oMenuSelection.addEventListener('click', toogleMenuMobile)
    arrMenu.forEach(element =>{
        element.addEventListener('click',scrollToSection)
    })
    /* arrMenu[1].addEventListener('click', scrollToSection) */

    function scrollToSection(oEv){
        console.log(oEv)
        window.scroll(0,1000)
    }

    function toogleMenuMobile(oEvent){
        /* console.log('has hecho click en boton') */
        let oMenuMobile = document.querySelector('.nav-dropdown')
        /* console.log(oMenuMobile) */
        oMenuMobile.classList.toggle('hide')

    }
}

export function spyScroll(){
    let aSections = document.querySelectorAll(".anchor")
    let aMenu = document.querySelectorAll(".nav-left a")
    let oSections = new Array
    let oSectionsSorted = new Array
    sectionArrayBuilder()
    window.addEventListener('scroll', changeMenu)
    
    function sectionArrayBuilder(){
        oSections.push({"id":"Home", "offset": 0})
        aSections.forEach( element => {
           /* console.log(element.id + element.offsetTop) */
           oSections.push({"id":element.id, "offset": element.offsetTop})
        })
        oSectionsSorted = oSections.sort(function(a,b){
            return a['offset']-b['offset']
        })
        /* console.log(oSectionsSorted) */
        aMenu.forEach( element =>{
           /*  console.log(element.id) */

        })
    }

    function changeMenu(){
        let pageOffset = window.pageYOffset
        let actualSection
        /* console.log(pageOffset) */
        oSectionsSorted.forEach(element =>{
            if (pageOffset>=element.offset){
                /* console.log(`estoy en ${element.id}`) */
                actualSection=element.id
            }
        })
        /* console.log(actualSection) */
        aMenu.forEach(element =>{
            /* console.log(element.id) */
            if (element.id == "mnu-" + actualSection){
                element.classList.add('active')
            }else{
                element.classList.remove('active')
            }
        })
    }
    
    
    
}