import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {exerciseOptions, fetchData} from '../utils/fetchData'
import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercises from '../components/ExerciseVideo.js';

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const {id} = useParams();
    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
            
            const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);
        }
        fetchExercisesData();
    }, [id]);
    return (
        <Box>
            <Detail ecerciseDetail={exerciseDetail}/>
            <ExerciseVideo />
            <SimilarExercises />
        </Box>
    );
}

export default ExerciseDetail;
