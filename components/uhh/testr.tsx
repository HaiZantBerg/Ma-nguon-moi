"use client";

import {
    motion,
    useAnimate,
    useDragControls,
    useMotionValue,
} from "motion/react";
import React, { useState } from "react";

export default function Drawer() {
    const [scope, animate] = useAnimate();

    const [appear, setAppear] = useState(true);
    const controls = useDragControls();

    const dragY = useMotionValue(0);

    return (
        <>
            {appear && (
                <div className="mt-16" ref={scope}>
                    <motion.div
                        className="bg-black w-full h-[10rem]"
                        drag="y"
                        style={{
                            y: dragY,
                        }}
                        id="drag"
                        onDragEnd={() => {
                            console.log(dragY.get());
                            if (dragY.get() >= 500) {
                                animate("#drag", {
                                    scale: 0.85,
                                    y: 1000,
                                });
                            }
                        }}
                    ></motion.div>
                </div>
            )}
        </>
    );
}
