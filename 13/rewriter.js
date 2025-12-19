const fs = require('fs');
const readline = require('readline');

if (process.argv.length < 3) {
    console.error('Использование: node rewriter.js filename.txt');
    process.exit(1);
}

const filename = process.argv[2];

try {
    if (fs.existsSync(filename)) {
        const content = fs.readFileSync(filename, 'utf8');
        console.log(`текущее содержимое файла ${filename}:`);
        console.log('---');
        console.log(content);
        console.log('---\n');
    } else {
        console.log(`файл ${filename} не существует.`);
    }
} catch (error) {
    console.error(`ошибка при чтении файла: ${error.message}`);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('введите новый текст', (newText) => {
    try {
        fs.writeFileSync(filename, newText, 'utf8');
        console.log(`файл ${filename} успешно перезаписан.`);
    } catch (error) {
        console.error(`ошибка при записи файла: ${error.message}`);
    }
    
    rl.close();
});