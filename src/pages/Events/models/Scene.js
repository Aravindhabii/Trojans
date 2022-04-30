import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Workshop({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-1.53, 0.92, 3.05]} rotation={[-0.25, -0.64, -0.06]} scale={0.03} />
        <group position={[-0.03, -0.96, -0.78]} rotation={[2.4, 0, 0.01]} scale={0.03} />
        <group position={[-0.75, 0.23, -0.78]} rotation={[-3.14, -0.43, 0.01]} scale={0.03} />
        <group position={[-0.08, 1.04, -0.78]} rotation={[-2.73, 0, 0.01]} scale={0.03} />
        <group position={[0.81, 0.05, -0.78]} rotation={[3.14, 0.2, 0.01]} scale={0.03} />
        <group position={[0.81, 0.9, 3.35]} rotation={[0, 0.2, 0]} scale={0.03} />
        <group position={[-0.85, 1.14, 3.35]} rotation={[-0.51, 0, 0]} scale={0.03} />
        <group position={[0.97, -0.86, 3.35]} rotation={[0.41, 0, 0]} scale={0.03} />
        <group position={[-0.75, -1.27, 3.35]} rotation={[0, -0.14, 0]} scale={0.03} />
        <mesh geometry={nodes.CHAR_Cooper_1.geometry} material={materials.MAT_CHAR_Cooper_Head} />
        <mesh geometry={nodes.CHAR_Cooper_2.geometry} material={materials.MAT_CHAR_Cooper_Body} />
        <mesh geometry={nodes.CHAR_Cooper_3.geometry} material={materials.Glass} />
        <group position={[2.07, -1.43, -4.46]} rotation={[-Math.PI, 0, 0]} />
        <group scale={1.9}>
          <mesh geometry={nodes.Ground_1.geometry} material={materials.Root} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
