import * as J from "./elements";

const JoinBase: React.FC = () => {
  return (
    <J.JoinContainer>
      <J.JoinHeader>
        <J.JoinYellowSpan>Join</J.JoinYellowSpan> waiting list for access
      </J.JoinHeader>
      <J.JoinRow>
        <J.JoinInput type='email' placeholder='Enter Email' />
        <J.JoinButton>Join</J.JoinButton>
      </J.JoinRow>
      <J.JoinCheckBoxRow>
        <J.JoinCheckBox type='checkbox' />
        <J.JoinLabel>
          I agree to the <J.JoinYellowSpan text='underline'>Terms & Conditions </J.JoinYellowSpan>
          and the <J.JoinYellowSpan text='underline'>Privacy Policy</J.JoinYellowSpan>
        </J.JoinLabel>
      </J.JoinCheckBoxRow>
      <J.JoinCheckBoxRow>
        <J.JoinCheckBox type='checkbox' />
        <J.JoinLabel>I want to subsribe to the newsletter </J.JoinLabel>
      </J.JoinCheckBoxRow>
    </J.JoinContainer>
  );
};

export default JoinBase;
