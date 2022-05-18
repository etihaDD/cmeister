import styled from "styled-components";
import { theme } from "~/styles";

export const Nav = styled(({ ...props }: JSX.IntrinsicElements["div"]) => <div {...props} />)`
  width: 100%;
  height: 100px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.darkBlue};
`;

export const Button = styled(({ ...props }: JSX.IntrinsicElements["button"]) => (
  <button {...props} />
))`
  padding: 16px 40px;
  background-color: ${theme.colors.darkBlue};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  color: ${theme.colors.white};
`;
