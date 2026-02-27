'use client';
import { useEffect, useState, useMemo } from 'react';
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

  const floatingElements = useMemo(
    () =>
      mounted
        ? [
            { emoji: '💕', delay: 0, duration: 4, x: 20, y: 50 },
            { emoji: '�', delay: 0.5, duration: 5, x: -20, y: 60 },
            { emoji: '�', delay: 1, duration: 6, x: 30, y: 40 },
            { emoji: '�', ddelay: 1.5, duration: 4.5, x: -30, y: 55 },
            { emoji: '🌹', delay: 2, duration: 5.5, x: 25, y: 45 },
          ]
        : [],
    [mounted],
  );

  if (!mounted) {
    return null;
  }

  return (
    <div className='relative w-full min-h-screen bg-black overflow-x-hidden lg:h-screen lg:overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-center will-change-transform'>
      {/* Animated gradient background */}
      <div className='absolute inset-0 bg-linear-to-br from-pink-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse' />

      {/* Grid background effect */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none' />

      {/* Glow orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className='absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 will-change-transform'
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className='absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 will-change-transform'
      />

      {/* Additional glow orb */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className='absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 will-change-transform'
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
            ease: 'linear',
          }}
          className='absolute text-2xl sm:text-3xl pointer-events-none will-change-transform'
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
        transition={{ duration: 0.6 }}
        className='relative z-20 w-full max-w-6xl px-3 sm:px-4 md:px-6 py-8 sm:py-10 md:py-12 lg:py-8'
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center'>
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='flex flex-col justify-center'
          >
            {/* Heart emoji with animation */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6 w-fit drop-shadow-2xl will-change-transform'
            >
              ❤️
            </motion.div>

            {/* Title with gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-linear-to-r from-pink-400 via-red-400 to-rose-400 bg-clip-text text-transparent mb-2 leading-tight drop-shadow-lg'>
                Happy Valentine
              </h1>
            </motion.div>

            {/* Year with animation */}
            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className='text-xl sm:text-2xl md:text-3xl text-white/80 font-light tracking-widest mb-6 sm:mb-8'
            >
              2025
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className='text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-8 sm:mb-10 leading-relaxed max-w-md'
            >
              Dành cho những trái tim trẻ đang yêu 💕
              <br />
              <span className='text-pink-300 font-semibold text-base sm:text-lg md:text-xl'>
                Nguyễn Hoàng Thiên Khải
              </span>
            </motion.p>

            {/* Button with enhanced effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className='w-fit'
            >
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 0 60px rgba(236, 72, 153, 0.8)',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}
                className='group relative px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-bold text-white rounded-full overflow-hidden transition-all duration-300 will-change-transform'
              >
                {/* Animated background */}
                <div className='absolute inset-0 bg-linear-to-r from-pink-500 via-red-500 to-rose-500 opacity-100 group-hover:opacity-90 transition-opacity' />

                {/* Animated glow border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className='absolute inset-0 rounded-full bg-linear-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-30 blur-lg will-change-transform'
                />

                {/* Shimmer effect */}
                <motion.div
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className='absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 will-change-transform'
                />

                <span className='relative flex items-center gap-2 sm:gap-3'>
                  <span className='hidden sm:inline'>Nhấn để nhận quà</span>
                  <span className='sm:hidden'>Nhận quà</span>
                  <motion.span
                    animate={{ x: [0, 8, 0], scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className='will-change-transform'
                  >
                    🎁
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>

            {/* Admin link with hover effect */}
            <motion.a
              href='/admin'
              whileHover={{ x: 8 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className='text-white/50 hover:text-pink-400 transition-colors duration-300 text-xs sm:text-sm mt-6 sm:mt-8 w-fit font-medium'
            >
              → Quản lý quà tặng
            </motion.a>
          </motion.div>

          {/* Right side - Message & Decorations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex flex-col items-center justify-center relative mt-8 lg:mt-0'
          >
            {/* Animated character/figure */}
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 sm:mb-8 drop-shadow-2xl will-change-transform'
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
              className='absolute -bottom-20 sm:-bottom-24 md:-bottom-32 -right-20 sm:-right-24 md:-right-32 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 border-2 border-pink-500/20 rounded-full will-change-transform'
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className='absolute -top-10 sm:-top-12 md:-top-20 -left-10 sm:-left-12 md:-left-20 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 border-2 border-purple-500/20 rounded-full will-change-transform'
            />

            {/* Pulsing circle */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-80 h-48 sm:h-56 md:h-80 border border-pink-500/10 rounded-full will-change-transform'
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
            ease: 'easeInOut',
          }}
          className='absolute text-lg sm:text-xl pointer-events-none will-change-transform'
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
