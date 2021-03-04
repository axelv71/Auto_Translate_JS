/*
    Auto Translate | Version 0.5.1
    Created by Axel Vion
    GitHub : UnPotDeYaourt

    This plugin use Reverso api :
    https://www.reverso.net/text_translation.aspx?lang=EN
*/

window.onload = () => {
    if (document.getElementById("trlInit")) {
        var from = document.getElementById("trlInit").dataset.trlfrom;
        var to = document.getElementById("trlInit").dataset.trlto;
    } else {
        console.warn("The plugin needs trlInit to work");
    }

    for (var i = 0; i < document.getElementsByClassName("trlText").length; i++) {
        var e = document.getElementsByClassName("trlText")[i];
        if(document.getElementsByClassName("trlText")[i].tagName == "INPUT") {
            translate(i, document.getElementsByClassName("trlText")[i].placeholder);
        } else {
            translate(i, e.textContent);
        }   
    }

    function translate(id, text) {
        const jsonBody = {
            format: "text",
            from: from,
            input: text,
            options: {
                origin: "reversodesktop",
                sentenceSplitter: true,
                contextResults: true,
                languageDetection: false
            },
            contextResults: true,
            languageDetection: false,
            origin: "reversodesktop",
            sentenceSplitter: true,
            to: to,
        }

        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                var response = JSON.parse(this.responseText);
                if(document.getElementsByClassName("trlText")[id].tagName == "INPUT") {
                    document.getElementsByClassName("trlText")[id].placeholder = response.translation[0];
                } else {
                    document.getElementsByClassName("trlText")[id].innerHTML = response.translation[0];
                }  

            }
        };
        request.open("POST", "https://api.reverso.net/translate/v1/translation");
        request.setRequestHeader("Content-Type", "application/json");

        request.send(JSON.stringify(jsonBody));
    }
}