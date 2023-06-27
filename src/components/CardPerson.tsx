import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Avatar, Box, Card, CardContent, Chip, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import React from 'react';

interface CardPersonProps {
    cardColor: string;
    colorDescription: string;
    title: string;
    skills: string[];
}

const CardPerson: React.FC<CardPersonProps> = ({ cardColor, colorDescription, skills, title }) => {
    return (
        <Grid textAlign="center" item margin={10} xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: cardColor, color: colorDescription, borderRadius: '30px' }}>
                <CardContent>
                    <Stack justifyContent="center" direction="row">
                        <Avatar sx={{ bgcolor: deepPurple[500], width: 120, height: 120, border: ' 3px solid #c6c027' }}>
                            <img height="150px" width="150px" src="./images/avatar2.png" alt="" />
                        </Avatar>
                    </Stack>
                    <Typography marginTop={1} variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="body1">Growdever</Typography>
                    <Box display="flex" margin={3} justifyContent="center" flexWrap="wrap" alignItems="center" gap={0.7}>
                        {skills.map((item) => (
                            <Chip key={item} sx={{ backgroundColor: '#6c62b7', color: 'white' }} label={item} />
                        ))}
                    </Box>
                    <Box>
                        <LinkedInIcon fontSize="large" />

                        <GitHubIcon fontSize="large" />
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default CardPerson;
