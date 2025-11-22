//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {    //to get 6 digits
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
};

let intervalId= null;
const startChangingColor= function(){
   function changeColor(){
    document.body.style.backgroundColor=randomColor();
   };

   if(intervalId=== null){
    intervalId= setInterval(changeColor, 1000);
   };
   
};


const stopChangingColor= function(){
    clearInterval(intervalId)
    intervalId= null; //continue the timer again on click
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)