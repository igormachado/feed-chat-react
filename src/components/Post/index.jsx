import { useState } from "react";
import imgProfile from "../../assets/profile-image-login.svg";
import {
  DivContainer,
  HeaderContainer,
  DivProfile,
  ProfileContent,
  TimerPost,
  ProfileName,
  ProfileRole,
  DivContent,
  ContentParagraph,
  ContentFooter,
  LineContent,
  FooterHeader,
  Footer,
  FormComment,
  FormHeader,
  FormTextarea,
  FormButton,
  DivWrapper,
  ImgProfile,
} from "../Post/styles";
import { CommentPost } from "../Comments";
import { profiles } from "../../data";

export function Post(props) {
  const [postContent, setPostContent] = useState("");
  const [allPostComment, setAllPostComment] = useState([]);

  function handlePostComment(event) {
    setPostContent(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    setAllPostComment([...allPostComment, postContent]);
    setPostContent("");
  }

  function handleDeleteComment(deleteCommentFromList) {
    const commentsWithoutDeleteOne = allPostComment.filter(item => {
      return item !== deleteCommentFromList;
    })
    setAllPostComment(commentsWithoutDeleteOne)
  }

  const isButtonDisabled = postContent.length !== 0 ? false : true;
  return (
    <DivWrapper>
      <DivContainer>
        <HeaderContainer>
          <DivProfile>
            <ImgProfile src={props.avatarUrl} />
            <ProfileContent>
              <ProfileName>{props.profileName}</ProfileName>
              <ProfileRole>{props.profileRole}</ProfileRole>
            </ProfileContent>
          </DivProfile>
          <TimerPost>Publicado há 1h</TimerPost>
        </HeaderContainer>
        <DivContent>

          <ContentParagraph>{props.content}</ContentParagraph>
          <ContentFooter>
            <FooterHeader>👉 jane.design/doctorcare</FooterHeader>
            <Footer>
              <a href="#">{props.hastags}</a>
           
            </Footer>
          </ContentFooter>
          <LineContent></LineContent>
        </DivContent>
        <FormComment onSubmit={handleSubmitForm}>
          <FormHeader>Deixe o seu feedback</FormHeader>
          <FormTextarea
            value={postContent}
            onChange={handlePostComment}
            placeholder="Deixe seu comentário"
          />
          <FormButton type="submit" disabled={isButtonDisabled}>
            Publicar
          </FormButton>
        </FormComment>

        {allPostComment.length === 0 ? (
          ""
        ) : (
          (allPostComment.map(item => <CommentPost key={item}
            profileName={"Celi Ferreira"}
            avatarUrl={
              "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            }
            content={item}
            onDeleteComment={handleDeleteComment}
          />))
        )}
        
      </DivContainer>
    </DivWrapper>
  );
}
