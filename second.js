let readline = require('readline');


class Game{
    firStstep(){
console.log("DUDE GAME(LOL DUDE)");
console.log("||||||||||||||||||||||||||||||||");
    };
    info() {
let myHp = 50;
let rHp = 100


let damage;//= Math.floor(Math.random() * 5 + 1)

let m =[["1 :Ударить в голову","2: Ударить в тело", "3: Ударить в ноги"]];
let n =[["Защитить голову","Защитить тело","Защитить ноги"]];
let j;
let t = 1;



console.log("O нет это же олеже! Мои действия(как настояжего героя): ");
console.log("");
for(let i = 0; i < m.length; i++){
    console.log(m[i]);
}
    };
    damageforOleg(){

rl = readline.createInterface(process.stdin, process.stdout);

rl.prompt();
rl.on('line', function(line){
  if(t > 0){
j = Math.floor(Math.random() * 3 + 1);

switch(line.trim()){
    case "1":
    if(j == 1){
console.log("");
console.log("Олег отразил удар");
console.log("Его hp: " + rHp);
    }
    else{
damage = Math.floor(Math.random() * 10 + 1);
rHp = rHp - damage;
console.log("Ты ударил Олега по голове");
console.log("Сила удара: " + damage);
if(rHp <= 0){
    console.log("Эх у бедолаги олега 0hp")
    console.log("");
    console.log("Ты выйграл");
}
else{
    console.log("Его hp: " + rHp);
}
    }
    break;
    case"2":
    if(j == 2){
            console.log("");
            console.log("Олег отразил удар");
            console.log("Его hp: " + rHp)
    }
    else{
        damage = Math.floor(Math.random() * 8 + 1 );
        rHp = rHp - damage;
        console.log("Ты ударил Олега по телу");
        console.log("Сила удара: " + damage);
        if(rHp <= 0){
            console.log("Эх у бедолаги олега 0hp")
            console.log("");
            console.log("Ты выйграл");
        }
        else{
            console.log("Его hp: " + rHp);
        }
    }
    break;
    case "3":
        if(j == 3){
                console.log("");
                console.log("Олег отразил удар");
                console.log("Его hp: " + rHp)
        }
        else{
            damage = Math.floor(Math.random() * 5 + 1);
            rHp = rHp - damage;
            console.log("Ты ударил Олега по ногам");
            console.log("Сила удара: " + damage);
            if(rHp <= 0){
                console.log("Эх у бедолаги олега 0hp")
                console.log("");
                console.log("Ты выйграл");
            }
            else{
                console.log("Его hp:" + rHp);
            }
        }
    break;
}
for(let i = 0; i < m.length; i++){
    console.log(n[i]);
}
t *= -1; 
}
else{

    j = Math.floor(Math.random() * 3 + 1);

    switch(line.trim()){
        case "1":
        if(j == 1){
    console.log("");
    console.log("Ты отразил удар");
    console.log("Твое hp:" + myHp);
        }
        else{
    damage = Math.floor(Math.random() * 10 + 1);
    myHp = myHp - damage;
    console.log("Тебя ударил Олег по голове");
    console.log("Сила удара" + damage);
    if(myHp <= 0){
        console.log("Эх у тебя 0hp")
        console.log("");
        console.log("Ты проиграл");
    }
    else{
        console.log("Твое hp:" + myHp);
    }
        }
        break;
        case"2":
        if(j == 2){
            console.log("");
            console.log("Ты отразил удар");
            console.log("Твое hp: " + myHp);
        }
        else{
            damage = Math.floor(Math.random() * 8 + 1 );
            myHp = myHp - damage;
            console.log("Тебя ударил Олег по телу ");
            console.log("Сила удара: " + damage);
            if(rHp <= 0){
                console.log("Эх у тебя 0hp")
                console.log("");
                console.log("Ты проиграл");
            }
            else{
                console.log("Твое hp: " + myHp);
            }
        }
        break;
        case "3":
            if(j == 3){
                console.log("");
                console.log("Ты отразил удар");
                console.log("Твое hp: " + myHp);
            }
            else{
                damage = Math.floor(Math.random() * 5 + 1);
                myHp = myHp - damage;
                console.log("Тебя по голове");
                console.log("Сила удара: " + damage);
                if(myHp <= 0){
                    console.log("Эх у тебя 0hp")
                    console.log("");
                    console.log("Ты проиграл");
                }
                else{
                    console.log("Твое hp: " + myHp);
                }
            }
        break;
    }
    for(let i = 0; i < m.length; i++){
        console.log(m[i]);
    }
   t *= -1; 
}


    rl.prompt();
}).on('close', function(){
    console.log('Ты закрыл игру(Cntrl+C)');
    process.exit(0);
});
    
    }

}
