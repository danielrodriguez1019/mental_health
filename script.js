var step = 0;
var age;
var name;
var ethnicity;

function $(x){
    return document.querySelector(x);
}

$("#submit").onclick = function(){
    step++;


    if(step == 1){
        name = $("#fullname").value;
        age = $("#age").value;
        ethnicity = $("#ethnicity").value;



        $("#newPerson").style.display = "none";



        $("#form").innerHTML += "<p id=\"greet2\">Nice to meet you " + name + '!</p>';
        let topic = "<select id='topic'>";
            topic += "<option value='family'>family</option>";
            topic += "<option value='love'>love</option>";
            topic += "<option value='friends'>friends</option>";
            topic += "<option value='emotions'>emotions</option>";
            topic += "<option value='bullying'>bullying</option>";
        topic += "</select>";
        $("#form").innerHTML += topic;
    }
    else if(step == 2){
        let userTopic =$("#topic").value;
        $("#greet2").style.display = "none";
        $("#topic").style.display = "none";
        $("#myAudio source").src =  ("music/" + userTopic + ".mp3");
        switch (userTopic){
            case "family":
                $("#form").innerHTML += "<p> It's ok I'm here for you. Family problems are common, but you just have to take it a quarter mile at a time. </p>";
                
                break;
            case "love":
                $("#form").innerHTML += "<p> Sometimes love may not be what we think and that's ok. We all go through heartbreaks and betrayals but it's something we learn to move on. I believe in life after love. </p>";
                break;
            case "friends":
                $("#form").innerHTML += "<p> Every friendship needs one argument just to see how stable it really is. </p>";
                break;
            case "emotions":
                $("#form").innerHTML += "<p> Take all the time you need to heal emotionally. Heal at your own pace, step by step, day by day. </p>";
                break;
            case "bullying":
                $("#form").innerHTML += "<p> Those who judge will never understand, and those who understand will never judge. </p>";
                break;
        }
        $("#myAudio").load();
        $("#myAudio").play();
        $("#submit").style.display="none";
        $("#form").innerHTML += "<iframe src='research.html' width='100%' height='750px'></iframe>";
    }

};