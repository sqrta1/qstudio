import './App.css';
import krot from './testoviikrot.jpg';

import ColoredUserpic from './ColoredUserpic/ColoredUserpic';

function App() {
  return (
    <ColoredUserpic
      margin={4}
      colorWidth={6}
      backgroundColor={'red'}
      src={krot}
      size={150}
      colors={['blue', 'green']}
      hoverColors={['green', 'blue']}
    />
  );
}

export default App;
