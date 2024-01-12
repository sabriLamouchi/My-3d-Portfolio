import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import {Decal,Float, OrbitControls, Preload, useTexture}from '@react-three/drei';
import CanvasLoader from '../Loader'
import Loader from '../Loader';
const Ball = (props) => {
  const [decal]=useTexture([props.imgUrl])
  return (
    <Float
    speed={1.75}
    rotationIntensity={1}
    floatIntensity={2}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0,0,0.5]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry  args={[1,1]}/>
        <meshStandardMaterial 
        color='#ffffff'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        />
        <Decal
        position={[0,0,1]}
        rotation={[2*Math.PI,0,6.25]}
        flatShading
         map={decal}/>
      </mesh>
    </Float>
  )
}

const BallCanvas=(props)=>{
  return(
    <Canvas
    frameloop='demand'
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<Loader/>} >
        <OrbitControls enableZoom={false}
        />
        <Ball imgUrl={props.icon}/>
      </Suspense>
    </Canvas>
  );
}

export default BallCanvas