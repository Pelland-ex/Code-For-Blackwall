import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArchitectureDiagram from '@/components/demo/ArchitectureDiagram';
import ComponentDetail from '@/components/demo/ComponentDetail';
import DeploymentTimeline from '@/components/demo/DeploymentTimeline';
import StatsBar from '@/components/demo/StatsBar';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';

export default function Demo() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            Interactive Demo
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Cyber Range Architecture
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore our deployment framework interactively. Click any component to learn how it fits into the range architecture.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <StatsBar />

        {/* Main diagram + detail panel */}
        <div className="mt-14 grid lg:grid-cols-5 gap-8 items-start">
          {/* Diagram — takes up 3 cols */}
          <div className="lg:col-span-3">
            <ArchitectureDiagram
              activeComponent={activeComponent}
              setActiveComponent={setActiveComponent}
            />
          </div>

          {/* Detail panel — takes up 2 cols */}
          <div className="lg:col-span-2">
            <ComponentDetail activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
          </div>
        </div>

        {/* Deployment Timeline */}
        <div className="mt-20">
          <DeploymentTimeline />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-5 text-lg">Ready to deploy your own cyber range?</p>
          <Link
            to={createPageUrl('Contact')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-colors"
          >
            Request a Deployment <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}