import { Box, Button, Stack, TextField, Typography } from "@mui/material"

export const EditUser = () => {
  return (
    <>
    
    <Box sx={{ width: '50%', alignItems: 'center', mt: '10%', ml: '25%' }}> 
    
    <Typography variant="h4" textAlign="center" p={1}> EDIT USER </Typography>  

    <Stack
      component="form"
      spacing={2}
    >
      <TextField
        id="Name"
        label="Enter your name"
        variant="filled"
        fullWidth
      />
      <TextField
        id="Username"
        label="Enter your UserName"
        variant="filled"
        fullWidth
      />

    <TextField
        id="Email"
        label="Enter your Email"
        variant="filled"
        fullWidth
      />
      <TextField
        id="Phone"
        label="Enter your Phone"
        variant="filled"
        fullWidth
      />
      <TextField
        id="Website"
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
          > UPDATE USER
        
        </Button>
        
        </Box>
    </>

   
  )
}