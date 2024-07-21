import React from 'react'
import * as THREE from "three"
import { OrbitControls } from '@react-three/drei'
import GLTFLoader from "@react-three/drei"


const scene = new THREE.Scene()
const camera  =new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);

let object;
let controls;
// let obj
const loader = new GLTFLoader()
const Animation1 = () => {
  return (
    <div>Animation1</div>
  )
}

export default Animation1