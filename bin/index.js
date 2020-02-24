const fs = require("fs");

const parkingDAO = require("./DAO/parkinglot");
try {

    fs.readFile("data.txt", function (err, data) {
        if (err) {
            return console.log(err)
        }
        let arrayData = data.toString().split("\n");

        for (i in arrayData) {
            let acction = arrayData[i].split(" ");
            switch (acction[0].replace(/\r/, "")) {
                case "create_parking_lot":
                    parkingDAO.createParking(
                        acction[1].replace(/\r/, "")
                    );
                    break;
                case "park":
                    parkingDAO.addCar(acction[1].replace(/\r/, ""));
                    break;
                case "leave":
                    parkingDAO.removeCar(acction[1].replace(/\r/, ""), acction[2].replace(/\r/, ""));
                    break;
                case "status":
                    parkingDAO.status();
                    break;
                default:
                    break;
            }
        }
    });
} catch (error) {
    console.log(error)
}