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
        transition={{ duration: 0.6 }}
        className='text-center'
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='text-white/60 text-base font-light'
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
      transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
      className='w-full max-w-sm relative'
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
        transition={{ duration: 2, repeat: Infinity }}
        className='absolute inset-0 rounded-3xl'
      />

      {/* Main card */}
      <div className='relative p-8 bg-linear-to-br from-pink-500/40 to-red-500/40 backdrop-blur-2xl rounded-3xl shadow-2xl border border-pink-400/50'>
        {/* Decorative top corner */}
        <motion.div
          animate={{
            rotate: [0, 20, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className='absolute -top-4 -right-4 text-5xl'
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
          transition={{ duration: 2.5, repeat: Infinity }}
          className='text-6xl mb-6 text-center drop-shadow-lg flex justify-center'
        >
          ❤️{' '}
          <motion.p
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className='text-4xl font-bold text-white/90 '
          >
            Yêu em!
          </motion.p>
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='text-center mb-6'
        ></motion.div>

        {/* Gift section */}
        {randomGift && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className='bg-white/15 rounded-2xl p-5 mb-6 border border-white/30 backdrop-blur-sm'
          >
            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className='text-xs text-white/70 mb-3 font-medium tracking-wide'
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
              transition={{ duration: 1.5, repeat: Infinity }}
              className='text-2xl text-pink-200 font-bold text-center'
            >
              {randomGift} 🎁
            </motion.div>
          </motion.div>
        )}

        {/* Floating hearts animation */}
        <motion.div className='flex justify-center gap-4 mb-6'>
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
              }}
              className='text-3xl'
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
          transition={{ duration: 2.5, repeat: Infinity }}
          className='text-center text-white/40 text-sm font-light'
        >
          ✨ Yêu em ✨
        </motion.div>

        {/* Decorative corner */}
        <motion.div
          animate={{
            rotate: [-20, 20, -20],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className='absolute -bottom-3 -left-3 text-4xl opacity-60'
        >
          💕
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ValentineMessage;
