import utilStyles from '../styles/utils.module.css'


export default function darkmode() {
    return (
        <>
                <button className={utilStyles.button} onClick={function () {
                    var element = document.body;
                    element.classList.toggle("dark-mode");
                }} >
            <h3>Dark mode</h3>
            
                </button>
               
        </>
    );
}

