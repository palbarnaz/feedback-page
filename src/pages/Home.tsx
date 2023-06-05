import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

import CardPerson from '../components/CardPerson';
import TitleHeader from '../components/TitleHeader';

const Home: React.FC = () => {
    return (
        <Grid container height="100vh">
            <Grid item height="30%" display="flex" alignItems="center" justifyContent="center" xs={12} sx={{ backgroundColor: '#2a6f97' }}>
                <TitleHeader />
            </Grid>
            <Grid item height="70%" sx={{ backgroundColor: '#89c2d9' }} xs={12}>
                <Grid container marginTop={2} display="flex" justifyContent="center" spacing={3}>
                    <CardPerson />
                    <CardPerson />
                    <CardPerson />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
