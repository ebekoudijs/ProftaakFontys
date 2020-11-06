import utilStyles from '../styles/utils.module.css'


export default function darkmode() {
    return (
        <>
                <button className={utilStyles.button} onClick={function () {
                var element = document.getElementById("container");
                var navbar = document.getElementById("navbarcontainer");
                element.classList.toggle("dark-mode");
                navbar.classList.toggle("dark-mode");
                }} >
            <h3>Dark mode</h3>
            
                </button>
               
        </>
    );
}

//Cookies om darkmode te onthouden
//Dark mode tot aan onder de pagina