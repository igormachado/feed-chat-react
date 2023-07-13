import styled from "styled-components";

export const DivContainer = styled.div`
  display: inline-flex;
  /* flex-direction: column; */
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 32px;
  margin-bottom: 18px;
  /* align-items: center; */
  background: ${(props) => props.theme["gray-600"]};
`;

export const DivContent = styled.div`
  width: 686px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 9px;
  background: ${(props) => props.theme["gray-500"]};
  margin-left: 16px;
`;

export const ImgProfile = styled.img`
  display: flex;
  width: 3.2rem;
  height: 3.2rem;
  flex-shrink: 0;
  margin-top: -5px;
  background: ${(props) => props.theme["gray-500"]};
  /* border: 2px solid ${(props) => props.theme["gray-500"]}; */
  border: 3px solid ${(props) => props.theme["green-light"]};

`;

export const DivProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme["gray-500"]};
  margin-top: 1rem;
  margin-right: 1rem;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme["gray-500"]};
  margin-left: 1rem;
  align-items: center;
`;

export const ProfileName = styled.span`
  background: ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["gray-100"]};

  font-size: 14px;
  font-weight: 700;
  line-height: 1.6;
  color: ${(props) => props.theme["gray-100"]};
  /* margin-top: 1rem; */
`;

export const ProfileTimer = styled.span`
  background: ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["gray-100"]};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.6;
`;

export const ButtonTrash = styled.button`
  border: 0;
  background: ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["green-light"]};
  cursor: pointer;
  /* margin-top: 1rem; */

  &:hover {
    color: ${(props) => props.theme["green-dark"]};
  }
 
`;

export const PostContent = styled.p`
  background: ${(props) => props.theme["gray-500"]};
  margin-top: 1rem;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  margin-left: 1rem;
`;

export const FooterContent = styled.footer`
  background: ${(props) => props.theme["gray-600"]};
  margin-top: 2rem;
  align-items: center;
  display: flex;
`;

export const ButtonLike = styled.button`
  background: ${(props) => props.theme["gray-600"]};
  color: ${(props) => props.theme["gray-100"]};
  border: 0;
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme["gray-300"]};

  }

`;

export const FooterLike = styled.span`
  background: ${(props) => props.theme["gray-500"]};
  font-size: 14px;
  font-weight: 300;
  line-height: normal;

  
`;
