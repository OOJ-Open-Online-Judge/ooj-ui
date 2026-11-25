import { GoogleOAuthButton } from "@/components/Header/RegisterLoginNavBar/RegisterOAuthOptions/GoogleOAuthButton";
import { GithubOAuthButton } from "./GithubOAuthButton";
import { LinkedinOAuthButton } from "./LinkedinOAuthButton";

export function RegisterOAuthOptions() {
    return (
        <>
            <GoogleOAuthButton />
            <GithubOAuthButton />
            <LinkedinOAuthButton />
        </>
    );
}
