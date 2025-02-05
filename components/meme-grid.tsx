"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function MemeGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden bg-zinc-900"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nextleg%20meme1-YBjCPqUZ7swrwKK5ZZSBVgL9w2Vapx.png"
          alt="NextLeg Capital vs Traditional Fundraising Meme"
          fill
          className="object-contain p-4"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-sm text-gray-300">The Next Generation of Fundraising</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden bg-zinc-900"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nextleg%20meme2-1xBuJk69zZVOw68gTQDTZcxcD2PoKk.png"
          alt="Growth Percentage Meme"
          fill
          className="object-contain p-4"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-sm text-gray-300">Outperforming Traditional Methods</p>
        </div>
      </motion.div>
    </div>
  )
}



