import { Grid, Card } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent';
import App from "../../Types/App";
import * as React from 'react';
import Typography from '@material-ui/core';
import { Button, CardActionArea, CardActions, } from '@material-ui/core';

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