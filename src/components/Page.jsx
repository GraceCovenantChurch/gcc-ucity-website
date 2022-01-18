import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import { Helmet } from "react-helmet-async";

import { Box } from "@mui/material";

const Page = forwardRef(({ children, title, ...other }, ref) => (
  <Box ref={ref} {...other}>
    <Helmet>
      <title>
        {title
          ? title + " | " + process.env.REACT_APP_WEBSITE_NAME
          : process.env.REACT_APP_WEBSITE_NAM}
      </title>
    </Helmet>
    {children}
  </Box>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
