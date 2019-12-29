//document.getElementsByTagName(button).addEventListener("click",fuction())
function makeBold() {

    var area = document.getElementById("textarea");
    if (document.getElementById("textarea").style.fontWeight == "bold") {
        document.getElementById("textarea").style.fontWeight = "normal";
    } else {
        document.getElementById("textarea").style.fontWeight = "bold";

    }
}

function makeItalic() {

    var area = document.getElementById("textarea");
    if (document.getElementById("textarea").style.fontStyle == "italic") {
        document.getElementById("textarea").style.fontStyle = "normal";
    } else {
        document.getElementById("textarea").style.fontStyle = "italic";

    }
}

function makeUnderline() {

    var area = document.getElementById("textarea");
    if (document.getElementById("textarea").style.textDecoration == "underline") {
        document.getElementById("textarea").style.textDecoration = "none";
    } else {
        document.getElementById("textarea").style.textDecoration = "underline";

    }
}

function changer() {
    select = document.getElementById("select").value;
    console.log(select)
    document.getElementById("textarea").style.fontSize = select;



}

function makedStyle() {
    select = document.getElementById("selectt").value;
    console.log(select)
    document.getElementById("textarea").style.fontFamily = select;



}