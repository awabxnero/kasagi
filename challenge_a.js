const fs = require('fs');

function generateAlphabetical() {
    const length = Math.floor(Math.random() * 20) + 1; 
    return Array.from({ length }, () => {
        const charCode = Math.floor(Math.random() * 26) + (Math.random() < 0.5 ? 65 : 97); 
        return String.fromCharCode(charCode);
    }).join('');
}

function generateRealNumber() {
    const value = (Math.random() * 2000000 - 1000000).toFixed(
        Math.floor(Math.random() * 5) + 1
    );
    return value.replace(/\.?0+$/, '');
}

function generateInteger() {
    return (Math.floor(Math.random() * 2000000) - 1000000).toString();
}

function generateFile() {
    const targetSize = 10 * 1000 * 1000
    let fileSize = 0;
    const stream = fs.createWriteStream('output/output.txt');

    function generateRandomObject() {
        const choice = Math.floor(Math.random() * 4);
        switch (choice) {
            case 0:
                return generateAlphabetical(); 
            case 1:
                return generateRealNumber(); 
            case 2:
                return generateInteger(); 
            case 3: {
                const totalSpaces = Math.floor(Math.random() * 11); 
                const leadingSpaces = Math.floor(Math.random() * (totalSpaces + 1));
                const trailingSpaces = totalSpaces - leadingSpaces;
                const alnumLength = Math.floor(Math.random() * 20) + 1;
                const alnum = Array.from({ length: alnumLength }, () => {
                    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('');
                return ' '.repeat(leadingSpaces) + alnum + ' '.repeat(trailingSpaces);
            }
        }
    }

    function writeChunk() {
        const randomObject = generateRandomObject();
        const chunk = (fileSize > 0 ? ',' : '') + randomObject;
        
        if (fileSize + chunk.length > targetSize) {
            stream.end(() => console.log('File generated: output/output.txt'));
            return;
        }

        if (!stream.write(chunk)) {
            stream.once('drain', writeChunk);
        } else {
            fileSize += chunk.length;
            process.nextTick(writeChunk);
        }
    }

    writeChunk();
}

generateFile();