import {
    TextField,
    Button,
    Box,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
    Checkbox,
    Typography,
    Modal,
    IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import ToggleButton from "./Togglebutton";
import Dropdown from "./Dropdown";
import Newpage from "./Newpage";

const Navbar1 = () => {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleCheckboxChange = (event) => {
        const checked = event.target.checked;
        setCount(prev => checked ? prev + 1 : prev - 1);
    };

    const tableData = [
        {
            id: "1",
            business: "Balagopal Jewellery",
            email: "Vignesh@convobox.in",
            contact: "+91 23456789",
            date: "30/08/24",
            wabaStatus: "Connected",
            subscription: "Starter Plan",
            startDate: "30/08/24",
            endDate: "30/02/25",
            balance: "Rs. 7569"
        },
        {
            id: "2",
            business: "Sembaruthi",
            email: "sabharish@convobox.in",
            contact: "+91 23456789",
            date: "25/06/24",
            wabaStatus: "Not Connected",
            subscription: "Trial Period",
            startDate: "25/06/24",
            endDate: "25/06/24",
            balance: "Rs. 756"
        },
        {
            id: "3",
            business: "Sri Venkateswara Silks",
            email: "sabharish@convobox.in",
            contact: "+91 23456789",
            date: "25/06/24",
            wabaStatus: "Not Connected",
            subscription: "Trial Period",
            startDate: "25/06/24",
            endDate: "25/06/24",
            balance: "Rs. 756"
        },
        {
            id: "4",
            business: "Bala Gopalan Jewellery",
            email: "sabharish@convobox.in",
            contact: "+91 23456789",
            date: "25/06/24",
            wabaStatus: "Not Connected",
            subscription: "Trial Period",
            startDate: "25/06/24",
            endDate: "25/06/24",
            balance: "Rs. 756"
        },
        {
            id: "5",
            business: "Bala Gopalan Jewellery",
            email: "sabharish@convobox.in",
            contact: "+91 23456789",
            date: "25/06/24",
            wabaStatus: "Not Connected",
            subscription: "Trial Period",
            startDate: "25/06/24",
            endDate: "25/06/24",
            balance: "Rs. 756"
        },
        // {
        //     id: "5",
        //     business: "Bala Gopalan Jewellery",
        //     email: "sabharish@convobox.in",
        //     contact: "+91 23456789",
        //     date: "25/06/24",
        //     wabaStatus: "Not Connected",
        //     subscription: "Trial Period",
        //     startDate: "25/06/24",
        //     endDate: "25/06/24",
        //     balance: "Rs. 756"
        // }
    ];
    
    const visibleRows = tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Box sx={{ paddingLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 10, paddingLeft: 6.35 }}>
            <Card
                variant="outlined"
                sx={{
                    width: '100%',
                    height: '50px',
                    borderWidth: '0px',
                    borderRadius: '0px',
                    boxShadow: 0,
                }}
            >
                <CardContent sx={{ display: 'flex', alignItems: 'center', padding: '8px' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.1rem', fontFamily: 'DM Sans' }}>
                        Customers
                    </Typography>
                </CardContent>
            </Card>

            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 2,
                mb: 3
            }}>
                <TextField
                    size="small"
                    placeholder="Search"
                    InputProps={{
                        endAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />
                    }}
                    variant="outlined"
                    sx={{ fontFamily: 'DM Sans' }}
                />
                <Button
                    sx={{ backgroundColor: '#7F2DF1', fontFamily: 'DM Sans' }}
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleOpen}
                >
                    New Customers
                </Button>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: '0px',
                mb: 2,
                backgroundColor: 'white',
                borderRadius: 1,
                boxShadow: 1
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Typography sx={{ color: 'grey', fontFamily: 'DM Sans' }}>{count} Selected</Typography>
                    <Button
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                        size="small"
                        sx={{
                            borderColor: '#FF1616',
                            color: '#FF1616',
                            fontFamily: 'DM Sans',
                        }}
                    >
                        Delete
                    </Button>
                    <TablePagination
                        sx={{ marginLeft: 'auto', fontFamily: 'DM Sans' }}
                        rowsPerPageOptions={[]} 
                        component="div"
                        count={tableData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox"></TableCell>
                                <TableCell sx={{ fontSize: "12px", minWidth: 140, whiteSpace: "nowrap", fontFamily: 'DM Sans' }}>Business Name</TableCell>
                                <TableCell sx={{ fontSize: "12px", minWidth: 60, whiteSpace: "nowrap", fontFamily: 'DM Sans' }}>Email</TableCell>
                                <TableCell sx={{ fontSize: "12px", minWidth: 60, whiteSpace: "nowrap", fontFamily: 'DM Sans' }}>Contact Number</TableCell>
                                <TableCell sx={{ fontSize: "12px", minWidth: 60, whiteSpace: "nowrap", fontFamily: 'DM Sans' }}>Created Date</TableCell>
                                <TableCell sx={{ fontSize: "12px", minWidth: 130, whiteSpace: "nowrap", fontFamily: 'DM Sans' }} align="center">WABA Number Status</TableCell>
                                <TableCell sx={{ fontSize: "12px", minWidth: 60, whiteSpace: "nowrap", fontFamily: 'DM Sans' }} align="center">Subscription Status</TableCell>
                                <TableCell sx={{ fontSize: "12px", minWidth: 60, whiteSpace: "nowrap", fontFamily: 'DM Sans' }} align="center">Subscription Start Date</TableCell>
                                <TableCell sx={{ fontSize: "12px", minWidth: 60, whiteSpace: "nowrap", fontFamily: 'DM Sans' }} align="center">Subscription End Date</TableCell>
                                <TableCell sx={{ fontSize: "12px", minWidth: 40, whiteSpace: "nowrap", fontFamily: 'DM Sans' }}>Wallet Balance</TableCell>
                                <TableCell sx={{ fontSize: "12px", minWidth: 60, whiteSpace: "nowrap", fontFamily: 'DM Sans' }}>Active/Disable</TableCell>
                                <TableCell sx={{ fontSize: "12px", minWidth: 80, whiteSpace: "nowrap", fontFamily: 'DM Sans' }}>Delete Account</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {visibleRows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            size="small"
                                            onChange={handleCheckboxChange}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ fontSize: '12px', color: '#7F2DF1', fontFamily: 'DM Sans' }}>{row.business}</TableCell>
                                    <TableCell sx={{ fontSize: '12px', color: '#425166', fontFamily: 'DM Sans' }}>{row.email}</TableCell>
                                    <TableCell sx={{ fontSize: '12px', color: '#000000', fontFamily: 'DM Sans' }}>{row.contact}</TableCell>
                                    <TableCell sx={{ fontSize: '12px', color: '#425166', fontFamily: 'DM Sans' }} align="center">{row.date}</TableCell>
                                    <TableCell sx={{ fontSize: '12px', color: '#000000', fontFamily: 'DM Sans' }} align="center">{row.wabaStatus}</TableCell>
                                    <TableCell sx={{ fontSize: '12px', color: '#000000', fontFamily: 'DM Sans' }} align="center">{row.subscription}</TableCell>
                                    <TableCell sx={{ fontSize: '12px', color: '#425166', fontFamily: 'DM Sans' }} align="center">{row.startDate}</TableCell>
                                    <TableCell sx={{ fontSize: '12px', color: '#425166', fontFamily: 'DM Sans' }} align="center">{row.endDate}</TableCell>
                                    <TableCell sx={{ fontSize: '12px', color: '#000000', fontFamily: 'DM Sans' }} align="center">{row.balance}</TableCell>
                                    <TableCell sx={{ fontSize: '12px', fontFamily: 'DM Sans' }}><ToggleButton /></TableCell>
                                    <TableCell sx={{ fontSize: '12px', fontFamily: 'DM Sans' }}>
                                        <Box sx={{ display: 'flex' }}>
                                            <Button
                                                variant="outlined"
                                                color="error"
                                                size="small"
                                                startIcon={<DeleteIcon />}
                                                sx={{
                                                    mr: 1,
                                                    borderColor: '#FF1616',
                                                    color: '#FF1616',
                                                    fontFamily: 'DM Sans',
                                                }}
                                            >
                                                Delete
                                            </Button>
                                            <Dropdown />
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            <Newpage open={open} handleClose={handleClose} />
        </Box>
    );
};

export default Navbar1;
