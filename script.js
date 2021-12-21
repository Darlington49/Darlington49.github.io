console.log("hi from script js")
var button = document.getElementById("myButton");
// button.addEventListener('pointerup', function (event) {
//     // Call navigator.bluetooth.requestDevice
//     console.log(event)
// });

button.addEventListener("pointerup", function () {
    document.getElementById("demo").innerHTML = "Hello World";
    navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        //filters: [{ services: ['battery_service'] }] 
    })
        .then(device => {
            // Human-readable name of the device.
            console.log(device.name);

            // Attempts to connect to remote GATT Server.
            return device.gatt.connect();
        })
        .then(server => { /* … */ })
        .catch(error => { console.error(error); });
});