const Model = require('../model/ModelAdmin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../token/auth.json');
class ControllerAdmin{

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

        if(req.body.password){
            const hash = await bcrypt.hash(req.body.password, 10);
            req.body.password = hash;
        }

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
            .sort('user')//organiza os dados usuarios
            .then(response => {
                return res.status(200).json(response);
            }).catch(error => {
                return res.status(500).json(error);
            });
    }

    async show(req, res){
        
        await Model.find(req.body)
            .then(response => {
                if(response)
                    return res.status(200).json(response);
                else
                    return res.status(404).json({error: 'Registro não encontrado'});
                
            }).catch(error => {
                return res.status(500).json(error);
            });
    }

    async select(req, res){
        await Model.findById(req.params.id)
            .then(response => {
                if(response)
                    return res.status(200).json(response);
                else
                    return res.status(404).json({error: 'Registro não encontrado'});
                
            }).catch(error => {
                return res.status(500).json(error);
            });
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
        const { user, password } = req.body;

        if(!user)
            return res.status(400).json({error: 'Usuário é obrigatório!'});
        else if(!password)
            return res.status(400).json({error: 'Senha é obrigatório!'});
        //se existe
        let usuario;
 
        usuario = await Model.findOne({ user }).select('+password');
        
        if(usuario){
            if(await bcrypt.compare(password, usuario.password)){
                const token = jwt.sign({id : usuario.id}, authConfig.secret, {
                    expiresIn: 86400,
                });
                usuario.password = undefined;
                res.send({usuario, token});
                //return res.status(200).json(exists);
            }else{
                return res.status(400).json({error:'Senha incorreta!'});
            }
        }else{
            return res.status(400).json({error: 'Não existe este usuário'});
        }
    }

    async token(req, res){
        res.send({ok : true, usuario : req.userId});
    }
}

module.exports = new ControllerAdmin();