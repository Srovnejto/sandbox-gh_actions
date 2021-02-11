const core = require("@actions/core");

try {
    const awsEnvironment = core.getInput('AWS_ENVIRONMENT');
    let AWS_ACCESS_KEY_ID = null;
    let AWS_SECRET_ACCESS_KEY = null;

    switch (awsEnvironment) {
        case "DEVE": {
            AWS_ACCESS_KEY_ID = core.getInput("DEVE_AWS_ACCESS_KEY_ID");
            AWS_SECRET_ACCESS_KEY = core.getInput("DEVE_AWS_SECRET_ACCESS_KEY");
            break;
        }
        case "UAT": {
            AWS_ACCESS_KEY_ID = core.getInput("UAT_AWS_ACCESS_KEY_ID");
            AWS_SECRET_ACCESS_KEY = core.getInput("UAT_AWS_SECRET_ACCESS_KEY");
            break;
        }
        case "PROD": {
            AWS_ACCESS_KEY_ID = core.getInput("PROD_AWS_ACCESS_KEY_ID");
            AWS_SECRET_ACCESS_KEY = core.getInput("PROD_AWS_SECRET_ACCESS_KEY");
            break;
        }
        default: throw "Unknown environment '" + awsEnvironment + "'.";
    }

    console.log("AWS_ENVIRONMENT: " + awsEnvironment);

    console.log("AWS_ACCESS_KEY_ID: " + AWS_ACCESS_KEY_ID);
    core.setSecret(AWS_ACCESS_KEY_ID);
    core.exportVariable('AWS_ACCESS_KEY_ID', AWS_ACCESS_KEY_ID);

    console.log("DEVE_AWS_SECRET_ACCESS_KEY: " + AWS_SECRET_ACCESS_KEY);
    core.setSecret(AWS_SECRET_ACCESS_KEY);
    core.exportVariable('AWS_SECRET_ACCESS_KEY', AWS_SECRET_ACCESS_KEY);
} catch (error) {
    console.log("error: ", error);
    core.setFailed(error.message);
}