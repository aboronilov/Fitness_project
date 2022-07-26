import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchData, exerciseOptions } from '../utils/fetchData';


const SearchExercises = () => {
    const [search, setSearch] = useState("");
    const [exercises, setExercises] = useState([]);
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExercisesData()
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const searchResult = exercisesData.filter(
                (exercise)=>exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
                || exercise.equipement.toLowerCase().includes(search)
            )
            setSearch('');
            setExercises(searchResult);
        };
    }
    return (
        <Stack 
            alignItems="center" 
            mt="37px" 
            justifyContent="center"
            p="20px"
        >
            <Typography 
                fontWeight={700}
                sx={{fontSize:{lg:'44px', xs:'30px'}}}
                mb="50px"
                textAlign='center'
            >
                Awesome exercises you <br/> Should know 
            </Typography> 
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700', 
                            border: 'none',
                            borderRadius: '4px',
                        },
                        width: {lg:'800px', xs:'350px'},
                        backgroundColor: "#fff",
                        borderRadius: '40px'
                    }} 
                    height="76px"
                    value={search}
                    placeholder="search for your exercise..."
                    onChange={(e)=>setSearch(e.target.value.toLowerCase())}
                    type="text"
                />
                <Button 
                    className="search-btn"
                    sx={{
                        bgcolor: "#ff2625",
                        color: "white",
                        textTransform: 'none',
                        width: {lg:"175px", xs: '85px'},
                        fontSize: {lg:"20px", xs: '14px'},
                        height: '56px',
                        position: 'absolute',
                        right: '0',
                        // p: "16px",
                        // ml: "15px"
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
        </Stack>
    );
}

export default SearchExercises;
