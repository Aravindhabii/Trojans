/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: TAIGA-ZOE (https://sketchfab.com/TAIGA-ZOE)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/bitcoin-29a09cc3124a4009a0eee7f201fb4a0b
title: Bitcoin
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Bitcointwo({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/bitcointwo.glb')
  return (
    <group ref={group} {...props} dispose={null} position={[0, -0.45, -0.02]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.None} />
      </group>
    </group>
  )
}

useGLTF.preload('/bitcointwo.glb')