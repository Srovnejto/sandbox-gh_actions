import { Environment } from "./enums/Environment";
import { CloudFormationTools } from "./tools/CloudFormationTools";
import { Credentials } from "./tools/Credentials";

export class App {
    public async Main() {
        Credentials.setAwsSecrets(Environment.DEV);

        let stackName = "leadgen-storage-DEV";
        let cf = new CloudFormationTools();
        let outputs = await cf.GetStackOutput(stackName);
        console.log(outputs);

        cf.OutputToEnvironment(stackName, outputs);
        console.log(process.env);
    }
}

let app = new App();
app.Main();