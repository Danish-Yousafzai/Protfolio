const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translate( -16rem)'
}
function closeMenu(){
    sideMenu.style.transform = 'translate( 16rem)'
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme',
            'dark:shawdow-white/20'
        );
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50'
            , "dark:bg-transparent"
         );
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme',
            'dark:shawdow-white/20');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50'
            , "dark:bg-transparent");
    }
})

// LightMood and DarkMood

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.
matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme(){
    document.documentElement.classList.toggle('dark');
    
    if( document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
  }
  

   function showMoreCard() {
    const uiuxCard = document.getElementById('hidden-uiux-card');
    const btn = document.getElementById('showMoreBtn');

    if (uiuxCard.classList.contains('hidden')) {
      uiuxCard.classList.remove('hidden');
      btn.innerHTML = `Show Less
        <img src="./img/right-arrow-bold.png" alt="" class="w-4 rotate-180 dark:hidden">
        <img src="./img/right-arrow-bold-dark.png" alt="" class="w-4 rotate-180 hidden dark:block">`;
    } else {
      uiuxCard.classList.add('hidden');
      btn.innerHTML = `Show More
        <img src="./img/right-arrow-bold.png" alt="" class="w-4 dark:hidden">
        <img src="./img/right-arrow-bold-dark.png" alt="" class="w-4 hidden dark:block">`;
    }
  }
