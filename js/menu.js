function menu (){

    let  componente= `
    <div class="fondo" id="modal">
         <img class="menu" src="https://cdn-icons-png.flaticon.com/512/39/39563.png" id="open" alt="" width="50 px">

      <p class="logo"><img class="Logo" src="https://www.shutterstock.com/image-vector/furniture-logo-design-creative-concept-260nw-2133395727.jpg" alt="" width="300 px"></p>
        <div class="">
        <A class="Home" HREF="Home.html"> Home</A>
        <A class="About" HREF="About.html"> About</A>
        <A class="Contact" HREF="Contact.html"> Contact</A>
        </div>


            <p class="login"><button>LOG IN</button></p>
            <p class="singup"><button>SING UP</button></p>

    </div>`;

    let menu_del_don = document.querySelector(".menu")

    menu_del_don.innerHTML= componente;
}

menu();