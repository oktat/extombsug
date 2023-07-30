const doc = {
    sideInput: document.querySelector('#side'),
    alphaInput: document.querySelector('#alpha'),
    radiusInput: document.querySelector('#radius'),
    calcButton: document.querySelector('#calcButton')
}

const state = {
    radius: null
}

window.addEventListener('load', () => {
    init()
})

function init() {
    handleEvent()
}

function handleEvent() {
    if(doc.calcButton) {
        doc.calcButton.addEventListener('click', () => {
            startCalc()
        })
    }
}

function startCalc() {
    try {
        tryStartCalc()
    }catch(err) {
        console.log(err.message)
        alert(err.message)
    }
}

function tryStartCalc() {
    let side = doc.sideInput.value;
    let alpha = doc.alphaInput.value;
    state.radius = calcRadius(side, alpha)
    doc.radiusInput.value = state.radius
}

function calcRadius(side, alpha) {
    if(!isValidInput(side)) {
        throw new Error('Hiba! Az oldal érték hibás!')
    }
    if(!isValidInput(alpha)) {
        throw new Error('Hiba! Az szög érték hibás!')
    }
    let rad = alpha * Math.PI / 180
    return 1.0/2.0 * side * Math.sin(rad)
}

function isValidInput(input) {
    inputStr = String(input)
    if(!inputStr.match(/^[0-9]+$/)) {
        return false
    }
    if(input <= 0) {
        return false
    }
    return true
}
