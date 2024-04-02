import { Card, CardContent, CardProps, Stack, Typography } from "@mui/material";
import {
  FLexBox,
  StyledButtonCancel,
  StyledButtonDefault,
  StyledButtonText,
} from "Styles";
import { ReactNode } from "react";
import { BaseChip } from "../BaseChip";

export interface IBaseCardProps extends CardProps {
  isDisabled?: boolean;
  listType?: string[];
  status?: string;
  title?: string;
  children: ReactNode;
  cancelText?: string;
  onCancel?: () => void;
  okText?: string;
  onOk?: () => void;
}

export function BaseCard(props: IBaseCardProps) {
  const {
    isDisabled = false,
    listType,
    status,
    sx,
    children,
    title,
    onOk,
    onCancel,
    okText,
    cancelText,
  } = props;
  return (
    <Card sx={sx}>
      <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
        {listType?.length && (
          <FLexBox justifyContent={"flex-start"} gap={2}>
            {listType.map((type) => (
              <BaseChip type={type} size="small" />
            ))}
          </FLexBox>
        )}
        {title && (
          <FLexBox justifyContent={"space-between"}>
            <Typography variant="h5">{title}</Typography>
            {status && <BaseChip type={status} size="small" />}
          </FLexBox>
        )}
        {children}
        {(!!onOk || !!onCancel) && !isDisabled && (
          <Stack direction="row" justifyContent="flex-end" gap={2}>
            {!!onOk && (
              <StyledButtonDefault onClick={onOk}>
                {okText || "confirm"}
              </StyledButtonDefault>
            )}
            {!!onCancel && (
              <StyledButtonCancel onClick={onCancel}>
                {cancelText || "cancel"}
              </StyledButtonCancel>
            )}
          </Stack>
        )}
        {isDisabled && (
          <Stack direction="row" justifyContent="flex-end" gap={2}>
            <StyledButtonText>text</StyledButtonText>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
