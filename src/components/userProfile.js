import React from "react";
import "../assets/css/userProfile.css";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RoyalCollection from "./RoyalCollection";
import UserProfileImageTab from "./UserProfileImageTab";
import UserProfileVideoTab from "./UserProfileVideoTab";


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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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



const UserProfile2 = () => {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  return (
    <div>
      <div class="ec ed ee ef eg" style={{ backgroundColor: "white" }}>
        <div class="el em cq af en ag eo ep eq">
          <div class="ae ap aq ar as at au av">
            <div data-baseweb="block" class="er">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=707b9c33066bf8808c934c8ab394dff6"
                alt="Lucinda Kerr"
                class="es et c9 cp eu ev ew ex"
              />
            </div>
            <div class="af ey ax ez f0 f1 f2 f3 er f4">
              <div data-baseweb="block" class="">
                <h3 class="bj f5 ds f6 e0 f7 f8">Lucinda Kerr</h3>
                <p class="bj bk bl bm be">Art &amp; Social Activist</p>
              </div>
              <ul class="profile-menu af f9">
                <li
                  class="active b7 fa fb b0 be bj bk bl bm bi fc bd bx"
                  style={{
                    fontFamily:
                      "system-ui, Helvetica Neue, Helvetica, Arial, sans-serif",
                  }}
                >
                  Posts <strong class="e0">24</strong>
                </li>
                <li
                  class="b7 fa fb b0 be bj bk bl bm bi fc bd bx"
                  style={{
                    fontFamily:
                      "system-ui, Helvetica Neue, Helvetica, Arial, sans-serif",
                    fontWeight: "normal",
                  }}
                >
                  Followers <strong class="e0">12</strong>
                </li>
                <li
                  class="b7 fa fb b0 be bj bk bl bm bi fc bd bx"
                  style={{
                    fontFamily:
                      "system-ui, Helvetica Neue, Helvetica, Arial, sans-serif",
                    fontWeight: "normal",
                  }}
                >
                  Following <strong class="e0">8</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="">
          <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Images" {...a11yProps(0)} />
                <Tab label="Videos" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                  <UserProfileImageTab />
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <UserProfileVideoTab />
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                Item Three
              </TabPanel>
            </SwipeableViews>
          </Box>
        </div>


      </div>
      <footer class="ae" style={{ backgroundColor: "white" }}>
        <div class="ae ap aq ar as at au av">
          <p class="ae eh ei be ej ek bj cd bl bm">
            Inst ©2022 Created by RedQ, Inc
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UserProfile2;
