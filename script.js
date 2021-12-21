console.log("hi from script js")
var button = document.getElementById("myButton");
// button.addEventListener('pointerup', function (event) {
//     // Call navigator.bluetooth.requestDevice
//     console.log(event)
// });

button.addEventListener("pointerup", function () {
    document.getElementById("demo").innerHTML = "Hello World";
    navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
        .then(device => device.gatt.connect())
        .then(server => {
            // Getting Battery Service…
            return server.getPrimaryService('battery_service');
        })
        .then(service => {
            // Getting Battery Level Characteristic…
            return service.getCharacteristic('battery_level');
        })
        .then(characteristic => {
            // Reading Battery Level…
            return characteristic.readValue();
        })
        .then(value => {
            console.log(`Battery percentage is ${value.getUint8(0)}`);
        })
        .catch(error => { console.error(error); });
});