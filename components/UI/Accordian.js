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
import Avatar from "@mui/material/Avatar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Container from "@mui/material/Container";
import classes from "./Accordion.module.css";

const Accordian = ({
  cancelledOrders,
  pendingOrders,
  acceptedOrders,
  preparedOrders,
  completedOrders,
}) => {
  const [value, setValue] = useState("1");
  const [expanded, setExpanded] = useState("false");
  const handleAccordianChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container sx={{ height: "85vh", marginTop: "20px", marginBottom: "20px" }}>
      <Card sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
        <CardContent>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList aria-label="Tabs example" onChange={handleChange}>
                <Tab label="Pending" value="1" />
                <Tab label="Accepted" value="2" />
                <Tab label="Cancelled" value="3" />
                <Tab label="Prepared" value="4" />
                <Tab label="Delivered" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ height: "60vh", overflowY: "scroll" }}>
              {pendingOrders.map((items) => (
                <Accordion
                  key={items.orderId}
                  expanded={expanded === `panel${items.orderId}`}
                  onChange={(event, isExpanded) =>
                    handleAccordianChange(isExpanded, `panel${items.orderId}`)
                  }
                >
                  <AccordionSummary
                    sx={{ alignItems: "center" }}
                    id={`panel${items.orderId}-header`}
                    aria-labelledby={`panel${items.orderId}-content`}
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Avatar
                      alt={items.restaurantTitle}
                      src={items.thumbnail}
                      sx={{ marginRight: "5px" }}
                    />
                    <span className={classes.topMargin}>
                      {items.restaurantTitle}
                    </span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Divider />
                    <Typography padding={2}>
                      Order Amount:{items.orderAmount}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </TabPanel>

            <TabPanel value="2" sx={{ height: "60vh", overflowY: "scroll" }}>
              {acceptedOrders.map((items) => (
                <Accordion
                  key={items.orderId}
                  expanded={expanded === `panel${items.orderId}`}
                  onChange={(event, isExpanded) =>
                    handleAccordianChange(isExpanded, `panel${items.orderId}`)
                  }
                >
                  <AccordionSummary
                    id={`panel${items.orderId}-header`}
                    aria-labelledby={`panel${items.orderId}-content`}
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Avatar
                      alt={items.restaurantTitle}
                      src={items.thumbnail}
                      sx={{ marginRight: "5px" }}
                    />
                    <span className={classes.topMargin}>
                      {items.restaurantTitle}
                    </span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Divider />
                    <Typography padding={2}>
                      Amount: {items.orderAmount}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </TabPanel>

            <TabPanel value="3" sx={{ height: "60vh", overflowY: "scroll" }}>
              {cancelledOrders.map((items) => (
                <Accordion
                  key={items.orderId}
                  expanded={expanded === `panel${items.orderId}`}
                  onChange={(event, isExpanded) =>
                    handleAccordianChange(isExpanded, `panel${items.orderId}`)
                  }
                >
                  <AccordionSummary
                    id={`panel${items.orderId}-header`}
                    aria-labelledby={`panel${items.orderId}-content`}
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Avatar
                      alt={items.restaurantTitle}
                      src={items.thumbnail}
                      sx={{ marginRight: "5px" }}
                    />
                    <span className={classes.topMargin}>
                      {items.restaurantTitle}
                    </span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Divider />
                    <Typography padding={2}>
                      Amount: {items.orderAmount}
                    </Typography>
                    {/* <div className={classes.inProgressBtn}>
                    <Button variant="outlined">Done</Button>
                  </div> */}
                  </AccordionDetails>
                </Accordion>
              ))}
            </TabPanel>

            <TabPanel value="4" sx={{ height: "60vh", overflowY: "scroll" }}>
              {preparedOrders.map((items) => (
                <Accordion
                  key={items.orderId}
                  expanded={expanded === `panel${items.orderId}`}
                  onChange={(event, isExpanded) =>
                    handleAccordianChange(isExpanded, `panel${items.orderId}`)
                  }
                >
                  <AccordionSummary
                    id={`panel${items.orderId}-header`}
                    aria-labelledby={`panel${items.orderId}-content`}
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Avatar
                      alt={items.restaurantTitle}
                      src={items.thumbnail}
                      sx={{ marginRight: "5px" }}
                    />
                    <span className={classes.topMargin}>
                      {items.restaurantTitle}
                    </span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Divider />
                    <Typography padding={2}>
                      Amount: {items.orderAmount}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </TabPanel>

            <TabPanel value="5" sx={{ height: "60vh", overflowY: "scroll" }}>
              {completedOrders.map((items) => (
                <Accordion
                  key={items.orderId}
                  expanded={expanded === `panel${items.orderId}`}
                  onChange={(event, isExpanded) =>
                    handleAccordianChange(isExpanded, `panel${items.orderId}`)
                  }
                >
                  <AccordionSummary
                    id={`panel${items.orderId}-header`}
                    aria-labelledby={`panel${items.orderId}-content`}
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Avatar
                      alt={items.restaurantTitle}
                      src={items.thumbnail}
                      sx={{ marginRight: "5px" }}
                    />
                    <span className={classes.topMargin}>
                      {items.restaurantTitle}
                    </span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Divider />
                    <Typography padding={2}>
                      Amount: {items.orderAmount}
                    </Typography>
                    {/* <div className={classes.inProgressBtn}>
                      <Button variant="outlined">Done</Button>
                    </div> */}
                  </AccordionDetails>
                </Accordion>
              ))}
            </TabPanel>
          </TabContext>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Accordian;
