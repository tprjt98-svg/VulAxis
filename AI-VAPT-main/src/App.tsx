import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Text, PerspectiveCamera, Sparkles } from '@react-three/drei';
import {
  ShieldAlert, Fingerprint, Network, ChevronDown, ChevronLeft, Activity, Target,
  ArrowRight, Terminal, Lock, Globe, Server, Cpu, Brain, Mail, User,
  HelpCircle, Search, Crosshair, Eye, Users, Book, BookOpen, FileText,
  Layers, Box, Key, Database, ChevronRight, Cloud, Bell, BellOff,
  Volume2, VolumeX, Download, FileBarChart, CheckCircle2, AlertCircle,
  PlayCircle, X, Phone, MapPin, AlertTriangle, Zap, Github, Linkedin, Twitter, ShieldCheck,
  CreditCard, BarChart3, Receipt, Users2, Shield, Layout
} from 'lucide-react';
import * as THREE from 'three';

import TargetSpecificationPanel from './components/dashboard/TargetSpecificationPanel';
import VulnerabilityDashboard from './components/dashboard/VulnerabilityDashboard';
import ToolsExplorerOverlay from './components/dashboard/ToolsExplorerOverlay';
import AuthOverlay from './components/auth/AuthOverlay';
// ==========================================
// STRICT TYPESCRIPT INTERFACES
// ==========================================
interface NotificationSettings {
  scanStart: boolean;
  scanStop: boolean;
  scanFinish: boolean;
  reportGenerated: boolean;
  aiInsights: boolean;
  criticalVulnFound: boolean;
  voiceEnabled: boolean;
}

interface SessionSettings {
  autoLogoutTime: number; // in seconds, 0 for never
  logoutOnTabClose: boolean;
}

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}



interface ModuleItem {
  icon: React.ElementType;
  title: string;
  desc: string;
  mod: string;
}

interface CinematicCardProps {
  id?: string;
  item: ModuleItem;
  index: number;
  isActive: boolean;
  onClick: () => void;
}



// Cinematic Secure Overlay static documentation configuration definitions


// ==========================================
// INTERNAL SUB-COMPONENTS
// ==========================================
const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

// 3D Cinematic Wireframe Background
const DiagnosticNodes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });
  return (
    <group ref={groupRef}>
      {[...Array(12)].map((_, i) => (
        <group key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
          <mesh position={[0, 5, 0]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color="#ff0044" />
          </mesh>
          <line>
            <bufferGeometry attach="geometry" onUpdate={self => self.setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 5, 0)])} />
            <lineBasicMaterial attach="material" color="#ff0044" transparent opacity={0.2} />
          </line>
        </group>
      ))}
    </group>
  );
};





// Pricing Overlay Component


// Live Activity Feed Component
const LiveActivityFeed: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const potentialLogs = [
    "Initializing reconnaissance module...",
    "Scanning target for open ports...",
    "Analyzing HTTP response headers...",
    "Detected potential SQL injection vector.",
    "Running fingerprinting on remote server...",
    "AI Engine predicting exploit path...",
    "Bypassing standard WAF patterns...",
    "Neural network correlating threat data...",
    "Finalizing tactical report generation..."
  ];

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setLogs(prev => [potentialLogs[Math.floor(Math.random() * potentialLogs.length)], ...prev].slice(0, 5));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  return (
    <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '12px', border: '1px solid rgba(255,0,68,0.2)', padding: '15px', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: '#666' }}>
      <div style={{ color: '#ff0044', fontWeight: 'bold', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '6px', height: '6px', background: '#ff0044', borderRadius: '50%', animation: 'pulse 1s infinite' }} />
        LIVE OPERATIONS STREAM
      </div>
      {logs.map((log, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} style={{ marginBottom: '5px' }}>
          <span style={{ color: '#444' }}>[{new Date().toLocaleTimeString()}]</span> {log}
        </motion.div>
      ))}
      {logs.length === 0 && <div style={{ color: '#333' }}>Awaiting deployment orders...</div>}
    </div>
  );
};


// EXIT INTENT TACTICAL ALERT
const ExitIntentPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000000, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)' }}>
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ width: '500px', background: '#050000', border: '2px solid #ff0044', borderRadius: '32px', padding: '60px 40px', textAlign: 'center', position: 'relative', boxShadow: '0 0 100px rgba(255,0,68,0.3)' }}>
        <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '80px', background: '#ff0044', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 30px #ff0044' }}>
          <AlertTriangle size={40} color="white" />
        </div>
        <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '32px', fontWeight: '900', color: 'white', marginBottom: '20px', marginTop: '10px' }}>WAIT, OPERATOR!</h2>
        <p style={{ color: '#aaa', fontSize: '16px', lineHeight: '1.6', marginBottom: '40px' }}>
          Your tactical session is still being processed by the neural engine. Secure a <span style={{ color: '#ff0044', fontWeight: 'bold' }}>20% LIFETIME DISCOUNT</span> on your first enterprise audit before you leave.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button onClick={onClose} style={{ width: '100%', background: '#ff0044', color: 'white', border: 'none', padding: '20px', borderRadius: '15px', fontWeight: '900', fontSize: '16px', cursor: 'pointer', boxShadow: '0 10px 30px rgba(255,0,68,0.3)' }}>SECURE MY DISCOUNT →</button>
          <button onClick={onClose} style={{ width: '100%', background: 'transparent', color: '#666', border: 'none', padding: '10px', fontSize: '12px', cursor: 'pointer', fontWeight: 'bold' }}>I AM PREPARED TO DISCONNECT</button>
        </div>
      </motion.div>
    </div>
  );
};

// PERSISTENT TACTICAL SUPPORT BUBBLE




// TACTICAL INTERCEPTION HUB (BURP SUITE CLONE)
const TacticalInterceptionHub: React.FC<{ scanResults?: any[] }> = ({ scanResults }) => {
  const [activeModule, setActiveModule] = useState('PROXY');
  const [isIntercepting, setIsIntercepting] = useState(false);
  
  // Proxy State
  const [proxyQueue, setProxyQueue] = useState<any[]>([
    { id: 101, method: 'POST', url: 'https://api.target.com/v1/auth', status: 'PENDING', time: '12ms', type: 'JSON', requestBody: '{\n  "username": "tactical_operator",\n  "password": "********",\n  "mfa_token": "942051"\n}', responseBody: '{\n  "status": "success",\n  "session_id": "sess_4920kLp92",\n  "access_level": "ADMIN"\n}', headers: 'Host: api.target.com\nUser-Agent: Mozilla/5.0...\nContent-Type: application/json' }
  ]);
  const [proxyHistory, setProxyHistory] = useState<any[]>([
    { id: 1, method: 'GET', url: 'https://api.target.com/v1/user/profile', status: 200, time: '45ms', type: 'JSON' },
    { id: 2, method: 'PUT', url: 'https://api.target.com/v1/settings', status: 403, time: '22ms', type: 'JSON' },
    { id: 3, method: 'DELETE', url: 'https://api.target.com/v1/session', status: 204, time: '8ms', type: 'NONE' },
  ]);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  useEffect(() => {
    if (scanResults && scanResults.length > 0) {
      const interceptedTraffic = scanResults.map((v, i) => ({
        id: 200 + i,
        method: v.category === 'Web Security' ? 'GET' : 'POST',
        url: v.endpointUrl || `https://api.target.com/v1/${v.category.toLowerCase()}`,
        status: 'INTERCEPTED',
        time: `${Math.floor(Math.random() * 50) + 10}ms`,
        type: 'JSON',
        requestBody: JSON.stringify({ audit_id: v.id, vector: v.title }, null, 2),
        responseBody: '{\n  "status": "vulnerable",\n  "details": "Neural probe confirmed exploit path"\n}',
        headers: `Host: api.target.com\nX-Tactical-ID: ${v.id}\nContent-Type: application/json`
      }));
      setProxyQueue(prev => [...interceptedTraffic, ...prev]);
    }
  }, [scanResults]);

  // Repeater State
  const [repeaterRequest, setRepeaterRequest] = useState('POST /v1/auth HTTP/1.1\nHost: api.target.com\nContent-Type: application/json\n\n{\n  "user": "admin"\n}');
  const [repeaterResponse, setRepeaterResponse] = useState('');
  const [isRepeaterLoading, setIsRepeaterLoading] = useState(false);

  const modules = [
    { id: 'PROXY', icon: ShieldAlert, label: 'Tactical Proxy' },
    { id: 'REPEATER', icon: Zap, label: 'Neural Repeater' },
    { id: 'LOGGER', icon: Terminal, label: 'Audit Logger' },
    { id: 'INTRUDER', icon: Crosshair, label: 'Payload Intruder' },
    { id: 'WEBSOCKETS', icon: Network, label: 'Socket Stream' },
  ];

  const handleForward = () => {
    if (proxyQueue.length > 0) {
      const forwarded = proxyQueue[0];
      setProxyHistory([{ ...forwarded, status: 200 }, ...proxyHistory]);
      setProxyQueue(proxyQueue.slice(1));
      if (selectedRequest?.id === forwarded.id) setSelectedRequest(null);
    }
  };

  const handleDrop = () => {
    if (proxyQueue.length > 0) {
      const dropped = proxyQueue[0];
      setProxyHistory([{ ...dropped, status: 'DROPPED' }, ...proxyHistory]);
      setProxyQueue(proxyQueue.slice(1));
      if (selectedRequest?.id === dropped.id) setSelectedRequest(null);
    }
  };

  const handleRepeaterSend = () => {
    setIsRepeaterLoading(true);
    setTimeout(() => {
      setRepeaterResponse('HTTP/1.1 200 OK\nServer: nginx/1.18.0\nContent-Type: application/json\n\n{\n  "status": "success",\n  "data": "Tactical response received"\n}');
      setIsRepeaterLoading(false);
    }, 800);
  };

  const activeRequest = selectedRequest || proxyQueue[0];

  return (
    <section id="interception-hub" style={{ height: '100vh', width: '100%', background: '#020000', position: 'relative', display: 'flex', flexDirection: 'column', padding: '100px 5% 40px 5%' }}>
      {/* BACKGROUND DECORATION */}
      <div style={{ position: 'absolute', top: '10%', right: '5%', opacity: 0.05, pointerEvents: 'none', zIndex: 0 }}>
        <Terminal size={400} color="#ff0044" />
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '40px', position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
            <div style={{ width: '40px', height: '2px', background: '#ff0044' }} />
            <span style={{ color: '#ff0044', fontSize: '12px', fontWeight: '900', letterSpacing: '4px', fontFamily: '"JetBrains Mono", monospace' }}>INTEGRATED_MITM_ENGINE</span>
          </div>
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '48px', fontWeight: '900', color: 'white', letterSpacing: '-2px', margin: 0, lineHeight: 1 }}>
            INTERCEPTION <span style={{ color: '#ff0044' }}>HUB</span>
          </h2>
        </div>
        <div style={{ padding: '10px 20px', borderRadius: '12px', background: 'rgba(255,0,68,0.1)', border: '1px solid rgba(255,0,68,0.3)' }}>
          <span style={{ color: '#ff0044', fontSize: '10px', fontWeight: '900', fontFamily: '"JetBrains Mono", monospace' }}>LISTENING: 127.0.0.1:8080</span>
        </div>
      </motion.div>

      <div className="glass-panel" style={{ flex: 1, display: 'grid', gridTemplateColumns: '260px 1fr', gap: '0', borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 1 }}>
        {/* SIDEBAR NAVIGATION */}
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '40px 20px', display: 'flex', flexDirection: 'column', gap: '12px', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: '10px', color: '#444', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '10px', paddingLeft: '15px' }}>MODULES</div>
          {modules.map(mod => (
            <motion.div key={mod.id} whileHover={{ x: 5, backgroundColor: 'rgba(255,0,68,0.05)' }} onClick={() => setActiveModule(mod.id)}
              style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '16px 20px', borderRadius: '16px', cursor: 'pointer', background: activeModule === mod.id ? 'rgba(255,0,68,0.1)' : 'transparent', border: `1px solid ${activeModule === mod.id ? 'rgba(255,0,68,0.3)' : 'transparent'}`, transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <mod.icon size={18} color={activeModule === mod.id ? '#ff0044' : '#555'} />
              <span style={{ fontSize: '13px', fontWeight: '800', color: activeModule === mod.id ? 'white' : '#777' }}>{mod.label}</span>
            </motion.div>
          ))}
          
          <div style={{ marginTop: 'auto', padding: '20px', borderRadius: '20px', background: 'rgba(255,0,68,0.03)', border: '1px solid rgba(255,0,68,0.1)' }}>
            <div style={{ fontSize: '10px', color: '#ff0044', fontWeight: 'bold', marginBottom: '8px' }}>CORE_TEMP</div>
            <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
              <motion.div animate={{ width: '65%' }} style={{ height: '100%', background: '#ff0044' }} />
            </div>
          </div>
        </div>

        {/* MAIN CONSOLE */}
        <div style={{ background: 'rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column' }}>
          {activeModule === 'PROXY' && (
            <>
              {/* CONTROL BAR */}
              <div style={{ padding: '20px 30px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <motion.button whileTap={{ scale: 0.95 }} onClick={() => setIsIntercepting(!isIntercepting)}
                    style={{ background: isIntercepting ? '#ff0044' : 'rgba(255,255,255,0.03)', border: `1px solid ${isIntercepting ? '#ff0044' : 'rgba(255,255,255,0.1)'}`, color: 'white', padding: '12px 30px', borderRadius: '12px', fontSize: '12px', fontWeight: '900', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Activity size={14} className={isIntercepting ? "animate-pulse" : ""} /> {isIntercepting ? 'INTERCEPT_ACTIVE' : 'INTERCEPT_PAUSED'}
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.95 }} disabled={!isIntercepting || proxyQueue.length === 0} onClick={handleForward}
                    style={{ background: 'rgba(0,255,102,0.1)', border: '1px solid rgba(0,255,102,0.2)', color: '#00ff66', padding: '12px 24px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', cursor: 'pointer', opacity: (isIntercepting && proxyQueue.length > 0) ? 1 : 0.3 }}>FORWARD</motion.button>
                  <motion.button whileTap={{ scale: 0.95 }} disabled={!isIntercepting || proxyQueue.length === 0} onClick={handleDrop}
                    style={{ background: 'rgba(255,0,68,0.1)', border: '1px solid rgba(255,0,68,0.2)', color: '#ff0044', padding: '12px 24px', borderRadius: '12px', fontSize: '12px', fontWeight: '800', cursor: 'pointer', opacity: (isIntercepting && proxyQueue.length > 0) ? 1 : 0.3 }}>DROP</motion.button>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '9px', color: '#555', fontWeight: 'bold' }}>PACKETS_IN_BUFFER</div>
                  <div style={{ fontSize: '18px', fontWeight: '900', color: 'white' }}>{proxyQueue.length}</div>
                </div>
              </div>

              {/* CONTENT AREA */}
              <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', height: '400px' }}>
                {/* REQUEST EDITOR */}
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ color: '#ff0044', fontSize: '11px', fontWeight: '900', letterSpacing: '3px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff0044' }} /> RAW_REQUEST_PAYLOAD
                  </div>
                  <div className="custom-scrollbar" style={{ flex: 1, background: 'rgba(0,0,0,0.3)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', padding: '25px', fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: '#ccc', whiteSpace: 'pre-wrap', overflow: 'auto' }}>
                    {activeRequest ? (
                      <>
                        <span style={{ color: '#ff0044', fontWeight: 'bold' }}>{activeRequest.method}</span> <span style={{ color: '#fff' }}>{activeRequest.url.replace(/^https?:\/\/[^\/]+/, '')}</span> HTTP/1.1<br />
                        <span style={{ color: '#666' }}>{activeRequest.headers}</span><br /><br />
                        <span style={{ color: '#00ffcc' }}>{activeRequest.requestBody}</span>
                      </>
                    ) : (
                      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px', color: '#444' }}>
                        <Terminal size={32} />
                        <span style={{ letterSpacing: '2px', fontWeight: 'bold', fontSize: '10px' }}>NO_ACTIVE_STREAM</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* RESPONSE VIEWER */}
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: '#00ff66', fontSize: '11px', fontWeight: '900', letterSpacing: '3px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ff66' }} /> UPSTREAM_RESPONSE
                  </div>
                  <div className="custom-scrollbar" style={{ flex: 1, background: 'rgba(0,0,0,0.3)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', padding: '25px', fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: '#ccc', whiteSpace: 'pre-wrap', overflow: 'auto' }}>
                    {activeRequest?.status === 200 ? (
                      <>
                        HTTP/1.1 <span style={{ color: '#00ff66', fontWeight: 'bold' }}>200 OK</span><br />
                        <span style={{ color: '#666' }}>Server: Vulaxis_Neural_Gateway/4.2<br />Date: {new Date().toUTCString()}</span><br /><br />
                        <span style={{ color: '#888' }}>{activeRequest.responseBody}</span>
                      </>
                    ) : (
                      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px', color: '#444' }}>
                        <div className="animate-pulse" style={{ width: '32px', height: '32px', border: '2px solid #444', borderRadius: '50%' }} />
                        <span style={{ letterSpacing: '2px', fontWeight: 'bold', fontSize: '10px' }}>AWAITING_TRANSMISSION</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* HISTORY TABLE */}
              <div style={{ height: '300px', background: 'rgba(0,0,0,0.4)', padding: '0', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'auto' }} className="custom-scrollbar">
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead style={{ position: 'sticky', top: 0, zIndex: 5, background: '#0a0005' }}>
                    <tr style={{ color: '#555', fontSize: '10px', fontWeight: '900', letterSpacing: '2px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <th style={{ padding: '20px' }}>ID</th>
                      <th style={{ padding: '20px' }}>METHOD</th>
                      <th style={{ padding: '20px' }}>TARGET_URL</th>
                      <th style={{ padding: '20px' }}>STATUS</th>
                      <th style={{ padding: '20px' }}>LATENCY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {proxyQueue.map((req) => (
                      <tr key={`q-${req.id}`} onClick={() => setSelectedRequest(req)}
                        style={{ color: '#ff0044', fontSize: '12px', borderBottom: '1px solid rgba(255,0,68,0.1)', cursor: 'pointer', background: selectedRequest?.id === req.id ? 'rgba(255,0,68,0.1)' : 'rgba(255,0,68,0.03)', transition: 'all 0.2s' }}>
                        <td style={{ padding: '15px 20px' }}>{req.id}</td>
                        <td style={{ padding: '15px 20px', fontWeight: 'bold' }}>{req.method}</td>
                        <td style={{ padding: '15px 20px', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px' }}>{req.url}</td>
                        <td style={{ padding: '15px 20px' }}><span style={{ padding: '4px 8px', background: 'rgba(255,0,68,0.2)', borderRadius: '6px', fontSize: '10px', fontWeight: '900' }}>PENDING</span></td>
                        <td style={{ padding: '15px 20px' }}>{req.time}</td>
                      </tr>
                    ))}
                    {proxyHistory.map(req => (
                      <tr key={`h-${req.id}`} onClick={() => setSelectedRequest(req)}
                        style={{ color: '#888', fontSize: '12px', borderBottom: '1px solid rgba(255,255,255,0.03)', cursor: 'pointer', background: selectedRequest?.id === req.id ? 'rgba(255,255,255,0.05)' : 'transparent', transition: 'all 0.2s' }}>
                        <td style={{ padding: '15px 20px' }}>{req.id}</td>
                        <td style={{ padding: '15px 20px', color: '#ff0044', fontWeight: 'bold' }}>{req.method}</td>
                        <td style={{ padding: '15px 20px', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', opacity: 0.6 }}>{req.url}</td>
                        <td style={{ padding: '15px 20px' }}>
                          <span style={{ 
                            padding: '4px 8px', 
                            background: req.status === 'DROPPED' ? 'rgba(255,0,68,0.1)' : 'rgba(0,255,102,0.1)', 
                            color: req.status === 'DROPPED' ? '#ff0044' : '#00ff66', 
                            borderRadius: '6px', 
                            fontSize: '10px', 
                            fontWeight: '900' 
                          }}>{req.status}</span>
                        </td>
                        <td style={{ padding: '15px 20px' }}>{req.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeModule === 'REPEATER' && (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '20px 30px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleRepeaterSend}
                    style={{ background: '#ff0044', color: 'white', border: 'none', padding: '12px 40px', borderRadius: '12px', fontSize: '13px', fontWeight: '900', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 25px rgba(255,0,68,0.3)' }}>
                    {isRepeaterLoading ? 'NEURAL_EMISSION...' : 'SEND_MISSION'} <Zap size={16} />
                  </motion.button>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00ff66', boxShadow: '0 0 10px #00ff66' }} className="animate-pulse" />
                    <span style={{ fontSize: '10px', color: '#00ff66', fontWeight: 'bold', letterSpacing: '1px' }}>LINK_STABLE</span>
                  </div>
                </div>
                <div style={{ color: '#444', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px' }}>NEURAL_REPEATER_v4.2</div>
              </div>
              <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ padding: '15px 30px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '10px', color: '#ff0044', fontWeight: 'bold' }}>REQUEST_EDITOR</div>
                  <textarea value={repeaterRequest} onChange={(e) => setRepeaterRequest(e.target.value)}
                    style={{ flex: 1, background: 'transparent', color: '#00ffcc', padding: '30px', fontFamily: '"JetBrains Mono", monospace', fontSize: '14px', border: 'none', outline: 'none', resize: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', background: 'rgba(0,0,0,0.2)' }}>
                   <div style={{ padding: '15px 30px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '10px', color: '#00ff66', fontWeight: 'bold' }}>RESPONSE_STREAM</div>
                  <div style={{ flex: 1, color: '#aaa', padding: '30px', fontFamily: '"JetBrains Mono", monospace', fontSize: '14px', whiteSpace: 'pre-wrap', overflow: 'auto' }} className="custom-scrollbar">
                    {repeaterResponse ? (
                      <span style={{ color: '#fff' }}>{repeaterResponse}</span>
                    ) : (
                      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontSize: '11px', letterSpacing: '2px' }}>AWAITING_EMISSION_RESULTS...</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeModule === 'LOGGER' && (
            <div style={{ flex: 1, background: 'rgba(0,0,0,0.3)', padding: '40px', fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: '#555', overflow: 'auto' }} className="custom-scrollbar">
              <div style={{ color: '#ff0044', marginBottom: '30px', fontWeight: '900', letterSpacing: '4px', fontSize: '14px' }}>[SYSTEM_AUDIT_LOG_STREAM]</div>
              {[...Array(25)].map((_, i) => (
                <div key={i} style={{ marginBottom: '12px', display: 'flex', gap: '20px' }}>
                  <span style={{ color: '#222' }}>{new Date().toLocaleTimeString()}</span>
                  <span style={{ color: '#ff0044', fontWeight: 'bold', width: '60px' }}>[INFO]</span>
                  <span style={{ color: '#888' }}>
                   Neural packet <span style={{ color: '#fff' }}>0x{Math.random().toString(16).substring(2, 6)}</span> intercepted from <span style={{ color: '#ffaa00' }}>192.168.1.{Math.floor(Math.random()*255)}</span>
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeModule !== 'PROXY' && activeModule !== 'REPEATER' && activeModule !== 'LOGGER' && (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', color: '#333' }}>
              <ShieldAlert size={64} opacity={0.1} />
              <div style={{ fontSize: '12px', letterSpacing: '4px', fontWeight: 'bold' }}>MODULE_UNDER_DEVELOPMENT</div>
              <div style={{ fontSize: '10px', color: '#222' }}>Neural patterns stabilizing...</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Cookie Notification Banner
const CookieBanner: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('vulaxis_cookies_accepted');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10000,
        background: 'rgba(10, 0, 5, 0.95)',
        border: '1px solid rgba(255, 0, 68, 0.3)',
        backdropFilter: 'blur(10px)',
        padding: '20px 40px',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.8)'
      }}
    >
      <p style={{ color: '#aaa', fontSize: '14px', margin: 0, whiteSpace: 'nowrap' }}>
        We use advanced neural trackers to optimize your tactical experience.
      </p>
      <button
        onClick={() => {
          localStorage.setItem('vulaxis_cookies_accepted', 'true');
          setShow(false);
        }}
        style={{
          background: '#ff0044',
          color: 'white',
          border: 'none',
          padding: '8px 20px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        ACCEPT
      </button>
    </motion.div>
  );
};

// Global Tactical Alert Banner
const GlobalAlertBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '35px',
        background: 'linear-gradient(90deg, transparent, rgba(255, 0, 68, 0.2), transparent)',
        borderBottom: '1px solid rgba(255, 0, 68, 0.3)',
        zIndex: 200000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(10px)',
        pointerEvents: 'none'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '6px', height: '6px', background: '#ff0044', borderRadius: '50%', animation: 'pulse 1s infinite' }} />
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: '#ff0044', fontWeight: 'bold', letterSpacing: '2px' }}>SYSTEM STATUS: ALL ENGINES OPERATIONAL</span>
        </div>
        <div style={{ width: '1px', height: '12px', background: 'rgba(255,0,68,0.3)' }} />
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: 'white', letterSpacing: '1px', opacity: 0.7 }}>GRID LATENCY: 12ms</span>
      </div>
    </motion.div>
  );
};

// Infrastructure Health Widget
const SystemStatusMonitor: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', background: 'rgba(255,255,255,0.02)', padding: '10px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
      {[
        { label: 'CPU', val: 42 },
        { label: 'NEURAL', val: 78 },
        { label: 'MEM', val: 31 }
      ].map((stat) => (
        <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#666', fontFamily: '"JetBrains Mono", monospace' }}>
            <span>{stat.label}</span>
            <span>{stat.val}%</span>
          </div>
          <div style={{ width: '60px', height: '2px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
            <motion.div
              animate={{ width: `${stat.val}%` }}
              style={{ height: '100%', background: '#ff0044', boxShadow: '0 0 5px #ff0044' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

// Tactical Support & Contact Hub
const ContactSupportSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', countryCode: '+91' });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const countryCodes = [
    { code: '+91', country: 'IN' },
    { code: '+1', country: 'US' },
    { code: '+44', country: 'UK' },
    { code: '+971', country: 'UAE' },
    { code: '+61', country: 'AU' },
    { code: '+81', country: 'JP' },
    { code: '+49', country: 'DE' },
    { code: '+33', country: 'FR' },
  ];

  const handleDeployMessage = async () => {
    // RESET ERROR
    setError('');

    // STRICT VALIDATION
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('ALL FIELDS REQUIRED FOR MISSION DEPLOYMENT.');
      return;
    }

    if (!formData.email.toLowerCase().endsWith('@gmail.com')) {
      setError('VALID @GMAIL.COM ADDRESS REQUIRED.');
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setError('CONTACT NUMBER MUST BE EXACTLY 10 DIGITS.');
      return;
    }

    // ACTIVATE CINEMATIC LOADING
    setIsSent(true);

    try {
      // TACTICAL API RELAY (FORMSPREE)
      // NOTE: Using tactical ID xaqvvvep for direct Gmail delivery
      const response = await fetch("https://formspree.io/f/xaqvvvep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "VULAXIS TOOL - Mission Request",
          operator: formData.name,
          email: formData.email,
          contact: `${formData.countryCode} ${formData.phone}`,
          message: formData.message,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', message: '', countryCode: '+91' });
          setIsSent(false);
        }, 4000);
      } else {
        throw new Error('RELAY_FAILURE');
      }
    } catch (err) {
      setError('COMMUNICATION RELAY FAILED. ENSURE API ID IS CORRECT.');
      setIsSent(false);
    }
  };

  return (
    <section id="support-section" style={{ minHeight: '100vh', width: '100%', position: 'relative', backgroundColor: '#020000', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '100px 8%', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.2, pointerEvents: 'none' }}>
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <DiagnosticNodes />
        </Canvas>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, #020000 80%)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
            <div style={{ width: '60px', height: '1px', background: '#ff0044' }} />
            <span style={{ color: '#ff0044', fontSize: '14px', fontWeight: '900', letterSpacing: '6px', fontFamily: '"JetBrains Mono", monospace' }}>TACTICAL_SUPPORT_HUB</span>
            <div style={{ width: '60px', height: '1px', background: '#ff0044' }} />
          </div>
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '84px', fontWeight: '900', color: 'white', marginBottom: '10px', letterSpacing: '-5px', lineHeight: 0.9 }}>
            GET IN <span style={{ color: '#ff0044' }}>TOUCH</span>
          </h2>
          <p style={{ color: '#666', fontSize: '18px', maxWidth: '700px', margin: '30px auto 0 auto', fontFamily: '"Outfit", sans-serif', fontWeight: '500' }}>
            Our elite neural engineering team is ready for custom mission deployments and high-stakes infrastructure auditing.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
              {[
                { icon: Mail, label: 'SECURE_RELAY', val: 'tprjt98@gmail.com', sub: 'Encrypted Communication Channel' },
                { icon: Phone, label: 'OPERATIONAL_LINE', val: '+91 // NEURAL_SECURE', sub: 'Tactical Voice Verification' },
                { icon: MapPin, label: 'COORDINATES_HQ', val: 'Cyber City, Tower Beta-9', sub: 'Haryana, India // 28.4595° N, 77.0266° E' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '30px' }}>
                  <div style={{ 
                    width: '72px', 
                    height: '72px', 
                    background: 'rgba(255,0,68,0.03)', 
                    borderRadius: '24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    border: '1px solid rgba(255,0,68,0.2)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
                  }}>
                    <item.icon color="#ff0044" size={32} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#ff0044', fontWeight: '900', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: '"JetBrains Mono", monospace', marginBottom: '8px' }}>{item.label}</div>
                    <div style={{ color: 'white', fontSize: '24px', fontWeight: '800', fontFamily: '"Outfit", sans-serif', letterSpacing: '-0.5px' }}>{item.val}</div>
                    <div style={{ color: '#555', fontSize: '14px', marginTop: '6px', fontWeight: '600' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ background: 'rgba(255,255,255,0.01)', padding: '50px', borderRadius: '32px', border: '1px solid rgba(255,0,68,0.1)', backdropFilter: 'blur(20px)', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', position: 'relative' }}>
            
            <AnimatePresence>
              {isSent && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'absolute', inset: 0, zIndex: 100, background: 'rgba(5,0,0,0.95)', borderRadius: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
                  <CheckCircle2 size={64} color="#00ff66" style={{ marginBottom: '20px' }} />
                  <h3 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>MISSION DEPLOYED</h3>
                  <p style={{ color: '#aaa', fontSize: '14px' }}>Intelligence transmitted via VULAXIS TOOL relay. Check your mail client to finalize send to tprjt98@gmail.com.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {error && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ background: 'rgba(255,0,68,0.1)', border: '1px solid #ff0044', padding: '12px', borderRadius: '12px', marginBottom: '20px', color: '#ff0044', fontSize: '10px', fontWeight: 'bold', textAlign: 'center', letterSpacing: '1px' }}>
                <AlertCircle size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> {error}
              </motion.div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '25px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ fontSize: '11px', color: '#ff0044', fontWeight: 'bold', letterSpacing: '2px' }}>NAME</label>
                <input type="text" placeholder="Operator Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '15px', color: 'white', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ fontSize: '11px', color: '#ff0044', fontWeight: 'bold', letterSpacing: '2px' }}>GMAIL ADDRESS</label>
                <input type="email" placeholder="user@gmail.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '15px', color: 'white', outline: 'none' }} />
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '25px' }}>
              <label style={{ fontSize: '11px', color: '#ff0044', fontWeight: 'bold', letterSpacing: '2px' }}>CONTACT NUMBER (10 DIGITS)</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <select value={formData.countryCode} onChange={(e) => setFormData({...formData, countryCode: e.target.value})} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '15px', color: 'white', outline: 'none', cursor: 'pointer', width: '100px' }}>
                  {countryCodes.map(c => <option key={c.code} value={c.code} style={{ background: '#020000' }}>{c.country} {c.code}</option>)}
                </select>
                <input type="tel" placeholder="0000000000" maxLength={10} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g,'')})} style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '15px', color: 'white', outline: 'none' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px' }}>
              <label style={{ fontSize: '11px', color: '#ff0044', fontWeight: 'bold', letterSpacing: '2px' }}>MESSAGE / COMMENTS</label>
              <textarea rows={4} placeholder="How can our tactical team help?" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '15px', color: 'white', outline: 'none', resize: 'none' }} />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: '#d40039' }} 
              whileTap={{ scale: 0.98 }}
              onClick={handleDeployMessage}
              style={{ width: '100%', background: '#ff0044', color: 'white', border: 'none', padding: '20px', borderRadius: '15px', fontWeight: '900', fontFamily: '"Space Grotesk", sans-serif', fontSize: '16px', cursor: 'pointer', boxShadow: '0 10px 30px rgba(255,0,68,0.3)' }}>
              SEND MISSION REQUEST →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Glassmorphic Diagnostic Card (Interactive)


// Glassmorphic Module Card (Interactive)
const CinematicCard: React.FC<CinematicCardProps> = (props) => {
  const { id, index, item, isActive, onClick } = props;
  const [isHovered, setIsHovered] = useState(false);
  const active = isActive || isHovered;

  return (
    <FadeIn delay={index * 0.1}>
      <motion.div
        id={id}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.98 }}
        className="glass-panel"
        style={{
          position: 'relative',
          padding: '40px',
          background: active ? 'rgba(255, 0, 68, 0.05)' : 'rgba(255,255,255,0.01)',
          border: `1px solid ${active ? 'rgba(255, 0, 68, 0.4)' : 'rgba(255,255,255,0.05)'}`,
          borderRadius: '24px',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '280px',
          boxShadow: active ? '0 20px 40px rgba(255,0,68,0.15)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 100% 0%, rgba(255, 0, 68, 0.1) 0%, transparent 70%)',
                borderRadius: '24px',
                zIndex: 0
              }}
            />
          )}
        </AnimatePresence>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '16px', 
              background: active ? 'rgba(255, 0, 68, 0.15)' : 'rgba(255,255,255,0.03)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: `1px solid ${active ? 'rgba(255, 0, 68, 0.3)' : 'rgba(255,255,255,0.1)'}`,
              transition: 'all 0.3s'
            }}>
              <item.icon size={28} color={active ? "#ff0044" : "#666"} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', color: active ? 'rgba(255,0,68,0.8)' : '#444', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px' }}>
                SECTOR_{item.mod}
              </span>
              {isActive && (
                <div style={{ marginTop: '8px', padding: '2px 8px', borderRadius: '4px', background: '#ff0044', color: 'white', fontSize: '8px', fontWeight: '900', letterSpacing: '1px' }}>ACTIVE</div>
              )}
            </div>
          </div>
          
          <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '24px', fontWeight: '800', color: 'white', margin: '0 0 12px 0', letterSpacing: '-0.5px' }}>
            {item.title}
          </h3>
          <p style={{ fontFamily: '"Manrope", sans-serif', color: active ? '#ccc' : '#888', fontSize: '14px', lineHeight: '1.6', margin: 0, fontWeight: 400 }}>
            {item.desc}
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 1, marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '100%', height: '1px', background: active ? 'rgba(255,0,68,0.2)' : 'rgba(255,255,255,0.05)' }} />
          {active && <ArrowRight size={14} color="#ff0044" />}
        </div>
      </motion.div>
    </FadeIn>
  );
};

// Organic 3D Core
const OrganicRedCore: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[3.5, 1.2, 256, 64]} />
      <MeshDistortMaterial color="#ff0000" emissive="#3a0000" roughness={0.1} metalness={0.8} distort={0.5} speed={1} transparent opacity={0.6} />
    </mesh>
  );
};

// Global Network Parallax
const GlobalNetwork: React.FC = () => {
  const meshRef = useRef<THREE.Points>(null);

  const particlesCount = 400;
  const positions = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 25; // x, y, z spread
  }

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      meshRef.current.rotation.x = state.mouse.y * 0.15;
      meshRef.current.rotation.y += state.mouse.x * 0.15;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#ff0044" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

// Live Threat Ticker
const ThreatTicker: React.FC = () => {
  return (
    <div style={{ position: 'absolute', bottom: '80px', left: 0, right: 0, borderTop: '1px solid rgba(255,0,68,0.2)', borderBottom: '1px solid rgba(255,0,68,0.2)', background: 'rgba(5,0,0,0.8)', padding: '12px 0', overflow: 'hidden', display: 'flex', whiteSpace: 'nowrap', zIndex: 10 }}>
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        style={{ display: 'flex', gap: '50px', fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: '#ff0044', letterSpacing: '1px' }}
      >
        <span>[SYS] Anomalous payload dropped by 192.168.1.45</span>
        <span>[WARN] Port 22 bruteforce detected on gateway-alpha</span>
        <span>[INFO] Neural network updated with 4,201 new signatures</span>
        <span>[ALERT] SQL injection attempt blocked on /api/v1/auth</span>
        <span>[SYS] Global threat feed synchronized successfully</span>
        <span>[SYS] Anomalous payload dropped by 192.168.1.45</span>
        <span>[WARN] Port 22 bruteforce detected on gateway-alpha</span>
        <span>[INFO] Neural network updated with 4,201 new signatures</span>
        <span>[ALERT] SQL injection attempt blocked on /api/v1/auth</span>
      </motion.div>
    </div>
  );
};

// AI Engine Floating Widget
const AIEngineWidget: React.FC<{ scanInProgress: boolean; hasPerformedScan: boolean; scanResults: any }> = ({ scanInProgress, hasPerformedScan, scanResults }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  let message = "SYSTEM_IDLE: Select target vectors to begin neural analysis.";

  if (scanInProgress) {
    message = "NEURAL_SYNC_ACTIVE: Mapping infrastructure topology and extracting threat signatures. Real-time auditing underway.";
  } else if (hasPerformedScan) {
    message = `ANALYSIS_COMPLETE: ${scanResults?.length || 0} critical vulnerabilities identified. Remediation paths mapped to OWASP-2024 standards.`;
  }

  return (
    <div style={{ position: 'fixed', bottom: '40px', right: '40px', zIndex: 20001, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '20px' }}>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            className="glass-panel"
            style={{
              width: '380px',
              padding: '30px',
              borderRadius: '24px',
              border: '1px solid rgba(255,0,68,0.3)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(255,0,68,0.1)',
              background: 'rgba(10, 0, 5, 0.9)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', borderBottom: '1px solid rgba(255,0,68,0.1)', paddingBottom: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(255,0,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Brain size={22} color="#ff0044" />
              </div>
              <div>
                <div style={{ fontSize: '10px', color: '#ff0044', fontWeight: '900', letterSpacing: '2px', fontFamily: '"JetBrains Mono", monospace' }}>NEURAL_CORE_v4.2</div>
                <div style={{ color: 'white', fontWeight: '800', fontSize: '16px', fontFamily: '"Space Grotesk", sans-serif' }}>AI ADVISOR</div>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff0044', boxShadow: '0 0 15px #ff0044' }} className="animate-pulse" />
              </div>
            </div>
            
            <div style={{ 
              fontFamily: '"JetBrains Mono", monospace', 
              fontSize: '13px', 
              color: '#888', 
              lineHeight: '1.6', 
              background: 'rgba(0,0,0,0.3)', 
              padding: '20px', 
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.03)'
            }}>
              <span style={{ color: '#ff0044' }}>&gt;</span> {message}
            </div>
            
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ff0044' }} />
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#555' }} />
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#555' }} />
              </div>
              <span style={{ fontSize: '9px', color: '#444', fontWeight: 'bold' }}>LATENCY: 12MS // UPTIME: 99.9%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        id="ai-widget-trigger"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: 'rgba(5, 0, 2, 0.9)',
          border: '1px solid rgba(255,0,68,0.4)',
          borderRadius: '50%',
          width: '72px',
          height: '72px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: isExpanded ? '0 0 40px rgba(255,0,68,0.5)' : '0 10px 30px rgba(0,0,0,0.8)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <AnimatePresence>
          {scanInProgress && (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              style={{ position: 'absolute', inset: 0, background: 'conic-gradient(from 0deg, transparent, rgba(255,0,68,0.5), transparent)' }}
            />
          )}
        </AnimatePresence>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Brain size={34} color={isExpanded ? "#ffffff" : "#ff0044"} style={{ transition: 'all 0.3s' }} />
        </div>
      </motion.button>
    </div>
  );
};

// --- GUIDED TOUR COMPONENT ---
interface TourStep {
  title: string;
  content: string;
  voice: string;
  targetId?: string;
}

const TourOverlay: React.FC<{ steps: TourStep[], currentStep: number, onNext: () => void, onPrev: () => void, onSkip: () => void, speak: (s: string) => void }> = ({ steps, currentStep, onNext, onPrev, onSkip, speak }) => {
  const step = steps[currentStep];
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    // Only speak the first step of the tour as an intro, then stay silent
    if (currentStep === 0) {
      const timer = setTimeout(() => {
        speak(step.voice);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentStep, speak, step.voice]);

  useEffect(() => {
    const updateRect = () => {
      if (step.targetId) {
        const el = document.getElementById(step.targetId);
        if (el) {
          setRect(el.getBoundingClientRect());
        }
      } else {
        setRect(null);
      }
    };
    
    updateRect();
    window.addEventListener('resize', updateRect);
    return () => window.removeEventListener('resize', updateRect);
  }, [step.targetId, currentStep]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, zIndex: 20000, pointerEvents: 'none' }}
    >
      {/* SPOTLIGHT EFFECT */}
      <AnimatePresence>
        {rect && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              top: rect.top - 15,
              left: rect.left - 15,
              width: rect.width + 30,
              height: rect.height + 30
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            style={{
              position: 'fixed',
              border: '2px solid #ff0044',
              borderRadius: '16px',
              boxShadow: '0 0 50px rgba(255, 0, 68, 0.4), 0 0 0 4000px rgba(2, 0, 0, 0.85)',
              zIndex: 19999,
              pointerEvents: 'none'
            }}
          >
            {/* PULSING RING */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{
                position: 'absolute', inset: -5, border: '2px solid #ff0044', borderRadius: '20px', filter: 'blur(4px)'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CLICK OVERLAY TO SKIP (only on background) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'auto' }} onClick={onSkip} />
      
      {/* TOUR MODAL - POSITIONED AT BOTTOM FOR VISIBILITY */}
      <motion.div 
        key={currentStep}
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        style={{ 
          position: 'fixed', bottom: '40px', left: '50%', transform: 'translateX(-50%)', 
          zIndex: 20001, width: '90%', maxWidth: '600px', pointerEvents: 'auto',
          background: 'rgba(10, 0, 5, 0.95)', border: '1px solid rgba(255, 0, 68, 0.6)', 
          borderRadius: '24px', padding: '30px', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff0044' }} />
            <div style={{ color: '#ff0044', borderRadius: '20px', fontSize: '11px', fontWeight: '900', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '1px' }}>
              STEP {currentStep + 1} / {steps.length}
            </div>
          </div>
          <button onClick={onSkip} style={{ background: 'transparent', border: 'none', color: '#666', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px' }}>ABORT WALKTHROUGH</button>
        </div>

        <h2 style={{ fontSize: '24px', fontFamily: '"Space Grotesk", sans-serif', color: 'white', fontWeight: '900', marginBottom: '10px' }}>{step.title}</h2>
        <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px', fontFamily: '"Manrope", sans-serif' }}>{step.content}</p>

        <div style={{ display: 'flex', gap: '12px' }}>
          {currentStep > 0 && (
            <button 
              onClick={onPrev}
              style={{ flex: 1, background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}
            >
              PREVIOUS
            </button>
          )}
          <button 
            onClick={onNext}
            style={{ flex: 2, background: 'linear-gradient(90deg, #ff0044, #cc0033)', color: 'white', border: 'none', padding: '12px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px', boxShadow: '0 5px 15px rgba(255,0,68,0.3)' }}
          >
            {currentStep === steps.length - 1 ? 'FINISH' : 'NEXT PHASE →'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
const NotificationPreferencesOverlay: React.FC<{ settings: NotificationSettings, onUpdate: (s: NotificationSettings) => void, onClose: () => void }> = ({ settings, onUpdate, onClose }) => {
  const toggle = (key: keyof NotificationSettings) => {
    onUpdate({ ...settings, [key]: !settings[key] });
  };

  const options = [
    { key: 'scanStart', label: 'Scan Initialization', icon: PlayCircle, desc: 'Alert when a new security scan starts.' },
    { key: 'scanFinish', label: 'Scan Completion', icon: CheckCircle2, desc: 'Alert when a scan finishes successfully.' },
    { key: 'scanStop', label: 'Manual Stop/Interruption', icon: AlertCircle, desc: 'Alert when a scan is manually terminated.' },
    { key: 'reportGenerated', label: 'Report Generation', icon: FileText, desc: 'Alert when a security report is ready.' },
    { key: 'aiInsights', label: 'AI Engine Insights', icon: Brain, desc: 'Receive real-time tactical updates from the AI Engine.' },
    { key: 'criticalVulnFound', label: 'Critical Threat Alert', icon: ShieldAlert, desc: 'Immediate notification when a critical vulnerability is detected.' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(2,0,0,0.95)', overflow: 'hidden', padding: '20px' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.6 }}>
        <Canvas camera={{ position: [0, 0, 15] }}><ambientLight intensity={0.5} /><GlobalNetwork /><Sparkles count={500} scale={30} size={2} speed={0.5} color="#ff0044" opacity={0.8} /></Canvas>
      </div>
      <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '600px', maxHeight: '90vh', background: 'rgba(10, 0, 5, 0.9)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', border: '1px solid rgba(255, 0, 68, 0.4)', borderRadius: '24px', padding: '40px', boxShadow: '0 0 80px rgba(255,0,68,0.3)', overflowY: 'auto' }} className="custom-scrollbar">
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,0,68,0.1)', border: '1px solid rgba(255,0,68,0.3)', color: '#ff0044', cursor: 'pointer', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.3s' }}>
          <X size={20} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}><Bell color="#ff0044" size={32} /><h2 style={{ fontSize: '28px', fontFamily: '"Space Grotesk", sans-serif', color: 'white', margin: 0, fontWeight: 800 }}>Notification Preferences</h2></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {options.map((opt) => (
            <div key={opt.key} onClick={() => toggle(opt.key as keyof NotificationSettings)} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,0,68,0.2)', cursor: 'pointer', transition: 'all 0.2s' }}>
              <opt.icon size={20} color={settings[opt.key as keyof NotificationSettings] ? "#ff0044" : "#444"} />
              <div style={{ flex: 1 }}>
                <div style={{ color: 'white', fontSize: '15px', fontWeight: 'bold', fontFamily: '"Space Grotesk", sans-serif' }}>{opt.label}</div>
                <div style={{ color: '#888', fontSize: '12px' }}>{opt.desc}</div>
              </div>
              <div style={{ width: '40px', height: '20px', borderRadius: '10px', background: settings[opt.key as keyof NotificationSettings] ? '#ff0044' : '#222', position: 'relative', transition: '0.3s' }}>
                <div style={{ position: 'absolute', top: '2px', left: settings[opt.key as keyof NotificationSettings] ? '22px' : '2px', width: '16px', height: '16px', borderRadius: '50%', background: 'white', transition: '0.3s' }} />
              </div>
            </div>
          ))}

          <div style={{ height: '1px', background: 'rgba(255,0,68,0.2)', margin: '10px 0' }} />

          <div onClick={() => toggle('voiceEnabled')} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px 20px', background: settings.voiceEnabled ? 'rgba(255,0,68,0.1)' : 'rgba(255,255,255,0.03)', borderRadius: '16px', border: settings.voiceEnabled ? '1px solid rgba(255,0,68,0.6)' : '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
            {settings.voiceEnabled ? <Volume2 size={24} color="#ff0044" /> : <VolumeX size={24} color="#444" />}
            <div style={{ flex: 1 }}>
              <div style={{ color: 'white', fontSize: '15px', fontWeight: 'bold', fontFamily: '"Space Grotesk", sans-serif' }}>AI Voice Assistant</div>
              <div style={{ color: '#888', fontSize: '12px' }}>Enable auditory security alerts and scan updates.</div>
            </div>
            <div style={{ padding: '4px 10px', borderRadius: '4px', background: settings.voiceEnabled ? '#ff0044' : '#222', color: 'white', fontSize: '10px', fontWeight: 'bold' }}>{settings.voiceEnabled ? 'ACTIVE' : 'MUTED'}</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
const SessionManagementOverlay: React.FC<{ settings: SessionSettings, onUpdate: (s: SessionSettings) => void, onClose: () => void }> = ({ settings, onUpdate, onClose }) => {
  const options = [
    { label: 'Never (Persistent)', value: 0 },
    { label: '10 Seconds', value: 10 },
    { label: '20 Seconds', value: 20 },
    { label: '30 Minutes', value: 1800 },
    { label: '1 Hour', value: 3600 },
    { label: '4 Hours', value: 14400 },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(2,0,0,0.95)', overflow: 'hidden', padding: '20px' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.6 }}>
        <Canvas camera={{ position: [0, 0, 15] }}><ambientLight intensity={0.5} /><GlobalNetwork /><Sparkles count={500} scale={30} size={2} speed={0.5} color="#ff0044" opacity={0.8} /></Canvas>
      </div>
      <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '500px', background: 'rgba(10, 0, 5, 0.9)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', border: '1px solid rgba(255, 0, 68, 0.4)', borderRadius: '24px', padding: '40px', boxShadow: '0 0 80px rgba(255,0,68,0.3)' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,0,68,0.1)', border: '1px solid rgba(255,0,68,0.3)', color: '#ff0044', cursor: 'pointer', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <X size={20} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}><Lock color="#ff0044" size={32} /><h2 style={{ fontSize: '28px', fontFamily: '"Space Grotesk", sans-serif', color: 'white', margin: 0, fontWeight: 800 }}>Session Management</h2></div>
        
        <p style={{ color: '#888', fontSize: '14px', marginBottom: '25px', fontFamily: '"Manrope", sans-serif' }}>Select the duration of inactivity before the system automatically terminates your secure session.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div 
            onClick={() => onUpdate({ ...settings, logoutOnTabClose: !settings.logoutOnTabClose })} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              padding: '16px 20px', 
              background: settings.logoutOnTabClose ? 'rgba(255,0,68,0.1)' : 'rgba(255,255,255,0.03)', 
              borderRadius: '12px', 
              border: settings.logoutOnTabClose ? '1px solid rgba(255,0,68,0.6)' : '1px solid rgba(255,255,255,0.05)', 
              cursor: 'pointer', 
              transition: 'all 0.2s',
              marginBottom: '10px'
            }}
          >
            <div>
              <div style={{ color: 'white', fontSize: '15px', fontWeight: '800', fontFamily: '"Space Grotesk", sans-serif' }}>Logout on Tab Close</div>
              <div style={{ color: '#888', fontSize: '12px' }}>Session will terminate when browser is closed.</div>
            </div>
            <div style={{ width: '40px', height: '20px', borderRadius: '10px', background: settings.logoutOnTabClose ? '#ff0044' : '#222', position: 'relative', transition: '0.3s' }}>
              <div style={{ position: 'absolute', top: '2px', left: settings.logoutOnTabClose ? '22px' : '2px', width: '16px', height: '16px', borderRadius: '50%', background: 'white', transition: '0.3s' }} />
            </div>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,0,68,0.2)', margin: '10px 0' }} />
          <div style={{ color: '#ff0044', fontSize: '10px', fontWeight: '900', fontFamily: '"JetBrains Mono", monospace', letterSpacing: '2px', marginBottom: '5px' }}>AUTO-LOGOUT DELAY</div>

          {options.map((opt) => (
            <div 
              key={opt.value} 
              onClick={() => onUpdate({ ...settings, autoLogoutTime: opt.value })} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                padding: '16px 20px', 
                background: settings.autoLogoutTime === opt.value ? 'rgba(255,0,68,0.1)' : 'rgba(255,255,255,0.03)', 
                borderRadius: '12px', 
                border: settings.autoLogoutTime === opt.value ? '1px solid rgba(255,0,68,0.6)' : '1px solid rgba(255,255,255,0.05)', 
                cursor: 'pointer', 
                transition: 'all 0.2s' 
              }}
            >
              <div style={{ color: 'white', fontSize: '15px', fontWeight: settings.autoLogoutTime === opt.value ? '800' : '500', fontFamily: '"Space Grotesk", sans-serif' }}>{opt.label}</div>
              {settings.autoLogoutTime === opt.value && <CheckCircle2 size={18} color="#ff0044" />}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ReportsOverlay: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const samples = [
    { title: "Vulnerability Summary", type: "Executive Overview", icon: FileBarChart, color: "#ff0044", desc: "Helpful overview of findings and a visual representation of risk levels across all identified vulnerabilities.", tag: "OVERVIEW" },
    { title: "Automatically Confirmed Findings", type: "Verified Logs", icon: CheckCircle2, iconColor: "#00ff66", desc: "Scanner-validated findings that save time on manual validation, categorized by Confirmed or Unconfirmed tags.", tag: "CONFIRMED" },
    { title: "Evidence and Screenshots", type: "Proof of Concept", icon: Eye, color: "#ff6600", desc: "Solid evidence supporting assigned risk levels, including extracted system data and visual proof.", tag: "EVIDENCE" },
    { title: "HTTP Request / Response", type: "Technical Traffic", icon: Terminal, color: "#3366ff", desc: "Handy HTTP logs used to detect vulnerabilities, included for manual validation and deep-dive analysis.", tag: "TRAFFIC" },
    { title: "Actionable Recommendations", type: "Remediation Guide", icon: BookOpen, color: "#aa00ff", desc: "Complete remediation steps for each finding to help development teams quickly fix vulnerabilities.", tag: "FIX" },
    { title: "OWASP & CWE Classifications", type: "Compliance Mapping", icon: ShieldAlert, color: "#ffcc00", desc: "Standardized mapping of all findings to OWASP Top 10 and CWE frameworks for regulatory compliance.", tag: "COMPLIANCE" }
  ];

  const downloadSample = (name: string) => {
    const content = `VULAXIS AI-VAPT SYSTEM\nREPORT SAMPLE: ${name}\n\nThis document demonstrates the output generated by the Vulaxis scanning engine.\nCategory: ${name}\nStatus: CONFIRMED\nRisk Level: CRITICAL/HIGH\n\n[CONFIDENTIAL DOCUMENT]`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `VULAXIS_SAMPLE_${name.replace(/ /g, '_').toUpperCase()}.txt`;
    a.click();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(2,0,0,0.95)', overflow: 'hidden', padding: '20px' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.6 }}>
        <Canvas camera={{ position: [0, 0, 15] }}><ambientLight intensity={0.5} /><GlobalNetwork /><Sparkles count={500} scale={30} size={2} speed={0.5} color="#ff0044" opacity={0.8} /></Canvas>
      </div>
      <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1000px', maxHeight: '90vh', background: 'rgba(10, 0, 5, 0.9)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', border: '1px solid rgba(255, 0, 68, 0.4)', borderRadius: '32px', padding: '60px', boxShadow: '0 0 100px rgba(255,0,68,0.4)', display: 'flex', flexDirection: 'column' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '30px', right: '30px', background: 'rgba(255,0,68,0.1)', border: '1px solid rgba(255,0,68,0.3)', color: '#ff0044', cursor: 'pointer', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 20 }}>
          <X size={24} />
        </button>

        <div style={{ flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '10px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255,0,68,0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid rgba(255,0,68,0.4)' }}>
              <FileText color="#ff0044" size={32} />
            </div>
            <div>
              <h2 style={{ fontSize: '42px', fontFamily: '"Space Grotesk", sans-serif', color: 'white', margin: 0, fontWeight: 900, letterSpacing: '-1px' }}>Report Intelligence</h2>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: '#ff0044', letterSpacing: '3px' }}>SYSTEM_CORE/GENERATOR/OUTPUT</div>
            </div>
          </div>

          <p style={{ color: '#888', marginBottom: '40px', fontFamily: '"Manrope", sans-serif', fontSize: '16px', maxWidth: '600px', lineHeight: '1.6' }}>
            Download high-fidelity sample reports to preview the cinematic depth of our security analysis. All samples are generated in real-time.
          </p>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '15px' }} className="custom-scrollbar">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', padding: '10px 0' }}>
            {samples.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,0,68,0.5)' }}
                style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '15px', cursor: 'pointer', position: 'relative', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
                onClick={() => downloadSample(s.title)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ padding: '12px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <s.icon color={s.iconColor || s.color} size={24} />
                  </div>
                  <div style={{ padding: '4px 8px', borderRadius: '6px', background: 'rgba(255,0,68,0.1)', color: '#ff0044', fontSize: '9px', fontWeight: '900', fontFamily: '"JetBrains Mono", monospace' }}>{s.tag}</div>
                </div>

                <div>
                  <div style={{ color: 'white', fontSize: '16px', fontWeight: '800', fontFamily: '"Space Grotesk", sans-serif', marginBottom: '8px', lineHeight: '1.2' }}>{s.title}</div>
                  <div style={{ color: '#777', fontSize: '12px', lineHeight: '1.5' }}>{s.desc}</div>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', color: '#ff0044', fontSize: '12px', fontWeight: 'bold' }}>
                  <Download size={14} />
                  <span>DOWNLOAD SAMPLE</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '30px', flexShrink: 0, padding: '25px', background: 'linear-gradient(90deg, rgba(255,0,68,0.1) 0%, transparent 100%)', border: '1px solid rgba(255,0,68,0.3)', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Users size={24} color="#ff0044" />
            </div>
            <div>
              <div style={{ fontFamily: '"Space Grotesk", sans-serif', color: 'white', fontWeight: '800', fontSize: '18px' }}>Global Research Feed</div>
              <div style={{ color: '#888', fontSize: '13px' }}>Join 12,000+ security experts receiving weekly report insights.</div>
            </div>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: '#ff0044', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '12px', fontWeight: '900', fontSize: '13px', cursor: 'pointer', boxShadow: '0 10px 20px rgba(255,0,68,0.3)' }}>SUBSCRIBE</motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};





const ToolsMegaMenu: React.FC<{ isOpen: boolean; onClose: () => void; onExploreAll: () => void; onSelectTool: (tool: string) => void }> = ({ isOpen, onClose, onExploreAll, onSelectTool }) => {
  const categories = [
    { name: 'Reconnaissance', icon: Eye, tools: ['Nmap', 'Shodan', 'theHarvester', 'Maltego', 'Recon-ng'] },
    { name: 'Scanning', icon: Search, tools: ['Nikto', 'OpenVAS', 'Nessus', 'OWASP ZAP', 'Burp Suite'] },
    { name: 'Exploitation', icon: Crosshair, tools: ['Metasploit', 'SQLmap', 'BeEF', 'Hydra', 'John the Ripper'] },
    { name: 'Utilities', icon: Layers, tools: ['Wireshark', 'Netcat', 'Hashcat', 'Aircrack-ng', 'Volatility'] },
  ];
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      style={{ position: 'fixed', top: '70px', left: 0, right: 0, zIndex: 9998, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
      <motion.div style={{ pointerEvents: 'auto', background: 'rgba(10,0,5,0.97)', backdropFilter: 'blur(30px)', border: '1px solid rgba(255,0,68,0.3)', borderRadius: '20px', padding: '30px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', maxWidth: '900px', width: '95vw', boxShadow: '0 20px 60px rgba(0,0,0,0.8)' }}>
        {categories.map((cat) => (
          <div key={cat.name}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px', borderBottom: '1px solid rgba(255,0,68,0.2)', paddingBottom: '10px' }}>
              <cat.icon size={16} color="#ff0044" />
              <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: '800', fontSize: '13px', color: '#ff0044', letterSpacing: '1px', textTransform: 'uppercase' }}>{cat.name}</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {cat.tools.map((tool) => (
                <li key={tool} 
                  onClick={() => onSelectTool(tool)}
                  style={{ color: '#ccc', fontFamily: '"Manrope", sans-serif', fontSize: '13px', cursor: 'pointer', padding: '6px 10px', borderRadius: '8px', transition: 'all 0.2s' }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,0,68,0.1)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ccc'; }}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div style={{ gridColumn: '1 / -1', borderTop: '1px solid rgba(255,0,68,0.2)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#888', fontFamily: '"JetBrains Mono", monospace', fontSize: '12px' }}>30+ tools integrated • AI-powered analysis</span>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onExploreAll}
            style={{ background: '#ff0044', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '10px', fontWeight: '800', cursor: 'pointer', fontFamily: '"Space Grotesk", sans-serif', fontSize: '13px' }}>
            EXPLORE ALL TOOLS →
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ==========================================
// PRIMARY APP EXPORT
// ==========================================
export default function App() {
  // --- LANGUAGE STATE ---
  const [currentLanguage, setCurrentLanguage] = useState<'EN' | 'DE' | 'RU'>('EN');
  const translations = {
    EN: { dashboard: 'COMMAND CENTER', tools: 'TACTICAL MODULES', interception: 'INTERCEPTION HUB', support: 'SUPPORT HUB', scan: 'INITIATE ELITE SCAN', mission: 'INITIALIZE MISSION' },
    DE: { dashboard: 'KOMMANDOZENTRALE', tools: 'TAKTIK-MODULE', interception: 'ABFANG-HUB', support: 'SUPPORT-HUB', scan: 'ELITE-SCAN STARTEN', mission: 'MISSION INITIALISIEREN' },
    RU: { dashboard: 'ЦЕНТР УПРАВЛЕНИЯ', tools: 'ТАКТИЧЕСКИЕ МОДУЛИ', interception: 'УЗЕЛ ПЕРЕХВАТА', support: 'ЦЕНТР ПОДДЕРЖКИ', scan: 'ЗАПУСТИТЬ ЭЛИТНЫЙ СКАН', mission: 'ИНИЦИИРОВАТЬ МИССИЮ' }
  };
  const t = translations[currentLanguage];

  // TACTICAL LANGUAGE SWITCHER (INTERNAL)
  const LanguageSwitcher: React.FC = () => {
    return (
      <div style={{ display: 'flex', gap: '5px', background: 'rgba(255,255,255,0.03)', padding: '5px', borderRadius: '10px', border: '1px solid rgba(255,0,68,0.2)' }}>
        {['EN', 'DE', 'RU'].map(l => (
          <div key={l} 
            onClick={() => {
              setCurrentLanguage(l as 'EN' | 'DE' | 'RU');
              fireNotification(`System language updated to ${l}`, "info", "aiInsights");
            }} 
            style={{ padding: '4px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer', background: currentLanguage === l ? '#ff0044' : 'transparent', color: currentLanguage === l ? 'white' : '#666', transition: '0.3s' }}>
            {l}
          </div>
        ))}
      </div>
    );
  };

  // --- AUTH STATE ---
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const localAuth = localStorage.getItem('vulaxis_auth') === 'true';
    const sessionAuth = sessionStorage.getItem('vulaxis_auth') === 'true';

    // Check for persisted timeout if using localAuth
    if (localAuth) {
      const savedSettings = localStorage.getItem('vulaxis_session_settings');
      const settings = savedSettings ? JSON.parse(savedSettings) : { autoLogoutTime: 0 };
      const lastActive = localStorage.getItem('vulaxis_last_active');

      if (settings.autoLogoutTime > 0 && lastActive) {
        const inactiveTime = Date.now() - parseInt(lastActive, 10);
        if (inactiveTime > settings.autoLogoutTime * 1000) {
          // Clear everything - session expired while app was closed
          localStorage.removeItem('vulaxis_auth');
          localStorage.removeItem('vulaxis_session_active');
          localStorage.removeItem('vulaxis_last_active');
          return false;
        }
      }
    }

    return localAuth || sessionAuth;
  });
  const [showReportFormats, setShowReportFormats] = useState<boolean>(false);
  const [aiInsights, setAiInsights] = useState<string>("");

  // --- SESSION MANAGEMENT ---
  const [sessionSettings, setSessionSettings] = useState<SessionSettings>(() => {
    const saved = localStorage.getItem('vulaxis_session_settings');
    return saved ? JSON.parse(saved) : { autoLogoutTime: 0, logoutOnTabClose: false };
  });

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    localStorage.removeItem('vulaxis_auth');
    localStorage.removeItem('vulaxis_session_active');
    localStorage.removeItem('vulaxis_last_active');
    sessionStorage.removeItem('vulaxis_auth');
    sessionStorage.removeItem('vulaxis_session_active');
    window.location.reload(); // Force full reset to ensure security
  }, []);

  const handleManualTourTrigger = () => {
    setCurrentTourStep(0);
    setIsTourOpen(true);
    localStorage.removeItem('vulaxis_tour_completed');
  };

  const handleRestartTour = () => {
    setCurrentTourStep(0);
    setIsTourOpen(true);
    localStorage.removeItem('vulaxis_tour_completed');
  };

  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.removeItem('vulaxis_auth');
      localStorage.removeItem('vulaxis_last_active');
      sessionStorage.removeItem('vulaxis_auth');
      return;
    }
    if (sessionSettings.logoutOnTabClose) {
      sessionStorage.setItem('vulaxis_auth', 'true');
      sessionStorage.setItem('vulaxis_session_active', 'true');
      localStorage.removeItem('vulaxis_auth');
      localStorage.removeItem('vulaxis_last_active');
    } else {
      localStorage.setItem('vulaxis_auth', 'true');
      localStorage.setItem('vulaxis_session_active', 'true');
      localStorage.setItem('vulaxis_last_active', Date.now().toString());
      sessionStorage.removeItem('vulaxis_auth');
    }
  }, [isAuthenticated, sessionSettings.logoutOnTabClose]);

  // --- NOTIFICATION STATE ---
  const [notifSettings, setNotifSettings] = useState<NotificationSettings>(() => {
    const saved = localStorage.getItem('vulaxis_notif_settings');
    return saved ? JSON.parse(saved) : {
      scanStart: true,
      scanStop: true,
      scanFinish: true,
      reportGenerated: true,
      aiInsights: true,
      criticalVulnFound: true,
      voiceEnabled: true
    };
  });

  useEffect(() => {
    localStorage.setItem('vulaxis_notif_settings', JSON.stringify(notifSettings));
  }, [notifSettings]);

  useEffect(() => {
    const handleRestartEvent = () => handleRestartTour();
    window.addEventListener('restart-tour', handleRestartEvent);
    return () => window.removeEventListener('restart-tour', handleRestartEvent);
  }, [handleRestartTour]);

  const [toasts, setToasts] = useState<{ id: string; message: string; type: 'info' | 'success' | 'warn' }[]>([]);

  const speak = useCallback((text: string) => {
    if (notifSettings.voiceEnabled && 'speechSynthesis' in window) {
      // Cancel any ongoing speech to avoid overlap
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Tactical pace
      utterance.pitch = 0.95; // Slightly deeper, more tactical tone
      utterance.volume = 1;
      
      const setVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          // Prefer premium/natural sounding English voices
          const preferredVoice = 
            voices.find(v => v.lang.startsWith('en') && v.name.includes('Google US English')) ||
            voices.find(v => v.lang.startsWith('en') && v.name.includes('Natural')) ||
            voices.find(v => v.lang.startsWith('en') && v.name.includes('Male')) ||
            voices.find(v => v.lang.startsWith('en')) || 
            voices[0];
          utterance.voice = preferredVoice;
        }
      };

      setVoice();
      // If voices aren't loaded yet, they might load shortly
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = setVoice;
      }
      
      // Small delay before speaking to ensure cancellation is processed
      setTimeout(() => {
        window.speechSynthesis.speak(utterance);
      }, 100);
    }
  }, [notifSettings.voiceEnabled]);


  useEffect(() => {
    localStorage.setItem('vulaxis_session_settings', JSON.stringify(sessionSettings));
  }, [sessionSettings]);

  useEffect(() => {
    if (!isAuthenticated || sessionSettings.autoLogoutTime === 0) return;

    let timeout: ReturnType<typeof setTimeout>;

    const resetTimer = () => {
      if (timeout) clearTimeout(timeout);
      // Update persisted timestamp for cross-tab and persistence support
      if (!sessionSettings.logoutOnTabClose) {
        localStorage.setItem('vulaxis_last_active', Date.now().toString());
      }
      timeout = setTimeout(() => {
        handleLogout();
      }, sessionSettings.autoLogoutTime * 1000);
    };

    // Remove mousemove from frequent reset events to avoid accidental resets
    // Use more intentional events instead
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click'];
    events.forEach(e => window.addEventListener(e, resetTimer));
    resetTimer();

    return () => {
      if (timeout) clearTimeout(timeout);
      events.forEach(e => window.removeEventListener(e, resetTimer));
    };
  }, [isAuthenticated, sessionSettings.autoLogoutTime]);

  // Welcome voice message and Tour Trigger
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);
  const [currentTourStep, setCurrentTourStep] = useState<number>(0);

  useEffect(() => {
    if (isAuthenticated) {
      const hasTakenTour = localStorage.getItem('vulaxis_tour_completed');
      
      // Initial startup sequence
      const welcomeTimer = setTimeout(() => {
        speak("Welcome to the Vulaxis.");
        
        if (!hasTakenTour) {
          // Launch tour shortly after greeting starts
          const tourTimer = setTimeout(() => {
            setCurrentTourStep(0);
            setIsTourOpen(true);
          }, 1500);
          return () => clearTimeout(tourTimer);
        }
      }, 800);
      
      return () => clearTimeout(welcomeTimer);
    }
  }, [isAuthenticated, speak]);

  const tourSteps: TourStep[] = [
    { title: "Command Center", content: "Access your tactical tools and system configurations here.", voice: "Initializing system walkthrough. Let's examine your tactical interface.", targetId: 'nav-container' },
    { title: "Domain Target", content: "Select this for full external perimeter assessments against web applications and infrastructure.", voice: "", targetId: 'target-domain' },
    { title: "IPv4 Address", content: "Target specific hosts, firewalls, and routing infrastructure via direct network scanning.", voice: "", targetId: 'target-ipv4' },
    { title: "IPv6 Protocol", content: "Assess next-generation IP stacks and perform deep port discovery.", voice: "", targetId: 'target-ipv6' },
    { title: "Rapid Assessment", content: "High-speed evaluation focusing on the top 100 ports and basic web vulnerabilities.", voice: "", targetId: 'profile-rapid' },
    { title: "Comprehensive Audit", content: "Deep infrastructure analysis using ML threat detection and full port scanning.", voice: "", targetId: 'profile-comprehensive' },
    { title: "Full PenTest", content: "Advanced AI-driven exploitation analysis and business logic testing.", voice: "", targetId: 'profile-pentest' },
    { title: "Neural Input Console", content: "Enter your target vector here for real-time validation and neural mapping.", voice: "", targetId: 'target-input-box' },
    { title: "AI Tactical Engine", content: "Receive real-time threat predictions and autonomous remediation insights.", voice: "", targetId: 'ai-widget-trigger' },
    { title: "Strategic Support", content: "Access mission assistance and technical support whenever needed.", voice: "", targetId: 'help-icon-trigger' }
  ];

  const handleNextStep = () => {
    if (currentTourStep < tourSteps.length - 1) {
      const nextStep = currentTourStep + 1;
      setCurrentTourStep(nextStep);
      const targetId = tourSteps[nextStep].targetId;
      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        // Simulating interactive feel: if dashboard section, show dummy data
        if (targetId === 'dashboard-section' && !hasPerformedScan && !scanInProgress) {
          setTargetValue("demo-target.com");
          // No actual scan, just show the UI state
        }
      }
    } else {
      setIsTourOpen(false);
      localStorage.setItem('vulaxis_tour_completed', 'true');
    }
  };

  const handlePrevStep = () => {
    if (currentTourStep > 0) {
      setCurrentTourStep(prev => prev - 1);
    }
  };

  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasTriggeredExit, setHasTriggeredExit] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggeredExit) {
        setShowExitPopup(true);
        setHasTriggeredExit(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggeredExit]);

  const [isInterceptionMode, setIsInterceptionMode] = useState(false);

  const handleSkipTour = () => {
    setIsTourOpen(false);
    localStorage.setItem('vulaxis_tour_completed', 'true');
  };

  const fireNotification = useCallback((message: string, type: 'info' | 'success' | 'warn' = 'info', settingKey?: keyof Omit<NotificationSettings, 'voiceEnabled'>) => {
    if (settingKey && !notifSettings[settingKey]) return;
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    speak(message);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  }, [notifSettings, speak]);

  // --- SCANNER STATE ---
  const [targetType, setTargetType] = useState<string>("domain");
  const [assessmentProfile, setAssessmentProfile] = useState<string>("rapid");
  const [targetValue, setTargetValue] = useState<string>("");
  const [scanInProgress, setScanInProgress] = useState<boolean>(false);
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [scanResults, setScanResults] = useState<any>(null);
  const [hasPerformedScan, setHasPerformedScan] = useState<boolean>(false);

  // Dynamic Browser Title Management
  useEffect(() => {
    let title = "VULAXIS | Elite VAPT";
    if (scanInProgress) title = `[${scanProgress}%] VULAXIS | SCANNING...`;
    else if (hasPerformedScan) title = "VULAXIS | THREAT REPORT READY";
    else if (!isAuthenticated) title = "VULAXIS | AUTH REQUIRED";
    
    document.title = title;
  }, [scanInProgress, scanProgress, hasPerformedScan, isAuthenticated]);

  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scanTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // UI State
  const [selectedDetail, setSelectedDetail] = useState<any>(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isToolsMenuOpen, setIsToolsMenuOpen] = useState<boolean>(false);
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);
  const [logoError, setLogoError] = useState<boolean>(false);

  const handleInitiateScan = () => {
    if (!targetValue.trim()) return;
    setScanInProgress(true);
    setHasPerformedScan(false);
    setScanProgress(0);
    setScanResults(null);
    speak(`${targetValue}, starting scan ${targetValue}`);
    fireNotification(`Neural scan initiated on target vector: ${targetValue}`, "info", "scanStart");

    progressIntervalRef.current = setInterval(() => {
      setScanProgress(prev => {
        const next = prev + Math.floor(Math.random() * 8) + 2;
        return next >= 99 ? 99 : next;
      });
    }, 400);

    scanTimeoutRef.current = setTimeout(async () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setScanProgress(100);
      
      const results = [
        { 
          id: "VULN-001", 
          title: "Outdated OpenSSL Version", 
          name: "Heartbleed Potential / Outdated OpenSSL",
          severity: "high", 
          exploitPotential: "confirmed", 
          category: "Infrastructure", 
          owaspCategory: "A06:2021-Vulnerable and Outdated Components", 
          description: "The target is running an outdated version of OpenSSL (1.0.1g) which is vulnerable to Heartbleed and other critical exploits.", 
          impact: "Complete memory disclosure of the server process, including private keys and user credentials.",
          remediation: "Upgrade to OpenSSL 3.0.x or later immediately.", 
          technicalDetails: "Detected version: OpenSSL 1.0.1g. CVE-2014-0160 vulnerability detected.",
          references: [{ title: "CVE-2014-0160", url: "https://nvd.nist.gov/vuln/detail/CVE-2014-0160" }],
          status: "open",
          affectedComponents: ["OpenSSL 1.0.1g"],
          discoveredAt: new Date().toISOString(), 
          endpointUrl: targetType === 'domain' ? `https://${targetValue}:443` : `${targetValue}:443` 
        },
        { 
          id: "VULN-002", 
          title: "Missing Security Headers", 
          name: "Missing HTTP Security Headers",
          severity: "medium", 
          exploitPotential: "potential", 
          category: "Web Security", 
          owaspCategory: "A05:2021-Security Misconfiguration", 
          description: "Critical security headers like CSP and X-Frame-Options are missing.", 
          impact: "Increases vulnerability to Clickjacking and Cross-Site Scripting (XSS) attacks.",
          remediation: "Implement recommended security headers in your web server configuration.", 
          technicalDetails: "Headers missing: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options.",
          references: [{ title: "OWASP Secure Headers", url: "https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html" }],
          status: "open",
          affectedComponents: ["Web Server Configuration"],
          discoveredAt: new Date().toISOString(), 
          endpointUrl: targetType === 'domain' ? `https://${targetValue}` : `${targetValue}:80` 
        }
      ];

      if (assessmentProfile !== "rapid") {
        results.push({ 
          id: "VULN-003", 
          title: "SQL Injection Vector", 
          name: "Blind SQL Injection in Login",
          severity: "critical", 
          exploitPotential: "confirmed", 
          category: "API Security", 
          owaspCategory: "A03:2021-Injection", 
          description: "A blind SQL injection vulnerability was detected in the login API parameter.", 
          impact: "Full database compromise, including user accounts and sensitive business data.",
          remediation: "Use parameterized queries or an ORM to handle database interactions.", 
          technicalDetails: "Injection point: /api/auth parameter 'username'. Payload: ' OR 1=1 --",
          references: [{ title: "OWASP SQL Injection", url: "https://owasp.org/www-community/attacks/SQL_Injection" }],
          status: "open",
          affectedComponents: ["Auth API"],
          discoveredAt: new Date().toISOString(), 
          endpointUrl: targetType === 'domain' ? `https://${targetValue}/api/auth` : `${targetValue}:8080/api/auth` 
        });
      }

      setTimeout(async () => {
        setScanInProgress(false);
        setHasPerformedScan(true);
        setScanResults(results);
        fireNotification("System scan sequence completed. Analysis ready.", "success", "scanFinish");
        
        // Fetch Gemini Insights
        try {
          const { getGeminiInsights } = await import('./lib/gemini');
          const insights = await getGeminiInsights(results);
          setAiInsights(insights);
          fireNotification("AI tactical insights synchronized.", "success", "aiInsights");
        } catch (err) {
          console.error("AI Insights failed:", err);
        }
      }, 500);
    }, 6000);
  };

  const handleAbortScan = () => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    if (scanTimeoutRef.current) clearTimeout(scanTimeoutRef.current);
    setScanInProgress(false);
    setScanProgress(0);
    speak(`stop scan ${targetValue}`);
    fireNotification("Neural scan terminated by operator.", "warn", "scanStop");
  };

  const handleGenerateReport = async (format: 'pdf' | 'html' | 'json' = 'html') => {
    if (!scanResults) return;
    
    speak(`Preparing tactical ${format.toUpperCase()} dossier.`);
    fireNotification(`Generating ${format.toUpperCase()} report...`, "info", "reportGenerated");

    if (format === 'json') {
      const content = JSON.stringify({ 
        report_id: `VULAXIS-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        target: targetValue, 
        profile: assessmentProfile,
        timestamp: new Date().toISOString(), 
        findings: scanResults 
      }, null, 2);
      const finalBlob = new Blob([content], { type: 'application/json' });
      const finalUrl = URL.createObjectURL(finalBlob);
      const link = document.createElement('a');
      link.href = finalUrl;
      link.download = `VULAXIS_REPORT_${targetValue.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.json`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(finalUrl);
    } else if (format === 'pdf') {
      try {
        const jsPDF = (await import('jspdf')).default;
        const html2canvas = (await import('html2canvas')).default;

        const reportElement = document.createElement('div');
        reportElement.style.padding = '40px';
        reportElement.style.background = '#020000';
        reportElement.style.color = 'white';
        reportElement.style.width = '800px';
        reportElement.style.fontFamily = 'Arial, sans-serif';
        
        reportElement.innerHTML = `
          <div style="border: 2px solid #ff0044; padding: 20px; border-radius: 20px;">
            <h1 style="color: #ff0044; font-size: 32px; margin-bottom: 10px;">VULAXIS TACTICAL DOSSIER</h1>
            <p style="color: #888; font-size: 12px;">CONFIDENTIAL // LEVEL ALPHA CLEARANCE</p>
            <hr style="border: 1px solid rgba(255,0,68,0.2); margin: 20px 0;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 40px;">
              <div><strong>TARGET VECTOR:</strong> ${targetValue}</div>
              <div><strong>PROFILE:</strong> ${assessmentProfile.toUpperCase()}</div>
              <div><strong>GEN_TIME:</strong> ${new Date().toLocaleString()}</div>
              <div><strong>STATUS:</strong> COMPLETED</div>
            </div>
            <h2 style="color: #ff0044; border-bottom: 1px solid #ff0044; padding-bottom: 10px;">EXECUTIVE SUMMARY</h2>
            <p>AI-powered assessment identified ${scanResults.length} vulnerabilities. Immediate remediation is required for critical findings.</p>
            <div style="margin-top: 40px;">
              <h2 style="color: #ff0044; border-bottom: 1px solid #ff0044; padding-bottom: 10px;">FINDINGS</h2>
              ${scanResults.map((r: any) => `
                <div style="margin-bottom: 20px; padding: 15px; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px;">
                  <div style="color: ${r.severity === 'critical' ? '#ff0044' : '#ffaa00'}; font-weight: bold;">[${r.severity.toUpperCase()}] ${r.title}</div>
                  <div style="font-size: 12px; color: #aaa; margin-top: 5px;">${r.description}</div>
                  <div style="font-size: 11px; color: #00ff66; margin-top: 5px;">REMEDIATION: ${r.remediation}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
        
        document.body.appendChild(reportElement);
        const canvas = await html2canvas(reportElement, { scale: 2, backgroundColor: '#020000' });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`VULAXIS_TACTICAL_REPORT_${targetValue.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
        document.body.removeChild(reportElement);
      } catch (err) {
        console.error("PDF Export Failed:", err);
        fireNotification("PDF generation failed. Neural link timeout.", "warn");
      }
    } else {
      // Fallback for HTML (simplified)
      const blob = new Blob([`<html><body style="background:#000;color:#fff"><h1>Report for ${targetValue}</h1></body></html>`], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `VULAXIS_REPORT_${targetValue.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.html`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    }

    speak(`Tactical intelligence dossier deployed.`);
    setShowReportFormats(false);
  };

  const getModulesList = () => {
    switch (assessmentProfile) {
      case "rapid": return [{ icon: Network, title: "Basic Port Scan", desc: "Evaluating top 100 ports.", mod: "01" }, { icon: Globe, title: "Web Scanning", desc: "Checking standard HTTP/HTTPS endpoints.", mod: "02" }, { icon: Lock, title: "SSL/TLS Check", desc: "Validating certificate integrity.", mod: "03" }, { icon: Target, title: "AI Basic Analysis", desc: "Initial heuristic evaluations.", mod: "04" }, { icon: ShieldAlert, title: "WAF Detection", desc: "Identifying perimeter firewalls.", mod: "05" }, { icon: Globe, title: "DNS Lookup", desc: "Standard DNS reconnaissance.", mod: "06" }];
      case "comprehensive": return [{ icon: Network, title: "Full Port Scan", desc: "Evaluating top 1000 ports.", mod: "01" }, { icon: Globe, title: "DNS Recon", desc: "Advanced DNS reconnaissance.", mod: "02" }, { icon: Server, title: "Tech Fingerprint", desc: "OS and service fingerprinting.", mod: "03" }, { icon: Activity, title: "Vuln Scan", desc: "Active vulnerability scanning.", mod: "04" }, { icon: Lock, title: "Auth Testing", desc: "Bruteforce and credential checks.", mod: "05" }, { icon: Globe, title: "Web Crawling", desc: "Deep application mapping.", mod: "06" }, { icon: Target, title: "AI Advanced", desc: "Deep heuristic evaluations.", mod: "07" }, { icon: ShieldAlert, title: "ML Threats", desc: "Machine learning threat detection.", mod: "08" }, { icon: ShieldAlert, title: "Adv. WAF", desc: "Advanced firewall evasion.", mod: "09" }, { icon: Globe, title: "DNS Recon+", desc: "Full zone transfers.", mod: "10" }, { icon: Server, title: "Banner Grab", desc: "Service banner extraction.", mod: "11" }, { icon: Server, title: "Cloud Hardening", desc: "Cloud perimeter analysis.", mod: "12" }];
      case "fullPenTest": return [{ icon: Network, title: "SQL Injection Testing", desc: "Deep database exploitation tests.", mod: "01" }, { icon: Terminal, title: "XSS Testing", desc: "Cross-site scripting vectors.", mod: "02" }, { icon: Activity, title: "Path Traversal", desc: "File inclusion & traversal.", mod: "03" }, { icon: Lock, title: "Business Logic", desc: "Workflow abuse testing.", mod: "04" }, { icon: Activity, title: "Real-time Updates", desc: "Live exploitation tracking.", mod: "05" }, { icon: Globe, title: "REST API", desc: "API endpoint fuzzing.", mod: "06" }, { icon: Target, title: "AI Enterprise", desc: "Enterprise-grade AI analysis.", mod: "07" }, { icon: Cpu, title: "Neural Network", desc: "Neural pattern matching.", mod: "08" }, { icon: Cpu, title: "Deep Learning", desc: "Deep learning vulnerability prediction.", mod: "09" }, { icon: Target, title: "AI Exploit Pred.", desc: "Predicting zero-day paths.", mod: "10" }, { icon: Globe, title: "WebSocket", desc: "WebSocket traffic analysis.", mod: "11" }, { icon: ShieldAlert, title: "Risk Assessment", desc: "Automated risk scoring.", mod: "12" }, { icon: ShieldAlert, title: "Adv. WAF/Firewall", desc: "Firewall bypass & routing.", mod: "13" }, { icon: Network, title: "Full Port Scan", desc: "All 65535 ports.", mod: "14" }, { icon: Globe, title: "Adv. DNS Recon", desc: "Full infrastructure mapping.", mod: "15" }, { icon: Server, title: "Banner Grabbing", desc: "Deep service extraction.", mod: "16" }, { icon: Server, title: "Cloud Hardening", desc: "Cloud posture evaluation.", mod: "17" }, { icon: ShieldAlert, title: "Infrastructure", desc: "Full infrastructure analysis.", mod: "18" }];
      default: return [];
    }
  };

  const modulesList = getModulesList();

  if (!isAuthenticated) {
    return <AuthOverlay onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <main id="main-app-container" style={{ width: '100%', minHeight: '100vh', overflowY: 'auto', overflowX: 'hidden', background: '#020000', fontFamily: '"Manrope", sans-serif' }}>
      <AnimatePresence mode="wait">
        {isInterceptionMode ? (
          <motion.div key="proxy-mode" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, zIndex: 2000000, background: '#020000', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 100 }}>
              <motion.button whileHover={{ scale: 1.05 }} onClick={() => setIsInterceptionMode(false)}
                className="glass-panel"
                style={{ border: '1px solid #ff0044', color: 'white', padding: '12px 30px', borderRadius: '100px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', background: 'rgba(255,0,68,0.1)', backdropFilter: 'blur(10px)' }}>
                ← EXIT INTERCEPTION HUB
              </motion.button>
            </div>
            <TacticalInterceptionHub scanResults={scanResults || []} />
          </motion.div>
        ) : (
          <motion.div key="main-mode" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&family=Manrope:wght@300;400;600;800&family=Space+Grotesk:wght@300;500;700;900&family=Outfit:wght@300;400;600;800;900&display=swap');
                
                :root {
                  --accent: #ff0044;
                  --accent-glow: rgba(255, 0, 68, 0.4);
                  --bg-dark: #020000;
                  --panel-bg: rgba(10, 0, 5, 0.7);
                  --panel-border: rgba(255, 0, 68, 0.2);
                  --text-primary: #ffffff;
                  --text-secondary: #94a3b8;
                }

                * {
                  box-sizing: border-box;
                }

                body {
                  margin: 0;
                  background: var(--bg-dark);
                  color: var(--text-primary);
                  font-family: 'Outfit', sans-serif;
                  overflow-x: hidden;
                  width: 100%;
                }

                ::-webkit-scrollbar { width: 6px; height: 0px; }
                ::-webkit-scrollbar-track { background: rgba(0,0,0,0.5); }
                ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 10px; }

                .custom-scrollbar::-webkit-scrollbar { display: block; width: 4px; height: 0px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 10px; }

                .glass-panel {
                  background: var(--panel-bg);
                  backdrop-filter: blur(24px);
                  -webkit-backdrop-filter: blur(24px);
                  border: 1px solid var(--panel-border);
                  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8);
                }

                .premium-border {
                  border: 1px solid rgba(255, 255, 255, 0.05);
                  background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
                }

                .glow-text {
                  text-shadow: 0 0 20px var(--accent-glow);
                }

                .nav-link {
                  position: relative;
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .nav-link::after {
                  content: '';
                  position: absolute;
                  bottom: -5px;
                  left: 50%;
                  width: 0;
                  height: 2px;
                  background: var(--accent);
                  transition: all 0.3s ease;
                  transform: translateX(-50%);
                  box-shadow: 0 0 10px var(--accent);
                }

                .nav-link:hover {
                  color: white !important;
                }

                .nav-link:hover::after {
                  width: 20px;
                }

                @keyframes pulse-ring {
                  0% { transform: scale(0.95); opacity: 0.5; }
                  50% { transform: scale(1.05); opacity: 0.8; }
                  100% { transform: scale(0.95); opacity: 0.5; }
                }

                .animate-pulse-ring {
                  animation: pulse-ring 3s infinite ease-in-out;
                }

                .hero-title {
                  font-family: 'Space Grotesk', sans-serif;
                  font-weight: 900;
                  background: linear-gradient(to bottom, #ffffff 30%, rgba(255,255,255,0.5) 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }

                .stat-card {
                  background: rgba(255,255,255,0.02);
                  border: 1px solid rgba(255,255,255,0.05);
                  padding: 15px 25px;
                  border-radius: 16px;
                  transition: all 0.3s ease;
                }

                .stat-card:hover {
                  background: rgba(255,0,68,0.05);
                  border-color: rgba(255,0,68,0.3);
                  transform: translateY(-5px);
                }

                .footer-link {
                  cursor: pointer;
                  transition: all 0.3s;
                  text-decoration: none;
                  opacity: 0.7;
                }
                
                .footer-link:hover {
                  color: #ff0044;
                  opacity: 1;
                  padding-left: 5px;
                }
              `}
            </style>

            
            {/* OVERLAYS & MODALS */}
            <AnimatePresence>
              {isProfileMenuOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  style={{ position: 'fixed', inset: 0, zIndex: 100000, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)', display: 'flex', justifyContent: 'flex-end', padding: '100px 50px' }}
                  onClick={() => setIsProfileMenuOpen(false)}>
                  <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 100, opacity: 0 }}
                    style={{ background: '#0a0005', border: '1px solid #ff0044', borderRadius: '30px', width: '350px', padding: '40px', boxShadow: '0 0 50px rgba(255,0,68,0.2)' }}
                    onClick={(e) => e.stopPropagation()}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
                      <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,0,68,0.1)', border: '1px solid #ff0044', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <User size={30} color="#ff0044" />
                      </div>
                      <div>
                        <div style={{ color: 'white', fontWeight: '900', fontSize: '20px' }}>Operator_V4</div>
                        <div style={{ color: '#ff0044', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px' }}>LEVEL_ALPHA_CLEARANCE</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      <button onClick={() => { setIsProfileMenuOpen(false); setActiveOverlay('settings'); }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', color: 'white', padding: '15px', borderRadius: '15px', textAlign: 'left', fontWeight: 'bold', cursor: 'pointer' }}>SYSTEM_SETTINGS</button>
                      <button onClick={() => { setIsProfileMenuOpen(false); setActiveOverlay('reports'); }} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', color: 'white', padding: '15px', borderRadius: '15px', textAlign: 'left', fontWeight: 'bold', cursor: 'pointer' }}>TACTICAL_REPORTS</button>
                      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '10px 0' }} />
                      <button onClick={handleLogout} style={{ background: 'rgba(255,0,68,0.1)', border: '1px solid #ff0044', color: '#ff0044', padding: '15px', borderRadius: '15px', fontWeight: '900', cursor: 'pointer' }}>SECURE_DISCONNECT</button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isToolsMenuOpen && (
                <ToolsMegaMenu 
                  isOpen={isToolsMenuOpen} 
                  onClose={() => setIsToolsMenuOpen(false)} 
                  onExploreAll={() => {
                    setIsToolsMenuOpen(false);
                    setActiveOverlay('tools-explorer');
                  }} 
                  onSelectTool={(tool) => {
                    setIsToolsMenuOpen(false);
                    document.getElementById('dashboard-section')?.scrollIntoView({ behavior: 'smooth' });
                    fireNotification(`Tool ${tool} initialized for deployment.`, "info", "scanStart");
                  }}
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {activeOverlay === 'tools-explorer' && (
                <ToolsExplorerOverlay onClose={() => setActiveOverlay(null)} />
              )}
            </AnimatePresence>

            {/* NAVIGATION */}
            <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', background: 'linear-gradient(to bottom, rgba(2,0,0,0.9) 0%, transparent 100%)', pointerEvents: 'none' }}>
              <div style={{ flex: 1, pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldAlert color="#ff0044" size={28} />
                  <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '24px', fontWeight: '900', color: 'white', letterSpacing: '-1px' }}>VULAXIS<span style={{ color: '#ff0044' }}>.</span></span>
                </div>
              </div>

              <div id="nav-container" className="glass-panel" style={{ pointerEvents: 'auto', display: 'flex', gap: '30px', alignItems: 'center', padding: '12px 35px', borderRadius: '40px', position: 'relative' }}>
                <LanguageSwitcher />
                <a href="#hero-section" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ color: '#ccc', textDecoration: 'none', fontFamily: '"Manrope", sans-serif', fontSize: '13px', fontWeight: '700' }}>Hero</a>
                <div onClick={() => setIsToolsMenuOpen(!isToolsMenuOpen)} style={{ cursor: 'pointer', position: 'relative' }}>
                  <span style={{ color: isToolsMenuOpen ? '#ff0044' : '#ccc', fontFamily: '"Manrope", sans-serif', fontSize: '13px', fontWeight: '700' }} className="nav-link">Tools</span>
                </div>
                <a href="#dashboard-section" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('dashboard-section')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ color: '#ccc', textDecoration: 'none', fontFamily: '"Manrope", sans-serif', fontSize: '13px', fontWeight: '700' }}>Dashboard</a>
                <a href="#interception-section" className="nav-link" onClick={(e) => { e.preventDefault(); setIsInterceptionMode(true); }} style={{ color: '#ccc', textDecoration: 'none', fontFamily: '"Manrope", sans-serif', fontSize: '13px', fontWeight: '700' }}>Interception</a>
                <a href="#support-section" className="nav-link" onClick={(e) => { e.preventDefault(); document.getElementById('support-section')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ color: '#ccc', textDecoration: 'none', fontFamily: '"Manrope", sans-serif', fontSize: '13px', fontWeight: '700' }}>Support</a>
              </div>

              <div style={{ flex: 1, pointerEvents: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0, 255, 100, 0.05)', border: '1px solid rgba(0,255,100,0.2)', padding: '8px 16px', borderRadius: '30px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ff66', boxShadow: '0 0 12px #00ff66' }} />
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: '#00ff66', fontWeight: 'bold' }}>LINKED</span>
                </div>
                <motion.div whileHover={{ scale: 1.1 }} onClick={() => setIsProfileMenuOpen(true)}
                  style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,0,68,0.1)', border: '1px solid rgba(255,0,68,0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                  <User size={18} color="#ff0044" />
                </motion.div>
              </div>
            </nav>

            {/* PAGE 1: CINEMATIC HERO */}
            <section id="hero-section" style={{ height: '100vh', width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 8%', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.6 }}>
                <Canvas camera={{ position: [0, 0, 20] }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={2} color="#ff0044" />
                  <GlobalNetwork />
                  <OrganicRedCore />
                  <DiagnosticNodes />
                </Canvas>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, #020000 90%)' }} />
              </div>
              
              <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '1200px' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(255,0,68,0.1)', border: '1px solid rgba(255,0,68,0.3)', padding: '10px 24px', borderRadius: '50px', marginBottom: '30px', backdropFilter: 'blur(10px)' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff0044', boxShadow: '0 0 15px #ff0044' }} className="animate-pulse" />
                    <span style={{ color: '#ff0044', fontSize: '11px', fontWeight: '900', letterSpacing: '3px', fontFamily: '"JetBrains Mono", monospace' }}>NEURAL_SCANNER_v4.2_ONLINE</span>
                  </div>
                  <h1 className="hero-title" style={{ fontSize: 'clamp(64px, 12vw, 160px)', lineHeight: '0.8', letterSpacing: '-8px', marginBottom: '40px' }}>
                    VULAXIS<span style={{ color: '#ff0044' }}>.</span><br />
                    <span style={{ color: '#ff0044', WebkitTextFillColor: '#ff0044' }}>OFFENSIVE</span> AI
                  </h1>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '20px', maxWidth: '700px', margin: '0 auto 60px auto', lineHeight: '1.6', fontWeight: 400 }}>
                    Enterprise-grade automated vulnerability assessment engine. Harnessing neural prediction to secure high-stakes infrastructure in real-time.
                  </p>
                  
                  <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '80px' }}>
                    <motion.button 
                      whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(255,0,68,0.5)' }} 
                      whileTap={{ scale: 0.98 }}
                      onClick={() => document.getElementById('dashboard-section')?.scrollIntoView({ behavior: 'smooth' })}
                      style={{ background: '#ff0044', color: 'white', border: 'none', padding: '24px 60px', borderRadius: '16px', fontWeight: '900', fontSize: '15px', cursor: 'pointer', letterSpacing: '1px', boxShadow: '0 15px 35px rgba(255,0,68,0.3)', display: 'flex', alignItems: 'center', gap: '15px' }}
                    >
                      {t.mission} <ArrowRight size={20} />
                    </motion.button>
                  </div>

                  {/* HERO STATS BAR */}
                  <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', opacity: 0.8 }}>
                    {[
                      { label: 'THREAT_VECTORS', value: '1.2M+' },
                      { label: 'AI_CONFIDENCE', value: '99.8%' },
                      { label: 'GLOBAL_NODE_ID', value: 'X-729' }
                    ].map((stat, i) => (
                      <div key={i} className="stat-card">
                        <div style={{ fontSize: '10px', color: '#ff0044', fontWeight: '900', letterSpacing: '2px', marginBottom: '5px', fontFamily: '"JetBrains Mono", monospace' }}>{stat.label}</div>
                        <div style={{ fontSize: '24px', fontWeight: '900', color: 'white' }}>{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }}>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '10px', color: '#ff0044', fontWeight: 'bold', letterSpacing: '4px' }}>ENGAGE SYSTEM</span>
                  <ChevronDown color="white" size={24} />
                </motion.div>
              </div>
            </section>

            {/* PAGE 2: TOOLS MODULES EXPLORER */}
            <section id="tools-section" style={{ minHeight: '100vh', width: '100%', position: 'relative', background: 'transparent', padding: '120px 8%', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: '#020000' }} />
              <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.2 }}>
                 <Canvas camera={{ position: [0, 0, 15] }}>
                    <ambientLight intensity={0.4} />
                    <GlobalNetwork />
                    <OrganicRedCore />
                    <Sparkles count={400} scale={20} size={1.5} speed={0.4} color="#ff0044" />
                 </Canvas>
              </div>
              
              <div style={{ position: 'relative', zIndex: 10, marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '48px', fontWeight: '900', color: 'white', marginBottom: '15px' }}>
                    {t.tools.split(' ')[0]} <span style={{ color: '#ff0044' }}>{t.tools.split(' ')[1]}</span>
                  </h2>
                  <div style={{ width: '60px', height: '4px', background: '#ff0044' }} />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveOverlay('tools-explorer')}
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '12px 25px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  EXPLORE ALL 50+ TOOLS →
                </motion.button>
              </div>

              <div style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                {modulesList.map((item, i) => (
                  <CinematicCard key={i} item={item} index={i} isActive={false} 
                    onClick={() => {
                      document.getElementById('dashboard-section')?.scrollIntoView({ behavior: 'smooth' });
                      fireNotification(`Deploying ${item.title} to tactical interface...`, "info", "scanStart");
                    }} 
                  />
                ))}
              </div>
            </section>

            {/* PAGE 3: COMMAND CENTER (DASHBOARD) */}
            <section id="dashboard-section" style={{ minHeight: '100vh', width: '100%', position: 'relative', background: 'transparent', padding: '120px 5% 80px 5%', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: '#020000' }} />
              <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.15 }}>
                <Canvas camera={{ position: [0, 0, 15] }}>
                  <ambientLight intensity={0.4} />
                  <GlobalNetwork />
                  <OrganicRedCore />
                </Canvas>
              </div>

              <div style={{ position: 'relative', zIndex: 10, marginBottom: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                    <div style={{ width: '40px', height: '2px', background: '#ff0044' }} />
                    <span style={{ color: '#ff0044', fontSize: '12px', fontWeight: '900', letterSpacing: '4px', fontFamily: '"JetBrains Mono", monospace' }}>TACTICAL_OPERATIONS_CENTER</span>
                  </div>
                  <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '64px', fontWeight: '900', color: 'white', margin: 0, letterSpacing: '-3px', lineHeight: 1 }}>
                    COMMAND <span style={{ color: '#ff0044' }}>CENTER</span>
                  </h2>
                </div>
                
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div className="glass-panel" style={{ padding: '15px 30px', borderRadius: '16px', display: 'flex', gap: '40px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '10px', color: '#ff0044', fontWeight: '900', letterSpacing: '2px', marginBottom: '4px' }}>LATENCY</div>
                      <div style={{ fontSize: '20px', fontWeight: '900', color: 'white' }}>12ms</div>
                    </div>
                    <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '10px', color: '#ff0044', fontWeight: '900', letterSpacing: '2px', marginBottom: '4px' }}>STATUS</div>
                      <div style={{ fontSize: '20px', fontWeight: '900', color: '#00ff66' }}>ACTIVE</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel" style={{ position: 'relative', zIndex: 10, borderRadius: '32px', padding: '0', display: 'grid', gridTemplateColumns: '480px 1fr', gap: '0', height: '850px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                {/* LEFT: TARGET SPECIFICATION */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '50px 40px', height: '100%', overflowY: 'auto', borderRight: '1px solid rgba(255,255,255,0.05)' }} className="custom-scrollbar">
                  <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ fontSize: '11px', color: '#ff0044', fontWeight: '900', letterSpacing: '3px', marginBottom: '20px', fontFamily: '"JetBrains Mono", monospace' }}>TARGET_VECTORS</h3>
                    <TargetSpecificationPanel 
                      targetType={targetType} 
                      setTargetType={setTargetType} 
                      targetValue={targetValue} 
                      setTargetValue={setTargetValue} 
                      assessmentProfile={assessmentProfile} 
                      setAssessmentProfile={setAssessmentProfile}
                      onScanInitiate={scanInProgress ? handleAbortScan : handleInitiateScan}
                      scanButtonText={scanInProgress ? "ABORT_MISSION" : t.scan}
                    />
                  </div>
                  
                  {/* QUICK ACTIONS / SYSTEM INFO */}
                  <div style={{ marginTop: '40px', padding: '30px', borderRadius: '20px', background: 'rgba(255,0,68,0.03)', border: '1px solid rgba(255,0,68,0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                      <Brain size={18} color="#ff0044" />
                      <span style={{ fontSize: '12px', fontWeight: '800', color: 'white' }}>AI CO-PILOT ACTIVE</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#888', lineHeight: '1.6' }}>
                      Currently monitoring target vectors for anomalous patterns and zero-day exploitation paths. System integrity is 99.9%.
                    </p>
                  </div>
                </div>

                {/* RIGHT: VULNERABILITY DASHBOARD */}
                <div style={{ height: '100%', overflowY: 'auto', padding: '40px' }} className="custom-scrollbar">
                  <VulnerabilityDashboard 
                    vulnerabilities={scanResults} 
                    scanInProgress={scanInProgress} 
                    scanProgress={scanProgress}
                    onGenerateReport={handleGenerateReport}
                  />
                </div>
              </div>
            </section>

            {/* PAGE 5: TACTICAL INTERCEPTION HUB (FULL SECTION) */}
            <section id="interception-section" style={{ minHeight: '100vh', width: '100%', position: 'relative', background: '#020000', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.1 }}>
                <Canvas camera={{ position: [0, 0, 20] }}>
                   <GlobalNetwork />
                   <DiagnosticNodes />
                </Canvas>
              </div>
              <div style={{ height: '100vh', paddingTop: '100px' }}>
                <TacticalInterceptionHub scanResults={scanResults || []} />
              </div>
            </section>

            {/* PAGE 5: SUPPORT HUB */}
            <section id="support-section" style={{ minHeight: '100vh', width: '100%', background: 'transparent', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: '#020000' }} />
              <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.1 }}>
                 <Canvas camera={{ position: [0, 0, 15] }}>
                    <OrganicRedCore />
                 </Canvas>
              </div>
              <ContactSupportSection />
            </section>

            {/* FOOTER (LAST PAGE) */}
            <footer style={{ padding: '120px 5% 80px 5%', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(to bottom, #000 0%, #050002 100%)', position: 'relative', zIndex: 10 }}>
              <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr repeat(4, 1fr)', gap: '80px', marginBottom: '100px' }}>
                
                {/* BRAND SECTION */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ position: 'relative' }}>
                      <ShieldAlert color="#ff0044" size={42} />
                      <motion.div animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3 }} style={{ position: 'absolute', inset: -10, border: '1px solid #ff0044', borderRadius: '50%', filter: 'blur(5px)' }} />
                    </div>
                    <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '36px', fontWeight: '900', color: 'white', letterSpacing: '-2px' }}>VULAXIS<span style={{ color: '#ff0044' }}>.</span></span>
                  </div>
                  
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '10px', color: '#ff0044', fontWeight: '900', letterSpacing: '4px', marginBottom: '20px', fontFamily: '"JetBrains Mono", monospace' }}>[ CORE_ARCHITECTS ]</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#666', fontSize: '13px' }}>Lead Founder</span>
                        <span style={{ color: 'white', fontSize: '13px', fontWeight: '800' }}>Harshil panchal</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#666', fontSize: '13px' }}>Co-Founder</span>
                        <span style={{ color: 'white', fontSize: '13px', fontWeight: '800' }}>Mihir panchal</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#666', fontSize: '13px' }}>Co-Founder</span>
                        <span style={{ color: 'white', fontSize: '13px', fontWeight: '800' }}>Gaurav devnani</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '15px' }}>
                    {[
                      { icon: Github, url: 'https://github.com/vulaxis' },
                      { icon: Linkedin, url: 'https://linkedin.com/company/vulaxis' },
                      { icon: Twitter, url: 'https://twitter.com/vulaxis' }
                    ].map((social, i) => (
                      <motion.a key={i} href={social.url} target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, background: '#ff0044', borderColor: '#ff0044' }} style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                        <social.icon size={20} color="white" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* LINKS SECTIONS */}
                {[
                  { title: 'ABOUT', links: ['The Mission', 'Elite Team', 'Research Lab', 'Vulnerability Labs', 'Security Blog', 'Careers'], keys: ['about', 'team', 'research', 'labs', 'blog', 'careers'] },
                  { title: 'SERVICES', links: ['Web VAPT', 'Cloud Audit', 'Mobile Audit', 'IoT Security', 'Red Teaming', 'Compliance'], keys: ['web-vapt', 'cloud-audit', 'mobile-audit', 'iot-security', 'red-teaming', 'compliance'] },
                  { title: 'ACCOUNT', links: ['Billing', 'Subscription', 'Usage Analytics', 'Team Management', 'API Access', 'Settings'], keys: ['billing', 'pricing', 'usage', 'team-mgmt', 'api-keys', 'settings'] },
                  { title: 'RESOURCES', links: ['Vulnerabilities & Exploits', 'System Docs', 'CVE Research', 'Sample Reports', 'Bug Bounty'], keys: ['vulnerabilities', 'docs', 'threat-intel', 'reports', 'bug-bounty'] }
                ].map((section, idx) => (
                  <div key={idx}>
                    <h4 style={{ color: '#ff0044', fontSize: '11px', fontWeight: '900', marginBottom: '35px', letterSpacing: '3px', fontFamily: '"JetBrains Mono", monospace' }}>[ {section.title} ]</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
                      {section.links.map((link, i) => (
                        <li key={i} onClick={() => {
                          if (link === 'Web VAPT') document.getElementById('dashboard-section')?.scrollIntoView({ behavior: 'smooth' });
                          else if (link === 'The Mission') setActiveOverlay('about');
                          else setActiveOverlay(section.keys[i]);
                        }} className="footer-link" style={{ color: '#999', fontSize: '14px', fontWeight: '500', transition: '0.3s' }}>{link}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#444', fontSize: '11px', letterSpacing: '1.5px', fontFamily: '"JetBrains Mono", monospace' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff0044' }} />
                  PROPRIETARY INTELLIGENCE OF VULAXIS THREAT RESEARCH // © 2026 // LEVEL ALPHA CLEARANCE
                </div>
                <div style={{ display: 'flex', gap: '40px' }}>
                  {['PRIVACY_POLICY', 'TERMS_OF_ENGAGEMENT', 'RESEARCH_DISCLOSURE'].map((item, i) => (
                    <motion.span key={i} whileHover={{ color: '#ff0044' }} style={{ cursor: 'pointer', transition: '0.3s' }} onClick={() => setActiveOverlay(item.replace(/_/g, ' '))}>{item}</motion.span>
                  ))}
                </div>
              </div>
            </footer>

            {/* TOAST SYSTEM */}
            <div style={{ position: 'fixed', top: '100px', right: '30px', zIndex: 100000, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <AnimatePresence>
                {toasts.map((toast) => (
                  <motion.div key={toast.id} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}
                    style={{ background: 'rgba(10, 0, 5, 0.9)', backdropFilter: 'blur(10px)', border: `1px solid ${toast.type === 'success' ? '#00ff66' : '#ff0044'}`, borderRadius: '12px', padding: '16px 24px', color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                    {toast.type === 'success' ? <CheckCircle2 size={18} color="#00ff66" /> : <AlertCircle size={18} color="#ff0044" />}
                    {toast.message}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* SYSTEM OVERLAY (HANDLES ALL FOOTER & NAV MODALS) */}
            <AnimatePresence>
              {activeOverlay && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="custom-scrollbar"
                  style={{ position: 'fixed', inset: 0, zIndex: 200000, background: '#050005', display: 'flex', flexDirection: 'column', overflowY: 'auto', overflowX: 'hidden' }}>
                    
                    {/* OVERLAY 3D BACKGROUND (Cinematic) */}
                    <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.15, pointerEvents: 'none' }}>
                      <Canvas camera={{ position: [0, 0, 15] }}>
                        <ambientLight intensity={0.5} />
                        <GlobalNetwork />
                      </Canvas>
                    </div>

                    {/* TOP NAVIGATION BAR FOR PAGES */}
                    <div style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(5,0,5,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,0,68,0.2)', padding: '20px 5%' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ background: '#ff0044', padding: '10px', borderRadius: '12px', boxShadow: '0 0 20px rgba(255,0,68,0.4)' }}>
                               <ShieldAlert size={24} color="white" />
                            </div>
                            <div>
                               <div style={{ color: 'white', fontWeight: '900', fontSize: '20px', letterSpacing: '1px' }}>VULAXIS</div>
                               <div style={{ color: '#ff0044', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px' }}>OFFENSIVE_INTEL_SUITE</div>
                            </div>
                         </div>
                         <motion.button whileHover={{ scale: 1.1, rotate: 90 }} onClick={() => setActiveOverlay(null)}
                           style={{ background: 'rgba(255,0,68,0.1)', border: '1px solid rgba(255,0,68,0.3)', color: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                           <X size={20} />
                         </motion.button>
                      </div>
                    </div>

                    {/* PAGE CONTENT CONTAINER */}
                    <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
                       <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '100px 5% 150px 5%' }}>

                      {/* SCANLINE OVERLAY */}
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', zIndex: 5, backgroundSize: '100% 4px, 3px 100%', pointerEvents: 'none', opacity: 0.1 }} />

                      {/* FIXED HEADER */}
                      <div style={{ marginBottom: '60px' }}>
                        <div style={{ color: '#ff0044', fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', fontWeight: '900', letterSpacing: '4px', marginBottom: '20px' }}>[ MODULE: {activeOverlay.toUpperCase()} ]</div>
                        <h2 style={{ color: 'white', fontSize: '72px', fontWeight: '900', margin: 0, fontFamily: '"Space Grotesk", sans-serif', letterSpacing: '-3px', textTransform: 'uppercase' }}>
                            {activeOverlay === 'team' ? 'ELITE_OPERATIONS' : 
                             activeOverlay === 'billing' ? 'TACTICAL_BILLING' : 
                             activeOverlay === 'about' ? 'THE_CORE_MISSION' : 
                             activeOverlay.replace(/-/g, '_')}
                        </h2>
                      </div>

                                    {activeOverlay === 'about' ? (
                        <div style={{ color: 'white' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '80px' }}>
                            <p style={{ color: 'white', fontSize: '24px', lineHeight: '1.5', fontWeight: '600' }}>
                              At <span style={{ color: '#ff0044' }}>Vulaxis</span>, our mission is to eliminate the friction between discovery and validation in offensive security.
                            </p>
                            <p style={{ color: '#888', fontSize: '18px', lineHeight: '1.8' }}>
                              We build enterprise-grade security testing infrastructure designed to provide security teams with <span style={{ color: '#ff0044' }}>undeniable proof of risk</span>.
                            </p>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '100px' }}>
                            {[
                              { title: "Undeniable Proof", desc: "Our modules safely extract actionable evidence—such as PoC execution and sanitized request/response logs." },
                              { title: "Chained Workflows", desc: "Our architecture mirrors real-world attack techniques, transitioning seamlessly from mapping to exploitation." },
                              { title: "Human-in-the-Loop", desc: "Our infrastructure handles the heavy lifting, giving your team time to focus on complex manual testing." }
                            ].map((pillar, i) => (
                              <div key={i} style={{ padding: '40px', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(255,0,68,0.2)' }}>
                                <h3 style={{ color: 'white', fontSize: '20px', fontWeight: '800', marginBottom: '15px' }}>{pillar.title}</h3>
                                <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6' }}>{pillar.desc}</p>
                              </div>
                            ))}
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'start' }}>
                            <div>
                              <h3 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '40px' }}>DATA <span style={{ color: '#ff0044' }}>SECURITY & TRUST</span></h3>
                              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                                {[
                                  { title: "Encryption", text: "256-bit SSL/TLS in transit and AES-256 at rest." },
                                  { title: "Isolation", text: "Secure, ephemeral container instances for execution." },
                                  { title: "Ownership", text: "Your targets and records belong entirely to you." },
                                  { title: "Retention", text: "Automated lifecycle policies and instant purge rights." }
                                ].map((item, i) => (
                                  <div key={i}>
                                    <div style={{ color: 'white', fontWeight: '800', marginBottom: '8px', fontSize: '14px' }}>{item.title.toUpperCase()}</div>
                                    <p style={{ color: '#666', fontSize: '13px' }}>{item.text}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div style={{ padding: '40px', background: 'rgba(255,0,68,0.03)', borderRadius: '32px', border: '1px solid rgba(255,0,68,0.2)' }}>
                              <h3 style={{ color: '#ff0044', fontSize: '20px', fontWeight: '900', marginBottom: '30px' }}>SAFETY BOUNDARIES</h3>
                              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <li><strong style={{ color: 'white' }}>Authorization:</strong> Strictly licensed for authorized targets only.</li>
                                <li><strong style={{ color: 'white' }}>Non-Destructive:</strong> Engine throttling prevents resource exhaustion.</li>
                                <li><strong style={{ color: 'white' }}>Transparent:</strong> Full operator control over aggressiveness.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : activeOverlay === 'vulnerabilities' ? (
                        <div style={{ display: 'grid', gap: '50px' }}>
                           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                              <div>
                                 <h3 style={{ color: 'white', fontSize: '36px', fontWeight: '900', marginBottom: '10px' }}>VULNERABILITY_&_EXPLOIT_DATABASE</h3>
                                 <p style={{ color: '#888', fontSize: '16px' }}>Exploring 12,482 synchronized vulnerability nodes across the global threat landscape.</p>
                              </div>
                              <div style={{ display: 'flex', gap: '15px' }}>
                                 <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 25px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Search size={16} color="#666" />
                                    <input type="text" placeholder="SEARCH_DATABASE..." style={{ background: 'none', border: 'none', color: 'white', outline: 'none', fontSize: '13px', width: '250px' }} />
                                 </div>
                                 <button style={{ background: '#ff0044', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '12px', fontWeight: 'bold', fontSize: '13px' }}>FILTER_BY_SEVERITY</button>
                              </div>
                           </div>

                           <div className="glass-panel" style={{ overflow: 'hidden', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                 <thead style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <tr>
                                       {['VULNERABILITY', 'AFFECTED_TARGET', 'PUBLISHED', 'SEVERITY', 'SCORE', 'STATUS'].map(head => (
                                          <th key={head} style={{ padding: '20px 30px', fontSize: '10px', color: '#ff0044', fontWeight: '900', letterSpacing: '2px' }}>{head}</th>
                                       ))}
                                    </tr>
                                 </thead>
                                 <tbody>
                                    {[
                                      { name: "Fortinet FortiOS: Information Disclosure", target: "Network/Appliance", date: "MAY 13, 2026", sev: "CRITICAL", score: "9.8", epss: "0.95", status: "VERIFIED" },
                                      { name: "WordPress Core: Authenticated SQL Injection", target: "Web/CMS", date: "MAY 12, 2026", sev: "HIGH", score: "8.5", epss: "0.42", status: "VERIFIED" },
                                      { name: "Apache ActiveMQ RCE via Jolokia", target: "Middleware", date: "MAY 10, 2026", sev: "CRITICAL", score: "10.0", epss: "0.99", status: "ACTIVE" },
                                      { name: "GitLab: Account Takeover via Auth Bypass", target: "DevOps/Web", date: "MAY 08, 2026", sev: "HIGH", score: "8.9", epss: "0.71", status: "MITIGATED" },
                                      { name: "Cisco IOS-XE: Privilege Escalation", target: "Infrastructure", date: "MAY 05, 2026", sev: "CRITICAL", score: "9.9", epss: "0.88", status: "VERIFIED" },
                                      { name: "Microsoft Exchange: Remote Proxy Oracle", target: "Enterprise/Mail", date: "MAY 02, 2026", sev: "HIGH", score: "8.2", epss: "0.35", status: "VERIFIED" }
                                    ].map((row, i) => (
                                      <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', transition: '0.2s' }}>
                                         <td style={{ padding: '25px 30px' }}>
                                            <div style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>{row.name}</div>
                                            <div style={{ color: '#444', fontSize: '11px', marginTop: '4px' }}>CVE-2026-{8000 + i}</div>
                                         </td>
                                         <td style={{ padding: '25px 30px', color: '#888', fontSize: '13px' }}>{row.target}</td>
                                         <td style={{ padding: '25px 30px', color: '#666', fontSize: '12px' }}>{row.date}</td>
                                         <td style={{ padding: '25px 30px' }}>
                                            <div style={{ display: 'flex', gap: '8px' }}>
                                               <span style={{ color: row.sev === 'CRITICAL' ? '#ff0044' : '#ffaa00', fontWeight: '900', fontSize: '11px' }}>{row.sev}</span>
                                               <div style={{ padding: '2px 8px', background: 'rgba(255,0,68,0.1)', border: '1px solid #ff0044', borderRadius: '4px', fontSize: '9px', color: 'white', fontWeight: 'bold' }}>CVSS:{row.score}</div>
                                            </div>
                                         </td>
                                         <td style={{ padding: '25px 30px' }}>
                                            <div style={{ padding: '2px 8px', background: 'rgba(0,255,100,0.05)', border: '1px solid #00ff66', borderRadius: '4px', fontSize: '9px', color: '#00ff66', fontWeight: 'bold' }}>EPSS:{row.epss}</div>
                                         </td>
                                         <td style={{ padding: '25px 30px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                               <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: row.status === 'ACTIVE' ? '#ff0044' : '#00ff66' }} />
                                               <span style={{ color: '#ccc', fontSize: '10px', fontWeight: 'bold' }}>{row.status}</span>
                                            </div>
                                         </td>
                                      </tr>
                                    ))}
                                 </tbody>
                              </table>
                           </div>

                           <div style={{ marginTop: '40px' }}>
                              <h3 style={{ color: 'white', fontSize: '28px', fontWeight: '900', marginBottom: '30px' }}>OWASP_TOP_10_EVOLUTION</h3>
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                                 {[
                                   { year: "2021", top: "A01:2021-Broken Access Control", exploit: "Attacker navigates to hidden admin URLs or manipulates ID parameters to access sensitive files.", prevention: "Implement strict least-privilege policies and robust session management." },
                                   { year: "2021", top: "A02:2021-Cryptographic Failures", exploit: "Exploiting weak SSL protocols or hardcoded API keys to decrypt sensitive PII data.", prevention: "Always encrypt data at rest and use modern TLS 1.3 for data in transit." },
                                   { year: "2021", top: "A03:2021-Injection (SQL/NoSQL)", exploit: "Injecting malicious SQL commands into input fields to bypass authentication or dump databases.", prevention: "Use parameterized queries and strictly validate all user input." }
                                 ].map((item, i) => (
                                   <div key={i} style={{ padding: '40px', background: 'rgba(255,255,255,0.02)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                      <div style={{ color: '#ff0044', fontSize: '10px', fontWeight: '900', marginBottom: '10px' }}>{item.year}_RANK_0{i+1}</div>
                                      <h4 style={{ color: 'white', fontSize: '20px', fontWeight: '900', marginBottom: '15px' }}>{item.top}</h4>
                                      <div style={{ marginBottom: '20px' }}>
                                         <div style={{ color: '#ff0044', fontSize: '10px', fontWeight: 'bold', marginBottom: '5px' }}>HOW_TO_EXPLOIT:</div>
                                         <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6' }}>{item.exploit}</p>
                                      </div>
                                      <div style={{ padding: '20px', background: 'rgba(0,255,100,0.05)', borderRadius: '15px', border: '1px solid rgba(0,255,100,0.2)' }}>
                                         <div style={{ color: '#00ff66', fontSize: '10px', fontWeight: 'bold', marginBottom: '5px' }}>TACTICAL_REMEDIATION:</div>
                                         <p style={{ color: '#00ff66', fontSize: '13px', opacity: 0.8 }}>{item.prevention}</p>
                                      </div>
                                   </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                      ) : activeOverlay === 'tools-explorer' ? (
                         <ToolsExplorerOverlay onClose={() => setActiveOverlay(null)} />
                      ) : activeOverlay === 'reports' ? (
                         <div style={{ padding: '20px' }}>
                           <VulnerabilityDashboard 
                             vulnerabilities={scanResults} 
                             scanInProgress={scanInProgress}
                             scanProgress={scanProgress}
                             hasPerformedScan={hasPerformedScan || !scanResults}
                           />
                         </div>
                      ) : activeOverlay === 'blog' ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px' }}>
                           {[
                             { title: "Defeating Modern WAFs with Neural Payloads", date: "MAY 13, 2026", read: "14 min", category: "OFFENSIVE", desc: "Technical breakdown of how AI-generated payloads bypass signature-based detection systems." },
                             { title: "Securing the Hybrid Cloud Perimeter", date: "MAY 10, 2026", read: "9 min", category: "CLOUD", desc: "A guide to implementing zero-trust architecture across distributed multi-cloud environments." },
                             { title: "Analyzing 2026's Top 10 Critical Vulnerabilities", date: "MAY 05, 2026", read: "12 min", category: "RESEARCH", desc: "Our annual report on the most exploited vectors in the enterprise landscape." },
                             { title: "Advanced XSS Vectors in Single-Page Apps", date: "APR 28, 2026", read: "8 min", category: "WEB", desc: "Exploring obscure DOM-based XSS paths in modern React and Next.js applications." }
                           ].map((post, i) => (
                             <div key={i} className="glass-panel" style={{ padding: '30px', borderRadius: '24px', transition: 'all 0.3s ease', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.05)' }}
                               onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ff0044'; e.currentTarget.style.transform = 'translateY(-10px)'; }}
                               onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                   <span style={{ color: '#ff0044', fontSize: '10px', fontWeight: '900', letterSpacing: '2px' }}>{post.category}</span>
                                   <span style={{ color: '#666', fontSize: '10px', fontWeight: 'bold' }}>{post.date}</span>
                                </div>
                                <h4 style={{ color: 'white', fontSize: '20px', fontWeight: '900', marginBottom: '15px', lineHeight: '1.3' }}>{post.title}</h4>
                                <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px' }}>{post.desc}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontSize: '12px', fontWeight: 'bold' }}>
                                   READ_MORE <ArrowRight size={14} color="#ff0044" />
                                   <span style={{ marginLeft: 'auto', color: '#444' }}>{post.read}</span>
                                </div>
                             </div>
                           ))}
                        </div>
                      ) : activeOverlay === 'research' ? (
                        <div style={{ display: 'grid', gap: '40px' }}>
                           <div style={{ background: 'linear-gradient(135deg, rgba(255,0,68,0.1) 0%, transparent 100%)', padding: '50px', borderRadius: '30px', border: '1px solid rgba(255,0,68,0.2)' }}>
                              <h3 style={{ color: 'white', fontSize: '32px', fontWeight: '900', marginBottom: '20px' }}>DEFENSE_RESEARCH_LAB</h3>
                              <p style={{ color: '#aaa', fontSize: '16px', maxWidth: '800px', lineHeight: '1.8' }}>
                                 Vulaxis Labs is at the forefront of offensive security research. We specialize in zero-day discovery, protocol analysis, and the development of next-generation defensive frameworks.
                              </p>
                           </div>
                           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                              {[
                                { id: "VXL-2026-001", title: "Memory Leak in Kernel-Level Virtualization", sev: "CRITICAL" },
                                { id: "VXL-2026-002", title: "Unauthenticated RCE in Global Edge Node", sev: "CRITICAL" },
                                { id: "VXL-2026-003", title: "Bypassing Encrypted SNI in Modern Browsers", sev: "HIGH" },
                                { id: "VXL-2026-004", title: "Logical Flaw in Distributed Ledger Auth", sev: "HIGH" }
                              ].map((cve, i) => (
                                <div key={i} style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                      <span style={{ color: '#ff0044', fontSize: '10px', fontWeight: '900' }}>{cve.sev}</span>
                                      <span style={{ color: '#444', fontSize: '10px', fontWeight: 'bold' }}>{cve.id}</span>
                                   </div>
                                   <div style={{ color: 'white', fontWeight: 'bold', fontSize: '14px', lineHeight: '1.4' }}>{cve.title}</div>
                                </div>
                              ))}
                           </div>
                        </div>
                      ) : activeOverlay === 'api-keys' ? (
                        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '60px' }}>
                           <div>
                              <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '900', marginBottom: '30px' }}>API_REFERENCE</h3>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                 {['Authentication', 'Target Management', 'Scan Control', 'Result Fetching', 'Webhooks', 'SDKs'].map(nav => (
                                   <div key={nav} style={{ padding: '15px 20px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', color: '#888', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>{nav}</div>
                                 ))}
                              </div>
                           </div>
                           <div style={{ background: '#0a0005', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,0,68,0.2)', position: 'relative' }}>
                              <div style={{ position: 'absolute', top: '20px', right: '30px', background: 'rgba(255,0,68,0.1)', color: '#ff0044', padding: '5px 12px', borderRadius: '100px', fontSize: '10px', fontWeight: '900' }}>SHELL_CURL</div>
                              <pre style={{ color: '#00ff66', fontFamily: '"JetBrains Mono", monospace', fontSize: '14px', lineHeight: '1.8' }}>
{`// INITIALIZE TACTICAL ANALYSIS
curl -X POST https://api.vulaxis.com/v1/scans \\
  -H "Authorization: Bearer VXL_LIVE_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "target": "example-corp.com",
    "profile": "pentest_full",
    "intensity": 0.95
  }'

// RESPONSE_PACKET
{
  "scan_id": "vxl_928_delta",
  "status": "engaged",
  "nodes": 12,
  "eta": "300s"
}`}
                              </pre>
                           </div>
                        </div>
                      ) : activeOverlay === 'data-security' ? (
                        <div style={{ display: 'grid', gap: '60px' }}>
                           <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                              <ShieldCheck size={64} color="#ff0044" style={{ marginBottom: '30px' }} />
                              <h3 style={{ color: 'white', fontSize: '48px', fontWeight: '900', marginBottom: '20px' }}>FORTIFIED_BY_DESIGN</h3>
                              <p style={{ color: '#888', fontSize: '18px', lineHeight: '1.8' }}>
                                 At Vulaxis, security isn't just a feature—it's the core of our existence. Your data is handled with the highest level of cryptographic integrity and operational rigor.
                              </p>
                           </div>
                           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                              {[
                                { title: "256-BIT ENCRYPTION", desc: "All data at rest and in transit is secured via AES-256 and TLS 1.3 protocols." },
                                { title: "AIR-GAPPED ANALYSIS", desc: "Neural processing nodes operate in isolated environments to prevent lateral data leakage." },
                                { title: "ZERO-KNOWLEDGE", desc: "Vulaxis operators cannot access your scan results without explicit session-based clearance." }
                              ].map((item, i) => (
                                <div key={i} style={{ padding: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '30px' }}>
                                   <div style={{ color: '#ff0044', fontWeight: '900', fontSize: '12px', marginBottom: '15px', letterSpacing: '2px' }}>{item.title}</div>
                                   <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                                </div>
                              ))}
                           </div>
                        </div>
                      ) : activeOverlay === 'labs' ? (
                        <div style={{ display: 'grid', gap: '40px' }}>
                           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div>
                                 <h3 style={{ color: 'white', fontSize: '32px', fontWeight: '900' }}>PENTEST_GROUND</h3>
                                 <p style={{ color: '#666' }}>Interactive training environments for elite security professionals.</p>
                              </div>
                              <div style={{ display: 'flex', gap: '15px' }}>
                                 <div style={{ padding: '10px 20px', background: 'rgba(255,0,68,0.1)', color: '#ff0044', borderRadius: '12px', border: '1px solid #ff0044', fontSize: '12px', fontWeight: 'bold' }}>ACTIVE_LABS: 42</div>
                                 <div style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.05)', color: 'white', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '12px', fontWeight: 'bold' }}>CREDITS: 1,200</div>
                              </div>
                           </div>
                           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                              {[
                                { title: "KUBERNETES_ESCAPE_V4", type: "ADVANCED", diff: "EXPERT", desc: "Navigate a hardened K8s cluster and achieve pod-to-node escape." },
                                { title: "AUTH_BYPASS_CHALLENGE", type: "WEB", diff: "MEDIUM", desc: "Exploit complex logical flaws in a multi-factor authentication flow." },
                                { title: "NETWORK_PIVOTING_SIM", type: "INFRA", diff: "HARD", desc: "Establish persistence and pivot through a segmented corporate network." }
                              ].map((lab, i) => (
                                <div key={i} className="glass-panel" style={{ padding: '40px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                      <span style={{ color: '#ff0044', fontSize: '10px', fontWeight: '900' }}>{lab.type}</span>
                                      <span style={{ color: '#aaa', fontSize: '10px', fontWeight: 'bold' }}>{lab.diff}</span>
                                   </div>
                                   <h4 style={{ color: 'white', fontSize: '18px', fontWeight: '900', marginBottom: '15px' }}>{lab.title}</h4>
                                   <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px' }}>{lab.desc}</p>
                                   <button style={{ width: '100%', background: 'transparent', border: '1px solid #ff0044', color: '#ff0044', padding: '15px', borderRadius: '15px', fontWeight: 'bold', cursor: 'pointer' }}>INITIALIZE_MISSION</button>
                                </div>
                              ))}
                           </div>
                        </div>
                      ) : activeOverlay === 'careers' ? (
                        <div style={{ display: 'grid', gap: '60px' }}>
                           <div style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
                             <div style={{ flex: 1 }}>
                               <h3 style={{ color: 'white', fontSize: '56px', fontWeight: '900', letterSpacing: '-2px', lineHeight: 1, marginBottom: '30px' }}>Join the <span style={{ color: '#ff0044' }}>Vanguard.</span></h3>
                               <p style={{ fontSize: '18px', color: '#888', lineHeight: '1.8' }}>We are a young and dynamic security company with global resonances. Through our platform, we empower security teams to deliver next-generation penetration testing engagements with superior speed and consistency.</p>
                               <motion.button whileHover={{ scale: 1.05 }} style={{ marginTop: '30px', background: '#ff0044', color: 'white', border: 'none', padding: '20px 40px', borderRadius: '15px', fontWeight: '900', cursor: 'pointer' }}>EXPLORE_MISSIONS →</motion.button>
                             </div>
                             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                               {['Build', 'Learn', 'Play'].map(tag => (
                                 <div key={tag} style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '25px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div style={{ color: '#ff0044', fontWeight: '900', fontSize: '12px', marginBottom: '10px' }}>{tag.toUpperCase()}</div>
                                    <div style={{ color: 'white', fontSize: '14px', lineHeight: '1.4' }}>Contribute to tools that empower security experts globally.</div>
                                 </div>
                               ))}
                             </div>
                           </div>
                        </div>
                      ) : activeOverlay === 'threat-intel' ? (
                        <div style={{ display: 'grid', gap: '50px' }}>
                           <div style={{ padding: '50px', background: 'rgba(255,0,68,0.05)', borderRadius: '30px', border: '1px solid #ff0044' }}>
                              <h3 style={{ color: 'white', fontSize: '32px', fontWeight: '900', marginBottom: '20px' }}>THREAT_INTELLIGENCE_MESH</h3>
                              <p style={{ color: '#aaa', fontSize: '16px', lineHeight: '1.8' }}>Real-time synchronization with global vulnerability databases and dark-web telemetry. Our neural engine predicts exploitation paths before they are weaponized.</p>
                           </div>
                           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                              {[
                                { title: "ACTIVE EXPLOITATION: CVE-2026-9281", sev: "CRITICAL", desc: "Widespread exploitation detected in edge routing protocols. Patch immediately." },
                                { title: "NEW VECTOR: ZERO-CLICK RCE IN VOIP", sev: "CRITICAL", desc: "Our research identifies a novel memory corruption path in SIP stacks." },
                                { title: "CAMPAIGN ALERT: 'SILENT_WRAITH'", sev: "HIGH", desc: "Advanced persistent threat actor targeting financial infrastructure via API poisoning." },
                                { title: "VULNERABILITY: UNPATCHED DNS LEAK", sev: "MEDIUM", desc: "Potential for metadata exposure in distributed cloud environments." }
                              ].map((intel, i) => (
                                <div key={i} style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                   <div style={{ color: intel.sev === 'CRITICAL' ? '#ff0044' : '#ffaa00', fontSize: '10px', fontWeight: '900', marginBottom: '10px' }}>[{intel.sev}]</div>
                                   <h4 style={{ color: 'white', fontSize: '16px', fontWeight: '900', marginBottom: '10px' }}>{intel.title}</h4>
                                   <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.6' }}>{intel.desc}</p>
                                </div>
                              ))}
                           </div>
                        </div>
                      ) : ['docs', 'reports', 'forum', 'bug-bounty'].includes(activeOverlay) ? (
                         <div style={{ display: 'grid', gap: '25px' }}>
                            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                               <h3 style={{ color: 'white', marginBottom: '15px' }}>{activeOverlay.toUpperCase()} REPOSITORY</h3>
                               <p style={{ color: '#888', fontSize: '14px' }}>Accessing the centralized Vulaxis knowledge base for {activeOverlay}. Data is synchronized in real-time with our global intelligence feeds.</p>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                               {[1, 2, 3, 4].map(i => (
                                  <div key={i} style={{ padding: '15px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                     <span style={{ fontSize: '13px' }}>Resource_Node_{i}.pdf</span>
                                     <Download size={14} color="#ff0044" style={{ cursor: 'pointer' }} />
                                  </div>
                               ))}
                            </div>
                         </div>
                      ) : activeOverlay === 'billing' ? (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                          <div className="glass-panel" style={{ padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ color: 'white', fontSize: '20px', fontWeight: '900', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <CreditCard size={20} color="#ff0044" /> PAYMENT_PROFILES
                            </h3>
                            <div style={{ background: 'linear-gradient(135deg, #1a0005 0%, #050005 100%)', padding: '25px', borderRadius: '15px', border: '1px solid rgba(255,0,68,0.3)', marginBottom: '20px' }}>
                              <div style={{ color: '#ff0044', fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '15px' }}>PRIMARY_CORPORATE_CARD</div>
                              <div style={{ color: 'white', fontSize: '18px', fontWeight: '900', marginBottom: '5px' }}>•••• •••• •••• 8492</div>
                              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '12px' }}>
                                <span>EXP: 05/28</span>
                                <span>VISA_PLATINUM</span>
                              </div>
                            </div>
                            <button style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.2)', color: '#888', padding: '15px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>+ ADD_SECURE_PAYMENT_METHOD</button>
                          </div>

                          <div className="glass-panel" style={{ padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ color: 'white', fontSize: '20px', fontWeight: '900', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <Receipt size={20} color="#ff0044" /> BILLING_&_TAX_ID
                            </h3>
                            <div style={{ display: 'grid', gap: '15px' }}>
                              {['COMPANY_NAME', 'HEADQUARTERS_ADDRESS', 'TAX_IDENTIFIER (VAT/EIN)'].map(label => (
                                <div key={label}>
                                  <label style={{ color: '#444', fontSize: '10px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>{label}</label>
                                  <input type="text" placeholder={`ENTER_${label}...`} style={{ width: '100%', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', color: 'white', fontSize: '13px' }} />
                                </div>
                              ))}
                            </div>
                          </div>

                          <div style={{ gridColumn: 'span 2' }}>
                            <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '900', marginBottom: '25px' }}>INVOICE_LEDGER</h3>
                            <div className="glass-panel" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead style={{ background: 'rgba(255,255,255,0.02)' }}>
                                  <tr>
                                    {['DATE', 'INVOICE_ID', 'AMOUNT', 'STATUS', 'ACTION'].map(h => <th key={h} style={{ padding: '15px 25px', textAlign: 'left', color: '#ff0044', fontSize: '10px', fontWeight: '900' }}>{h}</th>)}
                                  </tr>
                                </thead>
                                <tbody>
                                  {[
                                    { date: 'MAY 01, 2026', id: 'INV-4829-91', amt: '$1,499.00', status: 'PAID' },
                                    { date: 'APR 01, 2026', id: 'INV-3912-84', amt: '$1,499.00', status: 'PAID' }
                                  ].map((inv, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                                      <td style={{ padding: '20px 25px', color: 'white', fontSize: '13px' }}>{inv.date}</td>
                                      <td style={{ padding: '20px 25px', color: '#888', fontSize: '13px' }}>{inv.id}</td>
                                      <td style={{ padding: '20px 25px', color: 'white', fontWeight: 'bold' }}>{inv.amt}</td>
                                      <td style={{ padding: '20px 25px' }}><span style={{ background: 'rgba(0,255,100,0.1)', color: '#00ff66', padding: '4px 10px', borderRadius: '4px', fontSize: '10px', fontWeight: '900' }}>{inv.status}</span></td>
                                      <td style={{ padding: '20px 25px' }}><Download size={16} color="#ff0044" style={{ cursor: 'pointer' }} /></td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      ) : activeOverlay === 'pricing' ? (
                        <div style={{ display: 'grid', gap: '40px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
                            <div className="glass-panel" style={{ padding: '40px', borderRadius: '30px', border: '1px solid #ff0044', background: 'rgba(255,0,68,0.03)' }}>
                              <div style={{ color: '#ff0044', fontSize: '10px', fontWeight: 'bold', letterSpacing: '4px', marginBottom: '20px' }}>[ ACTIVE_LICENSE ]</div>
                              <h3 style={{ color: 'white', fontSize: '32px', fontWeight: '900', marginBottom: '10px' }}>ENTERPRISE_PRO</h3>
                              <p style={{ color: '#888', fontSize: '14px', marginBottom: '30px' }}>Next renewal: JUNE 01, 2026 (Annual Cycle)</p>
                              <div style={{ display: 'grid', gap: '20px' }}>
                                {[
                                  { label: 'ACTIVE_TARGETS', val: 42, limit: 100 },
                                  { label: 'SCAN_THREADS', val: 12, limit: 16 },
                                  { label: 'CLOUD_ARCHIVE', val: 128, limit: 500, unit: 'GB' }
                                ].map(res => (
                                  <div key={res.label}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontSize: '11px', fontWeight: 'bold', marginBottom: '8px' }}>
                                      <span>{res.label}</span>
                                      <span>{res.val} / {res.limit}{res.unit || ''}</span>
                                    </div>
                                    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                                      <motion.div initial={{ width: 0 }} animate={{ width: `${(res.val/res.limit)*100}%` }} style={{ height: '100%', background: '#ff0044' }} />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="glass-panel" style={{ padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                              <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '900', marginBottom: '30px' }}>TIER_SCALABILITY_MATRIX</h3>
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                                {['COMMUNITY_FREE', 'CONSULTANT_CORE', 'ENTERPRISE_PRO', 'MSP_GLOBAL'].map((tier, i) => (
                                  <div key={tier} style={{ padding: '25px', borderRadius: '20px', border: `1px solid ${i === 2 ? '#ff0044' : 'rgba(255,255,255,0.1)'}`, background: i === 2 ? 'rgba(255,0,68,0.05)' : 'transparent' }}>
                                    <div style={{ color: i === 2 ? '#ff0044' : '#666', fontSize: '10px', fontWeight: 'bold', marginBottom: '10px' }}>{tier}</div>
                                    <div style={{ color: 'white', fontSize: '24px', fontWeight: '900', marginBottom: '5px' }}>${i === 0 ? '0' : i === 1 ? '499' : i === 2 ? '1499' : '3999'}<span style={{ fontSize: '12px', color: '#666' }}>/mo</span></div>
                                    {i === 0 && <div style={{ color: '#00ff66', fontSize: '10px', fontWeight: 'bold', marginBottom: '15px' }}>2_ACTIVE_TARGETS</div>}
                                    <button style={{ width: '100%', background: i === 2 ? 'white' : 'transparent', color: i === 2 ? 'black' : 'white', border: '1px solid white', padding: '10px', borderRadius: '8px', fontWeight: '900', fontSize: '11px', cursor: 'pointer', marginTop: i === 0 ? '0' : '23px' }}>{i === 2 ? 'CURRENT_PLAN' : 'UPGRADE_NODE'}</button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : activeOverlay === 'usage' ? (
                        <div style={{ display: 'grid', gap: '40px' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
                            <div className="glass-panel" style={{ padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                              <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '900', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <BarChart3 size={20} color="#ff0044" /> SCAN_LOAD_TELEMETRY
                              </h3>
                              <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '15px' }}>
                                {[65, 45, 85, 30, 95, 70, 55, 80, 40, 90].map((h, i) => (
                                  <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.05 }} style={{ flex: 1, background: 'linear-gradient(to top, #ff0044, transparent)', borderRadius: '4px 4px 0 0', position: 'relative' }}>
                                    <div style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', color: '#444', fontSize: '9px', fontWeight: '900' }}>{h}%</div>
                                  </motion.div>
                                ))}
                              </div>
                              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', color: '#444', fontSize: '10px', fontWeight: '900', letterSpacing: '2px' }}>
                                <span>PERIOD_START</span>
                                <span>MAY_13_2026</span>
                                <span>PERIOD_END</span>
                              </div>
                            </div>
                            <div style={{ display: 'grid', gap: '20px' }}>
                              {[
                                { label: 'TOTAL_SCANS', val: '1,284', delta: '+12%' },
                                { label: 'AVG_DURATION', val: '42m', delta: '-5%' },
                                { label: 'API_REQUESTS', val: '852K', delta: '+28%' }
                              ].map(stat => (
                                <div key={stat.label} className="glass-panel" style={{ padding: '25px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                  <div style={{ color: '#666', fontSize: '10px', fontWeight: 'bold', marginBottom: '5px' }}>{stat.label}</div>
                                  <div style={{ color: 'white', fontSize: '24px', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    {stat.val}
                                    <span style={{ fontSize: '12px', color: stat.delta.startsWith('+') ? '#00ff66' : '#ff0044' }}>{stat.delta}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="glass-panel" style={{ padding: '30px', borderRadius: '24px', background: 'rgba(255,255,255,0.02)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div>
                                <h4 style={{ color: 'white', fontWeight: 'bold' }}>EXPORT_AUDIT_DATA</h4>
                                <p style={{ color: '#666', fontSize: '13px' }}>Download raw usage telemetry for internal compliance reports.</p>
                              </div>
                              <div style={{ display: 'flex', gap: '15px' }}>
                                <button style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '10px 20px', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold' }}>CSV_TELEMETRY</button>
                                <button style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '10px 20px', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold' }}>JSON_AUDIT</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : activeOverlay === 'team-mgmt' ? (
                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px' }}>
                          <div>
                            <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '900', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <Users2 size={24} color="#ff0044" /> ROLE_BASED_ACCESS_CONTROL
                            </h3>
                            <div style={{ display: 'grid', gap: '15px' }}>
                              {[
                                { role: 'OWNER/ADMIN', desc: 'Full control over infrastructure, billing, and user seats.' },
                                { role: 'SENIOR_PENTESTER', desc: 'Can add targets, configure payloads, and launch all scan types.' },
                                { role: 'ANALYST/AUDITOR', desc: 'Read-only access to view results, validate evidence, and export reports.' }
                              ].map((role, i) => (
                                <div key={i} style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                  <div style={{ color: '#ff0044', fontSize: '12px', fontWeight: '900', marginBottom: '5px' }}>{role.role}</div>
                                  <p style={{ color: '#888', fontSize: '13px', margin: 0 }}>{role.desc}</p>
                                </div>
                              ))}
                            </div>
                            <div style={{ marginTop: '40px' }}>
                              <h4 style={{ color: 'white', fontWeight: 'bold', marginBottom: '15px' }}>ACTIVE_TEAM_MEMBERS</h4>
                              <div className="glass-panel" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                  <thead style={{ background: 'rgba(255,255,255,0.02)' }}>
                                    <tr>
                                      {['OPERATOR', 'ROLE', 'STATUS'].map(h => <th key={h} style={{ padding: '12px 20px', textAlign: 'left', color: '#ff0044', fontSize: '9px', fontWeight: '900' }}>{h}</th>)}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {[
                                      { name: 'Harshil Panchal', role: 'OWNER', status: 'ONLINE' },
                                      { name: 'Mihir Panchal', role: 'ADMIN', status: 'OFFLINE' },
                                      { name: 'Gaurav Devnani', role: 'PENTESTER', status: 'ENGAGED' }
                                    ].map((m, i) => (
                                      <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                                        <td style={{ padding: '15px 20px', color: 'white', fontSize: '13px' }}>{m.name}</td>
                                        <td style={{ padding: '15px 20px', color: '#888', fontSize: '11px' }}>{m.role}</td>
                                        <td style={{ padding: '15px 20px' }}>
                                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: m.status === 'ONLINE' ? '#00ff66' : m.status === 'ENGAGED' ? '#ffaa00' : '#444' }} />
                                            <span style={{ fontSize: '10px', color: '#ccc' }}>{m.status}</span>
                                          </div>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="glass-panel" style={{ padding: '35px', borderRadius: '30px', border: '1px solid rgba(255,0,68,0.2)', marginBottom: '30px' }}>
                              <h3 style={{ color: 'white', fontSize: '18px', fontWeight: '900', marginBottom: '20px' }}>PROVISION_NEW_SEAT</h3>
                              <div style={{ display: 'grid', gap: '15px' }}>
                                <input type="email" placeholder="OPERATOR_EMAIL..." style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', padding: '15px', borderRadius: '12px', color: 'white' }} />
                                <select style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', padding: '15px', borderRadius: '12px', color: 'white' }}>
                                  <option>SELECT_ROLE</option>
                                  <option>SENIOR_PENTESTER</option>
                                  <option>ANALYST</option>
                                </select>
                                <button style={{ background: '#ff0044', color: 'white', border: 'none', padding: '15px', borderRadius: '12px', fontWeight: 'bold' }}>DEPLOY_INVITATION</button>
                              </div>
                            </div>
                            <div className="glass-panel" style={{ padding: '30px', borderRadius: '24px', border: '1px solid rgba(0,255,100,0.2)', background: 'rgba(0,255,100,0.02)' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                  <Shield size={24} color="#00ff66" />
                                  <div>
                                    <div style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>MANDATORY_2FA</div>
                                    <p style={{ color: '#666', fontSize: '11px', margin: 0 }}>Force all workspace members to enable MFA.</p>
                                  </div>
                                </div>
                                <div style={{ width: '40px', height: '20px', background: 'rgba(0,255,100,0.3)', borderRadius: '20px', position: 'relative', cursor: 'pointer' }}>
                                  <div style={{ position: 'absolute', right: '2px', top: '2px', width: '16px', height: '16px', background: '#00ff66', borderRadius: '50%' }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : activeOverlay === 'settings' ? (
                        <div style={{ display: 'grid', gap: '20px' }}>
                           <div style={{ background: 'rgba(255,0,68,0.05)', padding: '25px', borderRadius: '15px', border: '1px solid rgba(255,0,68,0.2)' }}>
                              <h4 style={{ color: 'white', marginBottom: '10px' }}>SETTINGS_INTERFACE</h4>
                              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: '#888' }}>
                                 {'System Locale: EN-US | Theme: TACTICAL_DARK | Neural Sensitivity: 0.85'}
                              </div>
                           </div>
                           <div style={{ padding: '20px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                              <p style={{ fontSize: '14px', color: '#ccc' }}>Updating tactical configuration for settings...</p>
                              <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '15px', overflow: 'hidden' }}>
                                 <motion.div animate={{ x: [-200, 400] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} style={{ width: '200px', height: '100%', background: '#ff0044' }} />
                               </div>
                           </div>
                           <button style={{ background: 'transparent', border: '1px solid #ff0044', color: '#ff0044', padding: '12px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>SYNCHRONIZE_CHANGES</button>
                        </div>
                      ) : ['Privacy Policy', 'Terms and Conditions', 'Security Research'].includes(activeOverlay) ? (
                        <div style={{ display: 'grid', gap: '20px', maxHeight: '60vh', overflowY: 'auto', paddingRight: '10px' }} className="custom-scrollbar">
                           <h3 style={{ color: 'white' }}>{activeOverlay.toUpperCase()}</h3>
                           <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.6' }}>
                              {activeOverlay === 'Privacy Policy' ? 
                                'Vulaxis operates under strict zero-knowledge protocols. Your scan data, target specifications, and audit results are encrypted at rest and in transit. We do not store original payloads after mission completion unless explicitly requested for research purposes.' :
                               activeOverlay === 'Terms and Conditions' ? 
                                'By engaging the Vulaxis Tactical Suite, you verify that you have explicit permission to audit the target infrastructure. Vulaxis is not responsible for any service disruption caused by aggressive scanning profiles. Engagement follows standard Rules of Engagement (RoE).' :
                                'Vulaxis is committed to responsible disclosure. If you identify a vulnerability within our own neural infrastructure, please report it via our Bug Bounty program. We maintain a "No Retaliation" policy for white-hat researchers.'}
                           </p>
                           <div style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                              <div style={{ color: '#ff0044', fontSize: '10px', fontWeight: 'bold', marginBottom: '10px' }}>TACTICAL_PROVISIONS_v4.2</div>
                              <ul style={{ fontSize: '12px', color: '#666', listStyle: 'none', padding: 0, display: 'grid', gap: '8px' }}>
                                 <li>• 256-bit AES Encryption for all data nodes</li>
                                 <li>• Standard RoE Compliance (OSSTMM/OWASP)</li>
                                 <li>• Legal jurisdiction: Neutral Tactical Space</li>
                              </ul>
                           </div>
                        </div>
                      ) : (
                        <div style={{ display: 'grid', gap: '40px' }}>
                           <div style={{ background: 'rgba(255,255,255,0.02)', padding: '60px', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                              <Brain size={48} color="#ff0044" style={{ marginBottom: '30px' }} />
                              <h3 style={{ color: 'white', fontSize: '32px', fontWeight: '900', marginBottom: '20px' }}>SYSTEM_NODE_INITIALIZED</h3>
                              <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.8' }}>
                                 The module <strong>{activeOverlay.toUpperCase()}</strong> is currently synchronizing with the Vulaxis neural mesh. Access is restricted to Level Alpha operators.
                              </p>
                              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                                 <button onClick={() => setActiveOverlay(null)} style={{ background: '#ff0044', color: 'white', border: 'none', padding: '15px 40px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>RETURN_TO_COMMAND</button>
                                 <button style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.1)', padding: '15px 40px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>REQUEST_CLEARANCE</button>
                              </div>
                           </div>
                        </div>
                      )}
                     </div>
                     
                     {/* INDUSTRY TRUST FOOTER (SUB-PAGE) */}
                     <div style={{ marginTop: '100px', padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                           <h4 style={{ color: 'white', fontSize: '18px', fontWeight: '900', marginBottom: '15px' }}>OFFENSIVE_INTELLIGENCE</h4>
                           <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>Vulaxis is a leading provider of automated VAPT solutions, trusted by security teams at global scale. Our mission is to democratize offensive AI for a safer digital frontier.</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.4 }}>
                           {['Gartner', 'SOC2_TYPE_II', 'CREST_MEMBER', 'ISO_27001'].map(trust => (
                             <div key={trust} style={{ color: 'white', fontSize: '12px', fontWeight: '900', letterSpacing: '2px', border: '1px solid white', padding: '10px 20px', borderRadius: '4px' }}>{trust}</div>
                           ))}
                        </div>
                     </div>

                    <div style={{ marginTop: '50px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div style={{ color: '#444', fontSize: '11px', fontFamily: '"JetBrains Mono", monospace' }}>[NODE_ID: {Math.random().toString(16).slice(2, 10).toUpperCase()}]</div>
                       <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}><Canvas><ambientLight /><pointLight position={[10, 10, 10]} /></Canvas></div>
                       <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveOverlay(null)}
                          style={{ background: '#ff0044', color: 'white', border: 'none', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', cursor: 'pointer', boxShadow: '0 0 20px rgba(255,0,68,0.4)' }}>
                          <CheckCircle2 size={24} />
                       </motion.button>
                    </div>
                </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {selectedDetail && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  style={{ position: 'fixed', inset: 0, zIndex: 3000000, background: 'rgba(2,0,0,0.95)', backdropFilter: 'blur(30px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}
                  onClick={() => setSelectedDetail(null)}>
                  <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                    style={{ background: '#0a0005', border: '1px solid #ff0044', borderRadius: '32px', maxWidth: '800px', width: '90%', maxHeight: '85vh', overflow: 'auto', padding: '50px', position: 'relative', boxShadow: '0 0 100px rgba(255,0,68,0.2)' }}
                    onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => setSelectedDetail(null)} style={{ position: 'absolute', top: '30px', right: '30px', background: 'rgba(255,0,68,0.1)', border: '1px solid #ff0044', color: 'white', width: '40px', height: '40px', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <X size={20} />
                    </button>
                    <div style={{ fontSize: '12px', color: '#ff0044', fontWeight: 'bold', letterSpacing: '3px', marginBottom: '15px' }}>[ VULN_ANALYSIS_REPORT // {selectedDetail.id} ]</div>
                    <h2 style={{ fontSize: '36px', color: 'white', fontWeight: '900', marginBottom: '30px', letterSpacing: '-1.5px' }}>{selectedDetail.title}</h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ fontSize: '10px', color: '#666', fontWeight: 'bold', marginBottom: '5px' }}>SEVERITY</div>
                        <div style={{ color: selectedDetail.severity === 'critical' ? '#ff0044' : '#ffaa00', fontWeight: '900', fontSize: '18px' }}>{selectedDetail.severity.toUpperCase()}</div>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ fontSize: '10px', color: '#666', fontWeight: 'bold', marginBottom: '5px' }}>CATEGORY</div>
                        <div style={{ color: 'white', fontWeight: '900', fontSize: '18px' }}>{selectedDetail.category.toUpperCase()}</div>
                      </div>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                      <h3 style={{ color: 'white', fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Target size={18} color="#ff0044" /> DESCRIPTION
                      </h3>
                      <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '15px' }}>{selectedDetail.description}</p>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                      <h3 style={{ color: 'white', fontSize: '16px', fontWeight: 'bold', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Zap size={18} color="#ff0044" /> IMPACT ANALYSIS
                      </h3>
                      <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '15px' }}>{selectedDetail.impact}</p>
                    </div>

                    <div style={{ background: 'rgba(0,255,100,0.05)', border: '1px solid rgba(0,255,100,0.2)', padding: '25px', borderRadius: '20px' }}>
                      <h3 style={{ color: '#00ff66', fontSize: '16px', fontWeight: 'bold', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckCircle2 size={18} color="#00ff66" /> RECOMMENDED REMEDIATION
                      </h3>
                      <p style={{ color: '#00ff66', opacity: 0.8, lineHeight: '1.6', fontSize: '14px', margin: 0 }}>{selectedDetail.remediation}</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <AIEngineWidget scanInProgress={scanInProgress} hasPerformedScan={hasPerformedScan} scanResults={scanResults} />
            <CookieBanner />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}