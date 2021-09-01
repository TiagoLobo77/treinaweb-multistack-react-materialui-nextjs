import { styled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { withTheme } from "@emotion/react";

export const MinhaDiv = styled("div")`
  color: ${(props) => props.theme.palette.primary.main};
`;

export const MeuBotao = styled(Button)`
  background-color: blue;
  padding: ${({ theme }) => theme.spacing(2)};

  &.MuiButton-root {
    color: white;
  }
`;
