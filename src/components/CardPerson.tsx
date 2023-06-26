import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

interface CardPersonProps {
    backgroundColor: string;
    color: string;
}

const CardPerson: React.FC<CardPersonProps> = ({ backgroundColor, color }) => {
    return (
        <Grid item margin={10} xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor, color }}>
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
