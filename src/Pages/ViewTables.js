import { Button, Card, Grid, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import { DataGrid } from '@mui/x-data-grid';


// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'Role' },
//   { field: 'Region' },
//   { field: 'Cost/hr' },
//   { field: 'Weeks',
//   renderCell: () => (
//     <IconButton>
//       <CalendarMonthIcon />
//     </IconButton>
//   ),},
//   { field: 'Cost' },
// ];
const rows=[];

const ViewTables = () => {
  const [data, setData] = React.useState(rows);
  const handleAddData = () => {
    const newData = {
      id: data.length + 1,
      Role: 'New Role',
      Region: 'New Region',
      Costhr: 0,
      Weeks: 0,
      Cost: 0,
    };

    setData([...data, newData]);
    setOpen(true)
  };
   const [open,setOpen] = React.useState(false)
   
   const handledelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    console.log(updatedData);
  };
    const row=[];


  return (
    <div>
        {/* <div style={{position:'relative'}}>
        <Modal open={open}onClose={()=>setOpen(false)}>
            <Card sx={{width:"50%", position:'absolute', right:"10px",top:"10%"}}>
            Enter Your Data Successfully
            </Card>  
        </Modal>
        </div> */}
      <Grid container spacing={2}>
        <Grid item xl={1} lg={1} xs={12}>
          <Button variant='contained'>Save</Button>
        </Grid>
        <Grid item xl={1} lg={1} xs={12}>
          {/* <Button variant='contained'onClick={handledelete} >Delete</Button> */}
          <Button variant='contained'onClick={()=>handledelete(row.id)} >Delete</Button>
        </Grid>
        <Grid item xl={4} lg={7} xs={12}>
          <TextField
            label={'Search'}
            inputProps={{
              endAdornment: (
                <IconButton>
                  <Button variant='outlined'>
                    <SearchIcon />
                  </Button>
                </IconButton>
              ),
            }}
          />
        </Grid>
        <Grid item xl={1} lg={2} xs={12}>
          <Button>
            <TuneIcon />
          </Button>
        </Grid>
        <Grid item xl={3} lg={1} xs={12}>
          <Button variant='outlined'>Monthly</Button>
          <Button variant='contained'>Weekly</Button>
        </Grid>
      </Grid>
      <div style={{ height: 400, width: '100%' }}>
        {/* <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[]}
          checkboxSelection
        /> */}
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell> <Checkbox disabled /></TableCell>
            <TableCell>ID</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Region&nbsp;</TableCell>
            <TableCell align="right">Cost/hr&nbsp;</TableCell>
            <TableCell align="right">Weeks&nbsp;</TableCell>
            <TableCell align="right">Cost&nbsp;</TableCell>
            <TableCell align="right">&nbsp;</TableCell>
            <TableCell align="right">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                  <Checkbox/>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.Role}</TableCell>
              <TableCell align="right">{row.Region}</TableCell>
              <TableCell align="right">{row.Costhr}</TableCell>
              <TableCell align="right">{row.Weeks} <IconButton><CalendarMonthIcon /></IconButton></TableCell>
              <TableCell align="right">{row.Cost}</TableCell>
              <TableCell align="right"> <DeleteIcon variant='contained'onClick={()=>handledelete(row.id)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
    </TableContainer>
     <Fab size='small' color='secondary' aria-label='add' onClick={handleAddData}><AddIcon /></Fab>
      </div>
    </div>
  );
};
export default ViewTables;