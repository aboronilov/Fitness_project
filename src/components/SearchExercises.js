import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';


const SearchExercises = () => {
    const [search, setSearch] = useState("");
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
                >
                    Search
                </Button>
            </Box>
        </Stack>
    );
}

export default SearchExercises;
