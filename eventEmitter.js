var events = require("events");
import * as fs from "fs";

function emitEvent() {
    const eventEmitter = new events.EventEmitter();
    // eventEmitter.on("getData", () => {
    //     // fetch the input
    //     eventEmitter.emit("storeData");
    // });

    eventEmitter.on("storeData", () => {
        // store data in a file
        writeDataToFile();
        // eventEmitter.emit("acknowledge");
    });

    eventEmitter.on("acknowledge", () => {
        // acknowledge
    });

    eventEmitter.on("error", () => {
        console.log("Received error");
    });

    return eventEmitter;
}

async function writeDataToFile() {
    try {
        await fs.writeFileSync("URL is hit at: " + Date.now(), "utf8", {flag: 'a+'});
        return true;
    } catch(e) {
        return false;
    }
}

module.exports = emitEvent();
