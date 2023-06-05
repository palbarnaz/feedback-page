import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const CardPerson: React.FC = () => {
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: '#d9dcd6' }}>
                <CardContent>
                    <Typography>Nome</Typography>
                    <Typography>Descrição sfbwlfbwlkfb</Typography>
                    <Typography>Descrição sfbwlfbwlkfb</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default CardPerson;
