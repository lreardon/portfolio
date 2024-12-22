import React from "react";
import { TextureLoader } from "three";

function PlanetProto(props) {
    const texture = useLoader(TextureLoader, )
    return(
        <mesh {...props}>
            <sphereGeometry args={[props.size, 32, 32]}/>
            <meshPhongMaterial {...props.materialOptions} />
        </mesh>
    )

    // function texture(material, property, uri) {
    //     let textureLoader = new THREE.TextureLoader();
    //     textureLoader.crossOrigin = true;
    //     textureLoader.load(
    //       uri,
    //       function(texture) {
    //         material[property] = texture;
    //         material.needsUpdate = true;
    //       }
    //     );
    //   }

    // function glowMaterial(intensity, fade, color) {
    //   // Custom glow shader from https://github.com/stemkoski/stemkoski.github.com/tree/master/Three.js
    //   let glowMaterial = new THREE.ShaderMaterial({
    //     uniforms: { 
    //       'c': {
    //         type: 'f',
    //         value: intensity
    //       },
    //       'p': { 
    //         type: 'f',
    //         value: fade
    //       },
    //       glowColor: { 
    //         type: 'c',
    //         value: new THREE.Color(color)
    //       },
    //       viewVector: {
    //         type: 'v3',
    //         value: camera.position
    //       }
    //     },
    //     vertexShader: `
    //       uniform vec3 viewVector;
    //       uniform float c;
    //       uniform float p;
    //       varying float intensity;
    //       void main() {
    //         vec3 vNormal = normalize( normalMatrix * normal );
    //         vec3 vNormel = normalize( normalMatrix * viewVector );
    //         intensity = pow( c - dot(vNormal, vNormel), p );
    //         gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    //       }`
    //     ,
    //     fragmentShader: `
    //       uniform vec3 glowColor;
    //       varying float intensity;
    //       void main() 
    //       {
    //         vec3 glow = glowColor * intensity;
    //         gl_FragColor = vec4( glow, 1.0 );
    //       }`
    //     ,
    //     side: THREE.BackSide,
    //     blending: THREE.AdditiveBlending,
    //     transparent: true
    //   });
      
    //   return glowMaterial;
    // }
  }
