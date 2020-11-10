import utilStyles from '../styles/utils.module.css'


export default function darkmode() {
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    function checkCookie() {
        var darkmode = getCookie("darkmode");
        if (darkmode != "") {
        }
        else { setCookie("darkmode", false , 365); }
    }
    function toggleDarkMode() {
        var darkmodevalue = getCookie("darkmode");
        var element = document.body;
        var contentwrapper = document.getElementById("container")
        
        if (darkmodevalue == 'true') {  
            element.classList.add("dark-mode");
            console.error(element);
            console.error(darkmodevalue);
        }
        else if (darkmodevalue == 'false') {
            element.classList.remove("dark-mode");
            console.error(element);
            console.error(darkmodevalue);
        }
    }

    return (
        <>
            {checkCookie()}
            <button className={utilStyles.button} onClick={function () {
                var cookie = getCookie("darkmode");
                if (cookie == 'false') {
                    setCookie("darkmode", true, 365);
                    toggleDarkMode();
                }
                else if (cookie == 'true') {
                    setCookie("darkmode", false, 365);
                    toggleDarkMode();
                }

            }} onLoad={toggleDarkMode() } id="button">
                <h3 id="Test">Dark mode cookie</h3>
            
            </button>
                     
        </>
    );
}
