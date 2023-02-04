import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Card, CardContent, Tabs, Tab } from '@material-ui/core';

enum TabOption {
  USERS,
  PERMISSIONS,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootContainer: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
    cardContainer: {
      width: '95%',
      marginTop: '10px',
    },
    tabLabel: {
      fontSize: theme.typography.pxToRem(20),
    },
  }),
);

const TabsContainer: React.FC = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(TabOption.USERS);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: TabOption) => {
    setSelectedTab(newValue);
  };

  return (
    <div className={classes.rootContainer}>
      <Card className={classes.cardContainer}>
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="Users" value={TabOption.USERS} className={classes.tabLabel} />
          <Tab label="Permissions" value={TabOption.PERMISSIONS} className={classes.tabLabel} />
        </Tabs>
        <CardContent>
          {selectedTab === TabOption.USERS ? (
            <div>{/* Render the Users component here */}</div>
          ) : (
            <div>{/* Render the Permissions component here */}</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};


export default TabsContainer;