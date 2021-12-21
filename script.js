console.log("hi from script js")
var button = document.getElementById("myButton");
// button.addEventListener('pointerup', function (event) {
//     // Call navigator.bluetooth.requestDevice
//     console.log(event)
// });

button.addEventListener("pointerup", function () {
    document.getElementById("demo").innerHTML = "Hello World";
    navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
        .then(device => { /* … */ })
        .catch(error => { console.error(error); });
});