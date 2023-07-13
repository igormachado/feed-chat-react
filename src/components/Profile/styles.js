import { styled } from "styled-components";


export const DivWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const DivContainer = styled.div`
  width: 16rem;
  height: 18.375rem;
  flex-shrink: 0;
  margin-top: 2rem;
  margin-right: 2rem;
  margin-left: 10rem;
  border-radius: 8px;
  background: ${(props) => props.theme["gray-600"]};
`;
export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme["gray-600"]};
`;

export const HeaderContainer = styled.img`
  width: 16rem;
  height: 4.5rem;
  flex-shrink: 0;
  background: ${(props) => props.theme["gray-500"]};
`;

export const ImgProfile = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  flex-shrink: 0;
  margin-top: -2rem;
  margin-bottom: 1.375rem;
  border: 3px solid ${(props) => props.theme["green-light"]};
  border-radius: 4px;
`;

export const ProfileName = styled.span`
  color: ${(props) => props.theme["gray-100"]};
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.6;
  background: ${(props) => props.theme["gray-600"]};
`;
export const ProfileRole = styled.span`
  color: ${(props) => props.theme["gray-100"]};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const Line = styled.span`
  width: 256px;
  height: 1px;
  background: ${(props) => props.theme["gray-500"]};
`;

export const FooterContent = styled.footer`
  display: inline-flex;
  padding: 1rem 1.5rem 0.875rem 1.5rem;
  color: ${(props) => props.theme["gree-dark"]};
  background: ${(props) => props.theme["gray-600"]};
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 2px solid ${(props) => props.theme["green-light"]};
  border-radius: 4px;
  width: 12rem;
  height: 3.125rem;
  margin-bottom: 2rem;
  margin-top: 1.5rem;

  &:hover {
    
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const ButtonFooter = styled.button`
  display: flex;
  background: ${(props) => props.theme["gray-600"]};
  color: ${(props) => props.theme["green-light"]};
  border: none;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;

  :hover {
    opacity: 0.7;
  }

  span {
    margin-left: 8px;
  }

`;
