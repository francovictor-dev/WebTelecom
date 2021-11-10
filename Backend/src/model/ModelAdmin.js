const { Schema } = require('mongoose');
const mongoose = require('../config/database');
const bcrypt = require('bcryptjs');
const schema = mongoose.Schema;

const SchemaAdmin = new Schema({
    user: {type: String, required: true},
    password: {type: String, required: true, select: false},
    typeAdmin: {type: String, enum : ['AdminComum', 'SuperAdmin'], required: true}  
});

SchemaAdmin.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

module.exports = mongoose.model('Admin', SchemaAdmin);
