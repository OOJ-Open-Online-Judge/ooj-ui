import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Link } from "react-router-dom";

type NavBarItem = {
    displayName: string;
    routeTo: string;
};

const navBarItems: NavBarItem[] = [
    { displayName: "Home", routeTo: "/" },
    { displayName: "Problems", routeTo: "/in-development" },
    { displayName: "Contests", routeTo: "/in-development" },
    { displayName: "Groups", routeTo: "/in-development" },
];

export function MainNavBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {navBarItems.map((navBarItem: NavBarItem, index: number) => {
                    return (
                        <NavigationMenuItem key={`menu-item-${index}`}>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                                render={<Link to={navBarItem.routeTo} />}
                            >
                                {navBarItem.displayName}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
