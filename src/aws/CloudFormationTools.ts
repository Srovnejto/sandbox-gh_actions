import * as AWS from 'aws-sdk';
import { AWSError, CloudFormation } from 'aws-sdk';

export class CloudFormationTools {
    private cloudFormation = new AWS.CloudFormation();

    public async GetStackOutput(stackName: string): Promise<CloudFormation.Outputs> {
        let result = null;
        await this.cloudFormation.describeStacks({ StackName: stackName }, (error: AWSError, data: CloudFormation.Types.DescribeStacksOutput) => {
            if (error) {
                console.log(error);
                result = null;
            } else {
                result = data.Stacks[0].Outputs;
            }
        }).promise();

        return result;
    }

    public OutputToEnvironment(stackName: string, outputs: CloudFormation.Outputs): void {
        outputs.forEach(output => {
            process.env[stackName + "." + output.OutputKey] = output.OutputValue;
        })
    }
}