import './App.css';
import ContentComponent from './Components/ContentComponent/ContentComponent';
import HeroComponent from './Components/Hero/HeroComponent';
import NumberComponent from './Components/NumberComponent/NumberComponent';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>ADMIN DASHBOARD</h1>
      <HeroComponent/>
      <NumberComponent/>
      <ContentComponent/>
    </div>
  );
}

export default App;
