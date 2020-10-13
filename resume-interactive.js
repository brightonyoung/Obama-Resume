const ghostphoto = () => { 

    const pic = document.getElementById("profilepic");
    
    pic.classList.add('animate__animated', 'animate__fadeOut');
    
}


const magicphone = () => {

    document.getElementById('phone').style.visibility = "visible";

    const specialphone = document.getElementById("phone");
    // specialphone.style.visibility = "visible";
    specialphone.classList.add('animate__animated', 'animate__fadeIn');

}

const appearingname = () => {
    const name = document.getElementById('name')
    name.classList.add('animate__animated', "animate__fadeIn");
}