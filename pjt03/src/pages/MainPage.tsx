import styled from "@emotion/styled";
import UserProfile from "../components/UserProfile";
import ContentBanner from "../components/ContentBanner";
import CallButton from "../components/CallButton";

const Container = styled.div`
  padding: 2rem 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ActivityCard = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export default function MainPage() {
  return (
    <div></div>
    // <Container>
    //   <h1 className="text-3xl font-bold mb-6">환영합니다, 홍길동님!</h1>
    //   <Grid>
    //     <UserProfile />
    //     <ContentArea>
    //       <ContentBanner />
    //       <CallButton />
    //       <ActivityCard>
    //         <h2 className="text-xl font-semibold mb-4">최근 활동</h2>
    //         <ul className="space-y-2">
    //           <li className="flex items-center justify-between">
    //             <span>영어 회화 연습 (30분)</span>
    //             <span className="text-gray-500">2시간 전</span>
    //           </li>
    //           <li className="flex items-center justify-between">
    //             <span>스페인어 문법 학습</span>
    //             <span className="text-gray-500">어제</span>
    //           </li>
    //           <li className="flex items-center justify-between">
    //             <span>일본어 파트너와 채팅</span>
    //             <span className="text-gray-500">2일 전</span>
    //           </li>
    //         </ul>
    //       </ActivityCard>
    //     </ContentArea>
    //   </Grid>
    // </Container>
  );
}
