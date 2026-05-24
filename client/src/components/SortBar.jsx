import {
    Card,
    CardContent,
    Grid,
    FormControl,
    Select,
    MenuItem,
    InputLabel
} from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLimit, changeSort, changeSortType, getMovies } from "../store/APIReducer";
import { useEffect } from "react";

export default function SortBar() {
    let dispatch = useDispatch()
    let { limit, sort, sortType } = useSelector(state => state.api)

    return (
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <Card>
                <CardContent sx={{display: "flex", gap: 1 }}>
                    <FormControl sx={{flexGrow: 1}}>
                        <InputLabel>Sort</InputLabel>
                        <Select label="Sort" defaultValue={"title"}
                        value={sort}
                        onChange={(e)=> dispatch(changeSort(e.target.value))}
                        >
                            <MenuItem value={"title"}>Title</MenuItem>
                            <MenuItem value={"genre"}>Genre</MenuItem>
                            <MenuItem value={"id"}>Add date</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{flexGrow: 1}}>
                        <InputLabel>Sort order</InputLabel>
                        <Select label="Sort order" defaultValue={"DESC"}
                        value={sortType}
                        onChange={(e)=> dispatch(changeSortType(e.target.value))}
                        >
                            <MenuItem value={"DESC"}>↓</MenuItem>
                            <MenuItem value={"ASC"}>↑</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{flexGrow: 1}}>
                        <InputLabel>Count</InputLabel>
                        <Select label="Count"  defaultValue={6}
                        value={limit}
                        onChange={(e)=> dispatch(changeLimit(e.target.value))}
                        >
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                        </Select>
                    </FormControl>
                </CardContent>
            </Card>
        </Grid>
    );
}
