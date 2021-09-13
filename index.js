function writeCards(name, event){
    const newArr = [];
    for (let i = 0; i < name.length; i ++){
    newArr.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    console.log(newArr);
    return newArr;
    
}

writeCards(["Ada", "Brendan", "Ali"], "birthday")

function countDown(num){
    while (num >= 0){
        console.log(num--)
    }
}

countDown(10);