function footer (){

    let  componentes= `
    <div class="footer">
        <A class="Home" HREF="Home.html"> Home</A>
        <A class="About" HREF="About.html"> About</A>
        <A class="Contact" HREF="Contact.html"> Contact</A>
        </div>`;

    let pie_del_dom = document.querySelector(".pie_de_pagina")

    pie_del_dom.innerHTML= componentes;
}

footer();

