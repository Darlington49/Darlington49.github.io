console.log("hi from script js")
var button = document.getElementById("myButton");
// button.addEventListener('pointerup', function (event) {
//     // Call navigator.bluetooth.requestDevice
//     console.log(event)
// });

button.addEventListener("pointerup", function () {
    document.getElementById("demo").innerHTML = "Hello World";
    // navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
    //     .then(device => device.gatt.connect())
    //     .then(server => {
    //         // Getting Battery Service…
    //         return server.getPrimaryService('battery_service');
    //     })
    //     .then(service => {
    //         // Getting Battery Level Characteristic…
    //         return service.getCharacteristic('battery_level');
    //     })
    //     .then(characteristic => {
    //         // Reading Battery Level…
    //         return characteristic.readValue();
    //     })
    //     .then(value => {
    //         console.log(`Battery percentage is ${value.getUint8(0)}`);
    //     })
    //     .catch(error => { console.error(error); });

    navigator.bluetooth.requestDevice({ filters: [{ services: ['heart_rate'] }] })
        .then(device => device.gatt.connect())
        .then(server => server.getPrimaryService('heart_rate'))
        .then(service => service.getCharacteristic('heart_rate_measurement'))
        .then(characteristic => characteristic.startNotifications())
        .then(characteristic => {
            characteristic.addEventListener('characteristicvaluechanged',
                handleCharacteristicValueChanged);
            console.log('Notifications have been started.');
        })
        .catch(error => { console.error(error); });

    function handleCharacteristicValueChanged(event) {
        const value = event.target.value;
        console.log('Received ');
        console.log(value);
        // TODO: Parse Heart Rate Measurement value.
        // See https://github.com/WebBluetoothCG/demos/blob/gh-pages/heart-rate-sensor/heartRateSensor.js
    }
});