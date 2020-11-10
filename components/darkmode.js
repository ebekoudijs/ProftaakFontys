import utilStyles from '../styles/utils.module.css'


export default function darkmode() {
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

    return (
        <>
            {checkCookie()}
            <button className={utilStyles.button} onClick={function () {
                var cookie = getCookie("darkmode");
                if (cookie == 'false') { setCookie("darkmode", true, 365); }
                else if (cookie == 'true') { setCookie("darkmode", false, 365); }

            }}>
                <h3>Dark mode cookie</h3>
            </button>

            






            <button className={utilStyles.button} onClick={function () {
                var cookie = document.cookie;


                var element = document.getElementById("container");
                var navbar = document.getElementById("navbarcontainer");
                element.classList.toggle("dark-mode");
                navbar.classList.toggle("dark-mode");
                //document.cookie = "darkMode=true; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/"; 

            }} >
                <h3>Dark mode</h3>
            </button>
               
        </>
    );
}

//Cookies om darkmode te onthouden
//Dark mode tot aan onder de pagina