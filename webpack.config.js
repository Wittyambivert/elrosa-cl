const path = require("path");

module.exports = {
    entry: "./app/assets/dev/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/assets/prod/scripts"),
        filename: "App.js"
    }
}