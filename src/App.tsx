import { HashRouter, Route, Routes } from 'react-router-dom';
import AccommodationDetail from './views/AccommodationDetail';
import Main from './views/Main';
import Payment from './views/Payment';
import ReservationConfirm from './views/ReservationConfirm';
import SearchResult from './views/SearchResult';
// import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import PageNotFound from './views/PageNotFound';
import Layout from './components/common/Layout';
import AuthCallback from './components/common/AuthCallback';
import UnAuthRoute from './router/UnAuthRoute';
import AuthRoute from './router/AuthRoute';
import useCustomInterceptor from './hooks/useCustomInterceptor';

function App() {
  useCustomInterceptor();

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route element={<UnAuthRoute />}>
            {/* <Route path="/signIn" element={<SignIn />} /> */}
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
          </Route>
          <Route element={<AuthRoute />}>
            <Route
              path="/reservationConfirm"
              element={<ReservationConfirm />}
            />
            <Route path="/payment" element={<Payment />} />
          </Route>
          <Route path="/searchResult" element={<SearchResult />} />
          <Route path="/accommodation/:id" element={<AccommodationDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
