import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import CardPerson from '../components/CardPerson';
import TitleHeader from '../components/TitleHeader';

const Home: React.FC = () => {
    return (
        <Grid container height="100vh">
            <Grid item minHeight="30%" display="flex" alignItems="center" justifyContent="center" xs={12} sx={{ backgroundColor: '#26235b' }}>
                <TitleHeader />
            </Grid>
            <Grid item sx={{ backgroundColor: '#d2c4f9' }} xs={12}>
                <Grid container justifyContent="center" alignItems="center">
                    <CardPerson backgroundColor="#26235b" color="white" />
                    <CardPerson backgroundColor="white" color="black" />
                    <CardPerson backgroundColor="#26235b" color="white" />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
