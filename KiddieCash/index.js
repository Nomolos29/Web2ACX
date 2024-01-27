const themeSwitcher = document.getElementById('dark');
themeSwitcher.classList.add("uil-brightness");

themeSwitcher.onclick = function() {
    document.body.classList.toggle("dark-mode");
    if(themeSwitcher.classList.contains("uil-moon")){
        themeSwitcher.classList.remove("uil-moon")
        
        themeSwitcher.classList.toggle("uil-brightness");
    }else{
        
        themeSwitcher.classList.remove("uil-brightness")
        themeSwitcher.classList.toggle("uil-moon");
    };
}