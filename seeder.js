const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
// data
const { descriptors, places } = require("./json/seedHelpers");
const cities = require("./json/data.js");
// load env vars
dotenv.config({ path: "./config/config.env" });
// load models
const Campground = require("./models/CampgroundModel");

// connect to db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

// import into mongo
const importData = async () => {
  try {
    await Campground.deleteMany();
    const random1000 = Math.floor(Math.random() * 1000);
    for (let i = 0; i < 50; i++) {
      const camp = new Campground({
        location: `${cities[random1000].city}, ${cities[random1000].state}`,
        title: `${sample(descriptors)} ${sample(places)}`,
      });
      await camp.save();
    }
    console.log("Data imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// delete data from mongo
const deleteData = async () => {
  try {
    await Campground.deleteMany();
    console.log("Data destroyed...".red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// type into terminal 'node seeder -i'
if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
