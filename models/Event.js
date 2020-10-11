const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    // step 1 start
    email: {
        type: String
    },
    weddingName: {
        type: String
    },
    groomFirstName: {
        type: String
    },
    groomMiddleName: {
        type: String
    },
    groomLastName: {
        type: String
    },
    groomDateOfBirth: {
        type: String
    },
    groomPhoneNumber: {
        type: String
    },
    groomGender: {
        type: String
    },
    brideFirstName: {
        type: String
    },
    brideMiddleName: {
        type: String
    },
    brideLastName: {
        type: String
    },
    brideDateOfBirth: {
        type: String
    },
    bridePhoneNumber: {
        type: String
    },
    brideGender: {
        type: String
    },
    // step 1 end
    // step 2 start
    ceremonyType: {
        type: String,
        required: true
    },
    hotel: {
        type: String,
        required: true
    },
    checkInDate: {
        type: String,
        required: true
    },
    checkOutDate: {
        type: String,
        required: true
    },
    honeymoon: {
        type: Boolean
    },
    bookedRoom: {
        type: Boolean
    },
    roomNumber: {
        type: String,
        required: true
    },
    // step 2 end
    // step 3 start
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
    guestEmail: {
        type: String
    },
    guestSide: {
        type: String
    },
    // step 3 end
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

module.exports = mongoose.model('events', eventSchema)
