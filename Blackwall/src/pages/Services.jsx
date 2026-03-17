import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Shield, Eye, Lock, Database, Network, 
  CheckCircle, FileCheck, Activity, Layers 
} from 'lucide-react';

const mainServices = [
  {
    icon: Server,
    title: "Core Infrastructure",
    description: "Built on Proxmox Virtual Environment with ZFS storage recommended. Includes dedicated management network and isolated internal lab bridge with no physical uplink.",
    features: ["Proxmox VE Platform", "ZFS Storage Backend", "Isolated Lab Networks", "Management Console"]
  },
  {
    icon: Eye,
    title: "Blue Team Monitoring Stack",
    description: "Comprehensive security monitoring with industry-leading tools for real-time threat detection and analysis.",
    features: ["SIEM Platform (Wazuh/Splunk)", "Centralized Logging", "Endpoint Telemetry", "IDS/IPS (Suricata)"]
  },
  {
    icon: Lock,
    title: "Security & Governance Controls",
    description: "Enterprise-grade security measures ensuring complete isolation and compliance with industry standards.",
    features: ["Production Network Isolation", "Written Scope Authorization", "Log Retention Policies", "Snapshot Restoration"]
  }
];

const checklist = [
  { icon: FileCheck, text: "Legal Authorization Verified" },
  { icon: Shield, text: "Infrastructure Secured" },
  { icon: Network, text: "Network Segmentation Confirmed" },
  { icon: Activity, text: "Blue Team Stack Operational" },
  { icon: Database, text: "Snapshot & Recovery Tested" },
  { icon: Layers, text: "Documentation Delivered" }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Complete cyber range solutions designed for lawful cybersecurity defense training 
            and incident response exercises.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="space-y-8 mb-24">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 md:p-10 rounded-2xl bg-slate-900/50 border border-slate-800"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-4 rounded-xl bg-blue-600/10 text-blue-400 shrink-0">
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                  <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-400 shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deployment Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Client Deployment Checklist
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {checklist.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-slate-900/30 border border-slate-800"
              >
                <div className="p-2 rounded-lg bg-green-500/10">
                  <item.icon className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-slate-300 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Risk Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10">
              <Shield className="h-6 w-6 text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Risk Mitigation Statement</h3>
              <p className="text-slate-400 leading-relaxed">
                Environments do not connect to unauthorized systems, do not contain real stolen data, 
                and do not operate outside written scope. Purpose is strictly defensive readiness. 
                All environments are contract-authorized, isolated from production systems, segmented 
                from the public internet, and fully resettable and auditable.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}