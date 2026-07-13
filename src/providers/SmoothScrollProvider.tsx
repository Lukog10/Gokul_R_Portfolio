'use client';

import { ReactLenis } from 'lenis/react';

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{
            lerp: 0.15,
            duration: 0.8,
            smoothWheel: true,
            wheelMultiplier: 1.4,
            // smoothTouch is causing TS error in this version's types
            // @ts-ignore
            smoothTouch: false
        }}>
            {children}
        </ReactLenis>
    );
}
