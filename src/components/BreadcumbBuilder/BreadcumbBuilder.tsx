import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface BreadcumbPath {
  url: string;
  name: string;
}

interface BreadcumbBuilderProps {
  basePath: string;
}

export const BreadcumbBuilder = (props: BreadcumbBuilderProps) => {
  const { basePath } = props;
  const history = useHistory();
  const [paths, setPaths] = useState<BreadcumbPath[]>([]);

  const buildBreadcumbs = (listener: any) => {
    const { pathname } = listener;
    const parts = pathname.split("/");
    const customPaths: BreadcumbPath[] = [];

    for (let index = 0; index < parts.length; index++) {
      const slice = parts[index];
      let currentPath;

      if (index > 0) {
        currentPath = customPaths[index - 1];
      }

      if (slice !== "" && index > 0) {
        customPaths.push({
          name: slice,
          url: `${currentPath?.url === "/" ? "" : currentPath?.url}/${slice}`,
        });
      } else if (slice === basePath) {
        customPaths.push({
          name: "Home",
          url: "/",
        });
      } else {
        customPaths.push({
          name: "Home",
          url: "/admin",
        });
      }
    }

    console.log(customPaths);

    setPaths(customPaths);
  };

  useEffect(() => {
    history.listen((listener) => buildBreadcumbs(listener));
  }, []);

  return (
    <Breadcrumb>
      {paths.map((path) => (
        <BreadcrumbItem key={path.url}>
          <BreadcrumbLink as={Link} to={path.url}>
            {path.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
