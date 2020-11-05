export default function darkmode() {
    return (
        <p className="darkmodebutton" onClick={function () {
            var element = document.body;
            element.classList.toggle("dark-mode");
        }}> 
            KLIK VOOR DARKMODE
        </p>
    );
}

