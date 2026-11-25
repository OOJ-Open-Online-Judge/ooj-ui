import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RegisterDialog } from "./RegisterDialog";

export function RegisterLoginNavBar() {
    const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
    const [logInDialogOpen, setLogInDialogOpen] = useState(false);
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Button
                            onClick={() => {
                                setRegisterDialogOpen(true);
                            }}
                            variant={"ghost"}
                        >
                            Sign Up
                        </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button
                            onClick={() => {
                                setLogInDialogOpen(true);
                            }}
                            variant={"ghost"}
                        >
                            Sign In
                        </Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <RegisterDialog
                dialogOpen={registerDialogOpen}
                setDialogOpen={setRegisterDialogOpen}
            />
        </>
    );
}
