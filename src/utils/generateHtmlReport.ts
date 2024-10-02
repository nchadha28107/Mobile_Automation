import fs from 'fs';
import path from 'path';
import reporter from 'cucumber-html-reporter';

async function generateHtmlReport() {
    const jsonDir = './reports/json'; // Directory containing JSON reports
    const outputDir = './reports/html-report'; // Directory for HTML reports

    // Get all JSON files in the directory
    const jsonFiles = fs.readdirSync(jsonDir).filter(file => file.endsWith('.json'));
    console.log(JSON.stringify(jsonFiles));

    for (const jsonFile of jsonFiles) {
        const options: reporter.Options = {
            theme: 'bootstrap', // Ensure this is one of the allowed themes
            jsonFile: path.join(jsonDir, jsonFile), // Full path to the JSON file
            output: path.join(outputDir, `${jsonFile.replace('.json', '.html')}`), // Output HTML file name
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: false,
            metadata: {
                "App Version": "0.0.1"
            }
        };

        reporter.generate(options);
    }
}

// Call the function to generate the report
generateHtmlReport().catch(err => console.error(err));

export default generateHtmlReport;