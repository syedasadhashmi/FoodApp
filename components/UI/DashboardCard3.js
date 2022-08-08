import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './DashboardCard.module.css';
import BorderColorIcon from '@mui/icons-material/BorderColor';
const DashboardCard3 = () => {
  return (
    <div className={classes.cardMotion}>
      <Card
        sx={{
          background: 'rgb(255,0,134);',
          background:
            'linear-gradient(90deg, rgba(255,0,134,1) 0%, rgba(242,76,76,1) 0%, rgba(249,182,182,1) 90%);',
        }}
      >
        <CardContent>
          <div className={classes.flexCard}>
            <div className={classes.flexCardChild1}>
              <Typography variant="h5" component="div">
                Orders
              </Typography>

              <Typography variant="h6">250</Typography>
            </div>
            <div className={classes.flexCardChild2}>
              <BorderColorIcon sx={{ fontSize: '55px' }} />
            </div>
          </div>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
    </div>
  );
};

export default DashboardCard3;
