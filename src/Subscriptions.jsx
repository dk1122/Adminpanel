import React from 'react';
import { Box, Card, CardContent, Typography, Switch, Button, Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Subscriptions = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: 2499,
      features: ['Broadcasting', 'CTWA', 'Chatbot', 'Catalogue', 'Broadcasting'],
    },
    {
      title: 'Growth Plan',
      price: 3499,
      features: ['Broadcasting', 'CTWA', 'Chatbot', 'Catalogue', 'Broadcasting'],
    },
    {
      title: 'Advance Plan',
      price: 4499,
      features: ['Broadcasting', 'CTWA', 'Chatbot', 'Catalogue', 'Broadcasting'],
    },
    {
      title: 'VIP Plan 1',
      price: 5499,
      features: ['Broadcasting', 'CTWA', 'Chatbot', 'Catalogue', 'Broadcasting'],
    },
    {
      title: 'Basic Plan',
      price: 6499,
      features: ['Broadcasting', 'CTWA', 'Chatbot', 'Catalogue', 'Broadcasting'],
    },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button variant="contained" sx={{ backgroundColor: '#be2ed6', color: 'white' }}>
          Create Plan
        </Button>
      </Box>
      <Grid container spacing={3}>
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h5">{plan.title}</Typography>
                  <IconButton size="small" sx={{ color: '#808080' }}>
                    <EditIcon />
                  </IconButton>
                </Box>
                {plan.features.map((feature, idx) => (
                  <Box display="flex" alignItems="center" key={idx} sx={{ mb: 2 }}>
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                      {feature}
                    </Typography>
                    <Switch sx={{ '& .MuiSwitch-switchBase.Mui-checked': { color: '#be2ed6' }, '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#be2ed6' } }} />
                  </Box>
                ))}
                {plan.price !== null && (
                  <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">Pricing</Typography>
                    <Button variant="outlined" sx={{ borderColor: '#8E24AA', color: '#be2ed6' }}>
                      {plan.price}
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Subscriptions;