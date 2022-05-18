import styled from "styled-components";
import { SectionContainerProps } from "./SectionContainer";
import { mobileBreakpoint } from "~/styles";

export const Container = styled(({ ...props }: SectionContainerProps) => <section {...props} />)`
  margin: 0 auto 80px;
  width: 100%;
  max-width: 1440px;
  padding: 20px;

  @media ${mobileBreakpoint} {
    padding: 40px;
  }
`;
