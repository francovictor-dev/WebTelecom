const Model = require('../model/ModelUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../token/auth.json');

class ControllerUser{

    async create(req, res){
        const admin = new Model(req.body); 

        await admin
            .save()
            .then(response => {
                return res.status(200).json(response);
            }).catch(error => {
                return res.status(500).json(error);
            });
            
    }

    async update(req, res){
        //estudar esse método
        await Model.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true})
        .then(response => {
            return res.status(200).json(response);
        }).catch(error => {
            return res.status(200).json(error);
        });

        //console.log(ModelAdmin.collection.collectionName);
        
    }

    async all(req, res){  
        //não receber pelo corpo da requisição mas pelo parametro
        await Model.find()
            .sort('name')//organiza os dados nomes
            .then(response => {
                return res.status(200).json(response);
            }).catch(error => {
                return res.status(500).json(error);
            });
    }

    async show(req, res){
        if(req.params.name){

            await Model.find({ 
                'name': {'$regex': req.params.name, '$options': 'i'}
                }).select('+cpf')
                .then(response => {
                    if(response){
                        return res.status(200).json(response);
                        response.body.cpf = undefined;
                    }
                    else
                    {
                        return res.status(404).json({error: 'Registro não encontrada'});
                        response.body.cpf = undefined;
                    }
                    
                }).catch(error => {
                    return res.status(500).json(error);
                    error.body.cpf = undefined;
                });
    
        }else if(req.params.cpf){

            await Model.find({ 
                'cpf': {'$regex': req.params.cpf, '$options': 'i'}
                }).select('+cpf') 
                .then(response => {
                    if(response)
                    {
                        return res.status(200).json(response);
                        response.body.cpf = undefined;
                    }
                    else
                    {
                        return res.status(404).json({error: 'Registro não encontrada'});
                        response.body.cpf = undefined;
                    }
                    
                }).catch(error => {
                    return res.status(500).json(error);
                    error.body.cpf = undefined;
                });

        }else if(req.params.plan){

            await Model.find({ 
                'plan': {'$regex': req.params.plan, '$options': 'i'}
                }).select('+cpf')
                .then(response => {
                    if(response)
                    {
                        return res.status(200).json(response);
                        response.body.cpf = undefined;
                    }
                    else
                    {
                        return res.status(404).json({error: 'Registro não encontrada'});
                        response.body.cpf = undefined;
                    }
                    
                }).catch(error => {
                    return res.status(500).json(error);
                    error.body.cpf = undefined;
                });

        }else if(req.params.address){

            await Model.find({ 
                'address': {'$regex': req.params.address, '$options': 'i'}
                }).select('+cpf')   
                .then(response => {
                    if(response)
                    {
                         return res.status(200).json(response);
                         response.body.cpf = undefined;
                    }
                    else
                    {
                        return res.status(404).json({error: 'Registro não encontrada'});
                        response.body.cpf = undefined;
                    }
                    
                }).catch(error => {
                    return res.status(500).json(error);
                    error.body.cpf = undefined;
                });
        
        }else if(req.params.date){

            await Model.find({ 
                date: req.params.date
                }).select('+cpf')  
                .then(response => {
                    if(response)
                    {
                        return res.status(200).json(response);
                        response.body.cpf = undefined;
                    }
                    else
                    {
                        return res.status(404).json({error: 'Registro não encontrada'});
                        response.body.cpf = undefined;
                    }
                    
                }).catch(error => {
                    return res.status(500).json(error);
                    error.body.cpf = undefined;
                });

        }
        
    }

    async select(req, res){
        let usuario = await Model.findById(req.params.id).select('+cpf')
            .then(response => {
                if(response)
                    return res.status(200).json(response);
                else
                    return res.status(404).json({error: 'Registro não encontrado'});
                
            }).catch(error => {
                return res.status(500).json(error);
            });
        
            usuario.cpf = undefined;
    }

    async delete(req, res){
        await Model.deleteOne({'_id': req.params.id})
            .then(response => {
                return res.status(200).json(response);
            }).catch(error => {
                return res.status(500).json(error);            
            });
        
    }

    async auth(req, res){
        const { cpf } = req.body;

        if(!cpf)
            return res.status(400).json({error: 'CPF é obrigatório!'});
        
        //se existe
        let usuario;
 
        usuario = await Model.findOne({ cpf }).select('+cpf');
        
        

        if(usuario){

            const token = jwt.sign({id : usuario.id}, authConfig.secret, {
                expiresIn: 86400,
            });
            usuario.cpf = undefined;
            res.send({usuario, token});

        }else{
            return res.status(400).json({error: 'Não existe este usuário'});
        }
    }

    async token(req, res){
        res.send({ok : true, usuario : req.userId});
    }
}

module.exports = new ControllerUser();