/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeTheme = (theme) => {
   document.querySelector("body").className = theme;
};

document.querySelector("#default").addEventListener('click', function(){changeTheme("")});
document.querySelector("#desert").addEventListener('click', function () { changeTheme("desert") });
document.querySelector("#ocean").addEventListener('click', function () { changeTheme("ocean") });
document.querySelector("#high-contrast").addEventListener('click', function () { changeTheme("high-contrast") });

