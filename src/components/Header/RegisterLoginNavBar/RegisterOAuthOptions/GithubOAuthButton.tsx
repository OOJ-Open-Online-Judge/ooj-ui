import { Button } from "@/components/ui/button";
import { GithubLogoIcon } from "@phosphor-icons/react";

export function GithubOAuthButton() {
    return (
        <Button variant="outline">
            <GithubLogoIcon size={16} weight="fill" />
            Continue with Github
        </Button>
    );
}
