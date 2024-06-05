import { TextField, Box, Typography, Button } from "@mui/material"
import Stack from '@mui/material/Stack';


export const AddUserButton = () => {

 
  return (
    <>
    
    <Box sx={{ width: '50%', alignItems: 'center', mt: '10%', ml: '25%' }}> 
    
    <Typography variant="h4" textAlign="center" p={1}> ADD USER </Typography>  

    <Stack
      component="form"
      spacing={2}
      
    >
      <TextField
        id="Name"
        name="Name"
        label="Enter your name"
        variant="filled"
        fullWidth
      />
     
      <TextField
        id="Username"
        name="Userame"
        label="Enter your UserName"
        variant="filled"
        fullWidth

      />
     
    <TextField
        id="Email"
        name="Email"
        label="Enter your Email"
        variant="filled"
        fullWidth

      />
      
      <TextField
        id="Phone"
        name="Phone"
        label="Enter your Phone"
        variant="filled"
        fullWidth

      />
      
      <TextField
        id="Website"
        name="Website"
        label="Enter your Website"
        variant="filled"
        fullWidth

      />
    </Stack>
    

    <Button 
          type="submit"
          variant="contained"
          color="success"
          sx={{ mt: 2}}
          fullWidth
          > ADD USER
        
        </Button>

        </Box>
       
    </>

   
  )
}