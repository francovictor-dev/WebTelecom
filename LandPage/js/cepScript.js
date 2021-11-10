var info = document.getElementsByClassName("info-text");
var cep = document.getElementsByClassName("cep");
var todosCeps = [
	//rodovia do tapanã
	"66825-010",
	//rua 0 (cabano)
	"66825-575",
	//1ª rua cabano
	"66825-365",
	//2ª rua cabano
	"66825-425",
	//3ª rua cabano
	"66825-445",
	//4ª rua cabano
	"66825-455",

	//itapuã rua 1
	"66825-335",
	//itapuã rua 2
	"66825-325",

	//passagem uberaba
	"66825-020",
	//rua tamandaré
	"66825-260",
	//rua costa e silva
	"66825-080",
	//rua castelo branco
	"66825-070",
	//rua dutra
	"66825-050",
	//alameda sorriso
	"66830-180",
	//passagem deus é amor
	"66825-039",
	//vila bom jesus
	"66825-850",

	//rua castor
	"66825-545",
	//rua tucano
	"66825-555",

	//rua vitória régia (prq. amazônia)
	"66825-535",
	//rua santarém (prq. amazônia)
	"66825-210",

	//rua 1 da olaria
	"66825-680",
	//rua alencar (olaria 2)
	"66825-180",
	//jardim das palmeiras (alencar, olaria 2)
	"66825-685",
	//rua da paz (olaria rua 3)
	"66825-190",
	//rua das flores (olaria)
	"66825-000",

	//travessa são geraldo
	"66825-250",

	//rua delta
	"66833-260",
	//rua gama
	"66833-250",
	//rua beta
	"66833-240",
	//rua alfa
	"66833-230",

	//rua yamada 
	"66635-008",
	//passagem santa bárbara
	"66833-610",
	//passagem santa marta
	"66833-590",
	//passagem santa vitória
	"66833-600",
	//passagem santa edwirges
	"66635-255",

	//Conjunto Mumuré
	//Rua principal
	"66815-860", 
	//Alameda 1
	"66823-060", 
	//Alameda 2
	"66823-061", 
	//Alameda 3
	"66823-062", 
	//Alameda 4
	"66823-063", 
	//Alameda 5
	"66823-064", 
	//Alameda 6
	"66823-066", 
	//Alameda 7
	"66823-067", 
	//Alameda 8
	"66823-068", 
	//Alameda 9
	"66823-069", 
	//Alameda 10 corrigido
	"66670-810", 
	//Alameda 11
	"66823-073", 
	//Alameda 12
	"66870-830"  
	
];
 
$(document).ready(function(){
  $(".disponibilidade .buscar").click(function(){
  	if(cep[0].value.length != 9){
  		info[0].innerHTML = "Verifique se está correto"
  	}else{
  		for (var i = 0; i < todosCeps.length; i++) {
  			if(todosCeps[i] == cep[0].value){
  				info[0].innerHTML = "Há cobertura nesta região";
  				break;
  			}else{
  				info[0].innerHTML = "Não há cobertura nesta região";
  			}
  		}
  	}
  });
});