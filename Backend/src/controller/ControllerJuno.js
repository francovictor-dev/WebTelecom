const juno = require('../config/junoTokenAccess');
const api = require('../services/junoApi');

function GerarToken(){
    token = juno.authorization.accessToken();
}

let token = juno.authorization.accessToken();

setInterval(GerarToken,3599999);

class JunoController{
    
    async accessToken(req, res){
        
        await token.then(r => {
            //console.log(res);
            return res.status(200).json(r.access_token);
        })
        
    }

    async charge(req, res){
        
        await token.then(r => {
            
            api.get(`/api-integration/charges?magic=${req.params.cpf}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + r.access_token, 
                    'X-API-Version': 2,
                    'X-Resource-Token': 'token',               
                    'Content-Type' :  'application/json'
                }
            }).then(response => {
                
                //response.data._embedded.charges.map(t => console.log(t.link));
                //console.log(response.status);
                //console.log(response.statusText);
                //console.log(response.headers);
                
                return res.status(200).json(response.data);
            });
            
        })

    }

}

module.exports = new JunoController();