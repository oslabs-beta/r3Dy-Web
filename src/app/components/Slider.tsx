import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from 'leva';
import ReactDOM from "react-dom";
import { Canvas, useThree } from "react-three-fiber";
import { useGesture } from "@use-gesture/react";
import { useSpring, animated, to } from '@react-spring/three';

type SliderProps = {
    maxValue?: number;
    value: number;
    steps?: number;
    onChange: React.Dispatch<React.SetStateAction<number>>;
}

export default function Slider({ maxValue, value, steps, onChange }: SliderProps) {
    const max = maxValue ? maxValue : 10; 
    const spacing = steps ? steps : 2;
    const spaces = max / spacing;
    const xIncrements = Math.round(12 / (spaces + 1) * 10);
    const valueArray: number[] = [];
    for (let i = 0; i < spaces + 1; i++) {
        valueArray.push(max - i * spacing);
    }
    valueArray.sort((a, b) => { return a - b });

    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;
    const [spring, set] = useSpring(() => ({ 
        scale: [1, 1, 1], 
        position: [0, 0, 0], 
        rotation: [0, 0, 0], 
        config: { precision: 0.01 }
    }));

    const bind = useGesture({
        onDrag: ({ offset: [x, y] }) => {
            const newX = Math.round(x / aspect * 10);
            if (spaces % 2 !== 0) {
                if (newX % xIncrements === 0 && newX !== 0) {
                    if (newX / xIncrements < 0) {
                        onChange(valueArray[newX / xIncrements + (spaces + 1) / 2]);
                    } else {
                        onChange(valueArray[newX / xIncrements + (spaces + 1) / 2 - 1]);
                    }
                    set({ position: [x / aspect, 0, 0], rotation: [y / aspect, x / aspect, 0] });
                }
            } else {
                if (newX % xIncrements === 0) {
                    onChange(valueArray[newX / xIncrements + spaces / 2]);
                    set({ position: [x / aspect, 0, 0], rotation: [y / aspect, x / aspect, 0] });
                }
            }
        },
        onHover: ({ hovering }) => set({ scale: hovering ? [1.2, 1.2, 1.2] : [1, 1, 1] })
    });

    return (
        <>
            <group>
                <mesh position-z={-.5} scale={3}>
                    <planeGeometry args={[5, 3]} />
                    <meshBasicMaterial wireframe={false} color={'#f0f0f0'} />
                </mesh>
                <mesh scale={3}>
                    <planeGeometry args={[3.9, .25]} />
                    <meshBasicMaterial wireframe={false} color={'red'} />
                </mesh>
                <animated.mesh
                    {...bind()}
                    castShadow
                    scale={spring.scale}
                    position={to([spring.position], ([p]) => p)}
                    rotation={spring.rotation}
                >
                    <sphereGeometry args={[1, 32, 16]} />
                    <meshBasicMaterial wireframe={false} color={'aqua'} />
                </animated.mesh>
                <animated.mesh
                    {...bind()}
                    scale={spring.scale}
                    position={to([spring.position], ([p]) => p)}
                    rotation={spring.rotation}
                >
                    <Text
                        scale={[2, 2, 2]}
                        fontSize={0.5}
                        castShadow
                        position-y={1.5}
                        color={'black'}
                        font={'fonts/Inter-Bold.ttf'}
                        overflowWrap='break-word'
                    >
                        {value}
                    </Text>
                    <meshBasicMaterial wireframe={false} color={'black'} />
                </animated.mesh>
            </group>
        </>
    )
}



{/*  const [slider, setSlider] = useState(0);
  return (
    <Canvas 
    camera = { {
      near:.1,
      far:200,
      position: [0, 1, 8]
    } }
    >
      <Slider 
      onChange={setSlider}
      // maxValue={10}
      // steps={2}
      value={slider} />
    </Canvas>
  ) */}