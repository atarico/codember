const miniCompilador = (secretMessage) => {
    let initialMessage = 0;

    return secretMessage
        .split('')
        .reduce((result, symbol) => {
            if (symbol === '#') {
                initialMessage += 1;
            } else if (symbol === '@') {
                initialMessage -= 1;
            } else if (symbol === '*') {
                initialMessage *= initialMessage;
            } else if (symbol === '&') {
                result += initialMessage;
            }
            return result;
        }, '');
};
console.log(miniCompilador('&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'));