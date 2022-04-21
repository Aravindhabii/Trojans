import React from "react";
import { Canvas  } from "@react-three/fiber";

import { Suspense } from 'react'
import { Environment } from '@react-three/drei'

import Model from './model'

function Threed() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Threed;
