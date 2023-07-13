import { HeaderContainer,Image, SpanHeaderContainer } from "./styles";
import headerLogo from "../../assets/logo-ignite.svg";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <Image src={headerLogo} />
        <SpanHeaderContainer>Ignite Feed</SpanHeaderContainer>
      </HeaderContainer>
    </>
  );
}
