'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/80 text-sm font-medium">Chargement...</span>
        <span className="text-white font-bold text-sm">{Math.round(progress)}%</span>
      </div>
      
      <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          className="h-full bg-linear-to-r from-purple-500 via-blue-500 to-green-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      </div>
      
      <div className="mt-4 text-center">
        <motion.div
          animate={{ opacity: [0.5, 2, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex space-x-1"
        >
          <span className="w-2 h-2 bg-purple-500 rounded-full" />
          <span className="w-2 h-2 bg-blue-500 rounded-full" />
          <span className="w-2 h-2 bg-green-500 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}