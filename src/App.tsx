import './Styles/App.scss'
import { Canvas } from '@react-three/fiber'
import TheBook from './Components/3D_model/TheBook'
import { OrbitControls } from '@react-three/drei'
import Search from './Components/Search'
import Header from './Components/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <div className="canvas">
        <Canvas camera={{fov: 75, near: 0.1, far:1000, position: [0,0,4]}}> 
          <OrbitControls enableZoom={false}/>
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
