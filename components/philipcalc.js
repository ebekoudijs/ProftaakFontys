export default function philipcalc() {

    function bereken(radioWaarde, hoeveelheid, vlees) {
        var textboxOutput = document.getElementById("uitkomst");
        var textboxBesparing = document.getElementById("besparing");
        var proteine = document.getElementById("proteine");

        var proteValue = 0.0186 * hoeveelheid - vlees * hoeveelheid;
        var water = radioWaarde * hoeveelheid;
        var besparingValue = water - hoeveelheid * 4.341;

        textboxOutput.value = water.toFixed(2);
        textboxBesparing.value = besparingValue.toFixed(2);
        proteine.value = proteValue.toFixed(2);
    }
    function vleesSelect() {
        var radio1 = document.getElementById("radio1").value;
        var radio2 = document.getElementById("radio2").value;
        var radio3 = document.getElementById("radio3").value;
        var textboxInput = document.getElementById("textHoeveelheid");
        var textboxOutput = document.getElementById("uitkomst");
        var textboxBesparing = document.getElementById("besparing");
        var proteine = document.getElementById("proteine");
        var hoeveelheid = textboxInput.value;
        var proteHoeveelheid = [0.0138, 0.0105, 0.0127];


        if (document.getElementById("radio1").checked == true) {
            bereken(radio1, hoeveelheid, proteHoeveelheid[0]);
        }

        else if (document.getElementById("radio2").checked == true) {
            bereken(radio2, hoeveelheid, proteHoeveelheid[1]);
        }

        else if (document.getElementById("radio3").checked == true) {
            bereken(radio3, hoeveelheid, proteHoeveelheid[2]);
        }

        else {
            textboxOutput.value = "Vul a.u.b. geldige gegevens in.";
        }

    }

    return (
        <>
                <label htmlFor="textHoeveelheid">hoeveelheid vlees in gram: </label>
                <input type="text" id="textHoeveelheid" name="textHoeveelheid"></input>
                <br></br>
                <input type="radio" id="radio1" name="group1" value="15.415"></input>
                <br />
                <input id="radio2" type="radio" name="group1" value="5.988"></input>
                <br />
                <input id="radio3" type="radio" name="group1" value="4.325"></input>
                <br />

                <br />
                <label htmlFor="uitkomst">Aantal liter water gebruikt: </label>
                <input type="text" id="uitkomst" name="uitkomst" size="50"></input>
                <p id="uitkomst"></p>
                <br />
                <label htmlFor="besparing">Aantal liter water bespaard bij gebruik van meelwormen: </label>
                <input type="text" id="besparing" name="besparing"></input>
                <br />
                <p>
                    Wanneer er alleen maar naar waterverbruik gekeken wordt is kip het beste vlees, toch zijn er meerdere factoren van pas.
                        Proteïne is hier een goed voorbeeld van. er zit namelijk <input type="text" id="proteine" name="proteine" size="5"></input>
                            gram proteïne
                                meer in meelwormen dan in het ingevulde vleesproduct.
    </p>
            <button onClick={vleesSelect}>bereken</button>


        </>
    );
}
