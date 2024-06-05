import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export const ItemUser = () => {

  const [users, setUsers] = useState([]);

  const searchCharacter = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    searchCharacter();
  }, [setUsers]);

 
  const handleLogin = () =>{
    console.log('login')
  }

  return (
    <>
      <TableContainer>
      <Button 
          type="submit"
          variant="contained"
          color="success"
          sx={{ mt: 2}}
          onClick={handleLogin}
          > 
        ADD USER
        </Button>
        
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name </TableCell>
              <TableCell align="right">UserName</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Website</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          { users.map((item) => (

              <TableBody key={item.id}>
                <TableRow >
                  <TableCell component="th" scope="row">{item.name}{" "}</TableCell>
                  <TableCell align="right">{item.username}</TableCell>
                  <TableCell align="right">{item.email}</TableCell>
                  <TableCell align="right">{item.phone}</TableCell>
                  <TableCell align="right">{item.website}</TableCell>
                  <TableCell align="center"  >
                    <Link >
                    <DeleteIcon
                    />
                    </Link>
                   
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/detailsuser">
                      <RemoveRedEyeIcon />
                    </Link>

                    &nbsp;&nbsp;&nbsp;
                    <Link to="/edituser">

                      <CreateIcon />
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
        </Table>
    
        
       

      </TableContainer>
    </>
  );
};
