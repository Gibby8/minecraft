var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var play_object = "";
var block_object = "";

function play_update(){
    fabric.Image.fromURL("player.png",function(Img){
        play_object = Img;

        play_object.scaleToWidth(150);
        play_object.scaleToHeight(140);
        play_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(play_object);
    });


}

function new_image(get_image){
    fabric.Image.formURL(get_image,function(Img){
        block_object = Img;

        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypress = e.keyCode;
    console.log(keypress);

    if(e.shiftKey == true && keypress == "80"){
        console.log("shift and p");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10; 
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }
    if(e.shiftKey == true && keypress == "77"){
        console.log("shift and m");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10; 
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
        
    }
    if(keypress == "37"){
        left();
        console.log("left");
    }
    if(keypress == "38"){
        up();
        console.log("up");
    }
    if(keypress == "39"){
        right();
        console.log("right");
    }
    if(keypress == "40"){
        down();
        console.log("down");
    }
    if(keypress == "87"){
        new_image("wall.jpg");
        console.log("w");
    }
    if(keypress == "71"){
        new_image("ground.png");
        console.log("g");
    }
    if(keypress == "76"){
        new_image("light_green.png");
        console.log("l");
    }
    if(keypress == "84"){
        new_image("trunk.jpg");
        console.log("t");
    }
    if(keypress == "82"){
        new_image("roof.jpg");
        console.log("r");
    }
    if(keypress == "89"){
        new_image("yellow_wall.png");
        console.log("y");
    }
    if(keypress == "68"){
        new_image("dark_green.png");
        console.log("d");
    }
    if(keypress == "85"){
        new_image("uniqe.png");
        console.log("u");
    }
    if(keypress == "67"){
        new_image("cloutd.jpg");
        console.log("c");
    }
}
function up(){
    console.log("up");
    if (player_y > 0){
        player_y = player_y - block_image_height;
        canvas.remove(play_object);
        play_update();
    }
}
function left(){
    console.log("left");
    if (player_x > 0){
        player_x = player_x - block_image_width
        canvas.remove(play_object);
        play_update();
    }
}
function right(){
    console.log("right");
    if (player_x <= 850){
        player_x = player_x + block_image_width
        canvas.remove(play_object);
        play_update();
}
function down(){
    console.log("down");
    if (player_y <= 500){
        player_y = player_y + block_image_height;
        canvas.remove(play_object);
        play_update();
    }
}