import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";

/**
 * App 컴포넌트: 애플리케이션의 최상위 컴포넌트
 *
 * 주요 기능:
 * 1. 라우팅 설정: react-router-dom을 사용하여 페이지 라우팅 구현
 * 2. 레이아웃 관리: 공통 레이아웃을 적용할 페이지와 독립적인 페이지 구분
 *
 * 라우트 구조:
 * - /: 메인 페이지 (Layout 포함)
 * - /signup: 회원가입 페이지 (독립적인 페이지)
 * - /partners: 파트너 찾기 페이지 (Layout 포함)
 * - /messages: 메시지 페이지 (Layout 포함)
 * - /settings: 설정 페이지 (Layout 포함)
 * - /audio: 오디오 플레이어 및 녹음기 페이지 (Layout 포함)
 */
function App() {
  return (
    // Router: 전체 애플리케이션의 라우팅을 관리
    <Router>
      {/* Routes: 개별 라우트들을 그룹화 */}
      <Routes>
        {/* Layout을 포함하는 페이지들 */}
        {/* 메인 페이지 */}
        <Route
          path="/"
          element={
            <Layout>
              <MainPage />
            </Layout>
          }
        />

        {/* 피드 페이지 */}
        <Route
          path="/feed"
          element={
            <Layout>
              <div>Feed Page</div>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
