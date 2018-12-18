export function textAreaLimitWords(){
    document.addEventListener('keyup', calculateWords)
    const MAXLENGTH = 150
    document.getElementById("remaining-words").innerHTML = `Quedan ${MAXLENGTH} palabras.`

    function calculateWords(oEv){
        /* console.log('dentro de calculate words') */
        let txtArea = document.querySelector('#comments')
        /* console.log(txtArea.value) */
        console.log(txtArea.value.slice(-1))
        let arrWords = txtArea.value.split(" ").removeEmptyItems()
        console.log(arrWords.length)
        let remaining = MAXLENGTH - arrWords.length
        document.getElementById("remaining-words").innerHTML = `Quedan ${remaining} palabras.`
        if(txtArea.value.slice(-1)==" "){
            if (remaining<=0){
                txtArea.setAttribute('maxlength', txtArea.value.length)
            }else{
                txtArea.removeAttribute('maxlength')
            }
        }else{
            if (remaining>=0){
                txtArea.removeAttribute('maxlength')
            }else{
                txtArea.setAttribute('maxlength', txtArea.value.length)
            }
        }
        
       
    }
}

Array.prototype.removeEmptyItems = function(){
    let arrResult = new Array
    this.forEach(element => {
        console.log(element)
        if (element!=""){
            arrResult.push(element)
        }
    });
    return arrResult
}

