import { Stack, Card, CardContent, Box } from "@mui/material";

const Loader = () => {
    return (
        <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="start"
            gap={1}
        >
            {[...Array(10).keys()].map((i) => (
                <Box
                    key={i}
                    sx={{
                        width: { md: "267px", xs: "100%" },
                        p: "10px",
                    }}
                    style={{
                        animationName: "loading",
                        animationIterationCount: "infinite",
                        animationDuration: ".4s",
                        animationDirection: "alternate",
                    }}
                >
                    <Card sx={{ borderRadius: "15px" }}>
                        <Box sx={{ height: "150px", backgroundColor: "grey" }} />
                    </Card>
                    <Card sx={{ backgroundColor: "transparent", border: "none", boxShadow: "none" }}>
                        <CardContent sx={{ height: "106px" }}>
                            <div
                                style={{
                                    width: "100%",
                                    height: "15px",
                                    backgroundColor: "gray",
                                    borderRadius: "8px",
                                }}
                            ></div>
                            <div
                                style={{
                                    width: "100%",
                                    height: "15px",
                                    backgroundColor: "gray",
                                    borderRadius: "8px",
                                    marginTop: "10px",
                                }}
                            ></div>
                            <div
                                style={{
                                    width: "50%",
                                    height: "15px",
                                    backgroundColor: "gray",
                                    borderRadius: "8px",
                                    marginTop: "10px",
                                }}
                            ></div>
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </Stack>
    );
};

export default Loader;
