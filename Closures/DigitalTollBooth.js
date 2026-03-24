function createTollBooth() {
    let totalCar = 0;
    let totalMoneyCollected = 0;

    return {
        vehicle(vehicleType) {
            if (vehicleType === 'car') {
                totalCar += 1;
                totalMoneyCollected += 5;
            }
        },

        reset() {
            totalCar = 0;
            totalMoneyCollected = 0;
        },

        getStats() {
            console.log(`Total cars passed ${totalCar} and money collected ${totalMoneyCollected}`);
        },
    }
}

const nagpur = createTollBooth();
nagpur.vehicle("car");
nagpur.vehicle("car");
nagpur.getStats();
nagpur.vehicle("car");
nagpur.getStats();