let parking = require('../DTO/parking')
let paringLot = []
let capacities = 0


module.exports = {
  createParking(capacity) {
    capacities = capacity
    for (let index = 0; index < capacities; index++) {
      paringLot.push(new parking(index + 1, '', 0))
    }
    console.log(`Created parking lot with ${capacities} slots`)
  },

  findCar(car_number) {
    for (let index = 0; index < capacities; index++) {
      if (paringLot[index].car_number === car_number) {
        return paringLot[index].parking_no
      }
    }
    return false
  },

  addCar(car_number) {
    for (let index = 0; index < capacities; index++) {
      if (paringLot[index].car_number === '') {
        return paringLot[index].car_number = car_number
      }
    }
    console.log('Sorry, parking lot is full')
  },

  removeCar(car_number, hours) {
    let parking_fee = 0;
    let car = '';
    let parking_no = 0
    if (this.findCar(car_number) !== false) {
      car = car_number
      parking_no = this.findCar(car_number)
      if (hours <= 2) {
        parking_fee = 20;
      } else {
        parking_fee = 20 + (hours - 2) * 5;
      }
      paringLot[parking_no-1].car_number=''
      console.log(`Registration number ${car} with Slot Number ${parking_no} is free with Charge ${parking_fee}`)
    } else {
      console.log(`Registration number ${car_number} not found`)
    }
  },

  status() {
    // console.log(capacities)
    for (let index = 0; index < capacities; index++) {
      if (paringLot[index].car_number === '') {
        console.log(`Allocated slot number: ${paringLot[index].parking_no}`)
      }
    }

    console.log('Slot No. Registration No.')
    for (let index = 0; index < capacities; index++) {
      if (paringLot[index].car_number !== '') {
        console.log(paringLot[index].parking_no + ' ' + paringLot[index].car_number)
      }
    }
  }
}