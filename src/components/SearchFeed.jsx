import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Loader } from "./";

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    const { searchTerm } = useParams();

    useEffect(() => {
        setLoading(true);
        fetchFromAPI(`search?part=snippet,id&q=${searchTerm}&maxResults=50`).then((data) => {
            setVideos(data.items);
            setLoading(false);
        });
    }, [searchTerm]);

    return (
        <Box
            sx={{
                overflow: "auto",
                height: "89vh",
                flex: 2,
                pb: "2rem",
                width: "85%",
                mx: "auto",
            }}
        >
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                Search results for: <span style={{ color: "#f31503" }}>{searchTerm}</span>
            </Typography>

            {loading ? <Loader /> : <Videos videos={videos} />}
        </Box>
    );
};

export default SearchFeed;
