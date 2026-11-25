import { RegisterLoginNavBar } from "./RegisterLoginNavBar/RegisterLoginNavBar";
import { MainNavBar } from "./MainNavbar";

export function Header() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <MainNavBar />
                <RegisterLoginNavBar />
            </div>
        </>
    );
}
