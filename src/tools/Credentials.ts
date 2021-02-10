import { Environment } from "../enums/Environment";

export class Credentials {
    public static setAwsSecrets(environment: Environment): void {
        process.env.AWS_REGION = "eu-central-1";
        switch (environment) {
            case Environment.DEV: {
                process.env.AWS_ACCESS_KEY_ID = process.env.DEVE_AWS_ACCESS_KEY_ID;
                process.env.AWS_SECRET_ACCESS_KEY = process.env.DEVE_AWS_SECRET_ACCESS_KEY;
                break;
            }
            case Environment.UAT: {
                process.env.AWS_ACCESS_KEY_ID = process.env.DEVE_AWS_ACCESS_KEY_ID;
                process.env.AWS_SECRET_ACCESS_KEY = process.env.DEVE_AWS_SECRET_ACCESS_KEY;
                break;
            }
            case Environment.PROD: {
                process.env.AWS_ACCESS_KEY_ID = process.env.DEVE_AWS_ACCESS_KEY_ID;
                process.env.AWS_SECRET_ACCESS_KEY = process.env.DEVE_AWS_SECRET_ACCESS_KEY;
                break;
            }
        }

        console.log(process.env);
    }
}