'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import ParticlesHearts from './components/ParticlesHearts';
import ValentineMessage from './components/ValentineMessage';

export default function Home() {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [confetti, setConfetti] = useState<boolean>(false);
  const [randomGift, setRandomGift] = useState<string>('');
  const [gifts, setGifts] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedGifts = localStorage.getItem('valentineGifts');
    if (storedGifts) {
      setGifts(JSON.parse(storedGifts));
    }
  }, []);

  const handleClick = () => {
    if (gifts.length === 0) {
      setRandomGift(
        'Chưa có quà nào được setup! Vui lòng truy cập /admin để thêm.',
      );
    } else {
      const gift = gifts[Math.floor(Math.random() * gifts.length)];
      setRandomGift(gift);
    }
    setShowMessage(true);
    setConfetti(true);
    setTimeout(() => setConfetti(false), 5000);
  };

  // Floating elements - generated on client only
  const floatingElements = mounted
    ? [
        { emoji: '💕', delay: 0, duration: 4, x: 20, y: 50 },
        { emoji: '💖', delay: 0.5, duration: 5, x: -20, y: 60 },
        { emoji: '💗', delay: 1, duration: 6, x: 30, y: 40 },
        { emoji: '💝', delay: 1.5, duration: 4.5, x: -30, y: 55 },
        { emoji: '🌹', delay: 2, duration: 5.5, x: 25, y: 45 },
      ]
    : [];

  if (!mounted) {
    return null;
  }

  return (
    <div className='relative w-full h-screen bg-black overflow-hidden flex items-center justify-center'>
      {/* Animated gradient background */}
      <div className='absolute inset-0 bg-linear-to-br from-pink-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse' />

      {/* Grid background effect */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />

      {/* Glow orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className='absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20'
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className='absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20'
      />

      {/* Additional glow orb */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ duration: 30, repeat: Infinity }}
        className='absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10'
      />

      {/* Floating hearts background */}
      {floatingElements.map((item, idx) => (
        <motion.div
          key={idx}
          animate={{
            y: [0, -item.y, 0],
            x: [0, item.x, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
          }}
          className='absolute text-3xl pointer-events-none'
          style={{
            left: `${10 + idx * 18}%`,
            top: `${20 + idx * 15}%`,
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      <ParticlesHearts />
      {confetti && <Confetti className='z-10' />}

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative z-20 w-full max-w-6xl px-4 py-8'
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex flex-col justify-center'
          >
            {/* Heart emoji with animation */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0],
                y: [0, -10, 0],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className='text-8xl mb-6 w-fit drop-shadow-2xl'
            >
              ❤️
            </motion.div>

            {/* Title with gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className='text-6xl lg:text-7xl font-black bg-linear-to-r from-pink-400 via-red-400 to-rose-400 bg-clip-text text-transparent mb-2 leading-tight drop-shadow-lg'>
                Happy Valentine
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='text-lg lg:text-xl text-white/70 mb-10 leading-relaxed max-w-md'
            >
              Dành cho những trái tim trẻ đang yêu 💕
            </motion.p>

            {/* Button with enhanced effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className='w-fit'
            >
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 60px rgba(236, 72, 153, 0.8)',
                }}
                whileTap={{ scale: 0.92 }}
                onClick={handleClick}
                className='group relative px-12 py-5 text-xl font-bold text-white rounded-full overflow-hidden transition-all duration-300'
              >
                {/* Animated background */}
                <div className='absolute inset-0 bg-linear-to-r from-pink-500 via-red-500 to-rose-500 opacity-100 group-hover:opacity-90 transition-opacity' />

                {/* Animated glow border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className='absolute inset-0 rounded-full bg-linear-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-30 blur-lg'
                />

                {/* Shimmer effect */}
                <motion.div
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className='absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100'
                />

                <span className='relative flex items-center gap-3'>
                  Nhấn để nhận quà
                  <motion.span
                    animate={{ x: [0, 8, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    🎁
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>

            {/* Admin link with hover effect */}
            <motion.a
              href='/admin'
              whileHover={{ x: 8, color: '#ec4899' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className='text-white/50 hover:text-pink-400 transition-colors duration-300 text-sm mt-8 w-fit font-medium'
            >
              → Quản lý quà tặng
            </motion.a>
          </motion.div>

          {/* Right side - Message & Decorations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='flex flex-col items-center justify-center relative'
          >
            {/* Animated character/figure */}
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className='text-9xl mb-8 drop-shadow-2xl'
            >
              💑
            </motion.div>

            {/* Message component */}
            <ValentineMessage
              showMessage={showMessage}
              randomGift={randomGift}
            />

            {/* Decorative rotating circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className='absolute -bottom-32 -right-32 w-64 h-64 border-2 border-pink-500/20 rounded-full'
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className='absolute -top-20 -left-20 w-48 h-48 border-2 border-purple-500/20 rounded-full'
            />

            {/* Pulsing circle */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-pink-500/10 rounded-full'
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className='absolute text-xl pointer-events-none'
          style={{
            left: `${Math.random() * 100}%`,
            top: '100%',
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  );
}
