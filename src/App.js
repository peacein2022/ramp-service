import logo from './logo.svg';
import './App.css';
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';

function App() {
  const startRamp = () => new RampInstantSDK({
    hostAppName: 'your dApp',
    hostLogoUrl: 'https://yourdapp.com/yourlogo.png',
    url: 'https://ri-widget-staging.firebaseapp.com/',
    hostApiKey: 'kb5vn76yuy64xatj76u8ouz2wrhnwhbatg4rrefh',
    // swapAmount: '1500000000000000000', // 150 ETH in wei
    // swapAsset: 'ETH', 
    // userAddress: '0xb9e36F98ccbbE5D714704EC450e1E61684893FE9',
  })
    .on('*', (event) => console.log("@",event))
    .show();
  return (
    <div className="App">
      <div onClick={()=> startRamp()}>startRamp</div>
    </div>
  );
}

export default App;
