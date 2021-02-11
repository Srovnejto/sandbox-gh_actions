"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Environment_1 = require("./enums/Environment");
const CloudFormationTools_1 = require("./tools/CloudFormationTools");
const Credentials_1 = require("./tools/Credentials");
class App {
    async Main() {
        Credentials_1.Credentials.setAwsSecrets(Environment_1.Environment.DEV);
        let stackName = "leadgen-storage-DEV";
        let cf = new CloudFormationTools_1.CloudFormationTools();
        let outputs = await cf.GetStackOutput(stackName);
        cf.OutputToEnvironment(stackName, outputs);
        console.log("ENVIRONEMENT:", process.env);
    }
}
exports.App = App;
let app = new App();
app.Main();
//# sourceMappingURL=app.js.map