import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import CaseStudyCard from '../components/casestudies/CaseStudyCard';
import CaseStudyFilter from '../components/casestudies/CaseStudyFilter';

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('all');

  const { data: studies = [], isLoading } = useQuery({
    queryKey: ['case-studies'],
    queryFn: () => base44.entities.CaseStudy.list('-created_date')
  });

  const filtered = activeFilter === 'all'
    ? studies
    : studies.filter(s => s.industry === activeFilter);

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            Proven Results
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Case Studies
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real-world deployments. Measurable outcomes. See how Blackwall Range Services
            has helped organizations build resilient cyber defenses.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="mb-12">
          <CaseStudyFilter active={activeFilter} onChange={setActiveFilter} />
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="h-8 w-8 text-blue-400 animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 text-slate-500">
            No case studies found for this industry.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}