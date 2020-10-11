const Guest = require('../models/Guest')

const errorHandler = require('../utils/errorHandler')
const fs = require('fs');

module.exports.createGuest = async (req, res) => {

    let data = await req.body;

    var today = new Date();
    today.setHours(today.getHours());
    data.created = today;
    data.updated = today;

    const guest = await new Guest(data)
    try {
        await guest.save();
        res.status(201).json(guest);
    } catch (e) {
        console.log(e)
        errorHandler(res, e);
    }

}

module.exports.getGuests = async function (req, res) {
    
    try {
        const guest = await Guest.find();
        res.status(200).json(guest)
    } catch (e) {
        errorHandler(res, e)
    }
    
}