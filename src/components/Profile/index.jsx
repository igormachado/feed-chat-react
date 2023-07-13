import {
  DivContainer,
  DivContent,
  HeaderContainer,
  ImgProfile,
  ProfileName,
  ProfileRole,
  FooterContent,
  ButtonFooter,
  Line,
  DivWrapper,
} from "./styles";
import headerProfile from "../../assets/header-profile.jpg";
import imageProfile from "../../assets/profile-image-login.svg";
import { PencilSimpleLine } from "@phosphor-icons/react";
import { Post } from "../Post";
import { profiles } from "../../data";

export function Profile(props) {
  function handleEditProfile(event) {
    alert("Editar o perfil")
    console.log("event.target.value");
  }
  return (
    <DivWrapper>
      <DivContainer>
        <HeaderContainer src={headerProfile} />
        <DivContent>
          <ImgProfile src={props.avatarUrl} />
          <ProfileName>{props.profileName}</ProfileName>
          <ProfileRole>{props.profileRole}</ProfileRole>
          <Line></Line>
          <FooterContent>
            <ButtonFooter onClick={handleEditProfile}>
              <PencilSimpleLine size={20} />
              <span>Editar seu perfil</span>
            </ButtonFooter>
          </FooterContent>
        </DivContent>
      </DivContainer>
   
        {profiles.map(profile => {
        if(profile.id===1) {
         return  <Post key={profile.id}
            profileName={profile.profileName}
            profileRole={profile.profileRole}
            avatarUrl={profile.avatarUrl}
            content={profile.content.map(item => item.paragraph)}
            hastags={profile.hastags.map(item => item)}
          />
        }
      })}
    </DivWrapper>
  );
}
