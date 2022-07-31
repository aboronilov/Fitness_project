import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#fff3f4">
            <Stack gap="40px" alignItems='center' pt="24px">
                <img src={Logo} alt="Logo" width="200px" height="40px"/>
                <Typography variant="h5" pb="20px" mt="20px">
                    Your free personal home couch. Developed by Anatoly Boronilov
                </Typography>
            </Stack>
        </Box>
    );
}

export default Footer;
