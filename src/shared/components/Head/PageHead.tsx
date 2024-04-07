import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Helmet } from "react-helmet";

export interface PageHeadProps {
  title: string;
  children: ReactNode;
}

const PageHead = ({ title, children }: PageHeadProps) => {
  return (
    <>
      <Helmet title={`Template | ${title}`} />

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={4}
      >
        <Typography component={"h1"} variant="h5">
          {title}
        </Typography>

        {children}
      </Stack>
    </>
  );
};

export default PageHead;
