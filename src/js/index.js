const a = 5;
const sum = a * a 
const b = 'Labuka, cia yra BANDYMAS'
function show(band) {
    let sum = 0;
    for(let i = 1; i < 10;i++) {
        sum+=band * band
    }
    return sum
}
console.log(show(2));
console.log(sum);
console.log(b);
