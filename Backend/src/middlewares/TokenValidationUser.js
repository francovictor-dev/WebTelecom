//importanto modulo de geração de token
const jwt = require('jsonwebtoken');
//importanto hash de token personalizado
const authConfig = require('../token/auth.json');

async function createValidation(req, res, next){
    //header da requisição
    const authHeader = req.headers.authorization;

    //se foi fornecido
    if(!authHeader)
        return res.status(401).send({error : 'Nenhum token fornecido!'});

    //dividir em 2 partes
    const parts = authHeader.split(' ');

    //se está dividindo em duas partes
    if(!parts.length === 2)
        return res.status(401).send({error : 'Token error!'});

    //parts dividido em Bearer e o token
    const [ scheme, token] = parts;

    //Regx para fazer essa operação sem tem Bearer no token
    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error : 'Token mal formado!'});

    //verificar se o token está correto
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err)
            return res.status(401).send({ error: 'Token inválido!'});
        
        //pegar o id do usuario
        req.userId = decoded.id;
        return next();
    });

    
    
}

module.exports = createValidation;