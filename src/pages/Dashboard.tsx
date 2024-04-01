import { Box, Divider, Stack, Typography } from "@mui/material";
import {
  FLexBox,
  StyleTitle,
  StyledButtonCancel,
  StyledButtonSubmit,
} from "Styles";
import CardNotification from "components/Card/CardNotification";
import React from "react";
import { formatDate } from "utils/common";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <Box>
      <StyleTitle variant="h1">Dashboard</StyleTitle>
      <FLexBox justifyContent={"space-between"} mt={1}>
        <Typography variant="h4">
          {formatDate("1711964092453", "YYYY年MM月DD日")}
        </Typography>
        <Stack gap={3} direction={"row"}>
          <StyledButtonCancel>cancel</StyledButtonCancel>
          <StyledButtonSubmit>submit</StyledButtonSubmit>
        </Stack>
      </FLexBox>
      <FLexBox justifyContent={"space-between"} gap={1} mt={2}>
        <Box width={"50%"}></Box>
        <Divider orientation="vertical" flexItem />
        <Box width={"50%"}>
          <StyleTitle variant="h3">Sub</StyleTitle>
          <Box mt={2} px={3}>
            <CardNotification title="hello" label="word" type="success" />
          </Box>
        </Box>
      </FLexBox>
    </Box>
  );
}
