import * as github from "@actions/github";

export class Inputs {
    public static GetInput(inputName: string): string {
        let value = github.context.payload.inputs[inputName];
        return value ? value : null;
    }
}