const Model = require('../model/ModelUser');

async function CreateValidation(req, res, next){
    const { name, cpf, plan, date, address } = req.body;
    if(!name)
        //não pode esquecer do campo User
        return res.status(400).json({error: 'Nome é obrigatório!'});
    else if(!cpf)
        return res.status(400).json({error: 'CPF é obrigatório!'});
    //else if(!plan)
    //    return res.status(400).json({error: 'Plano é obrigatório!'});
    //else if(!date)
    //    return res.status(400).json({error: 'Data de vencimento é obrigatório!'});
    else if(!address)
        return res.status(400).json({error: 'Endereço é obrigatório!'});
    else{
        //se existe
        let exists;
        
        //se nao existe um ids
        if(!req.params.id){
            exists = await Model.findOne({
                'cpf' : {'$in' : cpf}
            });
        }
        
        if(exists)
            return res.status(400).json({error: 'Já existe esse CPF cadastrado!'});

        next();
    }
} 

module.exports = CreateValidation;