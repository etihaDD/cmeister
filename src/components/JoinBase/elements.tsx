import styled from "styled-components";
import { theme } from "../../styles/theme";

export const JoinContainer = styled(({ ...props }: JSX.IntrinsicElements["div"]) => (
  <div {...props} />
))`
  width: 100%;
  border-radius: 16px;
  background-color: ${theme.colors.darkBlue};
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const JoinHeader = styled(({ ...props }: JSX.IntrinsicElements["h2"]) => <h2 {...props} />)`
  font-size: 24px;
  line-height: 33px;
  font-weight: 500;
  color: ${theme.colors.white};
  margin-bottom: 16px;
`;

export const JoinYellowSpan = styled(({ ...props }: JSX.IntrinsicElements["span"]) => (
  <span {...props} />
))`
  color: ${theme.colors.yellow};
  text-decoration: ${props => (props.text ? props.text : "none")};
`;

export const JoinRow = styled(({ ...props }: JSX.IntrinsicElements["div"]) => <div {...props} />)`
  display: flex;
  margin-bottom: 16px;
`;

export const JoinInput = styled(({ ...props }: JSX.IntrinsicElements["input"]) => (
  <input {...props} />
))`
  width: 330px;
  padding: 16px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.7);
  margin-right: 20px;
  border: none;
`;

export const JoinButton = styled(({ ...props }: JSX.IntrinsicElements["button"]) => (
  <button {...props} />
))`
  padding: 16px 40px;
  background-color: ${theme.colors.yellow};
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

export const JoinCheckBoxRow = styled(({ ...props }: JSX.IntrinsicElements["div"]) => (
  <div {...props} />
))`
  display: flex;
  align-items: center;
`;

export const JoinCheckBox = styled(({ ...props }: JSX.IntrinsicElements["input"]) => (
  <input {...props} />
))`
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;

export const JoinLabel = styled(({ ...props }: JSX.IntrinsicElements["label"]) => (
  <label {...props} />
))`
  font-size: 12px;
  font-weight: 400;
  color: ${theme.colors.white};
`;
