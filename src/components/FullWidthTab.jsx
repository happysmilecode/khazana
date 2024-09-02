import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {/* <Typography>{children}</Typography> */}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTab({ homeRef, skillsRef, portfolioRef, footerRef }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
    scrollToSection(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const scrollToSection = (index) => {
    switch (index) {
      case 0:
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 1:
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 2:
        portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 3:
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ bgcolor: '#fffff', width: 500, borderRadius: '14px', backgroundColor: '#333333', }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
        sx={{
          backgroundColor: '#333333',
          borderRadius: '14px',
          overflow: 'hidden',
          color: '#c2c7c9',
          borderColor: 'white',
          textTransform: 'unset',
        }}
      >
        <Tab label="Home" {...a11yProps(0)} sx={{textTransform: 'unset'}} className='!px-0' />
        <Tab label="Skills" {...a11yProps(1)} sx={{textTransform: 'unset'}} className='!px-0' />
        <Tab label="Portfolio" {...a11yProps(2)} sx={{textTransform: 'unset'}} className='!px-0' />
        <Tab label="Contacts" {...a11yProps(2)} sx={{textTransform: 'unset'}} className='!px-0' />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
