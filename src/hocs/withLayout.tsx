import React from "react";
import { Grid, GridItem } from "@chakra-ui/layout";
import { Navbar } from "../components/Navbar";
import { Sidemenu } from "../components/Sidemenu";

export const withLayout = (WrappedComponent: React.FC) => (props: any) => {
  return (
    <Grid templateColumns="250px auto">
      <GridItem>
        <Sidemenu />
      </GridItem>
      <GridItem>
        <Grid templateRows="50px auto">
          <GridItem>
            <Navbar />
          </GridItem>
          <GridItem
            minH="calc(100vh - 50px)"
            overflow="hidden"
            overflowY="auto"
          >
            <WrappedComponent {...props} />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};
