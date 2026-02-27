'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type ValentineMessageProps = {
  showMessage: boolean;
  randomGift: string;
};

const ValentineMessage = ({
  showMessage,
  randomGift,
}: ValentineMessageProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!showMessage) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className='text-center'
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className='text-white/60 text-xs sm:text-sm md:text-base font-light'
        >
          Nhấn nút để xem lời nhắn ✨
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 120,
        damping: 15,
      }}
      className='w-full max-w-xs sm:max-w-sm md:max-w-md relative will-change-transform'
    >
      {/* Glow background */}
      <motion.div
        animate={{
          boxShadow: [
            '0 0 20px rgba(236, 72, 153, 0.3)',
            '0 0 40px rgba(236, 72, 153, 0.6)',
            '0 0 20px rgba(236, 72, 153, 0.3)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute inset-0 rounded-2xl sm:rounded-3xl will-change-transform'
      />

      {/* Main card */}
      <div className='relative p-4 sm:p-6 md:p-8 bg-linear-to-br from-pink-500/40 to-red-500/40 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-pink-400/50'>
        {/* Decorative top corner */}
        <motion.div
          animate={{
            rotate: [0, 20, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute -top-2 sm:-top-3 md:-top-4 -right-2 sm:-right-3 md:-right-4 text-3xl sm:text-4xl md:text-5xl will-change-transform'
        >
          ✨
        </motion.div>

        {/* Main heart */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className='text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 md:mb-6 text-center drop-shadow-lg will-change-transform'
        >
          ❤️
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className='text-center mb-4 sm:mb-6'
        >
          <motion.h2
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className='text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2 sm:mb-3 will-change-transform'
          >
            Thiên Khải yêu quý! 💕
          </motion.h2>
          <motion.p
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className='text-sm sm:text-base md:text-lg text-white/90 font-light'
          >
            Anh mãi bên em nhé! 🌹
          </motion.p>
        </motion.div>

        {/* Gift section */}
        {randomGift && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.2,
              type: 'spring',
              stiffness: 120,
              damping: 15,
            }}
            className='bg-white/15 rounded-lg sm:rounded-2xl p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 border border-white/30 backdrop-blur-sm will-change-transform'
          >
            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='text-xs text-white/70 mb-2 sm:mb-3 font-medium tracking-wide'
            >
              ✨ QUÀ TẶNG ĐẶC BIỆT ✨
            </motion.p>
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                textShadow: [
                  '0 0 10px rgba(236, 72, 153, 0)',
                  '0 0 20px rgba(236, 72, 153, 0.8)',
                  '0 0 10px rgba(236, 72, 153, 0)',
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='text-lg sm:text-xl md:text-2xl text-pink-200 font-bold text-center will-change-transform'
            >
              {randomGift} 🎁
            </motion.div>
          </motion.div>
        )}

        {/* Floating hearts animation */}
        <motion.div className='flex justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6'>
          {[
            { emoji: '💖', delay: 0 },
            { emoji: '💝', delay: 0.2 },
            { emoji: '💗', delay: 0.4 },
          ].map((item, idx) => (
            <motion.span
              key={idx}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: item.delay,
                ease: 'easeInOut',
              }}
              className='text-2xl sm:text-3xl will-change-transform'
            >
              {item.emoji}
            </motion.span>
          ))}
        </motion.div>

        {/* Decorative bottom */}
        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className='text-center text-white/40 text-xs sm:text-sm font-light will-change-transform'
        >
          ✨ Yêu em ✨
        </motion.div>

        {/* Decorative corner */}
        <motion.div
          animate={{
            rotate: [-20, 20, -20],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute -bottom-2 sm:-bottom-3 md:-bottom-3 -left-2 sm:-left-3 md:-left-3 text-2xl sm:text-3xl md:text-4xl opacity-60 will-change-transform'
        >
          💕
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ValentineMessage;
