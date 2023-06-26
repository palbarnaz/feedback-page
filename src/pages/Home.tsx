import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import CardPerson from '../components/CardPerson';
import TitleHeader from '../components/TitleHeader';

const Home: React.FC = () => {
    return (
        <Grid container height="100vh">
            <Grid item display="flex" alignItems="center" justifyContent="center" xs={12} sx={{ backgroundColor: '#26235b' }}>
                <TitleHeader />
            </Grid>
            <Grid item sx={{ backgroundColor: '#d2c4f9' }} xs={12}>
                <Grid container justifyContent="center" alignItems="center">
                    <CardPerson
                        cardColor="#26235b"
                        colorDescription="white"
                        skills={['Organização', 'Pensamento analítico', 'Comunicação eficaz']}
                        title="Paola Albarnaz"
                    />
                    <CardPerson
                        cardColor="white"
                        colorDescription="black"
                        skills={['Comunicação eficaz', 'Perspicaz', 'Organização']}
                        title="Esther Linhares"
                    />

                    <CardPerson
                        cardColor="#26235b"
                        colorDescription="white"
                        skills={['Comunicação eficaz', 'Trabalho em equipe', 'Dedicação']}
                        title="Ana Chiamenti"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
