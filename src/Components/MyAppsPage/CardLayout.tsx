import { Grid, Card, Divider } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import App from "../../Types/App";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, CardActionArea, CardActions, } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
  appList: App [];
}

const appToCard = function (app: App) {
    return(
        <Grid item>
            <Link to={`/app/${app.id}`} style={{textDecoration: "none"}}>
            <Card sx={{ width: 275, height: 250 }}>
                <CardContent sx={{m: 2}}>
                    <Typography variant="h5" component="div" mb={3}>
                    {app.name}
                    </Typography>
                    <Typography color="text.secondary">
                    {app.description}
                    </Typography>
                </CardContent>
            </Card>
            </Link>
        </Grid>
    );
};


const CardLayout: React.FC<Props> = ({ appList }) => {

  return (
    <Box ml={4} mr={4}>
        <Grid
        spacing={2}
        container={true}
        direction="row"
        justifyContent="center"
        alignItems="flex-start">
            {appList.map(appToCard)}
        </Grid>
    </Box>
  );
};

export default CardLayout;