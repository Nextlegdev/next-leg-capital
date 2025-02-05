"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"
import { MemeGrid } from "@/components/meme-grid"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 py-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20(240%20x%2043%20px)%20(650%20x%20150%20px)%20(650%20x%20150%20px)%20(3)-QMnbFL9tJ1CBBld3r8KJlNjq6q36kx.png"
            alt="Next Leg Capital Logo"
            width={240}
            height={43}
            className="object-contain"
            priority
          />
        </div>
      </motion.header>

      {/* Home */}
      <section id="home" className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-20">
            <AnimatedText
              text="GROWTH CAPITAL FOR SOLANA BUILDERS"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-normal leading-tight mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 max-w-2xl"
            >
              Empowering the next generation of blockchain innovation through strategic capital and partnership.
            </motion.p>
          </div>

          <MemeGrid />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12"
          >
            About Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 space-y-6"
          >
            <p>
              Next Leg Capital is a venture capital firm focused on supporting and accelerating the growth of promising
              projects in the Solana ecosystem. We provide more than just capital; we offer strategic guidance,
              technical expertise, and access to a vast network of industry leaders and potential partners.
            </p>
            <p>
              Our team consists of experienced blockchain developers, entrepreneurs, and investors who understand the
              unique challenges and opportunities in the rapidly evolving world of decentralized finance and Web3
              technologies.
            </p>
            <p>
              We believe in the transformative potential of Solana and are committed to fostering innovation that pushes
              the boundaries of what's possible in this exciting space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12"
          >
            Our Approach
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-lg bg-zinc-900"
            >
              <h3 className="text-xl font-bold mb-4">Strategic Growth Partners</h3>
              <p className="text-gray-400">
                We build evolving partnerships, not one-off investments. Through milestone-driven funding paths, we
                eliminate constant fundraising pressure so founders can focus on execution. Our capital deployment grows
                alongside your success, backed by ecosystem connections and strategic resources.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-lg bg-zinc-900"
            >
              <h3 className="text-xl font-bold mb-4">Solana-Native Focus</h3>
              <p className="text-gray-400">
                We exclusively invest in Solana protocols and projects, believing the ecosystem will drive the next wave
                of consumer entertainment and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-lg bg-zinc-900"
            >
              <h3 className="text-xl font-bold mb-4">Proven Builders</h3>
              <p className="text-gray-400">
                We partner with teams that have demonstrated execution ability through live protocols, established
                community traction, and strong on-chain metrics. By focusing on projects already in market, we can
                better evaluate potential and accelerate growth through our strategic support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16"
          >
            What We Offer
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white">Operator Experience</h3>
              <p className="text-gray-300 leading-relaxed">
                As former founders who've been in the trenches, we've navigated the critical decisions that define a
                startup's journey. We've faced the same pivotal moments you're experiencing now, from strategic pivots
                to resource allocation challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white">Continuous Funding</h3>
              <p className="text-gray-300 leading-relaxed">
                We are looking to empower builders to focus on their vision and execution. We want to be the trusted
                partner, handling the capital side of the business so founders can dedicate themselves to what they do
                best: building.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white">Connections and Services</h3>
              <p className="text-gray-300 leading-relaxed">
                Our deep-rooted network within the Solana ecosystem connects us with innovative projects and founding
                teams. We leverage these relationships to help founders identify strategic partnerships, unlock
                collaborative opportunities, and accelerate their growth within the ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pitch Us */}
      <section id="contact" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-16 tracking-tighter">PITCH US</h2>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl mb-8 text-gray-200">WHAT WE LOOK FOR:</h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-start">
                  <span className="text-xl mr-2">+</span>
                  Founders who understand their audience or consumer
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-2">+</span>
                  Leaders with strong communication and maintain integrity in their operations
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-2">+</span>
                  Teams with an ownership mentality who take accountability for their venture's success
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-2">+</span>
                  Innovators taking on BIG ideas
                </li>
                <li className="flex items-start">
                  <span className="text-xl mr-2">+</span>
                  Founders who show grit & resiliency
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-300 mb-8">If your team fits, please fill out our form!</p>

            <a
              href="https://docs.google.com/forms/d/1RscGl0AvKEsCrdudcgicBh-A9Qc7V8ztIVxS9P7RNQU/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-black font-semibold bg-yellow-400 hover:bg-yellow-300 transition-colors rounded-md"
            >
              Pitch Form
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Next Leg Capital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


