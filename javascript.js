// the pixel count of one side of the box
const resolution = 480;
//initial width value of the grid aka the number of boxes you want on one side
let numBoxes = 16

const daSquare = document.querySelector('#daSquare')

const slida = document.querySelector('.slide')
slida.oninput = () => {
    numBoxes = slida.value
    changeGrid(numBoxes)
}

const sliderValue = document.getElementById('sliderValue')
sliderValue.textContent = "You have chosen: " + slida.value + " x " + slida.value


function deleteGrid() {
    const box = document.querySelectorAll('.box')
    box.forEach((button) => {
        daSquare.removeChild(button)
    })
}

function defaultGrid() {
    deleteGrid()
    sliderValue.textContent = "You have chosen: 16 x 16"
    for (let j = 0; j < 16; j++) {
        for (let i = 0; i < 16; i++) {
            const content = document.createElement('div')
            content.classList.add('box')
            daSquare.appendChild(content)
        }
    }

    //turns everything white
    const btn = document.querySelectorAll('.box')
    btn.forEach((button) => {
        button.setAttribute('style', ('background-color: white'))
        button.style.backgroundColor = 'white';
    })

    // hovering over the grid fills in the boxes with black
    const btn2 = document.querySelectorAll('.box')
    btn2.forEach((button) => {
        button.addEventListener('mouseover', (e) => {
            e.target.setAttribute('style', 'background-color: black');
        })
    })
}
defaultGrid()

function changeGrid(numBoxes) {
    deleteGrid()
    sliderValue.textContent = "You have chosen: " + slida.value + " x " + slida.value
    console.log(numBoxes)
    for (let j = 0; j < numBoxes; j++) {
        for (let i = 0; i < numBoxes; i++) {
            const content = document.createElement('div')
            content.classList.add('box')
            daSquare.appendChild(content)
        }
    }
    let resPerBox = resolution / numBoxes
    console.log("RESPERBOX IS: " + resPerBox)

    
    const box = document.querySelectorAll('.box')
    box.forEach((button) => {
        let y = resPerBox
        let x = 'background-color: white; height: ' + `${y}` + 'px; ' + 'width: ' + `${y}` + 'px;'
        button.setAttribute('style', x)
    })

    const btn2 = document.querySelectorAll('.box')
    btn2.forEach((button) => {
        let y = resPerBox
        let x = 'background-color: black; height: ' + `${y}` + 'px; ' + 'width: ' + `${y}` + 'px;'
        button.addEventListener('mouseover', (e) => {
            e.target.setAttribute('style', x);
        })
    })
}

function resetGrid() {
    defaultGrid()
}

const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', () => {
    defaultGrid()
    slida.value = 16
})