import { Grid, Card } from '@material-ui/core'
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import App from "../../Types/App";

interface Props {
  appList: App [];
}

const appToCard = function (app: App) {
    return(
        <Card>
            <CardContent>
                {app.name}
                {app.description}
            </CardContent>
        </Card>
    );
};


const CardLayout: React.FC<Props> = ({ appList }) => {

  return (
    <body>
        hehehehe
    </body>
  );
};

export default CardLayout;