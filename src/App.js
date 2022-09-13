import './App.css';
import BenefitsSolar from './components/sections/BenefitsSolar';
import DistributedGeneration from './components/sections/DistributedGeneration';

function App() {
  return (
    <div>
        <div className="cabecalho limitar-pagina"></div>
        <BenefitsSolar />
        <DistributedGeneration/>
    </div>
  );
}

export default App;