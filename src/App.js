import './App.css';
import Header from './components/Header';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import JobsList from './components/JobsList';

function App() {
  return (
    <RecoilRoot>
      <main className=" mt-8">
        <Header />
        <JobsList />
      </main>
    </RecoilRoot>
  );
}

export default App;
