import { Environment } from "./enums/Environment";
import { CloudFormationTools } from "./tools/CloudFormationTools";
import { Credentials } from "./tools/Credentials";

export class App {
    public async Main() {
        Credentials.setAwsSecrets(Environment.DEV);

        let stackName = "leadgen-storage-DEV";
        let cf = new CloudFormationTools();
        let outputs = await cf.GetStackOutput(stackName);

        cf.OutputToEnvironment(stackName, outputs);
        console.log("ENVIRONEMENT:", process.env);
    }
}

let app = new App();
app.Main();