import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Float, Sparkles } from '@react-three/drei';
import { Lock, Mail, User, ArrowRight, ShieldAlert, Loader2 } from 'lucide-react';

interface AuthOverlayProps {
  onLogin: () => void;
}
const RedMoon = () => {
  return (
    <group position={[0, 2, -15]}>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Core Moon */}
        <mesh scale={6}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial color="#ff0011" />
        </mesh>
        {/* Inner Glow */}
        <mesh scale={6.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#ff0033" transparent opacity={0.4} blending={THREE.AdditiveBlending} />
        </mesh>
        {/* Outer Glow */}
        <mesh scale={7.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#aa0000" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
        </mesh>
        {/* Deep Aura */}
        <mesh scale={9}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#550000" transparent opacity={0.05} blending={THREE.AdditiveBlending} />
        </mesh>
      </Float>
    </group>
  );
};

const CinematicBackground = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', backgroundColor: '#020000' }}>
      
      {/* 3D Scene */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <fog attach="fog" args={['#020000', 10, 30]} />
          <ambientLight intensity={0.5} />
          <RedMoon />
          
          {/* Drifting Embers / Snow */}
          <Sparkles count={2000} scale={30} size={6} speed={1.2} opacity={0.8} color="#ff0033" position={[0, 0, -5]} />
          <Sparkles count={1000} scale={25} size={10} speed={1.5} opacity={1} color="#ff3333" position={[0, -2, 0]} />
          <Sparkles count={500} scale={20} size={4} speed={0.8} opacity={0.6} color="#ffffff" position={[0, 2, 5]} />
        </Canvas>
      </div>

      {/* Vignette Overlay for depth and focus on login box */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(2,0,0,0.95) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(2,0,0,1), transparent)', pointerEvents: 'none' }} />
    </div>
  );
};

const AuthOverlay: React.FC<AuthOverlayProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || (!isLogin && !username)) return;
    
    setError('');
    setIsLoading(true);

    // Simulate network delay for realism
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (isLogin) {
      const savedUserStr = localStorage.getItem('vulaxis_user');
      let isValid = false;
      
      if (email === 'admin@vulaxis.com' && password === 'admin123') {
        isValid = true;
      } else if (savedUserStr) {
        const savedUser = JSON.parse(savedUserStr);
        if (savedUser.email === email && savedUser.password === password) {
          isValid = true;
        }
      }

      if (isValid) {
        onLogin();
      } else {
        setError('ACCESS DENIED: Invalid credentials');
        setIsLoading(false);
      }
    } else {
      if (password.length < 6) {
        setError('SECURITY ALERT: Passphrase must be 6+ characters');
        setIsLoading(false);
        return;
      }
      
      localStorage.setItem('vulaxis_user', JSON.stringify({ email, password, username }));
      onLogin();
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      <CinematicBackground />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '420px',
          background: 'rgba(10, 0, 5, 0.65)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 0, 68, 0.4)',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.1)'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '35px' }}>
          <motion.div 
            animate={{ boxShadow: ['0 0 20px rgba(255,0,68,0.4)', '0 0 40px rgba(255,0,68,0.6)', '0 0 20px rgba(255,0,68,0.4)'] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,0,68,0.1)', border: '1px solid rgba(255,0,68,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}
          >
            <ShieldAlert size={32} color="#ff0044" />
          </motion.div>
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '28px', fontWeight: '900', color: 'white', margin: 0, textShadow: '0 0 20px rgba(255,0,68,0.5)' }}>
            {isLogin ? 'SYSTEM LOGIN' : 'INITIALIZE ACCESS'}
          </h2>
          <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: '#ff0044', marginTop: '10px', letterSpacing: '2px' }}>
            VULAXIS SECURE TERMINAL
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <AnimatePresence mode="wait">
            {!isLogin && (
              <motion.div
                key="username"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ position: 'relative' }}>
                  <User size={18} color="#aaa" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    placeholder="Operator Alias"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required={!isLogin}
                    className="auth-input"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div style={{ position: 'relative' }}>
            <Mail size={18} color="#aaa" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="email"
              placeholder="Secure Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="auth-input"
            />
          </div>

          <div style={{ position: 'relative' }}>
            <Lock size={18} color="#aaa" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="password"
              placeholder="Passphrase"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="auth-input"
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  background: 'rgba(255, 0, 68, 0.1)',
                  border: '1px solid rgba(255, 0, 68, 0.5)',
                  borderRadius: '8px',
                  padding: '10px',
                  color: '#ff0044',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '12px',
                  textAlign: 'center',
                  textShadow: '0 0 5px rgba(255, 0, 68, 0.5)'
                }}
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%', background: 'linear-gradient(90deg, #ff0044 0%, #cc0033 100%)', border: 'none', borderRadius: '12px', padding: '16px', color: 'white', fontFamily: '"Space Grotesk", sans-serif', fontSize: '16px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', cursor: isLoading ? 'not-allowed' : 'pointer', marginTop: '10px', boxShadow: '0 10px 20px rgba(255,0,68,0.3)', opacity: isLoading ? 0.7 : 1
            }}
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  style={{ display: 'flex' }}
                >
                  <Loader2 size={18} />
                </motion.div>
                VERIFYING...
              </>
            ) : (
              <>
                {isLogin ? 'AUTHORIZE' : 'ESTABLISH LINK'}
                <ArrowRight size={18} />
              </>
            )}
          </motion.button>
        </form>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <p style={{ color: '#aaa', fontFamily: '"Manrope", sans-serif', fontSize: '14px' }}>
            {isLogin ? "Don't have an access code?" : "Already have clearance?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              style={{ background: 'none', border: 'none', color: '#ff0044', fontWeight: 'bold', marginLeft: '8px', cursor: 'pointer', fontFamily: '"Manrope", sans-serif', fontSize: '14px', textDecoration: 'underline' }}
            >
              {isLogin ? 'Request Access' : 'Return to Login'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthOverlay;
