import { Box, Stack, Typography } from '@mui/material';
import { Pagination } from '@mui/material/Pagination';
import React, { useEffect, useState } from 'react';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercises = ({bodyPart, exercises, setExercises}) => {
    console.log(exercises)
    return (
        <Box 
            id="exercises"
            sx={{mt: {lg: '110px'}}}
            mt="50px"
            p="20px"
        >
            <Typography variant="h3" mb="46px">
                showing results
            </Typography>
            <Stack
                direction="row"
                sx={{gap: { lg: "110px", xs: "50px"}}}
                flexWrap="wrap"
                justifyContent="center"
            >
                {exercises.map((item, index) => (
                    <p key={index}>{item.name}</p>
                ))}
            </Stack>
        </Box>
    );
}

export default Exercises;
