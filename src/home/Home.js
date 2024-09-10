import { Link } from "react-router-dom";
import styled from "styled-components";
import { useScrollTop } from "../lib/useScrollTop";
import { project } from "../components/project";

const Container = styled.div`
  padding: 30px 25px;
  width: 100%;
  min-height: 100vh;
`;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 40px;
  column-gap: 30px;
`;

const ConWrap = styled.div`
  width: 100%;
  height: 650px;
`;
const Con = styled.div`
  width: 100%;
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

export const Home = () => {
  useScrollTop();
  return (
    <Container>
      <Wrap>
        {project?.map((data) => (
          <Link key={data.id} to={data.url}>
            <ConWrap>
              <Con>
                <ImgWrap>
                  <Imge>
                    <img src={data.img_1} alt={data.name} />
                  </Imge>

                  <Imge>
                    <img src={data.img_2} alt={data.name} />
                  </Imge>
                </ImgWrap>
                <TextWrap>
                  <Title>{data.name}</Title>
                  <Text>{data.nameDesc}</Text>
                  <Desc>{data.desc}</Desc>
                  <Link to={data.url}>{data.url}</Link>
                </TextWrap>
              </Con>
            </ConWrap>
          </Link>
        ))}
      </Wrap>
    </Container>
  );
};
