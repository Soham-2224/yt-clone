import { Routes, Route } from "react-router-dom";
import { Box, createTheme, ThemeProvider } from "@mui/material";

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from "./components";

const App = () => {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 360,
                sm: 480,
                md: 768,
                lg: 1024,
                xl: 1440,
                xl2: 2560,
            },
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ backgroundColor: "#0f0f0f" }}>
                    <Navbar />
                    <Routes>
                        <Route path="/" exact element={<Feed />} />
                        <Route path="/video/:id" element={<VideoDetail />} />
                        <Route path="/channel/:id" element={<ChannelDetail />} />
                        <Route path="/search/:searchTerm" element={<SearchFeed />} />
                    </Routes>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default App;
