var happy=["https://mindbodygreen-res.cloudinary.com/image/upload/w_767,q_auto:eco,f_auto,fl_lossy/ftr/woman-abundance.jpg","https://www.silverhccenter.com/wp-content/uploads/2018/07/happy-mood.jpg","https://crazyyetwise.files.wordpress.com/2011/01/happy.jpg"];
var sad=["https://image.shutterstock.com/image-photo/portrait-man-sad-mood-people-450w-1024988086.jpg","https://cdn.shopify.com/s/files/1/1061/1924/products/Sad_Face_Emoji_large.png?v=1480481055","https://cdn4.iconfinder.com/data/icons/emoticons-27/64/disappoint-512.png"];
var annoyed=["https://www.thelocal.ch/userdata/images/article/890bc41b95d5a4eca1a33e96f359f38de1fc8e4578aee0e1c3a81ba7753b1cef.jpg","https://i.pinimg.com/originals/56/92/d0/5692d096777213a7f713c9841ba04a66.png","http://experience.sweetflag.club/webhook-uploads/1468611931240/1333982900_kristen-stewart-lg06.jpg"];
var fear=["https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4Ny8yMDUvb3JpZ2luYWwvc2NpZW5jZS1vZi1mZWFyLmpwZw==","https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/face-screaming-in-fear.png","https://www.thepainproject.com/wp-content/uploads/2017/01/iStock-519492437-min-910x510.jpg"];

$('button').click(function(){
    var input = $('input').val();
        $(".images").html("");
    if(input === "happy"){
        happyMood();
    } else if(input==="sad"){
        sadMood();
    }else if(input==="annoyed"){
        annoyedMood();
    }else if(input==="fearful"){
        fearfulMood();
    }else{
        alert("Please enter happy, annoyed, sad or fearful");   
    }
});

function happyMood(){
    displayImage(happy);
    changeTextColor("green");
    changeBackground("https://previews.123rf.com/images/mirage3/mirage31203/mirage3120300070/12947705-fun-young-and-happy-background-with-overlayed-bubbles-of-varying-colors-and-opacity-mainly-in-shades.jpg");
}

function sadMood(){
    displayImage(sad);
    changeTextColor("grey");
    changeBackground("https://i.ytimg.com/vi/xDXbPiOvClw/maxresdefault.jpg");

}

function annoyedMood(){
    displayImage(annoyed);
    changeTextColor("red");
    changeBackground("https://media2.giphy.com/media/l4KihuqeuJEi9qLSM/giphy.gif");
}

function fearfulMood(){
    displayImage(fear);
    changeTextColor("yellow");
    changeBackground("https://i.pinimg.com/originals/bf/a9/ff/bfa9ff33b9e5ba640c67e0c1a88eb4f4.jpg");
}
function displayImage(images){
    images.forEach(function(element){
    $(".images").append("<img src ="+ element + ">");    
    });
}

function changeTextColor(color){
    $('body').css('color', color);
}

function changeBackground(backgroundImage){
    $('body').css('background-image', "url("+backgroundImage+")");
}

 