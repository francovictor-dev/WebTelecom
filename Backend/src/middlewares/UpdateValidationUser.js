const Model = require('../model/ModelUser');

async function UpdateValidation(req, res, next){
    const { name, address } = req.body;

    
    if(name == "")
        return res.status(400).json({error: 'Nome inválido!'});
    else if(address == "")
        return res.status(400).json({error: 'Endereço é obrigatório!'});
    
    

   
    next();
}

module.exports = UpdateValidation;