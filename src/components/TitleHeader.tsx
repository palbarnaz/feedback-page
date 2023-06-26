import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const TitleHeader: React.FC = () => {
    return (
        <Box textAlign="center" margin={2}>
            <Typography variant="h2" sx={{ color: 'white' }}>
                Feedback Page
            </Typography>
            <Typography sx={{ color: '#d2c4f9' }}>Veja os feedbacks gerados em grupo!</Typography>
        </Box>
    );
};

export default TitleHeader;
