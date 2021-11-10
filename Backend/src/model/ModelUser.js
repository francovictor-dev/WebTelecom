const { Schema } = require('mongoose');
const mongoose = require('../config/database');
const schema = mongoose.Schema;

const SchemaUser = new Schema({
    name: {type: String, required: true},
    cpf: {type: String, required: true, select: false},
    plan: {type: String, enum : ['', '50MB', '100MB', '200MB', '300MB'], required: false, default: ''},
    date: {type: Number, enum : [5, 10, 15, 20], required: false},
    address: {type: String, required: true}
});


module.exports = mongoose.model('User', SchemaUser);
