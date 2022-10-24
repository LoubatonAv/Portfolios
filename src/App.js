import logo from './logo.svg';
import './App.css';
import Header from './cmps/Header';
import ProjectList from './cmps/ProjectList';

function App() {
  return (
    <div className='grid h-screen place-items-center grid-cols-4'>
      <div className='flex flex-col col-start-2 col-span-2'>
        <Header />
        <ProjectList />
      </div>
    </div>
  );
}

export default App;
