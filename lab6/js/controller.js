const fs = require('fs');

// Read the data file
function readData(fileName) {
    try {
        const dataRead = fs.readFileSync(`./data/${fileName}.json`, 'utf8');
        return JSON.parse(dataRead);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`File ${fileName}.json not found.`);
        } else {
            console.error(`Error reading ${fileName}.json:`, error.message);
        }
        return []; // Return an empty array if there's an error
    }
}

// Write the data file
function writeData(info, fileName) {
    try {
        fs.writeFileSync(`./data/${fileName}.json`, JSON.stringify(info, null, 2));
        console.log(`${fileName}.json updated successfully.`);
    } catch (error) {
        console.error(`Error writing ${fileName}.json:`, error);
    }
}

// Combine counts or add new item
function combineCounts(name, value) {
    let info = readData(name);
    let found = false;

    for (let i = 0; i < info.length; i++) {
        if (info[i][name] === value) {
            info[i].count++;
            found = true;
            break;
        }
    }

    if (!found) {
        info.push({ [name]: value, count: 1 });
    }

    writeData(info, name);
}

// Handle form submission
exports.submitSurvey = (req, res) => {
    const formData = req.body;

    for (const key in formData) {
        if (Object.hasOwnProperty.call(formData, key)) {
            if (Array.isArray(formData[key])) {
                formData[key].forEach(value => combineCounts(key, value));
            } else {
                combineCounts(key, formData[key]);
            }
        }
    }

    res.send('Survey response received. Thank you!');
};
