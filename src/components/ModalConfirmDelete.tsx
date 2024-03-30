import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { FLexBox } from "../Styles";
import React from "react";
import { IStoreDetailRes } from "../models/Store";
import { CircularProgress } from "@mui/material";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  handleDelete: (franchiseId: string, stripeId: string) => any;
  data: IStoreDetailRes | null;
  isLoading: boolean;
};

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export const ModalConfirmDelete = (props: Props) => {
  const { open, setOpen, title, handleDelete, data, isLoading } = props;
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box sx={{ textAlign: "center" }}>
            <Typography id="transition-modal-title" variant="h5">
              {title}
            </Typography>
          </Box>
          <FLexBox justifyContent={"space-between"} px={8} pt={4}>
            <Button variant="contained" onClick={() => setOpen(false)}>
              キャンセル
            </Button>
            <Button
              disabled={isLoading}
              sx={{ width: "100px" }}
              variant="contained"
              color="error"
              onClick={() =>
                data && handleDelete(data.id, data.creditCardShopCode)
              }
            >
              {isLoading ? (
                <CircularProgress
                  size="small"
                  sx={{ width: 20, height: 20, mr: 1, color: "white" }}
                />
              ) : (
                ""
              )}
              削除
            </Button>
          </FLexBox>
        </Box>
      </Fade>
    </Modal>
  );
};
