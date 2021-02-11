import { CloudFormationTools } from "./aws/CloudFormationTools";
import { Credentials } from "./aws/Credentials";
import { Environment } from "./enums/Environment";
import { Inputs } from "./github/inputs";

export class App {
    public async Main() {
        Credentials.setAwsSecrets(Environment.DEV);

        let stackName = "leadgen-storage-DEV";
        let cf = new CloudFormationTools();
        let outputs = await cf.GetStackOutput(stackName);
        cf.OutputToEnvironment(stackName, outputs);

        console.log("leadgen-storage-DEV.NewLeadQueueURL:", process.env["leadgen-storage-DEV.NewLeadQueueURL"]);
        console.log(Inputs.GetInput("JsonInput"));
    }
}

let app = new App();
app.Main();