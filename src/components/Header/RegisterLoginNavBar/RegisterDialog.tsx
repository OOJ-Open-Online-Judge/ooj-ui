import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    // DialogTrigger,
} from "@/components/ui/dialog";
import { RegisterOAuthOptions } from "./RegisterOAuthOptions/RegisterOAuthOptions";

type RegisterDialogProps = {
    dialogOpen: boolean;
    setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function RegisterDialog(props: RegisterDialogProps) {
    return (
        <Dialog open={props.dialogOpen} onOpenChange={props.setDialogOpen}>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Create your Account!</DialogTitle>
                    <DialogDescription>
                        Sign up to get started. Use your Google, Github, or
                        Linkedin account.
                    </DialogDescription>
                </DialogHeader>
                <RegisterOAuthOptions />
                <DialogFooter>That's it!</DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
