var number = Math.floor(Math.random()*10);
var answer = parseInt(window.prompt('数あてゲーム☆彡0~10の数字を入れてね☆彡'));

var message;
if(answer === number){
 message = 'あたり！';
}else if (answer < number){
 message = '残念！もっとおおきいよ！';
}else if (number < answer){
 message = '残念！もっとちいさいよ～';
}else{
 message = '0~10までの数字を入力してね';
}



document.getElementById('choice').textContent = message;
