export function extractErrorMessage(error: unknown){
    let message: string = "Unknown Error";
    if(error instanceof Error){
        message = error.message;
    }
    return message;
}