const core = require('@actions/core');
const github = require('@actions/github');

try {
    const awsEnvironment = core.getInput('aws-environment');
    console.log("Hello ${awsEnvironment}!");

    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
} catch (error) {
    core.setFailed(error.message);
}