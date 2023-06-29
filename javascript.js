// the pixel count of one side of the box
const resolution = 480;
//initial width value of the grid aka the number of boxes you want on one side
let numBoxes = 16

const slida = document.querySelector('.slide')
slida.oninput = () => {
    numBoxes = slida.value
    changeGrid(numBoxes)
}


const daSquare = document.querySelector('#daSquare')


function deleteGrid() {
    const box = document.querySelectorAll('.box')
    box.forEach((button) => {
        daSquare.removeChild(button)
    })
}


function defaultGrid() {
    deleteGrid()
    for (let j = 0; j < 16; j++) {
        for (let i = 0; i < 16; i++) {
            const content = document.createElement('div')
            content.classList.add('box')
            //content.style.width = `${size}px`;
            //content.style.height = `${size}px`;
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


    //turns everything white
    /*const btn = document.querySelectorAll('.box')
    btn.forEach((button) => {
        button.setAttribute('style', 'background-color: white')
    })*/





    const box = document.querySelectorAll('.box')
    box.forEach((button) => {
        //button.setAttribute('style', 'height: 5px; width: 5px;')
        /*
        button.style.width = `${resPerBox}px`
        button.style.height = `${resPerBox}px`*/
        //console.log(`YOOOOOOOOOOO${resPerBox}px` + 'hello')
        let y = resPerBox
        let x = 'background-color: white; height: ' + `${y}` + 'px; ' + 'width: ' + `${y}` + 'px;'
        button.setAttribute('style', x)
        //button.setAttribute('style', 'background-color: white')
    })





    
    const btn2 = document.querySelectorAll('.box')
    btn2.forEach((button) => {
        let y = resPerBox
        //let x = 'height: ' + `${y}` + 'px; ' + 'width: ' + `${y}` + 'px;'
        //button.setAttribute('style', x)

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
})






/*
// hovering over the grid fills in the boxes with black
const btn = document.querySelectorAll('.box')
btn.forEach((button) => {
    button.addEventListener('mouseover', (e) => {
        e.target.setAttribute('style', 'background-color: green');
    })
})*/