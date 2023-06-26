import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import CardPerson from '../components/CardPerson';
import TitleHeader from '../components/TitleHeader';

const Home: React.FC = () => {
    return (
        <Grid container height="100vh">
            <Grid item height="30%" display="flex" alignItems="center" justifyContent="center" xs={12} sx={{ backgroundColor: '#26235b' }}>
                <TitleHeader />
            </Grid>
            <Grid item height="70%" sx={{ backgroundColor: '#d2c4f9' }} xs={12}>
                <Container sx={{ width: '100%', height: '90%', marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <CardPerson />
                    <CardPerson />
                    <CardPerson />
                </Container>
            </Grid>
        </Grid>
    );
};

export default Home;
