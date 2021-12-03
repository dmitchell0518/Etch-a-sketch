//Select the grid container // 
//Select the settings button container//
const container = document.querySelector(".container");
const settings = document.querySelector('.settings');


//Create settings buttons //

const label = document.createElement('label');

const classicMode = document.createElement('button');

classicMode.textContent = "Classic Mode";

classicMode.className = "classicBtn";

const modernBtn = document.createElement('button');

modernBtn.textContent = "Modern Mode";

modernBtn.className = "modernBtn";

const rainbowBtn = document.createElement('button');

rainbowBtn.textContent = "Random Mode";

rainbowBtn.className = "rainbowBtn";

const eraseBtn = document.createElement('button');

eraseBtn.textContent = "Erase";

eraseBtn.className = "eraseBtn";

const clearBtn = document.createElement('button');

clearBtn.textContent = "Clear";

clearBtn.className = "clearBtn";

const resizeBtn = document.createElement('button');

resizeBtn.textContent = "Resize Grid";

resizeBtn.className = "resizeBtn";

//Append the buttons to the settings div//

settings.appendChild(classicMode);
settings.appendChild(modernBtn);
settings.appendChild(rainbowBtn);
settings.appendChild(eraseBtn);
settings.appendChild(clearBtn);
settings.appendChild(resizeBtn);

//Load up the boxes when the pages loades //
window.onload = function(){
    createBoxes(16);

}

const createBoxes = (numBox) => {
    container.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
    for(let i = 0;i < numBox*numBox;i++){
        const square = document.createElement('div');
        square.className = "square";
        square.classList.add('box');
        container.appendChild(square);
    }
}


const changeGrid = () =>{
 let userInput = prompt('please enter a grid number');
 
 createBoxes(userInput);

 clearGrid();


}

const classic = () =>{
 
 const square = document.querySelectorAll('.square');
 square.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = "grey";
  })
 })

}

const modernColors = () => {
 
const square = document.querySelectorAll('.square');

square.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = "black";   
  })  
})

}

const rainbowColors = () => {
   
  var square = document.querySelectorAll('.square');  

  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);

  square.forEach(item => {
   item.addEventListener('mouseover', () => {
    item.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
   })
  })



}

const clearGrid = () => {
 const square = document.querySelectorAll('.square');

 square.forEach(item => {
  item.style.backgroundColor = "";
 })
}

const eraseGrid = () => {

const square = document.querySelectorAll('.square');

square.forEach(item => {
 item.addEventListener('mouseover', () => {
  item.style.backgroundColor = "";
 })
})
}




resizeBtn.addEventListener('click', changeGrid);

const classicc = document.querySelector('.classicBtn');

classicc.addEventListener('click', classic);

modernBtn.addEventListener('click', modernColors);

rainbowBtn.addEventListener('click', rainbowColors);

eraseBtn.addEventListener('click', eraseGrid);

clearBtn.addEventListener('click', clearGrid);


let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');        
    });
});




























