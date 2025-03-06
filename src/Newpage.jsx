import React from 'react';
import "./Font.css";
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

function Newpage() {
  return (
    <div id='new'>
       <Container maxWidth="sm" style={{ marginTop: '50px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
           <Typography variant="h4" align="center" gutterBottom>
             Create New Account
           </Typography>
           <form noValidate autoComplete="off">
             <Grid container spacing={2}>
               <Grid item xs={12}>
                <label htmlFor="">Name*</label>
                 <TextField 
                   variant="outlined" 
                   fullWidth 
                   placeholder="Enter your name here" 
                   required 
                 />
               </Grid>
               <Grid item xs={12}>
               <label htmlFor="">Email*</label>
                 <TextField 
                   variant="outlined" 
                   fullWidth 
                   type="email" 
                   placeholder="example@convobox.com" 
                   required 
                 />
               </Grid>
               <Grid item xs={12}>
               <label htmlFor="">Phone number</label>
                 <TextField  
                   variant="outlined" 
                   fullWidth 
                   placeholder="+91 9994770276" 
                   required 
                 />
               </Grid>
               <Grid item xs={12}>
               <label htmlFor="">Business name*</label>
                 <TextField 
                   variant="outlined" 
                   fullWidth 
                   placeholder="Enter business name" 
                   required 
                 />
               </Grid>
               <Grid item xs={12}>
               <label htmlFor="">Business Website*</label>
                 <TextField 
                   variant="outlined" 
                   fullWidth 
                   placeholder="Enter business website" 
                 />
               </Grid>
               <Grid item xs={12}>
               <label htmlFor="">Password*</label>
                 <TextField 
                   variant="outlined" 
                   fullWidth 
                   type="password" 
                   placeholder="Min. 8 characters" 
                   required 
                 />
               </Grid>
               <Grid item xs={12}>
                 <Button variant="contained" color="primary" fullWidth style={{ backgroundColor: '#8e24aa' }}>
                   Create Account
                 </Button>
               </Grid>
             </Grid>
           </form>
         </Container>
    </div>
  );
}

export default Newpage;