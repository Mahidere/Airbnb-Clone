import React from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/system";

import Logo from "./Logo";
import LocationSearch from "./LocationSearch";

import { flexBetweenCenter, dFlex } from "../themes/commonStyles";
import ProfileSettings from "./ProfileSettings";
const Header = () => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
          <Logo />
          <LocationSearch />
          <ProfileSettings />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
