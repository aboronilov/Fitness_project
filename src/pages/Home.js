import { Box } from '@mui/material';
import React, {useState} from 'react';

const Home = () => {
    return (
        <Box>
            <HeroBanner/>
            <SearchExercises/>
            <Exercises/>
        </Box>
    );
}

export default Home;
