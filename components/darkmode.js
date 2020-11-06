import utilStyles from '../styles/utils.module.css'


export default function darkmode() {
    return (
        <>
                <button className={utilStyles.button} onClick={function () {
                var element = document.body;
                var navbar = document.getElementById("navbarcontainer");
                element.classList.toggle("dark-mode");
                navbar.classList.toggle("dark-mode");
                }} >
            <h3>Dark mode</h3>
            
                </button>
               
        </>
    );
}

