"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudFormationTools = void 0;
const AWS = require("aws-sdk");
class CloudFormationTools {
    constructor() {
        this.cloudFormation = new AWS.CloudFormation();
    }
    async GetStackOutput(stackName) {
        let result = null;
        await this.cloudFormation.describeStacks({ StackName: stackName }, (error, data) => {
            if (error) {
                console.log(error);
                result = null;
            }
            else {
                result = data.Stacks[0].Outputs;
            }
        }).promise();
        return result;
    }
    OutputToEnvironment(stackName, outputs) {
        outputs.forEach(output => {
            process.env[stackName + "." + output.OutputKey] = output.OutputValue;
        });
    }
}
exports.CloudFormationTools = CloudFormationTools;
//# sourceMappingURL=CloudFormationTools.js.map