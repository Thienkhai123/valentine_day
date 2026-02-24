'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Admin() {
  const [gifts, setGifts] = useState<string[]>([]);
  const [newGift, setNewGift] = useState<string>('');

  useEffect(() => {
    const storedGifts = localStorage.getItem('valentineGifts');
    if (storedGifts) {
      setGifts(JSON.parse(storedGifts));
    }
  }, []);

  const addGift = () => {
    if (newGift.trim()) {
      const updatedGifts = [...gifts, newGift];
      setGifts(updatedGifts);
      localStorage.setItem('valentineGifts', JSON.stringify(updatedGifts));
      setNewGift('');
    }
  };

  const removeGift = (index: number) => {
    const updatedGifts = gifts.filter((_, i) => i !== index);
    setGifts(updatedGifts);
    localStorage.setItem('valentineGifts', JSON.stringify(updatedGifts));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addGift();
    }
  };

  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className='absolute inset-0 bg-linear-to-br from-pink-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse' />
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20' />

      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className='absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20'
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className='absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20'
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='relative z-20 max-w-2xl mx-auto p-8'
      >
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-extrabold bg-linear-to-r from-pink-400 via-red-400 to-rose-400 bg-clip-text text-transparent mb-2'>
            ❤️ Quản Lý Quà Tặng
          </h1>
          <p className='text-gray-300 text-lg'>
            Thiên Khải - Valentine Special
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/10'
        >
          <div className='mb-8'>
            <label className='block text-sm font-semibold text-gray-300 mb-3'>
              Thêm Quà Mới
            </label>
            <div className='flex gap-3'>
              <input
                type='text'
                value={newGift}
                onChange={(e) => setNewGift(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder='Nhập quà tặng (vd: Hoa hồng, Socola...)'
                className='flex-1 px-4 py-3 border-2 border-pink-500/30 rounded-xl bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all'
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addGift}
                className='bg-linear-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all'
              >
                Thêm
              </motion.button>
            </div>
          </div>

          <div>
            <h2 className='text-lg font-bold text-white mb-4'>
              Danh Sách Quà ({gifts.length})
            </h2>
            {gifts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-center py-8 text-gray-400'
              >
                <p className='text-lg'>
                  Chưa có quà nào. Hãy thêm quà đầu tiên! 🎁
                </p>
              </motion.div>
            ) : (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='space-y-2'
              >
                {gifts.map((gift, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                    className='flex justify-between items-center p-4 bg-linear-to-r from-pink-500/10 to-red-500/10 rounded-xl border border-pink-500/20 hover:border-pink-500/50 transition-all'
                  >
                    <span className='text-gray-200 font-medium'>{gift}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeGift(index)}
                      className='text-red-400 hover:text-red-300 font-bold text-lg transition-colors'
                    >
                      ✕
                    </motion.button>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className='mt-8 text-center text-gray-400 text-sm'
        >
          <p>💾 Dữ liệu được lưu tự động trên trình duyệt của bạn</p>
          <p className='mt-2'>
            <a
              href='/'
              className='text-pink-400 hover:text-pink-300 font-semibold transition-colors'
            >
              ← Quay lại trang chính
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
