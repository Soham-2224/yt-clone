import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

import { Sidebar, Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    let dataNum = 5;

    useEffect(() => {
        setLoading(true);
        fetchFromAPI(`search?part=snippet,id&q=${selectedCategory}`).then((data) => {
            setVideos(data.items);
            setLoading(false);
        });
    }, [selectedCategory]);

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box
                sx={{
                    height: { sx: "auto", md: "calc(100vh - 88px)" },
                    borderRight: "1px solid #3d3d3d",
                    px: { sx: 0, md: 2 },
                    pb: "10px",
                    mr: { sx: 0, md: 1, xl: 3 },
                }}
            >
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
                    Made with love by Soham
                </Typography>
            </Box>

            <Box sx={{ overflow: "auto", height: "84vh", flex: 2 }}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white", ml: "16px" }}>
                    {selectedCategory} <span style={{ color: "#f31503" }}>Videos</span>
                </Typography>

                {loading ? (
                    <Loader />
                ) : (
                    // <InfiniteScroll
                    //     dataLength={videos.length}
                    //     // next={fetchFromAPI(`search?part=snippet,id&q=${selectedCategory}&maxResults=5`).then((data) => {
                    //     //     setVideos(data.items);
                    //     //     console.log("triggered");
                    //     // })}
                    //     hasMore={true}
                    //     loader={<h4>Loading...</h4>}
                    // >
                    <Videos videos={videos} selectedCategory={selectedCategory} />
                    // </InfiniteScroll>
                )}
            </Box>
        </Stack>
    );
};

export default Feed;
