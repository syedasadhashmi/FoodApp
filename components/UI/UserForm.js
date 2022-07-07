import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
const UserForm = () => {
  return (
    <Container>
      <Card>
        <CardHeader title="Add User" />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                required
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                required
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Age"
                required
                variant="outlined"
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Gender" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Position"
                required
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                required
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ float: "right", marginRight: "10px" }}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="outlined">Save</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default UserForm;
