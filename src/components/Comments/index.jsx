import { ThumbsUp, Trash } from "@phosphor-icons/react";
import imgProfile from "../../assets/profile-image-login.svg";
import {
  DivContainer,
  DivContent,
  ImgProfile,
  DivProfile,
  Profile,
  ProfileName,
  ProfileTimer,
  ButtonTrash,
  PostContent,
  FooterContent,
  FooterLike,
  ButtonLike,
} from "./styles";
import { useState } from "react";

export function CommentPost({ avatarUrl, profileName, content,onDeleteComment }) {
  const [like, setLike] = useState(0);

  function deleteComment() {
    onDeleteComment(content)
  }

  function handleIncrementLike() {
    setLike(like + 1)
  }
  return (
    <>
      <DivContainer>
        <ImgProfile src={avatarUrl} />
        <DivContent>
          <DivProfile>
            <Profile>
              <ProfileName>{profileName}</ProfileName>
              <ProfileTimer>Cerca de 2h</ProfileTimer>
            </Profile>
            <ButtonTrash onClick={deleteComment}>
              <Trash size={20} />
            </ButtonTrash>
          </DivProfile>
          <PostContent>{content}</PostContent>
          <FooterContent>
            <ButtonLike onClick={handleIncrementLike}>
              <ThumbsUp size={18} />
            </ButtonLike>
            <FooterLike>Aplaudir {like}</FooterLike>
          </FooterContent>
        </DivContent>
      </DivContainer>
    </>
  );
}
