import { Home, NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export interface BreadcrumbItemI {
  name: string;
  url?: string;
}
export interface PageBreadcrumbsProps {
  breadcrumbs: BreadcrumbItemI[];
}
const PageBreadcrumbs = ({ breadcrumbs }: PageBreadcrumbsProps) => {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={2}>
      <Home fontSize={"medium"} sx={{ color: "text.secondary" }} />
      <Divider orientation="vertical" flexItem />
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNext fontSize="small" />}
      >
        {breadcrumbs.map(({ url, name }) =>
          !url ? (
            <Typography
              key={name}
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              {name}
            </Typography>
          ) : (
            <Link
              key={name}
              component={RouterLink}
              underline="hover"
              color="text.primary"
              to={url}
              className="flex items-center"
            >
              Users
            </Link>
          ),
        )}
      </Breadcrumbs>
    </Stack>
  );
};

export default PageBreadcrumbs;
