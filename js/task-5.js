let country = 'Чили'// ;
let credits;

const userCountry = prompt (`Введите свою страну для оформления доставки товара`);
console.log ('userСoutry before: ', userCountry);

const normalizeCountry = userCountry.toLowerCase();
console.log ('userСoutry after: ', userCountry);
console.log ('normalizeCountry: ', normalizeCountry);

console.log(country === userCountry); 
 
switch (country) {
	case 'Китай':
		credits = 100;
		break;

	case 'Чили':
		credits = 250;
		break;

	case 'Австралия':
		credits = 170;
		break;
	
	case 'Индия':
		credits = 80;
		break;
		
	case 'Ямайка':
		сredits = 120;
		break;

		default:
			alert(`В вашей стране доставка не доступна`);
			
			
}

console.log (`Доставка в ${country} будет стоить ${credits} кредитов`);	