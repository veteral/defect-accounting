const {model, Schema, ObjectId} = require('mongoose')


const Object = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    passwords: {type:String, required: true},
    telefone: {type:String, default: ''},
    device: {type: String, default: ''},    
    defects: [
        { 
            train: { type: String, required: true },
            date: { type: String, required: true },
            time: { type: String, required: true },
            cause: { type: ObjectId, ref: 'Cause' },
        }
    ],
})

module.exports = model('Object', Object);
