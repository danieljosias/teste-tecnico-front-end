import { GlobalStyle } from './Styles/global'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormSimulation from './components/FormSimulation'
import './App.css'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <ToastContainer />
      <FormSimulation/>
    </div>
  );
}
export default App;
