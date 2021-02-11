const core = require("@actions/core");

try {
    const awsEnvironment = core.getInput('AWS_ENVIRONMENT');

    switch (awsEnvironment) {
        case "DEVE": {
            process.env.AWS_ACCESS_KEY_ID = process.env.DEVE_AWS_ACCESS_KEY_ID;
            process.env.AWS_SECRET_ACCESS_KEY = process.env.DEVE_AWS_SECRET_ACCESS_KEY;
            break;
        }
        case "UAT": {
            process.env.AWS_ACCESS_KEY_ID = process.env.UAT_AWS_ACCESS_KEY_ID;
            process.env.AWS_SECRET_ACCESS_KEY = process.env.UAT_AWS_SECRET_ACCESS_KEY;
            break;
        }
        case "PROD": {
            process.env.AWS_ACCESS_KEY_ID = process.env.PROD_AWS_ACCESS_KEY_ID;
            process.env.AWS_SECRET_ACCESS_KEY = process.env.PROD_AWS_SECRET_ACCESS_KEY;
            break;
        }
        default: throw "Unknown environment '" + awsEnvironment + "'.";
    }
} catch (error) {
    core.setFailed(error.message);
}