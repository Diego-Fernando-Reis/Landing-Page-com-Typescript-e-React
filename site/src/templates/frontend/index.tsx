import Header from "../../organisms/Header/index.";
import * as S from "./styles";
type FrontendProps = {
  children: React.ReactNode;
};

const Frontend = ({children}:FrontendProps)=>{
  return (<S.Container>
      <Header></Header>
    </S.Container>)
}

export default Frontend;