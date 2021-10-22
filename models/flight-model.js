const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Flight = new Schema({
    departureLocation: String,
    destinationLocation: String,
    departureTime: new Date(),
    /**new Date() sets date as "YYYY-mm-ddThh:MM:ssZ"
     * where hh is hours, mm is minutes, and ss is seconds
     * and the time is in UTC
     * So we'll have to account for timezone this way
     */
    arrivalTime: new Date(),
    airline: String,
    maxCapacity: Number,
    seatsTaken: Number,
    airplaneType: String,
    pricePerSeat: Number
});

const flight = mongoose.model('flight', Flight);
modules.export = flight;