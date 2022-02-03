const makeBigger = () => {
   let h1 = document.querySelector("h1");
   let content = document.querySelector(".content");
   let h1Size = parseFloat(window.getComputedStyle(h1, null).getPropertyValue('font-size'));
   let contentSize = parseFloat(window.getComputedStyle(content, null).getPropertyValue('font-size'));

   h1.style.fontSize = (h1Size + 2) + 'px';
   content.style.fontSize = (contentSize + 2) + 'px';

};

const makeSmaller = () => {
   let h1 = document.querySelector("h1");
   let content = document.querySelector(".content");
   let h1Size = parseFloat(window.getComputedStyle(h1, null).getPropertyValue('font-size'));
   let contentSize = parseFloat(window.getComputedStyle(content, null).getPropertyValue('font-size'));

   h1.style.fontSize = (h1Size - 2) + 'px';
   content.style.fontSize = (contentSize - 2) + 'px';

};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

