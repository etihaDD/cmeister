import styled from "styled-components";
import { SectionContainer as _SectionContainer, SectionContainerProps } from "~/components";
import { mobileBreakpoint, tabletBreakpoint, theme } from "~/styles";

export const SectionContainer = styled(({ ...props }: SectionContainerProps) => (
  <_SectionContainer {...props} />
))`
  display: flex;
  margin-top: 48px;
  flex-direction: row;

  @media ${tabletBreakpoint} {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    align-items: center;
    justify-content: center;
  }
`;

export const CTAContainer = styled(({ ...props }: JSX.IntrinsicElements["div"]) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  width: 530px;

  @media ${mobileBreakpoint} {
    width: 100%;
  }
`;

export const CTA = styled(({ ...props }: JSX.IntrinsicElements["div"]) => <div {...props} />)``;

export const CTATitle = styled(({ ...props }: JSX.IntrinsicElements["div"]) => <h1 {...props} />)`
  font-weight: 500;
  font-size: 32px;
  color: ${theme.colors.white};
  margin-bottom: 20px;
`;

export const CTADescription = styled(({ ...props }: JSX.IntrinsicElements["p"]) => (
  <p {...props} />
))`
  font-size: 20px;
  color: ${theme.colors.white};
  margin-bottom: 56px;
  line-height: 28px;
`;

export const CTATitleYellow = styled(({ ...props }: JSX.IntrinsicElements["span"]) => (
  <span {...props} />
))`
  color: yellow;
`;
