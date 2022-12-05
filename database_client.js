var SMALL_IMAGES=5;
var siz = true;
var cateName='';
var amountReturn=5;

function ShowCategry(){
    /* Maybe use prompt showing the categoty
    Otherwise is ok*/
}

function tips(){
    alert("1.small letter acceptable   2.please refer the input category    3.Invalid input will stop you");
}

function ON(){
    alert("HELLO")
}
window.onload=function(){
    printImages();
    initialDatebase();
    categoryName();
}
function printImages(){
    
    var newDiv=document.createElement("div");
    $(newDiv).attr("class","allImg");
    var newDivv=document.createElement("div");
    $(newDivv).attr("class","smallImg");
    $(newDiv).append(newDivv);
    console.log("1");
    for(var i=1;i<=5;i++){
        console.log("2");
        var newImg=document.createElement("img")
        $(newImg).attr("id","s"+i)
        $(newImg).attr("src","./images/apple_1.jfif")
        $(newDivv).append(newImg);
    }
    console.log("3");
    
}

function s1(){
    var fulling=document.getElementById("fullImage");
    $(fulling).attr("src","./images/"+window.location.href.split("?")[1]+"_1.jfif");
}function s2(){
    var fulling=document.getElementById("fullImage");
    $(fulling).attr("src","./images/"+window.location.href.split("?")[1]+"_2.jfif")
}function s3(){
    var fulling=document.getElementById("fullImage");
    $(fulling).attr("src","./images/"+window.location.href.split("?")[1]+"_3.jfif")
}function s4(){
    var fulling=document.getElementById("fullImage");
    $(fulling).attr("src","./images/"+window.location.href.split("?")[1]+"_4.jfif")
}function s5(){
    var fulling=document.getElementById("fullImage");
    $(fulling).attr("src","./images/"+window.location.href.split("?")[1]+"_5.jfif")
}

function printSmall(){
    for(var i=1;i<=5;i++){
        var s=document.getElementById("s"+i);
        $(s).attr("src","./images/"+window.location.href.split("?")[1]+"_"+i+".jfif")
    }
}

var bank=["apple", "banana", "cherry", "donut", "egg", "fish", "galaxy", "hippo", "icecream", "jellyfish", "kangaroo", "lion", "mango", "nut", "orange", "pineapple", "quokka", "rainbow", "squirre","tiger", "umbrella","violin","whale", "xray", "yard", "zebra"]

function initialDatebase(){
    //reset the button's position and visibility
    cateName=window.location.href.split("?")[1];
    var step = parseInt($(".allImg").css("margin-top")) 
	         + parseInt($(".allImg").css("height"));
    $(".smallImg").css({'height' : '80px'});
    $(".smallImg").css({'margin' : '10px'});
    $(".smallImg").css({'cursor' : 'pointer'});
    $(".smallImg").css({'display' : 'block'});
    $(".smallImg").css({'opacity' : '.6'});
    $(".zoomImg").css({'float' : 'right'});
    $(".zoomImg").css({'padding' : '10px'});
    $.post(url+'?'+window.location.href.split("?")[1]+JSON.stringify({'name':cateName,'action':'activeImages'}),
    response);
}

function ON(){
    for(var i=1;i<=5;i++){
        var s=document.getElementById("s"+i);
        $(s).attr("src","./images/"+window.location.href.split("?")[1]+"_"+i+".jfif")
    }
    alert("all Images are setted")
}

var sta = true;
function lidr() {
    if (sta == true) {
        document.getElementById("seabo").style.backgroundImage = "linear-gradient(rgba(174, 169, 199, 0.637),rgba(174, 169, 199, 0.637)),url(Background_img/jerry-zhang-SJGiS1JzUCc-unsplash2.jpg)";
    }
    else {
        document.getElementById("seabo").style.backgroundImage = "linear-gradient(rgba(174, 169, 199, 0.637),rgba(174, 169, 199, 0.637)),url(Background_img/jerry-zhang-SJGiS1JzUCc-unsplash.jpg)";
    }
    sta = reverse(sta);     
}

function reverse(flag) {
    if (flag == true) {
        flag = false;
    }
    else {
        flag = true;
    }
    return flag;
}

var siz = true;
function letterSize() {
    
    if (siz == true) {
        document.getElementById("head1").style.fontSize = "smaller";
        document.getElementById("head2").style.fontSize = "smaller";
        document.getElementById("seabo1").style.fontSize = "X-large";
        document.getElementById("categor").style.fontSize = "x-small";
        document.getElementById("footer").style.fontSize = "smaller";
    }
    else {
        document.getElementById("head1").style.fontSize = "larger";
        document.getElementById("head2").style.fontSize = "larger";
        document.getElementById("seabo1").style.fontSize = "XX-large";
        document.getElementById("categor").style.fontSize = "small";
        document.getElementById("footer").style.fontSize = "larger";
    }
    siz = reverse(siz);
}

var win = response['win'];
function categoryName(cateName,amountReturn){
    var response = JSON.parse("Your category was: "+cateName);
    console.log(cateName);
    amountReturn = response[5];
        displayResult(cateName, "red");
        displayResult(amountReturn, "white");
}
 
function category() {
    alert("We got " + Num() + " categories");
}

function Num() {
    return bank.length;
}


