
let mainNav=document.getElementById('main-nav');
let navbarToggle=document.getElementById('navbar-toggle');

navbarToggle.addEventListener("mouseover", function(){

    if(!this.classList.contains('active')){
        this.style.color="#F4880A";
    }
});

navbarToggle.addEventListener("mouseout", function(){

    if(this.classList.contains('active')){
        this.style.color="#F4880A";
    }
    else{
        this.style.color="black";
    }
});

navbarToggle.addEventListener('click',function(){

    if(this.classList.contains('active')){
        mainNav.style.display="none";
        this.classList.remove('active');
        this.style.color="black";
    }
    else{
        mainNav.style.display="flex";
        this.classList.add('active');
        this.style.color="#F4880A";
    }
});