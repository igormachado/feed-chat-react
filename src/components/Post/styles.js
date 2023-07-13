import { styled } from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 52rem;
  height: calc(38.8125rem+9.75rem);
  flex-shrink: 0;
  border-radius: 8px;
  background: ${(props) => props.theme["gray-600"]};
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme["gray-100"]};
  justify-items: flex-start;
`;

export const HeaderContainer = styled.header`
  display: flex;
  background: ${(props) => props.theme["gray-600"]};
  margin-left: 2.5rem;
  margin-bottom: 1.5rem;
  align-items: center;
  justify-content: space-between;
`;

export const DivProfile = styled.div`
  display: flex;
  background: ${(props) => props.theme["gray-600"]};
`;

export const ImgProfile = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  flex-shrink: 0;
  /* margin-top: -2rem; */
  margin-bottom: 1.375rem;
  border: 3px solid ${(props) => props.theme["green-light"]};
  border-radius: 4px;
`;

export const ProfileContent = styled.span`
  background: ${(props) => props.theme["gray-600"]};
  color: ${(props) => props.theme["gray-100"]};
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const ProfileName = styled.span`
  background: ${(props) => props.theme["gray-600"]};
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.6;
`;

export const ProfileRole = styled.span`
  background: ${(props) => props.theme["gray-600"]};
  color: ${(props) => props.theme["gray-300"]};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.6;
`;

export const TimerPost = styled.span`
  background: ${(props) => props.theme["gray-600"]};
  font-size: 0.875;
  font-weight: 400;
  line-height: 1.6;
  margin-right: 2.5rem;
`;

export const DivContent = styled.div`
  width: 47rem;
  height: 12.875rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme["gray-600"]};
  margin-left: 2.5rem;
  margin-right: 2.5rem;
`;
export const HeaderContent = styled.span`
  background: ${(props) => props.theme["gray-600"]};
  margin-bottom: 16px;
`;
export const ContentParagraph = styled.span`
  background: ${(props) => props.theme["gray-600"]};
`;

export const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  background: ${(props) => props.theme["gray-600"]};
`;

export const FooterHeader = styled.span`
  background: ${(props) => props.theme["gray-600"]};
  margin-top: 1rem;
`;

export const Footer = styled.span`
  background: ${(props) => props.theme["gray-600"]};
  margin-top: 1rem;
  display: flex;
  
  
  a {
    text-decoration: none;
    background: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["green-dark"]};
  }
`;

export const LineContent = styled.span`
  width: 47rem;
  height: 2px;
  margin-top: 1rem;
  background: ${(props) => props.theme["gray-700"]};
`;

export const FormComment = styled.form`
  background: ${(props) => props.theme["gray-600"]};

  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
`;

export const FormHeader = styled.header`
  background: ${(props) => props.theme["gray-600"]};
  margin-bottom: 1rem;
`;
export const FormTextarea = styled.textarea`
  background: ${(props) => props.theme["gray-900"]};
  display: flex;
  width: 47rem;
  height: 6rem;
  padding: 0.8125rem 3.5625rem 3.8125rem 1rem;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: none;
  resize: none;
  color: ${(props) => props.theme["gray-100"]};

  &:focus-visible {
    outline: 1px solid ${(props) => props.theme["green-light"]};;
  }

 
`;
export const FormButton = styled.button`
  margin-top: 1rem;
  padding: 1rem 1.5rem 0.875rem 1.5rem;
  display: inline-flex;
  background: ${(props) => props.theme["green-dark"]};
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  color: ${(props) => props.theme["gray-100"]};
  width: 6.75rem;
  height: 3.0625rem;
  border: none;

  &:disabled {
    display: none;
  }
`;


export const DivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme["gray-600"]};
    margin-top: 32px;

`
