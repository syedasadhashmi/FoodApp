import {
  Box,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
} from "@mui/material";

import Header from "../../components/UI/Header";
import Footer from "../../components/UI/Footer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Container from "@mui/material/Container";
import classes from "./Orders.module.css";
const inProgressObj = [
  {
    id: 1,
    title: "Manchorian",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque natus dolore magni deserunt ad amet enim ut qui quis accusamus.",
  },
  {
    id: 2,
    title: "Manchao Soup",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque natus dolore magni deserunt ad amet enim ut qui quis accusamus.",
  },
  {
    id: 3,
    title: "Borek",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque natus dolore magni deserunt ad amet enim ut qui quis accusamus.",
  },
];
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
      <Container
        sx={{ height: "85vh", marginTop: "20px", marginBottom: "20px" }}
      >
        <Card>
          <CardContent>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList aria-label="Tabs example" onChange={handleChange}>
                  <Tab label="Pending" value="1" />
                  <Tab label="In Progress" value="2" />
                  <Tab label="Delivered" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                {/* {inProgressObj.map((items) => (
                  <Accordion
                    key={items.id}
                    expanded={expanded === `panel${items.id}`}
                    onChange={(event, isExpanded) =>
                      handleAccordianChange(isExpanded, `pannel${items.id}`)
                    }
                  >
                    <AccordionSummary
                      id={`panel${items.id}-header`}
                      aria-control={`panel${items.id}-content`}
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <Typography>{items.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Divider />
                      <Typography padding={2}>{items.description}</Typography>
                      <div className={classes.inProgressBtn}>
                        <Button variant="outlined">In Progress</Button>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                ))} */}
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
                    <Divider />
                    <Typography padding={2}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloremque natus dolore magni deserunt ad amet enim ut qui
                      quis accusamus.
                    </Typography>
                    <div className={classes.inProgressBtn}>
                      <Button variant="outlined">In Progress</Button>
                    </div>
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
                    <Divider />
                    <Typography padding={2}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloremque natus dolore magni deserunt ad amet enim ut qui
                      quis accusamus.
                    </Typography>
                    <div>
                      <Button variant="outlined" sx={{ alignItems: "end" }}>
                        In Progress
                      </Button>
                    </div>
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
                    <Divider />
                    <Typography padding={2}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloremque natus dolore magni deserunt ad amet enim ut qui
                      quis accusamus.
                    </Typography>

                    <div>
                      <Button variant="outlined">In Progress</Button>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </TabPanel>
              <TabPanel value="2">Panel 2</TabPanel>
              <TabPanel value="3">Panel 3</TabPanel>
            </TabContext>
          </CardContent>
        </Card>
      </Container>

      <Footer />
    </>
  );
};

export default Orders;
