var uuidConstant = '5fc96259-acca-4e48-baa5-834843d42ebf'; //random
var app = {
  // Application Constructor
  initialize: function() {
    console.log("app initialize");
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    popupBox("The Device is now ready");
    app.receivedEvent('deviceready');
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
    console.log('Received Event: ' + id);
  }
};

function getBTState(){
  popupBox("getBTState");
  chrome.bluetooth.getAdapterState(function(adapterInfo){
    popupBox( "AdapterState Address: " + adapterInfo.address );
    popupBox( "AdapterState Name: " + adapterInfo.name );
    popupBox( "AdapterState Powered : " + adapterInfo.powered );
    popupBox( "AdapterState Available: " + adapterInfo.available );
    popupBox( "AdapterState Discovering: " + adapterInfo.discovering );
  });
}
function enableBT(){
  popupBox("enableBT");
}
function disableBT(){
  popupBox("disableBT");
}
function getBTDevices(){
  popupBox("getBTDevices");
}
function connectRHO(){
  popupBox("connectRHO");
}
function connectLHO(){
  popupBox("connectLHO");
}
function sendRHO(){
  popupBox("sendRHO");
}
function sendLHO(){
  popupBox("sendLHO");
}
function startBTDiscovery(){
  popupBox("startBTDiscovery");
}
function requestUserDiscoverable(){
  popupBox("requestUserDiscoverable");
}
