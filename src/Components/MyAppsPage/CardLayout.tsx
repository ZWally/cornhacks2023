import { Grid, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import App from "../../Types/App";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, } from '@mui/material';

type Props = {
  appList: App [];
}

const appToCard = function (app: App) {
    return(
        <Grid item>
            <Card>
                <CardContent>
                    {app.name}
                    {app.description}
                </CardContent>
            </Card>
        </Grid>
    );
};


const CardLayout: React.FC<Props> = ({ appList }) => {

  return (
    <body>
        <Grid
        spacing={3}
        container={true}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start">
            {appList.map(appToCard)}
        </Grid>
    </body>
  );
};

export default CardLayout;