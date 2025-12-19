const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startTerminalApp() {
    console.log('терминальное приложение запущено!');
    console.log('1 - сохранить текст в output.txt');
    console.log('2 - проанализировать data.txt');
    console.log('3 - логирование в log.txt');
    console.log('0 - выход');
    
    rl.question('выберите действие (0-3): ', (choice) => {
        switch(choice) {
            case '1':
                saveToOutput();
                break;
            case '2':
                analyzeDataFile();
                break; 
            case '3':
                startLogging();
                break;
            case '0':
                console.log('до свидания!');
                rl.close();
                break;
            default:
                console.log('неверный выбор!');
                startTerminalApp();
                break;
        }
    });
}

function saveToOutput() {
    rl.question('введите текст для сохранения в output.txt: ', (text) => {
        if (!text.trim()) {
            console.log('текст не может быть пустым!');
            saveToOutput();
            return;
        }
        
        try {
            fs.writeFileSync('output.txt', text, 'utf8');
            console.log('текст успешно сохранен в output.txt!');
            console.log(`содержимое файла: "${text}"`);
        } catch (error) {
            console.log('ошибка при записи файла:', error.message);
        }
        
        setTimeout(startTerminalApp, 1000);
    });
}

function analyzeDataFile() {
    try {
        if (!fs.existsSync('data.txt')) {
            const testData = `привет, мир!.`;
            fs.writeFileSync('data.txt', testData, 'utf8');
            console.log('создан тестовый файл data.txt');
        }
        
        const data = fs.readFileSync('data.txt', 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const characters = data.length;
        
        console.log('анализ файла data.txt:');
        console.log(`количество строк: ${lines.length}`);
        console.log(`количество символов: ${characters}`);
        console.log(`содержимое файла:"${data}"`);
        
    } catch (error) {
        console.log('ошибка при анализе файла:', error.message);
    }
    
    setTimeout(startTerminalApp, 2000);
}

function startLogging() {
    console.log('режим логгирования запущен!');
    console.log('вводите текст построчно. Для выхода введите "stop"');
    
    function logInput() {
        rl.question('> ', (input) => {
            if (input.toLowerCase() === 'stop') {
                console.log('логгирование завершено!');
                startTerminalApp();
                return;
            }
            
            try {
                const timestamp = new Date().toLocaleString();
                const logEntry = `[${timestamp}] ${input}\n`;
                
                fs.appendFileSync('log.txt', logEntry, 'utf8');
                console.log('запись добавлена в log.txt');
            } catch (error) {
                console.log('ошибка при записи в лог:', error.message);
            }
            
            logInput();
        });
    }
    
    logInput();
}

startTerminalApp();