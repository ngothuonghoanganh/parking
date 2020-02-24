const run = require('../DAO/parkinglot');
const testcases = require('./testData');


console.log(testcases)
console.log('test create parking -----------------------------')
try {
    run.createParking(7)
} catch (error) {
    console.log(`failed on input=${7} `)
}

console.log('test add car -----------------------------')


for (const testcase of testcases) {
    try {
        run.addCar(testcase.carNo)
        console.log('pass')
    } catch (error) {
        console.log(`failed on input=${testcase.carNo} `)
    }
}
console.log('test leave -----------------------------')
for (const testcase of testcases) {
    try {
        run.removeCar(testcase.carNo, testcase.hours)
    } catch (error) {
        console.log(`failed on input=${testcase.carNo} and hours=${testcase.hours}`)
    }
}

console.log('test status -----------------------------')
try {
    run.status()
} catch (error) {
    console.log('failed')   
}
// run.status()
// run.addCar('KA-01-HH-1234')
// run.addCar('KA-01-HH-9999')
// run.addCar('KA-01-BB-0001')
// run.addCar('KA-01-HH-7777')
// run.addCar('KA-01-HH-2701')
// run.addCar('KA-01-HH-3141')
// run.removeCar('KA-01-HH-3141',4)
// run.status()
// run.addCar('KA-01-P-333')
// run.addCar('DL-12-AA-9999')
// run.removeCar('KA-01-HH-1234',4)
// run.removeCar('KA-01-BB-0001',6)
// run.removeCar('DL-12-AA-9999',2)
// run.status()
// run.addCar('KA-09-HH-0987')
// run.addCar('CA-09-IO-1111')
// run.addCar('KA-09-HH-0123')
// run.status()
// run.addCar()