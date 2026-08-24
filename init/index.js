const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const { application } = require("express");

const MONGO_URL = "mongodb://127.0.0.1:27017/staynest";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({}); //delete preExisting data
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "6a8568033247c3abf87c5ec2"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");

}

initDB();