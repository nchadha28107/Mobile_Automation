# Mobile Automation Project

This project automates the login functionality of a mobile application using Appium and WebdriverIO with Cucumber BDD.

## Table of Contents

1. [Installation](#installation)
2. [Running Tests](#running-tests)
3. [Generating Reports](#generating-reports)
4. [Project Structure](#project-structure)
5. [Future Scope](#future-scope)
6. [Execution Recording](#execution-recording)

## Installation

To set up the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/mobile-automation.git
   cd mobile-automation
   ```

2. **Install dependencies**:
   Ensure you have Node.js installed (version 14 or above). Then run:
   ```bash
   npm install
   ```

3. **Install Appium** (if not already installed):
   You can install Appium globally:
   ```bash
   npm install -g appium
   ```

4. **Install Appium Doctor** (optional but recommended):
   To verify your Appium setup:
   ```bash
   npm install -g appium-doctor
   appium-doctor
   ```

5. **Set up your Android or iOS environment** according to the Appium documentation.

## Running Tests

To run the tests, use the following command:
```bash
npm test -- --udid YOUR_UDID --tag "@yourTag"
```
- Replace `YOUR_UDID` with the UDID of your device (this is **mandatory**).
- Replace `@yourTag` with the specific tag you want to run (e.g., `@positive` or `@negative`). This parameter is **optional**.

## Generating Reports

After running the tests, you can generate HTML reports using the following command:
```bash
npm run generate-report
```
This will create an HTML report based on the JSON reports generated during the test run. The reports will be located in the `reports/html-report` directory.

## Project Structure

```
project-root/
│
├── app/                    # Root-level application directory
│
├── src/
│   ├── actions/            # Common actions/wrapper functions
│   ├── constants/          # Constants used throughout the project
│   ├── data/               # Test data files
│   ├── features/           # Cucumber feature files
│   ├── pages/              # Page object models
│   │   └── locators/       # Locators for UI elements
│   ├── step_definitions/   # Step definitions for Cucumber
│   └── utils/              # Utility functions
│
├── reports/                # Directory for test reports
│   ├── json/               # JSON reports
│   └── html-report/        # HTML reports
│
├── package.json            # Node.js project file
├── tsconfig.json           # TypeScript configuration
└── wdio.conf.ts            # WebdriverIO configuration
└── README.md               # Project documentation
```

## Future Enhancements

- **Support for iOS**: Extend the framework to support iOS testing. This would involve passing a platform parameter alongside the UDID to differentiate between Android and iOS devices during test execution.

- **CI/CD Integration**: Integrate with CI/CD tools like Jenkins or GitHub Actions for automated test execution on code changes.

- **Enhanced Reporting**: Improve the reporting feature by including detailed logs and screenshots on test failures.

- **Custom Hooks**: Add before/after hooks for setting up and tearing down the test environment.

## Execution Recording

The execution recording has been attached in the file **Mobile_Automation_Recording.pptx**.
