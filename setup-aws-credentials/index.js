const core = require("@actions/core");

try {
    const awsEnvironment = core.getInput('AWS_ENVIRONMENT');

    switch (awsEnvironment) {
        case "DEVE": {
            process.env.AWS_ACCESS_KEY_ID = core.getInput("DEVE_AWS_ACCESS_KEY_ID");
            process.env.AWS_SECRET_ACCESS_KEY = core.getInput("DEVE_AWS_SECRET_ACCESS_KEY");
            break;
        }
        case "UAT": {
            process.env.AWS_ACCESS_KEY_ID = core.getInput("UAT_AWS_ACCESS_KEY_ID");
            process.env.AWS_SECRET_ACCESS_KEY = core.getInput("UAT_AWS_SECRET_ACCESS_KEY");
            break;
        }
        case "PROD": {
            process.env.AWS_ACCESS_KEY_ID = core.getInput("PROD_AWS_ACCESS_KEY_ID");
            process.env.AWS_SECRET_ACCESS_KEY = core.getInput("PROD_AWS_SECRET_ACCESS_KEY");
            break;
        }
        default: throw "Unknown environment '" + awsEnvironment + "'.";
    }

    console.log("AWS_ENVIRONMENT: " + awsEnvironment);
    console.log("AWS_ACCESS_KEY_ID: " + process.env.AWS_ACCESS_KEY_ID);
    console.log("DEVE_AWS_SECRET_ACCESS_KEY: " + process.env.AWS_SECRET_ACCESS_KEY);
} catch (error) {
    console.log("error: ", error);
    core.setFailed(error.message);
}