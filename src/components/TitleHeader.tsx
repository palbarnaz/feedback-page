import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const TitleHeader: React.FC = () => {
    return (
        <Box textAlign="center">
            <Typography variant="h3">Feedback Page</Typography>
            <Typography>Veja os feedbacks gerados em grupo!</Typography>
        </Box>
    );
};

export default TitleHeader;
