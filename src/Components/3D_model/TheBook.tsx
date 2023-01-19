import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame, ThreeElements, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three';
import BookCover from '../../assets/images';


export default function TheBook(props : ThreeElements['mesh']) {
    const mesh = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => {
        mesh.current.rotation.y += delta;
    });

    const {front, blue, white} = BookCover;

    const urls = [ blue, white, white, white, blue,front ];

    const materials = urls.map((url: string, index: number) => {
        const imageCover = useLoader(TextureLoader, url);
        return (
            <meshStandardMaterial attach={`material-${index}`} map={imageCover}/>
        )
    });

    return (
    <mesh
        {...props}
        ref={mesh}>
        <boxGeometry args={[2.5, 4.3, 0.5]} />
        {materials}
    </mesh>
    )
}