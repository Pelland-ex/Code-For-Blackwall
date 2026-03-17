import React from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Building2, Clock, Users, CheckCircle, AlertCircle, Lightbulb, TrendingUp, Loader2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const industryColors = {
  finance: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  healthcare: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  government: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  defense: "bg-slate-500/10 text-slate-300 border-slate-500/20",
  energy: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  technology: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  education: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
};

export default function CaseStudyDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  const { data: study, isLoading } = useQuery({
    queryKey: ['case-study', id],
    queryFn: async () => {
      const results = await base44.entities.CaseStudy.filter({ id });
      return results[0] || null;
    },
    enabled: !!id
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-24">
        <Loader2 className="h-8 w-8 text-blue-400 animate-spin" />
      </div>
    );
  }

  if (!study) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center pt-24">
        <p className="text-slate-400 text-lg mb-6">Case study not found.</p>
        <Link to={createPageUrl('CaseStudies')} className="text-blue-400 hover:underline flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            to={createPageUrl('CaseStudies')}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
        </motion.div>

        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 mb-8"
        >
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <Badge className={`text-xs font-medium border capitalize ${industryColors[study.industry] || industryColors.technology}`}>
              {study.industry}
            </Badge>
            {study.duration && (
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock className="h-3.5 w-3.5" /> {study.duration}
              </span>
            )}
            {study.team_size && (
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Users className="h-3.5 w-3.5" /> {study.team_size}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0">
              <Building2 className="h-7 w-7 text-blue-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{study.client_name}</h1>
          </div>

          {study.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {study.tags.map(tag => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-400">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 mb-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 rounded-xl bg-red-500/10">
              <AlertCircle className="h-5 w-5 text-red-400" />
            </div>
            <h2 className="text-xl font-bold text-white">The Challenge</h2>
          </div>
          <p className="text-slate-300 leading-relaxed">{study.challenge}</p>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 mb-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 rounded-xl bg-blue-500/10">
              <Lightbulb className="h-5 w-5 text-blue-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Our Solution</h2>
          </div>
          <p className="text-slate-300 leading-relaxed">{study.solution}</p>
        </motion.div>

        {/* Outcomes */}
        {study.outcomes?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/5 to-slate-900/50 border border-blue-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-green-500/10">
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Outcomes & Results</h2>
            </div>
            <ul className="space-y-3">
              {study.outcomes.map((outcome, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-400 mb-4">Interested in a similar deployment?</p>
          <Link
            to={createPageUrl('Contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            Contact Us Today
          </Link>
        </motion.div>

      </div>
    </div>
  );
}