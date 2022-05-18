/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import JoinBase from "src/components/JoinBase/JoinBase";
import TopMenu from "src/components/TopMenu/TopMenu";
import * as S from "./elements";

export const Hero: React.FC<JSX.IntrinsicElements["section"]> = ({ ...props }) => {
  return (
    <>
      <TopMenu />
      <S.SectionContainer {...props}>
        <S.CTAContainer>
          <S.CTA>
            <S.CTATitle>
              The Art of <S.CTATitleYellow>Campaign Optimisation</S.CTATitleYellow>
            </S.CTATitle>
            <S.CTADescription>
              Optimizing campaigns is hard, especially across all your channels, brands and
              agencies. CampaignMeister ensures you and your team have all the insights to boost
              your campaign performance.
            </S.CTADescription>
            <JoinBase />
          </S.CTA>
        </S.CTAContainer>
        <Image src='/imgs/heroImage.png' width={640} height={500} alt='hero image' />
      </S.SectionContainer>
    </>
  );
};
