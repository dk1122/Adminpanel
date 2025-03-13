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
    const [rowsPerPage, setRowsPerPage] = useState(5);

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
            email: "balaji@gmail.com",
            contact: "65435658432",
            date: "09/01/2025",
            wabaStatus: "Connected",
            subscription: "Trial Period",
            startDate: "10/02/2025",
            endDate: "10/02/2026",
            balance: "267000"
        },
        {
            id: "2",
            business: "SilverSpark Textiles",
            email: "info@silverspark.com",
            contact: "9876543210",
            date: "08/15/2024",
            wabaStatus: "Pending",
            subscription: "Premium",
            startDate: "08/15/2024",
            endDate: "08/15/2025",
            balance: "180000"
        },
        {
            id: "3",
            business: "GreenLeaf Foods",
            email: "contact@greenleaf.com",
            contact: "8765432109",
            date: "07/20/2024",
            wabaStatus: "Disconnected",
            subscription: "Basic",
            startDate: "07/20/2024",
            endDate: "07/20/2025",
            balance: "95000"
        },
        {
            id: "4",
            business: "TechPro Solutions",
            email: "support@techpro.com",
            contact: "7654321098",
            date: "06/10/2024",
            wabaStatus: "Connected",
            subscription: "Enterprise",
            startDate: "06/10/2024",
            endDate: "06/10/2025",
            balance: "450000"
        },
        {
            id: "5",
            business: "Urban Design Architects",
            email: "hello@urbandesign.com",
            contact: "6547893210",
            date: "05/25/2024",
            wabaStatus: "Connected",
            subscription: "Premium",
            startDate: "05/25/2024",
            endDate: "05/25/2025",
            balance: "275000"
        }
        
    ];
    
    const visibleRows = tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Box sx={{ paddingLeft: 7 }}>
            <Card variant="outlined" sx={{ mb: 3, width: '100%', borderWidth: '1px' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Typography variant="h5">Customers</Typography>
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
                />
                <Button
                    sx={{backgroundColor:'rgb(106, 39, 214)'}}
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
                padding: '10px',
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
                    <Typography sx={{color:'grey'}}>{count} Selected</Typography>
                    <Button
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                        size="small"
                    >
                        Delete
                    </Button>
                    <TablePagination
                        sx={{ marginLeft: 'auto' }}
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
                            <TableCell>
                            </TableCell>
                            <TableCell sx={{ fontSize: "12px", minWidth: 140, whiteSpace: "nowrap" }}>Business Names</TableCell>
                            <TableCell sx={{ fontSize: "12px", minWidth: 60, whiteSpace: "nowrap" }}>E-mail</TableCell>
                            <TableCell sx={{ fontSize: "12px", minWidth: 60, whiteSpace: "nowrap" }}>Contact</TableCell>
                            <TableCell sx={{ fontSize: "12px", minWidth: 60, whiteSpace: "nowrap" }}>Date</TableCell>
                            <TableCell sx={{ fontSize: "12px", minWidth: 130, whiteSpace: "nowrap" }} align="center">WABA Number Status</TableCell>
                            <TableCell sx={{ fontSize: "12px", minWidth: 60, whiteSpace: "nowrap" }} align="center">Subscription Status</TableCell>
                            <TableCell sx={{ fontSize: "12px", minWidth: 60, whiteSpace: "nowrap" }}>Start Date</TableCell>
                            <TableCell sx={{ fontSize: "12px", minWidth: 60, whiteSpace: "nowrap" }}>End Date</TableCell>
                            <TableCell sx={{ fontSize: "12px", minWidth: 40, whiteSpace: "nowrap" }}>Balance</TableCell>
                            <TableCell sx={{ fontSize: "12px", minWidth: 60, whiteSpace: "nowrap" }}>Active/Disabled</TableCell>
                            <TableCell sx={{ fontSize: "12px", minWidth: 80, whiteSpace: "nowrap" }}>Delete Account</TableCell>
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
                                    <TableCell sx={{ fontSize: '12px' }}>{row.business}</TableCell>
                                    <TableCell sx={{ fontSize: '12px' }}>{row.email}</TableCell>
                                    <TableCell sx={{ fontSize: '12px', fontWeight:'' }}>{row.contact}</TableCell>
                                    <TableCell sx={{ fontSize: '12px' }}>{row.date}</TableCell>
                                    <TableCell sx={{ fontSize: '12px' }} align="center">{row.wabaStatus}</TableCell>
                                    <TableCell sx={{ fontSize: '12px' }} align="center">{row.subscription}</TableCell>
                                    <TableCell sx={{ fontSize: '12px' }}>{row.startDate}</TableCell>
                                    <TableCell sx={{ fontSize: '12px' }}>{row.endDate}</TableCell>
                                    <TableCell sx={{ fontSize: '12px' }}>{row.balance}</TableCell>
                                    <TableCell sx={{ fontSize: '12px' }}><ToggleButton /></TableCell>
                                    <TableCell sx={{ fontSize: '12px' }}>
                                        <Box sx={{display:'flex'}}>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            size="small"
                                            startIcon={<DeleteIcon />}
                                            sx={{ mr: 1}}
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
