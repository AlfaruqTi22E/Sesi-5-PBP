const { celciusToFahrenheit } = require('./rumusSuhu');
const chalk = require('chalk');

const suhuCelcius = 30;
const hasil = celciusToFahrenheit(suhuCelcius);

console.log(chalk.cyan('=== APLIKASI KONVERSI SUHU ==='));
console.log(`Suhu Celsius: ${suhuCelcius}°C`);
console.log(chalk.green(`Suhu Fahrenheit: ${hasil}°F`));