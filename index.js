const lightMode = document.getElementById('lightMode');
const darkMode = document.getElementById('darkMode');
const navBar = document.getElementById('nav-bar');
const lightHider = document.getElementById('whiteHider');
const darkHider = document.getElementById('blackHider');
const hidedContent = document.getElementById('hidedContent');
const Hider = document.getElementsByClassName('Hider');
const lang = document.getElementById('lang');
const edu = document.getElementById('edu');
const proj = document.getElementById('proj')

darkMode.classList.add('hidden');
darkHider.classList.add('hidden');
hidedContent.classList.add('hidden')


lightMode.onclick = () => {
  document.body.style.color = 'black';
  document.body.style.backgroundColor = 'white';
  lightMode.classList.add('hidden');
  darkMode.classList.remove('hidden');
  darkMode.style.marginLeft = 'auto';
  navBar.style.backgroundColor = 'whitesmoke';
  lightHider.classList.add('hidden');
  darkHider.classList.remove('hidden');
  lang.src = 'Images/code-icon.png';
  edu.src = '/Images/edu-icon.png';
  proj.src = '/Images/project-icon.png';
};

darkMode.onclick = () => {
  document.body.style.color = 'white';
  document.body.style.backgroundColor = 'black';
  darkMode.classList.add('hidden');
  lightMode.classList.remove('hidden');
  lightMode.style.marginRight = '0'
  navBar.style.backgroundColor = '';
  darkHider.classList.add('hidden');
  lightHider.classList.remove('hidden');
  lang.src = '/Images/code-icon-dark.png';
  edu.src = '/Images/edu-icon-dark.png';
  proj.src = '/Images/project-icon-dark.png';

};

let showContent = false; // Tracks visibility status

// Initial check to hide content if showContent is false
if (showContent === false) {
  hidedContent.classList.add('hidden'); // Ensure content is hidden initially

}

// Loop through each element with the class 'Hider'
for (let i = 0; i < Hider.length; i++) {
  Hider[i].onclick = () => {
    showContent = !showContent; // Toggle the showContent state
    if (showContent) {
      hidedContent.classList.remove('hidden'); // Show content
      lightHider.src = '/Images/close-white.png'
      darkHider.src = '/Images/close-black.png'
    } else {
      hidedContent.classList.add('hidden'); // Hide content 
      lightHider.src = 'Images/menu-white.png'
      darkHider.src = 'Images/menu-black.png'
    }
  };
}

console.log(localStorage.theme)







