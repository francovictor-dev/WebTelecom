const ModelAdmin = require('../model/ModelAdmin');
const bcrypt = require('bcryptjs');

async function UpdateValidation(req, res, next){
    
    if(req.body.password){
        const hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;
    }
    
    next();
}

module.exports = UpdateValidation;