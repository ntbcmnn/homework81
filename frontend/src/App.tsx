import './App.css';
import LinkForm from './Components/LinkForm/LinkForm.tsx';
import LinkResult from './Components/LinkResult/LinkResult.tsx';
import Toolbar from './Components/UI/Toolbar/Toolbar.tsx';

const App = () => (
  <>
    <Toolbar/>
    <div className="container m-5">
      <LinkForm/>
      <LinkResult/>
    </div>
  </>
);

export default App;