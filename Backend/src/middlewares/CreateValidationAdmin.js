const ModelAdmin = require('../model/ModelAdmin');

async function CreateValidation(req, res, next){
    const { user, password, typeAdmin } = req.body;
    if(!user)
        //não pode esquecer do campo User
        return res.status(400).json({error: 'Usuário é obrigatório!'});
    else if(!password)
        return res.status(400).json({error: 'Senha é obrigatório!'});
    else if(!typeAdmin)
        return res.status(400).json({error: 'Tipo de Admin é obrigatório!'});
    else{
        //se existe
        let exists;
        
        //se nao existe um ids
        if(!req.params.id){
            exists = await ModelAdmin.findOne({
                'user' : {'$in' : user}
            });
        }
        
        if(exists)
            return res.status(400).json({error: 'Já existe esse usuário'});

        next();
    }
} 

module.exports = CreateValidation;