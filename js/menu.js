export function mngMenu(){
    
    console.log('hola mundo ddd')
    let oMenuButton = document.querySelector('#btnMenu')
    let oMenuSelection = document.querySelector('#btnSelection')
    
    oMenuButton.addEventListener('click', toogleMenuMobile)
    oMenuSelection.addEventListener('click', toogleMenuMobile)
    
    /* arrMenu[1].addEventListener('click', scrollToSection) */

    function toogleMenuMobile(oEvent){
        /* console.log('has hecho click en boton') */
        let oMenuMobile = document.querySelector('.nav-dropdown')
        /* console.log(oMenuMobile) */
        oMenuMobile.classList.toggle('hide')

    }
}

export function spyScroll(){
    let aSections = []
    let aMenu = document.querySelectorAll(".nav-left li")
    let oSections = new Array
    let oSectionsSorted = new Array
    let arrMenu = document.querySelectorAll('.mnu-btn')
    /* console.log(arrMenu) */
    /* sectionArrayBuilder() */
    window.addEventListener('resize', calculateNewOffsets)
    window.addEventListener('scroll', changeMenu)
    arrMenu.forEach(element =>{
        element.addEventListener('click',scrollToSection)
    })
    sectionArrayBuilder();

    function calculateNewOffsets(){
        /* console.log("nuevos offsets") */
        sectionArrayBuilder()
    }

    function scrollToSection(oEv){
        
        let desiredOffset =0
        console.log("scrolltosection:")
        /* console.log(oEv) */
        console.log(oEv.srcElement.id)
        /* window.scroll(0,1000) */
        /* document.querySelector("#formulario").scrollIntoView({behaviour: 'smooth'}) */
        /* document.scrollTop=0 */
        let strNameTemp = oEv.srcElement.id.split('-')
        console.log(strNameTemp[1])
        oSectionsSorted.forEach(element => {
            if (element.id == strNameTemp[1]){
                desiredOffset = element.offset +20
            }
        })
        
        console.log("queremos ir a la section "+desiredOffset)
        let index = window.pageYOffset;
        console.log(index)
        if (index<desiredOffset){
            for (index =  0; index < desiredOffset; index++) {
                setTimeout(function(){
                    window.scrollTo(0, index)
                },400)
            }
        }else{
            for (index =  window.pageYOffset; index > desiredOffset; index--) {
                setTimeout(function(){
                    window.scrollTo(0, index)
                },400)
            }
        }
        
        window.scroll(0, desiredOffset)
        console.log(window.pageYOffset)
    }
    
    function sectionArrayBuilder(){
        aSections = document.querySelectorAll(".anchor")
        /* oSections.push({"id":"Home", "offset": 0}) */
        oSections=[]
        aSections.forEach( element => {
          /*  console.log(element.id + element.offsetTop) */
           oSections.push({"id":element.id, "offset": element.offsetTop})
        })
        oSectionsSorted = oSections.sort(function(a,b){
            return a['offset']-b['offset']
        })
        /* console.log(oSectionsSorted) */
        oSectionsSorted.forEach( element =>{
            console.log(element.id + element.offset)

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