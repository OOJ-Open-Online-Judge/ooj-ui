/// <reference types="google.accounts" />

import { Button } from "@/components/ui/button";
import { GoogleLogoIcon } from "@phosphor-icons/react";
import { CONFIGURATION } from "@/config/config";
import { oojClient } from "@/gateways/ooj_backend/client";
import { HttpStatusCode } from "axios";
import { toast } from "@/components/ui/toast";
import { extractErrorMessage } from "@/utils/extractErrorMessage";

export function GoogleOAuthButton() {
    const handleGoogleLogin = () => {
        const client: google.accounts.oauth2.CodeClient =
            google.accounts.oauth2.initCodeClient({
                client_id: CONFIGURATION.CLIENT_ID,
                scope: "openid email profile",
                ux_mode: "popup",
                callback: async (
                    response: google.accounts.oauth2.CodeResponse,
                ) => {
                    try {
                        const resp = await oojClient.post("/oauth/google", {
                            authorization_code: response.code,
                        });
                        if (resp.status != HttpStatusCode.Accepted) {
                            throw new Error(
                                "An unexpected error occurred during Google Authentication!",
                            );
                        }
                        // send the user to another webpage that tells him that he is going to receive an email to register his account
                    } catch (error) {
                        toast.add({
                            type: "error",
                            description: extractErrorMessage(error),
                            priority: "high",
                        });
                    }
                },
            });
        client.requestCode();
    };

    return (
        <>
            <Button variant="outline" onClick={() => handleGoogleLogin()}>
                <GoogleLogoIcon weight="bold" />
                Continue with Google
            </Button>
        </>
    );
}
