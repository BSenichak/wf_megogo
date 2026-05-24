import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/APIReducer";
import { Box, Card, CardHeader, CardMedia, CircularProgress, Grid } from "@mui/material";
import { Link } from "react-router";
import SortBar from "../components/SortBar";

export default function Main() {
    let dispatch = useDispatch();
    let { limit, sort, sortType } = useSelector(state => state.api)
    useEffect(() => {
        dispatch(getMovies({ limit, sort, sortType }));
    }, [limit, sort, sortType]);
    let movies = useSelector((state) => state.api.movies);
    let loading = useSelector((state) => state.api.loading)

    if(loading){
        return <Box sx={{
            minHeight: "50vh",
            display: "grid",
            placeItems: "center"
        }}>
            <CircularProgress/>
        </Box>
    }

    return (
        <Grid container spacing={2} sx={{ p: 2 }}>
            <SortBar/>
            {movies.map((movie, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Link to={"/movie/" + movie.id} style={{textDecoration: "none"}}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={
                                    (import.meta.env.DEV ? "http://localhost:3000/": "/") + movie.poster_url
                                }
                            />
                            <CardHeader
                                title={movie.title}
                                subheader={movie.genre}
                            />
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
}
