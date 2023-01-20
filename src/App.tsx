import './App.css'
import { Canvas } from '@react-three/fiber'
import TheBook from './Components/3D_model/TheBook'
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <div className="App">
      
      <Canvas camera={{fov: 75, near: 0.1, far:1000, position: [0,0,7]}}> 
        <OrbitControls enableZoom={false}/>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <TheBook position={[0, 0, 0]} />
      </Canvas>

    </div>
  )
}

export default App;