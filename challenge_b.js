const fs = require('fs');

function determineType(trimmed) {
    if (/^[A-Za-z]+$/.test(trimmed)) {
        return 'alphabetical string';
    } else if (/^-?\d+$/.test(trimmed)) {
        return 'integer';
    } else if (/^-?\d+\.\d+$/.test(trimmed)) {
        return 'real number';
    } else if (/^[A-Za-z0-9]+$/.test(trimmed)) {
        return 'alphanumeric';
    }
    return 'unknown';
}

function processFile() {
    try {
        const data = fs.readFileSync('output.txt', 'utf-8');
        const objects = data.split(',');
        
        const results = [];
        
        for (const obj of objects) {
            const trimmed = obj.trim(); 
            const type = determineType(trimmed);
            const output = `${trimmed}: ${type}`;
            console.log(output); 
            results.push(output);
        }
        
        fs.writeFileSync('analysis_results.txt', results.join('\n'));
        
        console.log('Analysis completed: analysis_resultstxt');
        
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

processFile();
