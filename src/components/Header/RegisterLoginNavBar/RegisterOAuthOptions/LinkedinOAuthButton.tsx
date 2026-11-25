import { Button } from "@/components/ui/button";
import { LinkedinLogoIcon } from "@phosphor-icons/react";

export function LinkedinOAuthButton() {
    return (
        <Button variant="outline">
            <LinkedinLogoIcon size={16} weight="fill" />
            Continue with LinkedIn
        </Button>
    );
}
