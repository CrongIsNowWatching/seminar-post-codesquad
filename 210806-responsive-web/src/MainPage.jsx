import styled from "styled-components";
const MainPage = () => {
  return (
    <>
      <NavLayer>
        <span>CINW</span>
        <NavMenu>
          <li>Home</li>
          <li>Main</li>
          <li>My Page</li>
        </NavMenu>

        <NavIcon>
          <li>📞</li>
          <li>🛒</li>
          <li>🗓</li>
        </NavIcon>
      </NavLayer>

      <Banner>2021 코드스쿼드 마스터스코스</Banner>
      <MainLayout>
        <ContentsLayer>
          1. 마스터의 코드리뷰와 협력방식 프로그래머에게 코드리뷰는 빠르게
          성장할 수 있는 가장 효과적인 방법입니다. 여러분들은 마스터즈 코스에서
          탄탄한 실무경력의 마스터들에게 지속적인 멘토링과 꼼꼼한 코드리뷰를
          받으며 가장 빠르게 성장할 수 있습니다. 심지어 마스터즈코스 이후에도
          온라인 공간에서 코드스쿼드 멤버로써 지속적인 커뮤니케이션이
          가능합니다. 이것은 코드스쿼드 멤버쉽이라는 철학이 있기 때문입니다.
          모든 학생은 협력관계를 통해서 함께 성장하는 철학을 따르게 됩니다.
          우리는 모두 함께 성장합니다.
        </ContentsLayer>
        <ContentsLayer>
          2. 최고의 커리큘럼 마스터즈코스는 컴퓨터기초, 프로그래밍, 프로젝트라는
          최고의 학습 단계를 가지고 있습니다. 모든 미션과 프로젝트는 국내 최고의
          회사에 근무 중인 개발자들의 지속적인 조언을 통해 구성됩니다.
          여러분들은 필요한 지식을 단계적으로 실습과 미션을 해결하면서 본인의
          것으로 만들 수 있습니다. 물론 그 과정에서 올바른 학습이 이뤄졌는지
          마스터들의 피드백이 늘 함께합니다.
        </ContentsLayer>
        <ContentsLayer>
          3.클래스별 응용 프로그래밍 경험뿐만 아니라, 각 클래스 분야별로 반드시
          필요한 기초 지식(자료구조 및 알고리즘, 운영체제, 네트워크 등)을 함께
          학습할 수 있습니다. 마스터즈 코스에서는 컴퓨터 전공자에게 필요한
          기초지식 중 가장 중요한 부분을 밀도 있게 학습합니다.
        </ContentsLayer>
      </MainLayout>
    </>
  );
};

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  font-size: 2rem;
  background-color: #08329b;
  color: white;
  ${({ theme }) => theme.tablet` 
     display: none;
  `};
`;
const MainLayout = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    font-size: 14px;
  }
`;
const ContentsLayer = styled.div`
  width: 33.33%;
  border: 1px solid black;
  padding: 1rem;
  @media only screen and (max-width: ${({ theme }) => theme.devices.laptop}) {
    width: 100%;
  }
`;
const NavLayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7bdb7b;
  padding: 8px 12px;
`;
const NavMenu = styled.ul`
  display: flex;
  li {
    padding: 8px 12px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.devices.laptop}) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    li {
      width: 100%;
      text-align: center;
    }
  }
`;
const NavIcon = styled.ul`
  display: flex;
  li {
    padding: 0px 5px;
  }
`;

export default MainPage;
