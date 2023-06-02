import './App.css';
import { Header } from './webheader/head.js';
import { Tab,Tabs} from './components/Tabs.js';
function App() {
  return (
      <div className='h-[100vh] justify-center'>
          <Header />
          <Tabs>
        <Tab label="MyIECEP">
        <div class="flex flex-col justify-center">
            <div className='flex '>
              <p className='m-4 '>IOS-MyIECP</p> 
              <p className='m-2 p-2 rounded-full bg-sky-500 hover:bg-sky-700 cursor-pointer'>Donwload</p>
            </div>
            <div className='flex'>
              <p className='m-2'>AndroidMyIECP</p> 
              <button>Donwload</button>
            </div>
          
         
        </div>
            
          
        </Tab>
        <Tab label="HIMS">
        <div class="flex flex-col justify-center">
            <div className='flex'>
              <p className='m-2'>IOS-MyIECP</p> 
              <button>Donwload</button>
            </div>
            <div className='flex'>
              <p className='m-2'>AndroidMyIECP</p> 
              <button>Donwload</button>
            </div>
          
         
        </div>
        </Tab>
        
      </Tabs>
    
      </div>
  );
}

export default App;

//https://colorhunt.co/palette/0c134f1d267d5c469cd4adfc
