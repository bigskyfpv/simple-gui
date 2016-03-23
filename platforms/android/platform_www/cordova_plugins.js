cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/fr.drangies.cordova.serial/www/serial.js",
        "id": "fr.drangies.cordova.serial.Serial",
        "clobbers": [
            "window.serial"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "fr.drangies.cordova.serial": "0.0.7",
    "cordova-plugin-whitelist": "1.2.1"
};
// BOTTOM OF METADATA
});