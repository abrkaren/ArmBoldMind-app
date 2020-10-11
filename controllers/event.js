const Event = require('../models/Event')

const errorHandler = require('../utils/errorHandler')
const fs = require('fs');

module.exports.createEvent = async (req, res) => {

    let data = await req.body;
    // console.log(data)
    var today = new Date();
    today.setHours(today.getHours());
    data.created = today;
    data.updated = today;

    const event = await new Event(data)
    try {
        await event.save();
        res.status(201).json(event);
    } catch (e) {
        console.log(e)
        errorHandler(res, e);
    }

}

module.exports.getEvents = async function (req, res) {

    try {
        const event = await Event.find();
        res.status(200).json(event)
    } catch (e) {
        errorHandler(res, e)
    }

}