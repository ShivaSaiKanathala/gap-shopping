import React from "react";
import { ButtonContainer } from "./button-components";

type Props = {
  variant: "primary" | "success" | "danger";
  children: any;
};

export default function Button({ variant, children }: Props) {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>;
}
