import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sparkles, Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { 
  ShieldAlert, Network, Activity, Target, Terminal, Lock, Globe, Server, Cpu, 
  Search, Crosshair, Eye, Users, Book, Layers, Box, Database, ChevronLeft, 
  ArrowRight, Wrench, Zap, Cloud, FileText, Globe2, AlertCircle, Info
} from 'lucide-react';

const explorerData = [
  {
    category: "Reconnaissance tools",
    description: "Discover and map the attack surface of your targets with advanced enumeration techniques.",
    tools: [
      { 
        icon: Search, 
        name: "Adv. DNS Recon", 
        desc: "Advanced DNS enumeration using passive and active techniques to uncover subdomains and records.", 
        details: "Our DNS Recon tool performs deep zone transfers, brute-forces subdomains using elite wordlists, and analyzes DNSSEC configurations. It integrates with Shodan and SecurityTrails to find hidden infrastructure.",
        isPro: true 
      },
      { 
        icon: Activity, 
        name: "Full Port Scan", 
        desc: "High-speed port scanning with service fingerprinting and OS detection.", 
        details: "Utilizes optimized TCP/UDP SYN scans to identify open ports across all 65,535 ranges. Uses advanced Nmap-inspired fingerprinting to identify exact service versions and potential OS signatures.",
        isPro: true 
      },
      { 
        icon: Terminal, 
        name: "Banner Grabbing", 
        desc: "Extract service banners to identify server types and version numbers.", 
        details: "Connects to active services to retrieve plain-text headers. Useful for identifying outdated server software (Apache, Nginx, IIS) and misconfigured service responses.",
        isPro: true 
      },
      { 
        icon: Server, 
        name: "Infrastructure", 
        desc: "Map the underlying server architecture and hosting providers.", 
        details: "Traces the target infrastructure through CDNs, Load Balancers, and WAFs. Identifies Cloud Service Providers (AWS, Azure, GCP) and maps IP ranges and ASNs.",
        isPro: true 
      },
      { 
        icon: ShieldAlert, 
        name: "Adv. WAF/Firewall", 
        desc: "Identify and analyze Web Application Firewalls protecting the target.", 
        details: "Uses non-intrusive fingerprinting to detect WAFs like Cloudflare, Akamai, and Imperva. Analyzes block patterns to determine bypass strategies for automated testing.",
        isPro: true 
      }
    ]
  },
  {
    category: "Vulnerability scanners",
    description: "Automated identification of known and zero-day vulnerabilities across web apps and infrastructure.",
    tools: [
      { 
        icon: Database, 
        name: "SQL Injection Testing", 
        desc: "Detect and exploit SQL injection vulnerabilities across multiple database types.", 
        details: "Advanced engine for Union-based, Error-based, and Blind SQL injection. Supports MySQL, PostgreSQL, MSSQL, and Oracle. Automatically extracts database schemas and proves impact.",
        isPro: true 
      },
      { 
        icon: Crosshair, 
        name: "XSS Testing", 
        desc: "Comprehensive Cross-Site Scripting detection for Reflected, Stored, and DOM-based XSS.", 
        details: "Injects advanced payloads to bypass WAFs and filters. Uses a headless browser to detect successful script execution and captures DOM state for manual verification.",
        isPro: true 
      },
      { 
        icon: FileText, 
        name: "Path Traversal", 
        desc: "Find file inclusion and directory traversal vulnerabilities.", 
        details: "Tests for Local and Remote File Inclusion (LFI/RFI). Scans for sensitive system files like /etc/passwd or win.ini across different OS environments to prove unauthorized access.",
        isPro: true 
      },
      { 
        icon: Lock, 
        name: "Business Logic", 
        desc: "Analyze application workflows for logical flaws and authentication bypasses.", 
        details: "Scans for IDOR (Insecure Direct Object References), privilege escalation paths, and race conditions in transaction logic. Models application state to find unexpected transitions.",
        isPro: true 
      },
      { 
        icon: Cpu, 
        name: "REST API", 
        desc: "Automated security testing for REST, GraphQL, and SOAP APIs.", 
        details: "Fuzzes API endpoints for common vulnerabilities. Analyzes JSON/XML schemas, tests for broken object-level authorization (BOLA), and checks for mass assignment flaws.",
        isPro: true 
      },
      { 
        icon: Activity, 
        name: "WebSocket", 
        desc: "Security audit for real-time WebSocket communications.", 
        details: "Monitors and fuzzes WebSocket messages for injection flaws and authentication issues. Analyzes binary and text frames for sensitive data leakage.",
        isPro: true 
      }
    ]
  },
  {
    category: "Exploitation tools",
    description: "Tactical tools for demonstrating impact and proving exploitability of identified vulnerabilities.",
    tools: [
      { 
        icon: Cpu, 
        name: "AI Exploit Pred.", 
        desc: "AI-driven predictive analysis to identify the most likely exploitation paths.", 
        details: "Uses a trained neural network to correlate vulnerabilities with known exploit techniques. Scores each path based on difficulty and impact to prioritize remediation.",
        isPro: true 
      },
      { 
        icon: ShieldAlert, 
        name: "Risk Assessment", 
        desc: "Calculate real-world risk based on exploitability and business impact.", 
        details: "Automatically generates risk scores using CVSS v3.1 frameworks tailored to your business context. Visualizes attack chains to show how minor flaws lead to critical breaches.",
        isPro: true 
      },
      { 
        icon: Crosshair, 
        name: "Sniper: Auto-Exploiter", 
        desc: "AI-driven automated exploitation engine for critical CVEs.", 
        details: "Our flagship exploit engine. Safely demonstrates impact by executing payloads in a sandboxed environment. Capable of chain-loading exploits for multi-stage attacks.",
        isPro: true 
      }
    ]
  },
  {
    category: "AI & Utilities",
    description: "Advanced AI-powered modules and essential utilities for cloud-scale security hardening.",
    tools: [
      { 
        icon: Globe2, 
        name: "AI Enterprise", 
        desc: "Enterprise-grade AI for large scale vulnerability management.", 
        details: "Orchestrates scanning across thousands of nodes using distributed AI agents. Provides executive-level reporting and trends analysis for large organizations.",
        isPro: true 
      },
      { 
        icon: Cpu, 
        name: "Deep Learning", 
        desc: "Neural network analysis for pattern recognition in complex traffic.", 
        details: "Detects anomalous traffic patterns that traditional WAFs miss. Learns from your application's normal behavior to flag even subtle attack attempts.",
        isPro: true 
      },
      { 
        icon: Network, 
        name: "Neural Network", 
        desc: "Advanced threat classification using custom neural models.", 
        details: "Classifies vulnerabilities and attack vectors with over 99% accuracy. Continuously updated with new threat intelligence from the Vulaxis Global Network.",
        isPro: true 
      },
      { 
        icon: Cloud, 
        name: "Cloud Hardening", 
        desc: "Audit and secure cloud infrastructure configurations.", 
        details: "Scans AWS S3 buckets, Azure Blobs, and GCP storage for public exposures. Audits IAM policies and VPC configurations for security best practices.",
        isPro: true 
      },
      { 
        icon: Activity, 
        name: "Real-time Updates", 
        desc: "Continuous threat feed and real-time vulnerability intelligence.", 
        details: "Integrates live feeds of zero-day exploits and CVEs. Instantly updates scan engines to detect the very latest threats as they emerge.",
        isPro: true 
      }
    ]
  }
];

interface ToolsExplorerOverlayProps {
  onClose: () => void;
}

const BackgroundParticles: React.FC = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: '#050002' }}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ff0044" />
        <spotLight position={[-10, -10, -10]} intensity={3} color="#ff0044" />
        
        <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
          <Sphere args={[3.5, 64, 64]} position={[6, -2, -6]}>
            <MeshDistortMaterial 
              color="#2a0008" 
              attach="material" 
              distort={0.4} 
              speed={1.5} 
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Float>

        <Float speed={2} rotationIntensity={3} floatIntensity={2}>
          <Sphere args={[2, 32, 32]} position={[-6, 3, -8]}>
            <MeshDistortMaterial 
              color="#ff0044" 
              attach="material" 
              distort={0.6} 
              speed={2.5} 
              roughness={0.1}
              metalness={1}
              wireframe
            />
          </Sphere>
        </Float>

        <Stars radius={100} depth={50} count={1500} factor={4} saturation={0} fade speed={1.5} />
        <Sparkles count={400} scale={25} size={2} speed={0.4} color="#ff0044" opacity={0.8} />
      </Canvas>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(5,0,2,0.95) 100%)' }} />
    </div>
  );
};

const ToolsExplorerOverlay: React.FC<ToolsExplorerOverlayProps> = ({ onClose }) => {
  const [selectedTool, setSelectedTool] = useState<any>(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: 'rgba(5, 0, 2, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        overflowY: 'auto',
        color: '#fff',
        fontFamily: '"Manrope", sans-serif'
      }}
    >
      <BackgroundParticles />

      {/* Header */}
      <div style={{ position: 'sticky', top: 0, zIndex: 50, background: 'linear-gradient(to bottom, rgba(5,0,2,1) 0%, rgba(5,0,2,0.8) 80%, transparent 100%)', padding: '30px 5%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,0,68,0.1)' }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '42px', fontWeight: '900', margin: '0 0 15px 0', letterSpacing: '-1px' }}>
            Explore our full suite of <span style={{ color: '#ff0044' }}>penetration testing tools</span>
          </h1>
          <p style={{ color: '#aaa', fontSize: '16px', lineHeight: '1.6', margin: 0, maxWidth: '600px' }}>
            VULAXIS provides an elite arsenal of tools designed for rapid discovery, exploitation, and reporting. From automated reconnaissance to deep vulnerability mapping, our suite is built for modern security teams.
          </p>
        </div>
        <motion.button 
          onClick={onClose}
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,0,68,0.2)' }}
          whileTap={{ scale: 0.9 }}
          style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', cursor: 'pointer', flexShrink: 0 }}
        >
          <ChevronLeft size={24} />
        </motion.button>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, padding: '50px 5% 100px 5%', maxWidth: '1400px', margin: '0 auto' }}>
        {explorerData.map((section, sIdx) => (
          <div key={sIdx} style={{ marginBottom: '80px' }}>
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '28px', fontWeight: 'bold', color: '#fff', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ display: 'inline-block', width: '3px', height: '24px', background: '#ff0044', borderRadius: '3px' }}></span>
                {section.category}
              </h2>
              <p style={{ color: '#888', fontSize: '15px', margin: '0 0 0 18px', maxWidth: '600px' }}>
                {section.description}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '25px' }}>
              {section.tools.map((tool, tIdx) => (
                <motion.div
                  key={tIdx}
                  onClick={() => setSelectedTool(tool)}
                  whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.5), 0 0 20px rgba(255,0,68,0.1)' }}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(255,0,68,0.4)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,0,68,0.08)', border: '1px solid rgba(255,0,68,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                      <tool.icon size={24} color="#ff0044" />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '18px', fontWeight: 'bold', color: '#fff', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {tool.name}
                        {tool.isPro && (
                          <span style={{ fontSize: '9px', padding: '2px 6px', background: 'rgba(0,255,102,0.1)', color: '#00ff66', borderRadius: '4px', border: '1px solid rgba(0,255,102,0.2)', fontFamily: '"JetBrains Mono", monospace' }}>PRO</span>
                        )}
                      </h3>
                      <p style={{ color: '#aaa', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
                        {tool.desc}
                      </p>
                    </div>
                  </div>

                  <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                    <button style={{ flex: 1, padding: '10px 0', background: 'rgba(255,0,68,0.1)', border: '1px solid rgba(255,0,68,0.2)', borderRadius: '8px', color: '#fff', fontFamily: '"Manrope", sans-serif', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                      Learn More <Info size={14} />
                    </button>
                    <button style={{ padding: '10px 15px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', cursor: 'pointer', transition: 'all 0.2s' }}>
                      <Activity size={16} color="#aaa" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tool Detail Modal */}
      <AnimatePresence>
        {selectedTool && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTool(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 1000000, background: 'rgba(2,0,5,0.9)', backdropFilter: 'blur(30px)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              style={{ 
                width: '100%', 
                maxWidth: '850px', 
                background: 'rgba(15,0,10,0.8)', 
                border: '1px solid rgba(255,0,68,0.5)', 
                borderRadius: '32px', 
                padding: '60px', 
                boxShadow: '0 40px 120px rgba(0,0,0,1), inset 0 0 60px rgba(255,0,68,0.1)', 
                position: 'relative', 
                overflow: 'hidden',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div style={{ position: 'absolute', top: '-150px', right: '-150px', width: '400px', height: '400px', background: 'rgba(255,0,68,0.15)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0 }} />
              <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '300px', height: '300px', background: 'rgba(255,0,68,0.08)', borderRadius: '50%', filter: 'blur(80px)', zIndex: 0 }} />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '40px' }}>
                  <div style={{ width: '90px', height: '90px', borderRadius: '24px', background: 'rgba(255,0,68,0.1)', border: '1px solid rgba(255,0,68,0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 30px rgba(255,0,68,0.2)' }}>
                    <selectedTool.icon size={48} color="#ff0044" />
                  </div>
                  <div>
                    <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '38px', fontWeight: '900', color: '#fff', margin: 0, letterSpacing: '-1px' }}>{selectedTool.name}</h2>
                    {selectedTool.isPro && (
                      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        <span style={{ fontSize: '11px', fontWeight: '900', padding: '4px 12px', background: 'rgba(0,255,102,0.1)', color: '#00ff66', borderRadius: '8px', border: '1px solid rgba(0,255,102,0.3)', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1px' }}>PRO MODULE ACTIVATED</span>
                        <span style={{ fontSize: '11px', fontWeight: '900', padding: '4px 12px', background: 'rgba(255,0,68,0.1)', color: '#ff0044', borderRadius: '8px', border: '1px solid rgba(255,0,68,0.3)', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1px' }}>ENCRYPTED SESSION</span>
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ marginBottom: '50px', background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ color: '#ff0044', fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', fontWeight: '900', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', letterSpacing: '3px' }}>
                    <AlertCircle size={16} /> CAPABILITY ANALYSIS
                  </h4>
                  <p style={{ color: '#ddd', fontSize: '18px', lineHeight: '1.8', margin: 0, fontFamily: '"Manrope", sans-serif', fontWeight: '400' }}>
                    {selectedTool.details}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '25px' }}>
                  <button 
                    onClick={() => setSelectedTool(null)} 
                    style={{ flex: 2, padding: '20px 0', background: 'linear-gradient(135deg, #ff0044 0%, #a00022 100%)', border: 'none', borderRadius: '16px', color: '#fff', fontFamily: '"Space Grotesk", sans-serif', fontWeight: '900', fontSize: '16px', cursor: 'pointer', boxShadow: '0 15px 40px rgba(255,0,68,0.4)', transition: 'all 0.3s', letterSpacing: '1px', textTransform: 'uppercase' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    Deploy Tactical Module
                  </button>
                  <button 
                    onClick={() => setSelectedTool(null)} 
                    style={{ flex: 1, padding: '20px 0', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', color: '#fff', fontFamily: '"Space Grotesk", sans-serif', fontWeight: '900', fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s', letterSpacing: '1px', textTransform: 'uppercase' }}
                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  >
                    Back to Suite
                  </button>
                </div>
              </div>

              <button 
                onClick={() => setSelectedTool(null)} 
                style={{ position: 'absolute', top: '30px', right: '30px', background: 'rgba(255,0,68,0.1)', border: '1px solid rgba(255,0,68,0.2)', color: '#ff0044', cursor: 'pointer', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,0,68,0.2)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,0,68,0.1)'}
              >
                <ChevronLeft size={20} style={{ transform: 'rotate(90deg)' }} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ToolsExplorerOverlay;
