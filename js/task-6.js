let total = 0;

while (true) {
	let input = prompt (`Введите число`);

	if (input === null) {
		console.log (`Отменено пользователем!`);
		break;
	}

	input = Number(input);

	const notANumber = Number.isNaN(input);

	if (notANumber){
		console.log (`Введено не число,пропускаем текущую интерацию!`);
		continue;
	}

	total += input;
}
console.log (`Общая сума ${total}`);