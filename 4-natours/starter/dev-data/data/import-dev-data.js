const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Tour = require('../../models/tourModel');
const Review = require('../../models/reviewModel');
const User = require('../../models/userModel');

dotenv.config({ path: './config.env' });

// MongoDB Hosted
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then(() => {
  console.log('DB connection successful!');
});

// MongoDB local
// mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
//   console.log('DB connection successful!');
// });

// Read file json
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`), 'utf-8');
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`), 'utf-8');
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`),
  'utf-8',
);

// Import data into DB
const importData = async () => {
  try {
    await Tour.create(tours);
    // 20 user password is: test1234
    await User.create(users, { validateBeforeSave: false });
    await Review.create(reviews);
    console.log('Data successfully loaded!');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// Deleted all data from DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
    console.log('Data successfully deleted!');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// console.log(process.argv);

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
