import * as S from "./elements";

type HTMLDivProps = JSX.IntrinsicElements["section"];

export interface SectionContainerProps extends HTMLDivProps {}

export const SectionContainer: React.FC<SectionContainerProps> = ({ ...props }) => {
  return <S.Container {...props} />;
};
