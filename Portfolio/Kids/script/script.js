// JavaScript Document

var x=0;
var y=0;
var ctx;
var nmatriz = 0;
var matriz=new Array(2);
var play = 0;

var apple = new Audio('apple.mp3');
var ball = new Audio('ball.mp3');
var lion = new Audio('lion.mp3');
var book = new Audio('book.mp3');
var sun = new Audio('sun.mp3');
var moon = new Audio('moon.mp3');
var flower = new Audio('flower.mp3');
var coffee = new Audio('coffee.mp3');
var smile = new Audio('smile.mp3');
var house = new Audio('house.mp3');
var five = new Audio('five.mp3');
var star = new Audio('star.mp3');

function atualizaTela(){
	var i=0;
	var j=0;

	for(i=0;i<2;i++){
		for(j=0;j<6;j++){
			cont++;
			
			if(matriz[i][j] == 1){
				ctx.fillStyle = "#FF0000";
				ctx.fillRect(j*100+2,i*100+2,98,98);
			}
							
			if(matriz[i][j] == 2){
				ctx.fillStyle = "#0000FF";
				ctx.fillRect(j*100+2,i*100+2,98,98);
			}
		}
	}
}

function comeca(){
	iniciaJogo();
	iniciaJogo();
}

function iniciaJogo() {
	var c=document.getElementById("canvasing");
	alert("Iniciando game")
	ctx=c.getContext("2d");
	
	var img = new Image();
	img.src = "fundo.jpg";
	
	ctx.drawImage(img,0,0,600,200);

	var i=0;
	var j=0;
	for(i=0;i<2;i++){
		matriz[i]=new Array(6);
	}

	for(i=0;i<2;i++){
		for(j=0;j<6;j++){
			matriz[i][j]=nmatriz;
			nmatriz++;
		}
	}
	
}

function clique(event){
	var x = event.clientX - 8;
	var y = event.clientY - 8;
	
	i = Math.floor(y/100);
	j = Math.floor(x/100);
	
	if ((x > 0 && x < 101) && (y > 0 && y < 101) && (play == 0)){
		alert ("ACERTOU!");
	}
	
	else if ((x > 100 && x < 201) && (y > 0 && y < 101) && (play == 1)){
		alert ("ACERTOU!");
	}
	
	else if ((x > 200 && x < 301) && (y > 0 && y < 101) && (play == 2)){
		alert ("ACERTOU!");
	}
	
	else if ((x > 300 && x < 401) && (y > 0 && y < 101) && (play == 3)){
		alert ("ACERTOU!");
	}
	
	else if ((x > 400 && x < 501) && (y > 0 && y < 101) && (play == 4)){
		alert ("ACERTOU!");
	}
	
	else if ((x > 500 && x < 601) && (y > 0 && y < 101) && (play == 5)){
		alert ("ACERTOU!");
	}
	
	else if ((x > 0 && x < 101) && (y > 100 && y < 201) && (play == 6)){
		alert ("ACERTOU!");
	}
	
	else if ((x > 100 && x < 201) && (y > 100 && y < 201) && (play == 7)){
		alert ("ACERTOU!");
	}
	
	else if ((x > 200 && x < 301) && (y > 100 && y < 201) && (play == 8)){
		alert ("ACERTOU!");
	}
	
	else if ((x > 300 && x < 401) && (y > 100 && y < 201) && (play == 9)){
		alert ("ACERTOU!");
	}
	
	else if ((x > 400 && x < 501) && (y > 100 && y < 201) && (play == 10)){
		alert ("ACERTOU!");
	}
	
	else if ((x > 500 && x < 601) && (y > 100 && y < 201) && (play == 11)){
		alert ("ACERTOU!");
	}
	
	else{
		alert ("ERROU!");
	}
	
}

function song (){
	play = Math.floor(Math.random() * 12);
	
	if (play === 0){
		apple.play();
	}
	
	if (play === 1){
		ball.play();
	}
	
	if (play === 2){
		lion.play();
	}
	
	if (play === 3){
		book.play();
	}
	
	if (play === 4){
		sun.play();
	}
	
	if (play === 5){
		moon.play();
	}
	
	if (play === 6){
		flower.play();
	}
	
	if (play === 7){
		coffee.play();
	}
	
	if (play === 8){
		smile.play();
	}
	
	if (play === 9){
		house.play();
	}
	
	if (play === 10){
		five.play();
	}
	
	if (play === 11){
		star.play();
	}
}
