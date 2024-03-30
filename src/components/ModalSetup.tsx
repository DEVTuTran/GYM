import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";

import BaseModal from "./common/BaseModal";
import BaseSelect from "./common/BaseSelectField/BaseSelectStrict";
import { FLexBox, StyleLable } from "Styles";

type IProps = {
  open: boolean;
  setOpen: Function;
};

interface IConfig {
  lng: string;
  unit: string;
}
const initialValue: IConfig = {
  lng: "",
  unit: "",
};

export const ModalSetup = (props: IProps) => {
  const { open, setOpen } = props;

  const form = useForm({
    defaultValues: initialValue,
  });

  const { control } = form;

  const onSubmit = async (values: IConfig) => {
    console.log(values);
  };

  return (
    <BaseModal
      width={600}
      showBtnCancel
      open={open}
      onCancel={() => setOpen(false)}
      title={"の削除確認"}
      cancelText={"キャンセル"}
      okText={"削除する"}
      onOk={() => onSubmit}
      footerSx={{
        justifyContent: "end",
      }}
      bodySx={{
        py: 3,
      }}
    >
      <Box component="form" onSubmit={form.handleSubmit(onSubmit)}>
        <FLexBox pb={3} justifyContent={"space-between"}>
          <StyleLable variant="body2">select1</StyleLable>
          <BaseSelect
            control={control}
            name="lng"
            label="登録種別"
            options={[
              { label: "test", value: 1 },
              { label: "test", value: 2 },
            ]}
          />
        </FLexBox>
        <FLexBox justifyContent={"space-between"}>
          <StyleLable variant="body2">select1</StyleLable>
          <BaseSelect
            control={control}
            name="unit"
            label="登録種別"
            disabled
            options={[
              { label: "test", value: 1 },
              { label: "test", value: 2 },
            ]}
          />
        </FLexBox>
      </Box>
    </BaseModal>
  );
};
