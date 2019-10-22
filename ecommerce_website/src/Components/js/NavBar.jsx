import React from 'react';
import "../css/NavBar.css"
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Header  from "./UserCart/Header";
import HomePage from "./HomePage/HomePage";
import AccountDashboard from "./AccountDashboard/AccountDashboard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      to="href"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavBar() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navigation-bar">
      <AppBar position="static">
        <Tabs
          className="nav-items"
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab className="no-hover" label="LOGO"/>
          <LinkTab label="Home" href="/home" {...a11yProps(0)} />
          <LinkTab label="Cart" href="/cart" {...a11yProps(1)}/> 
          <LinkTab label="Profile" href="/profile" {...a11yProps(2)} />
          <LinkTab label="Seller Dashboard" href="/seller-dashboard" {...a11yProps(3)}/>
          <LinkTab label="About" href="/about" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <div>
          <Header/>
      </div>
      

      <TabPanel value={value} index={1}>
        <HomePage/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Cart checkout goes here
      </TabPanel>
      <TabPanel value={value} index={3}>
        profile goes here
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AccountDashboard/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        About page goes here
      </TabPanel>

    </div>
  );
}