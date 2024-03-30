import { Backdrop, CircularProgress, Stack } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  open: boolean;
  description?: ReactNode;
}

function BaseBackdrop(props: IProps) {
  return (
    <Backdrop
      open={props.open}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: (theme) => theme.palette.primary.contrastText
      }}
    >
      <Stack alignItems="center" rowGap={2}>
        <CircularProgress color="inherit" />
        {props.description}
      </Stack>
    </Backdrop>
  );
}

export default BaseBackdrop;
