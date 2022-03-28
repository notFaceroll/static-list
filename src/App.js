import './App.css';
import Header from './components/Header';


import JobsList from './components/JobsList';
import JobsProvider from './store/JobsProvider';

function App() {
  return (
    <JobsProvider>
        <main className=" mt-8">
          <Header />
          <JobsList />
        </main>
    </JobsProvider>
  );
}

export default App;
