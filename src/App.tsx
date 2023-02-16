import './styles/App.scss'
import TheBook from './components/3D_model/TheBook'
import Search from './components/Search'
import Header from './components/Header'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="canvas">
      <Canvas camera={{fov: 75, near: 0.1, far:1000, position: [0,0,4.5]}}> 
        <OrbitControls enableZoom={false} enablePan={false}/>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      <TheBook position={[0, 0, 0]} />
      </Canvas>
      </div>
		<Search /> 
    </div>
  )
}

export default App;
