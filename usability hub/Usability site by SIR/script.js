// MENU BAR
const toggleBtn = document.getElementById('nav-toggle');
const navLink = document.getElementById('nav-link');

toggleBtn.addEventListener('click', () => {
    navLink.classList.toggle('active');
})



// DARK MODE
const toggleButton = document.getElementById('toggle-dark-mode');
let isDarkMode = false;

toggleButton.addEventListener('click', () => {
    if (isDarkMode) {
        // Light Mode Colors
        document.documentElement.style.setProperty('--primary-text-color', '#577592');
        document.documentElement.style.setProperty('--secondary-text-color', '#183b56');
        document.documentElement.style.setProperty('--accent-color', '#2294ed');
        document.documentElement.style.setProperty('--accent-color-dark', '#1d69a3');
        document.documentElement.style.setProperty('--background-color', '#ffffff'); // Set light background
    } else {
        // Dark Mode Colors
        document.documentElement.style.setProperty('--primary-text-color', '#e0e0e0');
        document.documentElement.style.setProperty('--secondary-text-color', '#b0b0b0');
        document.documentElement.style.setProperty('--accent-color', '#bb86fc');
        document.documentElement.style.setProperty('--accent-color-dark', '#3700b3');
        document.documentElement.style.setProperty('--background-color', '#092a2a'); // Dark background color
    }
    isDarkMode = !isDarkMode;
});


// const toggleloginBtn = document.getElementById('nav-toggle');
// const navLink = document.getElementById('nav-link');

// toggleBtn.addEventListener('click', () => {
//     navLink.classList.toggle('active');
// })

// document.querySelector("#show-login").addEventListener("click",function(){
//     document.querySelector(".popup").style.display="flex";
// });

// document.querySelector(".close-btn").addEventListener("click",function(){
//     document.querySelector(".popup").style.display="none";
// });


document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector("#popup").classList.add("active");
    // document.documentElement.style.setProperty('--background-color', '#404040');
    document.querySelector("#popup").style.boxShadow= "2px 200px 500px 500px rgba(0, 0, 0, 0.347)";
});

document.querySelector(".close-btn").addEventListener("click",function(){
    document.querySelector("#popup").classList.remove("active");
});

