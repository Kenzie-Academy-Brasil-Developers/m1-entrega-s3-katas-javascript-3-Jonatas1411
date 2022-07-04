const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let kata1 = []
    for(let i= 1; i <= 25; i++){
        kata1.push(i)
    }
    return kata1
}
console.log(kata1())

function kata2() {
    let kata2 = []
    for(let i= 25; i >= 1; i--){
        kata2.push(i)
    }
    return kata2
}
console.log(kata2())

function kata3() {
    let kata3 = []
    for(let i = 1; i <= 25; i++){
        kata3.push(-i)
    }
    return kata3
}
console.log(kata3())

function kata4() {
    let kata4 = []
    for(let i = 25; i >= 1; i--){
        kata4.push(-i)
    }
    return kata4
}
console.log(kata4())

function kata5() {
    let kata5 = []
    for (let i = 25; i >= -25; i--){
         if(i % 2 != 0){
        kata5.push(i)
            
        }
    }
    return kata5
}
console.log (kata5())

function kata6() {
    let kata6 = []
    for (let i = 3; i < 100; i++) {
     if (i % 3 == 0 ){
        kata6.push(i)
     }
}   
return kata6

}
console.log(kata6())

function kata7() {
    let kata7 = []
    for (let i = 7; i <= 100; i++){
        if(i % 7 == 0)
        kata7.push(i)
    }
    return kata7
}
console.log(kata7())

function kata8() {
    let kata8 = []
        for (let i = 100; i > 1; i--) {
            if (i % 3 == 0 || i % 7 == 0){
                kata8.push(i)
            }
}
return kata8
}
console.log(kata8())

function kata9() {
    let kata9 = []
    for (let i = 1; i <= 100; i++){
        if (i % 5 == 0 && i % 3 !== 0){
            kata9.push(i)
        }

    }
    return kata9
}
console.log (kata9())

function kata10() {

        return sampleArray
}

console.log(kata10())

function kata11() {
    sampleArray.sort()
    let kata11 = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 == 0) {
            kata11.push(sampleArray[i])
        }
    }
    return kata11
}
console.log(kata11())

function kata12() {
    let kata12 = []
    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 != 0) {
            kata12.push(sampleArray[i])
        }
    }
    return kata12
}
console.log(kata12())

function kata13() {
    let kata13 = []
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 === 0) {
            kata13.push(sampleArray[i])
        }
    }
    return kata13
}
console.log(kata13())

function kata14() {
    let kata14 = []
    for(let i = 0; i< sampleArray.length; i++) {
        kata14.push(sampleArray[i] * sampleArray[i] )
    }
    return kata14
}
console.log(kata14())

function kata15() {
    let kata15 = 0
    for (let i = 1; i <= 20; i++){
        kata15 = kata15 + i
    }
    return kata15
}
console.log(kata15())

function kata16() {
    let kata16 = 0
    for (let i = 0; i< sampleArray.length; i++){
        kata16 += sampleArray[i]
    }
    return kata16
}
console.log(kata16())

function kata17() {
    sampleArray.sort()
    return sampleArray.slice(0, 1)
}
console.log(kata17())

function kata18() {
    sampleArray.sort()
    return sampleArray.slice(19, 20)
}
console.log(kata18())

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
