import utilStyles from '../styles/utils.module.css'
export default function philipcalc() {

    function bereken(radioWaarde, hoeveelheid, vlees, vleestype) {
        var proteValue = 0.0186 * hoeveelheid - vlees * hoeveelheid;
        var water = radioWaarde * hoeveelheid;
        var besparingValue = water - hoeveelheid * 4.341;
        document.getElementById("result").innerHTML = "Voor de productie van " + "<b>" + hoeveelheid + " gram " + vleestype + "</b>" + " is " + "<b>" + water.toFixed(2) + " liter water " + "</b>" + "nodig."
            + " Dat is " + "<b>" + besparingValue.toFixed(2) + " liter " + "</b>" +"meer/minder dan bij meelwormen nodig is."

            + " Ook zit er " + "<b>" + proteValue.toFixed(2) + " gram proteïne " + "</b>" + "meer in meelwormen dan in " + vleestype + " bij deze hoeveelheid.";
    }
    function vleesSelect() {
        var radio1 = document.getElementById("radio1").value;
        var radio2 = document.getElementById("radio2").value;
        var radio3 = document.getElementById("radio3").value;
        var textboxInput = document.getElementById("textHoeveelheid");
        var hoeveelheid = textboxInput.value;
        var proteHoeveelheid = [0.0138, 0.0105, 0.0127];

        if (document.getElementById("radio1").checked == true) {
            bereken(radio1, hoeveelheid, proteHoeveelheid[0], "rundvlees");
        }
        else if (document.getElementById("radio2").checked == true) {
            bereken(radio2, hoeveelheid, proteHoeveelheid[1], "varkensvlees");
        }
        else if (document.getElementById("radio3").checked == true) {
            bereken(radio3, hoeveelheid, proteHoeveelheid[2], "kip");
        }
        else {
            document.getElementById("result").innerHTML = "Voer geldige gegevens in";
        }

    }

    return (
        <>
            <h1>hoeveelheid vlees in gram: </h1>
            
            <input type="text" id="textHoeveelheid" name="textHoeveelheid"></input>
            <br />
            <input type="radio" id="radio1" name="group1" value="15.415"></input>
            <p>Rundvlees</p>
            <input id="radio2" type="radio" name="group1" value="5.988"></input>
            <p>Varkensvlees</p>
            <input id="radio3" type="radio" name="group1" value="4.325"></input>
            <p>Kip</p>
                <br />
            <button className={utilStyles.button} onClick={vleesSelect}>
                <p> Bereken </p>
            </button>
            <p id="result"></p>
            <p id ="test" />
        </>
    );
}
