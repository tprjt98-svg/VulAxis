import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Shield,
  Globe,
  Server,
  Database,
  Network,
  Lock,
  Zap,
  Eye,
  Activity,
  Brain,
  ArrowRight,
  Target,
  Cpu,
} from "lucide-react";

interface TargetSpecificationPanelProps {
  targetType: string;
  setTargetType: (val: string) => void;
  targetValue: string;
  setTargetValue: (val: string) => void;
  assessmentProfile: string;
  setAssessmentProfile: (val: string) => void;
  onScanInitiate?: () => void;
  scanButtonText?: string;
}

const TargetSpecificationPanel = ({
  targetType,
  setTargetType,
  targetValue,
  setTargetValue,
  assessmentProfile,
  setAssessmentProfile,
  onScanInitiate = () => {},
  scanButtonText = "INITIATE ELITE SCAN",
}: TargetSpecificationPanelProps) => {
  const [configOptions, setConfigOptions] = useState<Record<string, any>>({
    rapid: {
      portScan: "top-100",
      webScan: true,
      sslScan: true,
      aiAnalysis: "basic",
      mlThreatDetection: true,
      aiRiskScoring: true,
      wafDetection: false,
      advancedDnsRecon: false,
      fullPortScan: false,
      advancedBannerGrab: false,
      cloudHardening: false,
    },
    comprehensive: {
      portScan: "top-1000",
      webScan: true,
      sslScan: true,
      vulnScan: true,
      techFingerprint: true,
      dnsRecon: true,
      subdomainEnum: true,
      webCrawling: true,
      authTesting: true,
      aiAnalysis: "advanced",
      mlThreatDetection: true,
      aiRiskScoring: true,
      behavioralAnalysis: true,
      aiRecommendations: true,
      wafDetection: true,
      advancedDnsRecon: true,
      fullPortScan: false,
      advancedBannerGrab: true,
      cloudHardening: true,
    },
    fullPenTest: {
      portScan: "all",
      webScan: true,
      sslScan: true,
      vulnScan: true,
      techFingerprint: true,
      owaspScan: true,
      exploitAnalysis: true,
      riskAssessment: true,
      dnsRecon: true,
      subdomainEnum: true,
      webCrawling: true,
      authTesting: true,
      businessLogicTesting: true,
      sqlInjectionTesting: true,
      xssTesting: true,
      pathTraversalTesting: true,
      realTimeUpdates: true,
      databaseStorage: true,
      apiIntegration: true,
      aiAnalysis: "enterprise",
      mlThreatDetection: true,
      aiRiskScoring: true,
      behavioralAnalysis: true,
      aiRecommendations: true,
      deepLearningAnalysis: true,
      aiExploitPrediction: true,
      neuralNetworkScanning: true,
      wafDetection: true,
      advancedDnsRecon: true,
      fullPortScan: true,
      advancedBannerGrab: true,
      cloudHardening: true,
    },
  });

  const handleTargetTypeChange = (value: string) => {
    setTargetType(value);
    setTargetValue("");
  };

  const handleAssessmentProfileChange = (value: string) => {
    setAssessmentProfile(value);
  };

  const handleConfigOptionChange = (profile: string, option: string, value: any) => {
    setConfigOptions({
      ...configOptions,
      [profile]: { ...configOptions[profile], [option]: value },
    });
  };

  const handleScanInitiate = () => {
    onScanInitiate();
  };

  const getTargetPlaceholder = () => {
    switch (targetType) {
      case "ipv4": return "192.168.1.1";
      case "ipv6": return "2001:0db8:85a3::8a2e:370:7334";
      case "domain": return "target-system.com";
      default: return "Enter target";
    }
  };

  const moduleCount =
    assessmentProfile === "rapid" ? 6 : assessmentProfile === "comprehensive" ? 12 : 18;
  const progressVal =
    assessmentProfile === "rapid" ? 33 : assessmentProfile === "comprehensive" ? 66 : 100;

  const radioTypes = [
    { value: "domain", label: "Domain", icon: Globe },
    { value: "ipv4",   label: "IPv4",   icon: Server },
    { value: "ipv6",   label: "IPv6",   icon: Cpu },
  ];

  const featureList = {
    rapid: [
      { icon: Network, label: "Basic Port Scan" },
      { icon: Globe,   label: "Web Scanning" },
      { icon: Lock,    label: "SSL/TLS Check" },
      { icon: Brain,   label: "AI Basic Analysis" },
      { icon: Shield,  label: "WAF Detection" },
      { icon: Globe,   label: "DNS Lookup" },
    ],
    comprehensive: [
      { icon: Network,  label: "Full Port Scan" },
      { icon: Globe,    label: "DNS Recon" },
      { icon: Server,   label: "Tech Fingerprint" },
      { icon: Database, label: "Vuln Scan" },
      { icon: Lock,     label: "Auth Testing" },
      { icon: Activity, label: "Web Crawling" },
      { icon: Brain,    label: "AI Advanced" },
      { icon: Eye,      label: "ML Threats" },
      { icon: Shield,   label: "Adv. WAF" },
      { icon: Globe,    label: "DNS Recon+" },
      { icon: Server,   label: "Banner Grab" },
      { icon: Database, label: "Cloud Hardening" },
    ],
    fullPenTest: [
      "SQL Injection Testing", "XSS Testing", "Path Traversal",
      "Business Logic", "Real-time Updates", "REST API",
      "AI Enterprise", "Neural Network", "Deep Learning",
      "AI Exploit Pred.", "WebSocket", "Risk Assessment",
      "Adv. WAF/Firewall", "Full Port Scan", "Adv. DNS Recon",
      "Banner Grabbing", "Cloud Hardening", "Infrastructure",
    ],
  };

  return (
    <div
      className="cinematic-card w-full max-w-md flex flex-col gap-6 p-6 overflow-y-auto"
      style={{ maxHeight: "100%", minHeight: 0 }}
    >
      {/* Top bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #ff0044, transparent)" }} />

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <Shield size={22} color="#ff0044" className="floating" />
            <div className="absolute inset-0 w-5 h-5 rounded-full bg-red-500/20 pulse-ring" />
          </div>
          <div>
            <h2 className="cinematic-heading text-lg font-bold leading-none">VulnEdge Scanner</h2>
            <p className="cinematic-subheading mt-1" style={{ fontSize: "9px" }}>Military-Grade Penetration Platform</p>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="cinematic-badge"><Activity size={9} />Military-Grade</span>
          <span className="cinematic-badge"><Database size={9} />AI-Powered</span>
          <span className="cinematic-badge cinematic-badge-white"><Brain size={9} />Neural Net</span>
        </div>
      </div>

      <div className="cinematic-divider" />

      {/* Target Classification */}
      <div className="space-y-3">
        <label className="cinematic-label flex items-center gap-2">
          <Eye size={11} /> Target Classification
        </label>
        <RadioGroup value={targetType} onValueChange={handleTargetTypeChange} className="grid grid-cols-3 gap-2">
          {radioTypes.map(({ value, label, icon: Icon }) => (
            <div key={value} className="cinematic-radio-item" style={{ flexDirection: "column", alignItems: "flex-start", gap: "6px", padding: "10px 12px" }}>
              <div className="flex items-center gap-2 w-full">
                <RadioGroupItem value={value} id={value} style={{ accentColor: "#ff0044" }} />
                <Label htmlFor={value} className="cursor-pointer flex items-center gap-1 text-white/70 text-xs font-medium">
                  <Icon size={12} color="#ff4466" /> {label}
                </Label>
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Target Input */}
      <div className="space-y-2">
        <label className="cinematic-label flex items-center gap-2">
          <Network size={11} /> Target {targetType === "domain" ? "Domain" : targetType === "ipv4" ? "IPv4 Address" : "IPv6 Address"}
        </label>
        <div style={{ display: "flex", gap: "10px", alignItems: "center", background: "rgba(0,0,0,0.25)", padding: "8px 10px 8px 16px", borderRadius: "100px", border: "1px solid rgba(255,0,68,0.15)", transition: "border-color 0.3s" }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,0,68,0.5)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,0,68,0.15)")}
        >
          <Target size={16} color="#ff0044" />
          <input
            type="text"
            placeholder={getTargetPlaceholder()}
            value={targetValue}
            onChange={(e) => setTargetValue(e.target.value)}
            style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "white", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px" }}
          />
          {targetValue && <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ff0044", boxShadow: "0 0 8px #ff0044" }} className="animate-pulse" />}
        </div>
      </div>

      {/* Assessment Profile Select */}
      <div className="space-y-2">
        <label className="cinematic-label">Assessment Profile</label>
        <Select value={assessmentProfile} onValueChange={handleAssessmentProfileChange}>
          <SelectTrigger style={{ background: "rgba(10,0,5,0.4)", border: "1px solid rgba(255,0,68,0.15)", borderRadius: "12px", color: "white", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent style={{ background: "#0a0005", border: "1px solid rgba(255,0,68,0.2)" }}>
            <SelectItem value="rapid">Rapid Assessment</SelectItem>
            <SelectItem value="comprehensive">Comprehensive Audit</SelectItem>
            <SelectItem value="fullPenTest">Full Penetration Test</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Profile Tabs */}
      <Tabs value={assessmentProfile} onValueChange={handleAssessmentProfileChange} className="w-full">
        <TabsList className="cinematic-tabs-list grid w-full grid-cols-3">
          <TabsTrigger value="rapid" className="cinematic-tab-trigger">Rapid</TabsTrigger>
          <TabsTrigger value="comprehensive" className="cinematic-tab-trigger">Full</TabsTrigger>
          <TabsTrigger value="fullPenTest" className="cinematic-tab-trigger">PenTest</TabsTrigger>
        </TabsList>

        {/* RAPID */}
        <TabsContent value="rapid" className="pt-3">
          <div className="cinematic-card p-4" style={{ borderRadius: "12px" }}>
            <div className="flex items-center gap-2 mb-3">
              <Zap size={14} color="#ff0044" />
              <span className="cinematic-label" style={{ fontSize: "10px" }}>Quick Assessment</span>
            </div>
            <div className="space-y-3 mb-3">
              <label className="cinematic-label" style={{ fontSize: "9px" }}>Port Scan Range</label>
              <Select value={configOptions.rapid.portScan} onValueChange={(v) => handleConfigOptionChange("rapid", "portScan", v)}>
                <SelectTrigger style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,0,68,0.12)", borderRadius: "10px", color: "white", fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", height: "36px" }}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent style={{ background: "#0a0005", border: "1px solid rgba(255,0,68,0.2)" }}>
                  <SelectItem value="top-100">Top 100 Ports</SelectItem>
                  <SelectItem value="top-1000">Top 1000 Ports</SelectItem>
                  <SelectItem value="common">Common Ports</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {(featureList.rapid as { icon: any; label: string }[]).map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5" style={{ fontSize: "11px", color: "rgba(255,68,102,0.9)" }}>
                  <Icon size={10} /> <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* COMPREHENSIVE */}
        <TabsContent value="comprehensive" className="pt-3">
          <div className="cinematic-card p-4" style={{ borderRadius: "12px" }}>
            <div className="flex items-center gap-2 mb-3">
              <Eye size={14} color="#ff0044" />
              <span className="cinematic-label" style={{ fontSize: "10px" }}>Comprehensive Audit</span>
            </div>
            <div className="space-y-3 mb-3">
              <label className="cinematic-label" style={{ fontSize: "9px" }}>Port Scan Range</label>
              <Select value={configOptions.comprehensive.portScan} onValueChange={(v) => handleConfigOptionChange("comprehensive", "portScan", v)}>
                <SelectTrigger style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,0,68,0.12)", borderRadius: "10px", color: "white", fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", height: "36px" }}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent style={{ background: "#0a0005", border: "1px solid rgba(255,0,68,0.2)" }}>
                  <SelectItem value="top-100">Top 100 Ports</SelectItem>
                  <SelectItem value="top-1000">Top 1000 Ports</SelectItem>
                  <SelectItem value="all">All Ports</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {(featureList.comprehensive as { icon: any; label: string }[]).map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5" style={{ fontSize: "11px", color: "rgba(255,68,102,0.9)" }}>
                  <Icon size={10} /> <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* FULL PEN TEST */}
        <TabsContent value="fullPenTest" className="pt-3">
          <div className="cinematic-card p-4" style={{ borderRadius: "12px", borderColor: "rgba(255,0,68,0.25)" }}>
            <div className="flex items-center gap-2 mb-3">
              <Shield size={14} color="#ff0044" />
              <span className="cinematic-label" style={{ fontSize: "10px" }}>Full Penetration Suite</span>
            </div>
            <div className="space-y-3 mb-3">
              <label className="cinematic-label" style={{ fontSize: "9px" }}>OWASP Scan Depth</label>
              <Select value={configOptions.fullPenTest.owaspScan ? "full" : "basic"} onValueChange={(v) => handleConfigOptionChange("fullPenTest", "owaspScan", v === "full")}>
                <SelectTrigger style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,0,68,0.12)", borderRadius: "10px", color: "white", fontFamily: "'JetBrains Mono',monospace", fontSize: "12px", height: "36px" }}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent style={{ background: "#0a0005", border: "1px solid rgba(255,0,68,0.2)" }}>
                  <SelectItem value="basic">Basic (Top 5)</SelectItem>
                  <SelectItem value="full">Full (Top 10)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {(featureList.fullPenTest as string[]).map((label) => (
                <div key={label} className="flex items-center gap-1" style={{ fontSize: "10px", color: "rgba(255,68,102,0.85)" }}>
                  <span style={{ color: "#ff0044" }}>✓</span> <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 p-2 rounded-lg" style={{ background: "rgba(255,180,0,0.07)", border: "1px solid rgba(255,180,0,0.2)" }}>
              <p style={{ fontSize: "10px", color: "#ffb833", fontFamily: "'JetBrains Mono', monospace" }}>
                <Shield size={10} style={{ display: "inline", marginRight: "4px" }} />
                Protected against private IP scanning
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Progress & Scan Button */}
      <div className="space-y-4 mt-auto">
        <div className="flex justify-between items-center" style={{ fontSize: "11px" }}>
          <span className="cinematic-subheading">Scan Modules Active</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "#ff4466", fontSize: "12px", fontWeight: 700 }}>{moduleCount} MOD</span>
        </div>
        <div className="cinematic-progress">
          <div className="cinematic-progress-fill" style={{ width: `${progressVal}%` }} />
        </div>

        {/* Scan Button */}
        <motion.button
          onClick={handleScanInitiate}
          disabled={!targetValue.trim()}
          whileHover={targetValue.trim() ? { scale: 1.03 } : {}}
          whileTap={targetValue.trim() ? { scale: 0.97 } : {}}
          style={{
            width: "100%",
            background: targetValue.trim() ? "white" : "rgba(255,255,255,0.08)",
            color: targetValue.trim() ? "#ff0044" : "rgba(255,255,255,0.3)",
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: "14px",
            letterSpacing: "1px",
            border: "none",
            padding: "16px 32px",
            borderRadius: "100px",
            cursor: targetValue.trim() ? "pointer" : "not-allowed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            boxShadow: targetValue.trim() ? "0 0 30px rgba(255,0,68,0.35)" : "none",
            transition: "all 0.3s ease",
          }}
        >
          <Shield size={18} />
          {scanButtonText}
          <ArrowRight size={18} />
        </motion.button>

        {/* Footer stats */}
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { icon: Database, label: "SQLite DB" },
            { icon: Activity, label: "Real-time" },
            { icon: Network, label: "REST API" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px", fontFamily: "'JetBrains Mono', monospace" }}>
              <Icon size={12} style={{ margin: "0 auto 4px" }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TargetSpecificationPanel;
