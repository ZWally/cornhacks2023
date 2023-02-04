import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
    card: {
    marginTop:'10px',
      width: '95%',
    },
    tab: {
      fontSize: theme.typography.pxToRem(20),
    },
  }),
);

interface Props {
  // Add any necessary props
}

const TabsContainer: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Users" className={classes.tab} />
          <Tab label="Roles" className={classes.tab} />
        </Tabs>
        <CardContent>
          {/* Add additional components here */}
        </CardContent>
      </Card>
    </div>
  );
};

export default TabsContainer;