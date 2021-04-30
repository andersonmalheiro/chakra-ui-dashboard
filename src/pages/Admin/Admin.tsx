import React from "react";
import { Box } from "@chakra-ui/layout";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { withLayout } from "../../hocs";
import { Dashboard } from "../Dashboard";
import { Home } from "../Home";

export const Admin = withLayout(() => {
  document.title = 'Chakra Admin - Dashboard';

  const { path, url } = useRouteMatch();
  return (
    <Box h="full" w="full" p={4}>
      <h1>Admin</h1>

      <Box>
        <Switch>
          <Route exact path={path} component={Home} />
          <Route path={`${url}/dashboard`} component={Dashboard} />
        </Switch>
      </Box>
    </Box>
  );
});
