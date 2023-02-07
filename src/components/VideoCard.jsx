import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({
    video: {
        id: { videoId },
        snippet,
    },
}) => {
    return (
        <Box
            sx={{
                width: { md: "255px", lg: "245px", xl: "270px", xs: "90%" },
                p: { md: "10px" },
                mx: { xs: "auto" },
                borderRadius: "15px",
                "&:hover": {
                    backgroundColor: "#272727",
                },
            }}
        >
            <Card sx={{ borderRadius: "15px" }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <CardMedia
                        image={snippet?.thumbnails?.high?.url}
                        alt={snippet?.title}
                        sx={{ height: { xs: "180px", sm: "250px", md: "150px" } }}
                    />
                </Link>
            </Card>
            <Card sx={{ backgroundColor: "transparent", border: "none", boxShadow: "none" }}>
                <CardContent sx={{ height: "70px" }}>
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="medium"
                            color="#fff"
                            sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: "2",
                                WebkitBoxOrient: "vertical",
                            }}
                        >
                            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                        </Typography>
                    </Link>
                    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                        <Typography variant="subtitle2" fontWeight="bold" color="gray">
                            {snippet?.channelTitle || demoChannelTitle}
                            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
                        </Typography>
                    </Link>
                </CardContent>
            </Card>
        </Box>
    );
};

export default VideoCard;
