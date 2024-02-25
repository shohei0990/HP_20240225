// pages/portfolio.tsx
import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { LumaSplatsThree } from '@lumaai/luma-web';
import * as THREE from 'three';

function Scene() {
    const ref = useRef();
    const { scene } = useThree();

    useEffect(() => {
        const splats = new LumaSplatsThree({
        source: 'https://lumalabs.ai/capture/ca9ea966-ca24-4ec1-ab0f-af665cb546ff',
        });
        scene.add(splats);

    return () => {
        scene.remove(splats);
        splats.dispose();
        };
    }, [scene]);

    return (
        <>
        <Text
            ref={ref}
            position={[0, 1, 2]}
            fontSize={0.5}
            color="white"
        >
            CursorConnect
        </Text>
        <OrbitControls />
        </>
    );
}

export default function Portfolio() {
    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <Scene />
        </Canvas>
    );
}