import { Link } from "react-router-dom";
import styled from "styled-components";
import { useScrollTop } from "../lib/useScrollTop";
import { project } from "../components/project";
import { PageTitle } from "../components/PageTitle";
import { TopButton } from "./components/TopButton";

const Container = styled.div`
  padding: 30px 25px;
  width: 100%;
  min-height: 100vh;
  margin-top: 40px;
`;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  column-gap: 30px;
`;

const ConWrap = styled.div`
  width: 100%;
`;
const Con = styled.div`
  width: 100%;
  height: 650px;

  border: 1px solid #fff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const ImgWrap = styled.div`
  width: 100%;
  display: flex;
`;

const Imge = styled.div`
  width: 100%;

  margin-right: 20px;
`;

const TextWrap = styled.div`
  width: 500px;
`;
const Title = styled.div`
  margin-bottom: 50px;
  font-size: 25px;
  font-weight: 600;
`;

const Text = styled.p`
  margin-bottom: 20px;
  line-height: 18px;
`;

const Desc = styled.p`
  margin-bottom: 50px;
  line-height: 18px;
`;

const Git = styled.div`
  h4 {
    margin-bottom: 5px;
  }
  margin-bottom: 20px;
`;

const Site = styled.div`
  h4 {
    margin-bottom: 5px;
  }
`;

export const Home = () => {
  useScrollTop();
  return (
    <Container>
      <PageTitle title={"김연지"} />
      <Wrap>
        {project?.map((data) => (
          <ConWrap key={data.id}>
            <Con>
              <Link to={data.deployUrl} target="_blank">
                <ImgWrap>
                  <Imge>
                    <img src={data.img_1} alt={data.name} />
                  </Imge>

                  <Imge>
                    <img src={data.img_2} alt={data.name} />
                  </Imge>
                </ImgWrap>
              </Link>
              <TextWrap>
                <Title>{data.name}</Title>
                <Text>{data.nameDesc}</Text>
                <Desc>{data.desc}</Desc>
                <Git>
                  <h4>깃허브 주소</h4>
                  <Link to={data.gitUrl} target="_blank">
                    {data.gitUrl}
                  </Link>
                </Git>
                <Site>
                  <h4>배포 주소</h4>
                  <Link to={data.deployUrl} target="_blank">
                    {data.deployUrl}
                  </Link>
                </Site>
              </TextWrap>
            </Con>
          </ConWrap>
        ))}
      </Wrap>
      <TopButton />
    </Container>
  );
};
