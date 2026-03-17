import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Every deployment is isolated, authorized, and auditable. We never compromise on security protocols."
  },
  {
    icon: Target,
    title: "Defensive Focus",
    description: "Our purpose is strictly defensive readiness. We train teams to protect, not attack."
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work closely with clients to understand their unique requirements and deliver tailored solutions."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Industry-leading tools and methodologies ensure the highest quality training environments."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_699dead0b6513e30133b141f/bda1e2395_ChatGPTImageFeb9202601_21_25PM.png"
            alt="Blackwall Range Services"
            className="h-24 mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Blackwall Range Services
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Building environments for cyber defense training
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="p-10 rounded-2xl bg-gradient-to-br from-blue-600/10 to-slate-900/50 border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Blackwall Range Services designs and deploys isolated, controlled virtual environments 
              for lawful cybersecurity defense training and incident response exercises. All environments 
              are contract-authorized, isolated from production systems, segmented from the public internet, 
              and fully resettable and auditable.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-slate-400">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Technology Stack</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Proxmox VE', 'ZFS Storage', 'Wazuh SIEM', 'Suricata IDS', 'Splunk', 'pfSense', 'Centralized Logging', 'Endpoint Telemetry'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-slate-900/30 border border-slate-800 text-center"
              >
                <span className="text-slate-300 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}