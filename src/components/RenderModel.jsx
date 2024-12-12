"use client"
import React from "react";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";

const RenderModel = ({children , className}) => {
    return(
        <Canvas className= {clsx("w-screen h-screen -z-10 relative",className)}>
            <Suspense fallback = {null}>  {/*it loads the model asynchronously*/}
                {children}

            </Suspense>
            <Environment preset = 'dawn'/> {/*create the environment arounf the model*/}
        </Canvas>
    )
};

export default RenderModel;