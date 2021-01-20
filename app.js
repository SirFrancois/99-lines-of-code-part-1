const friends = ['maliek', 'Chris', 'Eric', 'Dj', 'Ant' ];
//josh helped with this loop

for (let j = 0; j < friends.length; j++){
    console.log(friends[j] + ":")

//The stuff i wrote before josh helped
    for (let i = 99; i > 0; i--){


//the lines above was " i > friends.length" before changes//
     if(i > 2){
    console.log(i + "lines of code on the wall" + i + "Lines of code" + friends[j] +  "strikes one down, clears it all out" + (i-1) + "lines of code on the wall")
    }else if(
        i == 2  ){
            console.log(i + "lines of code on the wall" + i + "Lines of code" + friends[j] +  "strikes one down, clears it all out" + (i-1) + "line of code on the wall")
        }
    
    else{ 
    console.log(i + "lines of code on the wall" + i + "lines of code" + friends[j] + "strikes one down, clears it all out, no more lines of code in the file")

    
}
}
}