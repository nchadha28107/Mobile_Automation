import { join } from 'path';
import { APP_CONFIG } from './src/constants/constants';

const udidIndex = process.argv.indexOf('--udid');
if (udidIndex === -1 || udidIndex + 1 >= process.argv.length) {
    throw new Error('Error: --udid parameter is required. Please provide a valid UDID.');
}

export const config = {
    specs: [
        './src/features/*.feature',
    ],
    framework: 'cucumber',
    cucumberOpts: {
        require: [
            './src/step_definitions/*.ts',
        ],
        timeout: 60000,
        tagExpression: process.argv.includes('--tags') ? process.argv[process.argv.indexOf('--tags') + 1] : '', // Add tags if needed
    },
    capabilities: [{
        platformName: 'Android', // or 'iOS'
        'appium:app': join(process.cwd(), './apps/AndroidApp.apk'), // Path to your APK
        'appium:deviceName': 'Google Pixel',
        'appium:udid': process.argv[udidIndex + 1], // Pass via command line
        'appium:automationName': 'UiAutomator2', // For Android
        'appium:appPackage': APP_CONFIG.packageName,
        'appium:appActivity': APP_CONFIG.activityName,
        'appium:appWaitActivity': APP_CONFIG.activityName,
        'appium:autoLaunch': true,
    }],
    services: [
        ['appium', {
            logLevel: 'silent',
            command: 'appium',
        }]
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 60000,
    connectionRetryCount: 3,
    reporters: ['spec',
        ['cucumberjs-json', {
            jsonFolder: './reports/json/',
            language: 'en',
        }]
    ]
};