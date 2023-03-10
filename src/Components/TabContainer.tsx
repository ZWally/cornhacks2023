import React from 'react';
import { Card, CardContent, Tabs, Tab } from '@mui/material';

enum TabOption {
  USERS,
  PERMISSIONS,
}

type Props = {
  usersComponent: React.ReactNode
  permissionsComponent: React.ReactNode
}

const TabsContainer = ({usersComponent, permissionsComponent}: Props) => {
  const [selectedTab, setSelectedTab] = React.useState(TabOption.USERS);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: TabOption) => {
    setSelectedTab(newValue);
  };

  return (
    <div style={{display: 'flex',
    justifyContent: 'center',
    width: '100%',}}>
      <Card style={{
      width: '95%',
      marginTop: '10px',
      }}>
        <Tabs value={selectedTab} onChange={handleTabChange} style={{margin: '20px'}}>
          <Tab label="Users" value={TabOption.USERS} style={{fontSize: '20px'}} />
          <Tab label="Permissions" value={TabOption.PERMISSIONS} style={{fontSize: '20px'}} />
        </Tabs>
        <CardContent>
          {selectedTab === TabOption.USERS ? (
            <div>{usersComponent}</div>
          ) : (
            <div>{permissionsComponent}</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};


export default TabsContainer;