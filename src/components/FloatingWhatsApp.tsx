'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WA_LINK = 'https://wa.me/6282310759060?text=Halo%2C%20saya%20ingin%20sewa%20motor';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (tooltip) {
      const timer = setTimeout(() => setTooltip(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [tooltip]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="hidden sm:block bg-card border border-border rounded-2xl px-4 py-3 shadow-xl max-w-[200px] relative"
              >
                <button
                  onClick={() => setTooltip(false)}
                  className="absolute top-1 right-1 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-3 h-3" />
                </button>
                <p className="text-sm font-medium text-foreground">Butuh bantuan?</p>
                <p className="text-xs text-muted-foreground">Chat kami via WhatsApp</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/30 flex items-center justify-center hover:shadow-2xl hover:shadow-[#25D366]/50 transition-shadow"
            aria-label="Chat WhatsApp"
          >
            <MessageCircle className="w-6 h-6 text-white" fill="white" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
