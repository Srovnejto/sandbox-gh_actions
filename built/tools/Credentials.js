"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credentials = void 0;
const Environment_1 = require("../enums/Environment");
class Credentials {
    static setAwsSecrets(environment) {
        process.env.AWS_REGION = "eu-central-1";
        switch (environment) {
            case Environment_1.Environment.DEV: {
                process.env.AWS_ACCESS_KEY_ID = process.env.DEVE_AWS_ACCESS_KEY_ID;
                process.env.AWS_SECRET_ACCESS_KEY = process.env.DEVE_AWS_SECRET_ACCESS_KEY;
                break;
            }
            case Environment_1.Environment.UAT: {
                process.env.AWS_ACCESS_KEY_ID = process.env.DEVE_AWS_ACCESS_KEY_ID;
                process.env.AWS_SECRET_ACCESS_KEY = process.env.DEVE_AWS_SECRET_ACCESS_KEY;
                break;
            }
            case Environment_1.Environment.PROD: {
                process.env.AWS_ACCESS_KEY_ID = process.env.DEVE_AWS_ACCESS_KEY_ID;
                process.env.AWS_SECRET_ACCESS_KEY = process.env.DEVE_AWS_SECRET_ACCESS_KEY;
                break;
            }
        }
        console.log(process.env);
    }
}
exports.Credentials = Credentials;
//# sourceMappingURL=Credentials.js.map