function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointsThreshold = 12;
    let demeritPoints = 0;

    if (speed < speedLimit) {
        console.log("Ok");
    } 
    else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${demeritPoints}`);

        if (demeritPoints >= demeritPointsThreshold) {
            console.log("License suspended");
        }
    }
}
speedDetector(50)
