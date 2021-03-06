/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: KangaroOz 3D (https://sketchfab.com/KangaroOz-3D)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/macbook-pro-2021-37763335f74b497e91906986b170b5d1
title: MacBook Pro 2021
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Laptop({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/laptop.glb')
  return (
    <group ref={group} {...props} dispose={null} position={[0, -0.10, -0.02]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.MacBookPro} />
          <group position={[0.12, 0.01, 0]}>
            <mesh geometry={nodes.Object_8.geometry} material={materials.MacBookPro} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.MacBookPro} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/laptop.glb')
