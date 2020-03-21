class VigenereCipheringMachine {
    constructor (direct = true) {
        this.direct = direct;
    };

    encrypt(message, keyword) {
        let result = '';
        let lowMessage = message.toLowerCase();
        let lowKeyword = keyword.toLowerCase();
        let encryptedMessage = '';

        for (;lowKeyword.length < lowMessage.length;) {
            lowKeyword += lowKeyword;
        };

        let j = 0;
        for (let i = 0; i < lowMessage.length; i++) {
            if (lowMessage.charCodeAt(i) >= 97 && lowMessage.charCodeAt(i) <= 122) {
                let offset = lowKeyword.charCodeAt(j) - 97;
                if (lowMessage.charCodeAt(i) + offset > 122) {
                    encryptedMessage = lowMessage.charCodeAt(i) + offset - 26;
                } else {
                    encryptedMessage = lowMessage.charCodeAt(i) + offset;
                };
                result += String.fromCharCode(encryptedMessage);
                j++;
            } else {
                result += lowMessage[i];
            };
        };
        return this.direct ? result.toUpperCase() : result.toUpperCase().split('').reverse().join('');
    };

    decrypt(message, keyword) {
        let result = '';
        let lowMessage = message.toLowerCase();
        let lowKeyword = keyword.toLowerCase();
        let decryptedMessage = '';

        for (;lowKeyword.length < lowMessage.length;) {
            lowKeyword += lowKeyword;
        };

        let j = 0;
        for (let i = 0; i < lowMessage.length; i++) {
            if (lowMessage.charCodeAt(i) >= 97 && lowMessage.charCodeAt(i) <= 122) {
                let offset = lowKeyword.charCodeAt(j) - 97;
                if (lowMessage.charCodeAt(i) - offset < 97) {
                    decryptedMessage = lowMessage.charCodeAt(i) - offset + 26;
                } else {
                    decryptedMessage = lowMessage.charCodeAt(i) - offset;
                };
                result += String.fromCharCode(decryptedMessage);
                j++;
            } else {
                result += lowMessage[i];
            };
        };
        return this.direct ? result.toUpperCase() : result.toUpperCase().split('').reverse().join('');
    };
}

module.exports = VigenereCipheringMachine;
