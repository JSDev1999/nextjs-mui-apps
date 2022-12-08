import { Box } from "@mui/material";
import React, { Fragment } from "react";
import DynamicImages from "src/components/app/DynamicImages";

export default function index() {
  return (
    <Fragment>
      <Box>
        <DynamicImages />
      </Box>
    </Fragment>
  );
}
