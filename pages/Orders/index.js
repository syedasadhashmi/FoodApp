import {
  Box,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import Header from "../../components/UI/Header";
import Footer from "../../components/UI/Footer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Container from "@mui/material/Container";

const Orders = () => {
  const [value, setValue] = useState("1");
  const [expanded, setExpanded] = useState("false");
  const handleAccordianChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      <Container sx={{ height: "532px" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList aria-label="Tabs example" onChange={handleChange}>
              <Tab label="Tab One" value="1" />
              <Tab label="Tab Two" value="2" />
              <Tab label="Tab Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={(event, isExpanded) =>
                handleAccordianChange(isExpanded, "panel1")
              }
            >
              <AccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque natus dolore magni deserunt ad amet enim ut qui
                  quis accusamus.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={(event, isExpanded) =>
                handleAccordianChange(isExpanded, "panel2")
              }
            >
              <AccordionSummary
                id="panel2-header"
                aria-controls="panel2-content"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque natus dolore magni deserunt ad amet enim ut qui
                  quis accusamus.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={(event, isExpanded) =>
                handleAccordianChange(isExpanded, "panel3")
              }
            >
              <AccordionSummary
                id="panel3-header"
                aria-controls="panel3-content"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Accordion 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque natus dolore magni deserunt ad amet enim ut qui
                  quis accusamus.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </TabPanel>
          <TabPanel value="2">Panel 2</TabPanel>
          <TabPanel value="3">Panel 3</TabPanel>
        </TabContext>
      </Container>

      <Footer />
    </>
  );
};

export default Orders;
