// components/ParticlesHearts.tsx (Giữ nguyên)
'use client';

import { Particles } from '@tsparticles/react';

export default function ParticlesHearts() {
  return (
    <Particles
      id='tsparticles'
      options={{
        preset: 'links',
        background: { color: { value: 'transparent' } },
        particles: {
          color: { value: '#ffffff' },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: { enable: true, speed: 1.5, outModes: { default: 'bounce' } },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
          number: { value: 80 },
        },
        detectRetina: true,
      }}
      className='absolute inset-0 z-0'
    />
  );
}
