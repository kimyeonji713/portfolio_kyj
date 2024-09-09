import { Link } from "react-router-dom";
import styled from "styled-components";

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
  height: 100%;
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

const Url = styled.p``;

const project = [
  {
    id: 0,
    name: "RE:MOVIE",
    nameDesc:
      "Movie review 와 re가 가지고 있는 다시라는 의미를 가져와 다시 보고 싶은 사이트를 만들고 싶어 이름을 'RE:MOVIE'로 했습니다.",
    url: "https://kimyeonji713.github.io/movie_app/",
    img_1:
      "https://private-user-images.githubusercontent.com/174309619/365653205-2f059895-0335-4d1e-b1d5-cec8aa1d3db1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU4ODYwMDAsIm5iZiI6MTcyNTg4NTcwMCwicGF0aCI6Ii8xNzQzMDk2MTkvMzY1NjUzMjA1LTJmMDU5ODk1LTAzMzUtNGQxZS1iMWQ1LWNlYzhhYTFkM2RiMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkwOVQxMjQxNDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNmQwYjU1OTAzMDlkMmNlZTQzZmM0YTBlMTUyZWI0MzZhM2U3MmU3MTgyN2NiODg2NDU1NmJmZGM4YzYzMTY2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.dSwVa_E-6WE8q0uioAG9NSmOr-4yVYtI8PqJC1VXCLI",
    img_2:
      "https://private-user-images.githubusercontent.com/174309619/365653216-74184ff7-024c-493f-aed1-4778d7fc62ec.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU4ODYwMDAsIm5iZiI6MTcyNTg4NTcwMCwicGF0aCI6Ii8xNzQzMDk2MTkvMzY1NjUzMjE2LTc0MTg0ZmY3LTAyNGMtNDkzZi1hZWQxLTQ3NzhkN2ZjNjJlYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkwOVQxMjQxNDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00NDc0MTAwMGJhNTJkNmYyODNkZTJhN2IwZjllZGFkMjAyMDYxOGYyYmYwNWRlYzU1MzUyYTRiNTViNzJhNGU2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.kjj_XiFZ1aLfcT1egUt0iMCNqJWPw4qJReACOU_62mA",
    desc: "사용자가 보고자 하는 영화의 정보를 요약해 제공함으로써 보다 빠르고 편리하게 영화에 대한 정보를 얻어갈 수 있도록 하였습니다.",
  },
  {
    id: 1,
    name: "BUSAN YUM",
    nameDesc: "부산의 맛집들을 맛있게!",
    url: "https://kimyeonji713.github.io/BUSAN_YUM/",
    img_1:
      "https://private-user-images.githubusercontent.com/174309619/365661387-0685da68-dbe8-4c0e-8434-261eb6465aca.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU4ODc0NjEsIm5iZiI6MTcyNTg4NzE2MSwicGF0aCI6Ii8xNzQzMDk2MTkvMzY1NjYxMzg3LTA2ODVkYTY4LWRiZTgtNGMwZS04NDM0LTI2MWViNjQ2NWFjYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkwOVQxMzA2MDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMzkwNzI5MzE1NzMwYzEwYzc0OTUxNWU3MjZiNTc3YTNjZWE4MTlhN2M4Mjk3ZDdkZmVjMWM5M2E3ODdiYzU4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.CIcFPqCN_c_0BKi1T4gZJSLDgsYPQqMy3oOCCq_BAtA",
    img_2:
      "https://private-user-images.githubusercontent.com/174309619/365661395-9293dac6-88b5-46f1-a630-d1b8fd1547e2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU4ODc0NjEsIm5iZiI6MTcyNTg4NzE2MSwicGF0aCI6Ii8xNzQzMDk2MTkvMzY1NjYxMzk1LTkyOTNkYWM2LTg4YjUtNDZmMS1hNjMwLWQxYjhmZDE1NDdlMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkwOVQxMzA2MDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wODdmOTU2M2U2YmRlZjQzMzU1Y2UyZDY5MzA2NmIxYWY2OWUzZmUxODdmZjc5YjhhNTljYjZlNTIyMjY2OThlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.b10h1YjTuMPLq5bt196UY8LxSJAZGO3AYCt_x_Rmx6c",
    desc: "문화체육관광부가 선정한 부산 방방곡곡에 유명한 맛집부터 숨겨져 잇는 로컬 맛집까지 부산 거주자, 관광 및 여행 온 사람들이 문화체육관광부가 지정한 맛집 리스트의 정보로 메뉴를 고민 될 때, 고를 때 도움이 될 수 있는 앱입니다.",
  },
  {
    id: 2,
    name: "chewping",
    nameDesc: "chewing + camping = 츄핑, 껌 씹는 일 처럼 쉽게 얻는 캠핑장 정보",
    url: "https://kimyeonji713.github.io/chewping/",
    img_1:
      "https://private-user-images.githubusercontent.com/174309619/365665436-84b52133-fc6d-4f7b-9777-5fbee7807385.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU4ODgyMDEsIm5iZiI6MTcyNTg4NzkwMSwicGF0aCI6Ii8xNzQzMDk2MTkvMzY1NjY1NDM2LTg0YjUyMTMzLWZjNmQtNGY3Yi05Nzc3LTVmYmVlNzgwNzM4NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkwOVQxMzE4MjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ZGIyOGU4MDU1YWEwNjc1NjUyOWJlYWQ0MGI5ZmVlZWEwMjI4MTg4ZGEwNWY3ZjVhODk4OTRkZjgxMzlmZjM0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.9EJSAqQQ0vuz2E6q0NpDP-o_HfhLXYciuBD2ouduYCQ",
    img_2:
      "https://private-user-images.githubusercontent.com/174309619/365665447-481c70c8-c80e-46e1-8ccc-b72958fb69f9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU4ODgyMDEsIm5iZiI6MTcyNTg4NzkwMSwicGF0aCI6Ii8xNzQzMDk2MTkvMzY1NjY1NDQ3LTQ4MWM3MGM4LWM4MGUtNDZlMS04Y2NjLWI3Mjk1OGZiNjlmOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkwOVQxMzE4MjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ODM2ZTYwNzU0YjRlOWZlN2ExZjhjMDM5YjJjYzI3ZGMxNjA0NjBkNzYyMDVkZjdhMDE5ZWFhZGM2Y2NlZDEwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.wKWD39G75vDKGEyP_JlbMIJolmQt97Ej6UqPrCmIMjM",
    desc: "사용자가 보고자 하는 영화의 정보를 요약해 제공함으로써 보다 빠르고 편리하게 영화에 대한 정보를 얻어갈 수 있도록 하였습니다.",
  },
  {
    id: 3,
    name: "뭐하셈? 적으셈!",
    url: "https://kimyeonji713.github.io/What_todo/",
    nameDesc:
      "항상 기획서를 작성할 때 고민하는 저에게 선생님이 하셨던 말씀입니다. 고민 말고 일단 적으시길!",
    img_1:
      "https://private-user-images.githubusercontent.com/174309619/365665836-04427c65-1062-4dd7-b7ec-aed15ce0d0c7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU4ODgyODQsIm5iZiI6MTcyNTg4Nzk4NCwicGF0aCI6Ii8xNzQzMDk2MTkvMzY1NjY1ODM2LTA0NDI3YzY1LTEwNjItNGRkNy1iN2VjLWFlZDE1Y2UwZDBjNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkwOVQxMzE5NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wZjViZmQzZjM2ZWU3OGZjMzZhYjZmZGRkM2NmMTBlYzIyMzIyYTg3NmVmN2Q2OTMzN2I1OWIwMTBkMzhkMDMxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.axu5jhYBRxvkoOr9ycxMfJ3a3IqqamDlAvAfe5_wF-g",
    img_2:
      "https://private-user-images.githubusercontent.com/174309619/365665845-90b96710-19b6-40b4-816f-ccff2c926e64.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjU4ODgyODQsIm5iZiI6MTcyNTg4Nzk4NCwicGF0aCI6Ii8xNzQzMDk2MTkvMzY1NjY1ODQ1LTkwYjk2NzEwLTE5YjYtNDBiNC04MTZmLWNjZmYyYzkyNmU2NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkwOVQxMzE5NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NzZiYzc3OTMyMDdjYzJkMGYwNDlhYjc2NTM0N2Q0NDkwYmI3MjZmMTA1ZjcyOTllOWVlYjZkZDhmYzBkN2U0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.mlfU0AU4mxh6CLRWiSSdwDkqm6zznymsjRoleisXt2M",
    desc: "간단히 오늘 할 일, 메모를 작성할 수 있고 뿐만 아니라 현재 날씨까지 함께 보여지는 todo 변형 앱입니다.",
  },
];

export const Home = () => {
  return (
    <Container>
      <Wrap>
        {project.map((data) => (
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
                  <Url>{data.url}</Url>
                </TextWrap>
              </Con>
            </ConWrap>
          </Link>
        ))}
      </Wrap>
    </Container>
  );
};
