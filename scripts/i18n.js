//get browser default language
const browserLanguage = navigator.language || navigator.languages[0];
let lang = browserLanguage.slice(0, 2);

switch(lang){
    case "de":
    case "en":
    case "fr":
    case "es":
    case "tr":
    case "sv":
        break;
    default:
        lang = "en"
}

const i18n = $.i18n({"locale": lang});
const language = i18n.locale;

$(document).ready(function(){
    i18n.load({
        "de": "i18n/de.json",
        "en": "i18n/en.json",
        "es": "i18n/es.json",
        "tr": "i18n/tr.json",
        "fr": "i18n/fr.json",
        "sv": "i18n/sv.json"
    }).done(function(){
        $("body").i18n();
        document.title = $.i18n("page-title");
        language = i18n.locale;
        if(language === "de"){
            $('#language').val("de").change();
        }
        $("#imprint-content").html($.i18n("imprint-content"))
    });
})

$('#language').on('change', function() {
    if(gameRunning){
        if (confirm($.i18n('game-reset-confirm')) == false) {
            return;
        }
        endGame();
    }
    i18n.locale = this.value;
    $("body").i18n();
    document.title = $.i18n("page-title");
    language = i18n.locale;
});