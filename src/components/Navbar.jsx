import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <Stack
            direction="row"
            p={2}
            sx={{
                zIndex: "1000",
                position: "sticky",
                background: "#0f0f0f",
                top: "0",
                justifyContent: "space-between",
            }}
        >
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} alt="logo" height={45} />
            </Link>
            <SearchBar />
        </Stack>
    );
};

export default Navbar;
