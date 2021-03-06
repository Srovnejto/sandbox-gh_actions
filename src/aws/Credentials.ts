import { Environment } from "../enums/Environment";
import * as core from "@actions/core";

export class Credentials {
    public static setAwsSecrets(environment: Environment): void {
        process.env.AWS_REGION = "eu-central-1";

        switch (environment) {
            case Environment.DEV: {
                process.env.AWS_ACCESS_KEY_ID = process.env.DEV_AWS_ACCESS_KEY_ID;
                process.env.AWS_SECRET_ACCESS_KEY = process.env.DEV_AWS_SECRET_ACCESS_KEY;
                break;
            }
            case Environment.UAT: {
                process.env.AWS_ACCESS_KEY_ID = process.env.UAT_AWS_ACCESS_KEY_ID;
                process.env.AWS_SECRET_ACCESS_KEY = process.env.UAT_AWS_SECRET_ACCESS_KEY;
                break;
            }
            case Environment.PROD: {
                process.env.AWS_ACCESS_KEY_ID = process.env.PROD_AWS_ACCESS_KEY_ID;
                process.env.AWS_SECRET_ACCESS_KEY = process.env.PROD_AWS_SECRET_ACCESS_KEY;
                break;
            }
        }
    }
}