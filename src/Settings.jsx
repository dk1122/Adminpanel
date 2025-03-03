import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TextField,
    Typography,
    Box
} from '@mui/material';
import Sidebar from "./Sidebar";

const Settings = () => {
    const [pricing, setPricing] = useState({
        marketing: { default: "0.79.553", markup: "0.86" },
        utility: { default: "0.12", markup: "0.20" },
        authentication: { default: "0.14", markup: "0.20" },
        service: { default: "Free", markup: "Free" },
    });

    const resetRates = () => {
        setPricing({
            marketing: { default: "0.79.553", markup: "0.86" },
            utility: { default: "0.12", markup: "0.20" },
            authentication: { default: "0.14", markup: "0.20" },
            service: { default: "Free", markup: "Free" },
        });
    };

    const updateRates = () => {
        alert("Rates updated!");
    };

    return (
        <>
            <Sidebar />
            <Box sx={{ p: 8 }}>
                <Paper sx={{ p: 2, maxWidth: 'lg', mx: 'auto' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Typography variant="h6">Rates</Typography>
                        <Typography variant="h6">Subscription</Typography>
                    </Box>
                    
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>India</TableCell>
                                    <TableCell>Default Pricing</TableCell>
                                    <TableCell>Markup Pricing</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.entries(pricing).map(([key, value]) => (
                                    <TableRow key={key}>
                                        <TableCell sx={{ textTransform: 'capitalize' }}>
                                            {key}
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                value={value.default}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                value={value.markup}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        mt: 3
                    }}>
                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={resetRates}
                        >
                            Reset Rates
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ bgcolor: 'rgb(106, 39, 214)' }}
                            onClick={updateRates}
                        >
                            Update
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </>
    );
};

export default Settings;