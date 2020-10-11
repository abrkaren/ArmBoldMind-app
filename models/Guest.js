const mongoose = require('mongoose')
const Schema = mongoose.Schema

const guestSchema = new Schema({
    guestFirstName: {
        type: String
    },
    guestMiddleName: {
        type: String
    },
    guestLastName: {
        type: String
    },
    guestPhoneNumber: {
        type: String
    },
    guestEmail:{
        type: String
    },
    guestSide:{
        type: String
    },
    created: {
        type: Date
    },
    updated: {
        type: Date
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('guests', guestSchema)
