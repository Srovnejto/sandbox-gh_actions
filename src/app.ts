import { Environment } from "./enums/Environment";
import { CloudFormationTools } from "./tools/CloudFormationTools";
import { Credentials } from "./tools/Credentials";
import * as core from "@actions/core";
import * as github from "@actions/github";


export class App {
    public async Main() {
        Credentials.setAwsSecrets(Environment.DEV);

        let stackName = "leadgen-storage-DEV";
        let cf = new CloudFormationTools();
        let outputs = await cf.GetStackOutput(stackName);

        cf.OutputToEnvironment(stackName, outputs);
        console.log("leadgen-storage-DEV.NewLeadQueueURL:", process.env["leadgen-storage-DEV.NewLeadQueueURL"]);
        console.log("github.context:", github.context);
    }
}

let app = new App();
app.Main();