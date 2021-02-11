import { Environment } from "./enums/Environment";
import { CloudFormationTools } from "./tools/CloudFormationTools";
import { Credentials } from "./tools/Credentials";
import * as core from "@actions/core";

export class App {
    public async Main() {
        Credentials.setAwsSecrets(Environment.DEV);

        let stackName = "leadgen-storage-DEV";
        let cf = new CloudFormationTools();
        let outputs = await cf.GetStackOutput(stackName);

        cf.OutputToEnvironment(stackName, outputs);
        console.log("leadgen-storage-DEV.NewLeadQueueURL:", process.env["leadgen-storage-DEV.NewLeadQueueURL"]);
        console.log("INPUTS:", core.getInput("INPUTS"));
        console.log("ENVIRONMENT:", process.env);
    }
}

let app = new App();
app.Main();