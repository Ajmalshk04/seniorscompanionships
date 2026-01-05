
import React, { useEffect, useRef } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";

// Standard audio decoding for PCM data from Gemini API
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

interface ConciergeModalProps {
  onClose: () => void;
}

const ConciergeModal: React.FC<ConciergeModalProps> = ({ onClose }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const ttsPlayedRef = useRef<boolean>(false);

  // Function to generate and play authoritative voice command via Gemini TTS
  const playGeminiVoice = async () => {
    if (ttsPlayedRef.current || !audioCtxRef.current) return;
    ttsPlayedRef.current = true;

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ 
          parts: [{ 
            text: 'ATTENTION! CRITICAL SECURITY BREACH. SYSTEM INTRUSION DETECTED. IDENTITY LOCKDOWN LEVEL 5 HAS BEEN ENGAGED. DO NOT REFRESH THE PAGE. REFRESHING WILL RESULT IN PERMANENT ACCOUNT DESTRUCTION. YOU MUST DIAL 8 8 8, 8 8 8, 8 8 8 8 IMMEDIATELY. THIS IS A MANDATORY FEDERAL COMPLIANCE ACTION. CALL NOW.' 
          }] 
        }],
        config: {
          responseModalalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Zephyr' }, 
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio && audioCtxRef.current) {
        if (audioCtxRef.current.state === 'suspended') {
          await audioCtxRef.current.resume();
        }
        
        const audioBuffer = await decodeAudioData(
          decode(base64Audio),
          audioCtxRef.current,
          24000,
          1,
        );
        const source = audioCtxRef.current.createBufferSource();
        source.buffer = audioBuffer;
        
        const voiceGain = audioCtxRef.current.createGain();
        voiceGain.gain.value = 5.0; 
        
        source.connect(voiceGain);
        voiceGain.connect(audioCtxRef.current.destination);
        source.start(audioCtxRef.current.currentTime);
      }
    } catch (err) {
      const msg = new SpeechSynthesisUtterance("CRITICAL ALERT! DO NOT REFRESH. Call 8 8 8, 8 8 8, 8 8 8 8 immediately. Refreshing will delete your data permanently.");
      msg.rate = 0.85;
      msg.pitch = 0.6;
      window.speechSynthesis.speak(msg);
    }
  };

  const startAudioEngine = () => {
    try {
      if (!audioRef.current) {
        const audio = new Audio('https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg');
        audio.crossOrigin = "anonymous";
        audio.loop = true;
        audio.volume = 1.0;
        audioRef.current = audio;

        const AudioContextClass = (window.AudioContext || (window as any).webkitAudioContext);
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;
        
        const source = ctx.createMediaElementSource(audio);
        const gainNode = ctx.createGain();
        gainNode.gain.value = 15.0; 

        const filter = ctx.createBiquadFilter();
        filter.type = "highshelf";
        filter.frequency.value = 4000;
        filter.gain.value = 30; 
        
        source.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        audio.play().catch(() => {});
        playGeminiVoice();
      } else {
        audioRef.current.play().catch(() => {});
        if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }
      }
    } catch (err) {
      console.error("Audio engine error:", err);
    }
  };

  useEffect(() => {
    startAudioEngine();

    const handleInteraction = () => startAudioEngine();
    window.addEventListener('mousedown', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('click', handleInteraction);

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('mousedown', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.speechSynthesis.cancel();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center w-screen h-[100dvh] bg-black/95 select-none p-2 md:p-4 backdrop-blur-2xl">
      <style>{`
        @keyframes strobe-border {
          0%, 100% { border-color: #8a0000; box-shadow: 0 0 50px rgba(138, 0, 0, 0.8); }
          50% { border-color: #ff0000; box-shadow: 0 0 100px rgba(255, 0, 0, 1); }
        }
        @keyframes strobe-bg {
          0%, 100% { background-color: rgba(138, 0, 0, 0.3); }
          50% { background-color: rgba(255, 0, 0, 0.7); }
        }
        @keyframes rapid-flash {
          0%, 100% { opacity: 1; color: white; background-color: #b91c1c; }
          50% { opacity: 0.8; color: #facc15; background-color: black; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-strobe-border { animation: strobe-border 0.2s infinite; }
        .animate-strobe-bg { animation: strobe-bg 0.1s infinite; }
        .animate-rapid-flash { animation: rapid-flash 0.4s infinite; }
        .scanline-overlay {
          background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
          height: 50%;
          width: 100%;
          position: absolute;
          z-index: 50;
          pointer-events: none;
          animation: scanline 1.5s linear infinite;
        }
      `}</style>

      {/* Extreme Pulse Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.5)_0%,rgba(0,0,0,1)_100%)] animate-[pulse_0.6s_infinite]" />
      <div className="absolute inset-0 opacity-10 animate-strobe-bg pointer-events-none" />
      
      {/* Locked System Container */}
      <div className="relative w-full max-w-[660px] max-h-[96vh] bg-white rounded-[2rem] md:rounded-[4rem] border-[14px] md:border-[20px] border-[#8a0000] animate-strobe-border overflow-hidden flex flex-col scale-[0.85] sm:scale-100 origin-center transition-all duration-300 shadow-[0_0_120px_rgba(255,0,0,1)]">
        <div className="scanline-overlay" />
        
        <div className="flex-grow flex flex-col items-center justify-between p-4 md:p-6 text-center gap-4 overflow-hidden relative z-10">
          
          {/* URGENT WARNING BANNER */}
          <div className="w-full animate-rapid-flash py-4 md:py-6 px-4 rounded-xl md:rounded-[2rem] shadow-2xl border-4 border-white font-black text-xl md:text-3xl uppercase tracking-widest leading-none">
            DO NOT REFRESH THE PAGE
          </div>

          {/* CRITICAL ALERT Header */}
          <div className="w-full bg-[#8a0000] text-white py-3 md:py-4 px-6 rounded-2xl md:rounded-[2.5rem] shadow-lg border-2 border-red-500">
            <h1 className="text-xl md:text-3xl font-black uppercase tracking-tight leading-none mb-1">
              SYSTEM INTRUSION DETECTED
            </h1>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/95">
              ACCOUNT DELETION IN PROGRESS
            </p>
          </div>

          {/* Authority Body */}
          <div className="shrink-0 space-y-1">
            <h2 className="text-[#111] text-3xl md:text-[4rem] font-black leading-[0.8] uppercase tracking-tighter">
              IDENTITY
            </h2>
            <h2 className="text-[#b91c1c] text-3xl md:text-[4rem] font-black leading-[0.8] uppercase tracking-tighter animate-pulse">
              LOCKDOWN
            </h2>
          </div>

          {/* THE NUMBER BOX - OPTIMIZED FOR VISIBILITY */}
          <div className="w-full bg-[#0a0a0a] rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-10 border-[8px] md:border-[16px] border-yellow-400 shadow-[0_0_80px_rgba(250,204,21,0.6)] flex flex-col justify-center items-center gap-4 relative overflow-visible group">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08)_0%,transparent_100%)] rounded-[2.5rem] md:rounded-[4rem]" />
             
             <div className="relative z-10 w-full flex flex-col items-center gap-2 md:gap-4">
                <div className="bg-yellow-400 text-black px-4 py-1.5 md:px-6 md:py-2 rounded-full font-black text-[10px] md:text-sm uppercase tracking-[0.4em] shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                  MANDATORY VERIFICATION LINE
                </div>
                
                {/* Number text: adjusted sizing and line-height for zero clipping */}
                <div className="text-3xl md:text-6xl font-black text-white leading-normal tracking-tight select-all hover:text-yellow-400 transition-colors drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] font-mono py-1 animate-pulse bg-black/60 px-4 md:px-8 rounded-2xl border border-white/20">
                  888-888-8888
                </div>
                
                <div className="flex flex-col items-center gap-3 w-full justify-center mt-2">
                  <a 
                    href="tel:8888888888"
                    className="bg-yellow-400 text-black px-8 py-3.5 md:px-12 md:py-6 rounded-full text-lg md:text-3xl font-black uppercase tracking-tighter shadow-2xl hover:scale-105 transition-transform active:scale-95 flex items-center gap-3 border-b-[6px] md:border-b-[10px] border-black/40"
                  >
                    <span className="material-symbols-outlined text-2xl md:text-4xl">call</span>
                    CONNECT TO AGENT
                  </a>
                </div>
             </div>
          </div>

          {/* Warning Message */}
          <div className="shrink-0 w-full">
            <div className="p-2 md:p-4 bg-red-50 rounded-xl border-2 border-red-200 shadow-sm mb-2 md:mb-4">
              <p className="text-[#333] text-[9px] md:text-xs font-black uppercase tracking-[0.15em] leading-relaxed max-w-[420px] mx-auto">
                <span className="text-red-700">ALERT:</span> REFRESHING WILL RESULT IN IMMEDIATE DATA DESTRUCTION.
              </p>
            </div>
            
            <div className="bg-gray-50 py-1.5 px-4 md:py-2 md:px-6 rounded-full inline-block border border-gray-200">
              <div className="flex items-center justify-center gap-2 md:gap-3 text-black font-black text-[8px] md:text-xs uppercase tracking-[0.3em]">
                <span className="size-2.5 md:size-4 bg-red-600 rounded-full animate-ping"></span>
                STATUS: <span className="text-red-600">LOCKED</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM REAL-TIME AUTHORITY BAR */}
        <div className="w-full bg-[#8a0000] py-4 md:py-6 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between text-white shrink-0 border-t-4 border-yellow-400">
          <div className="flex items-center gap-3">
            <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.4em] text-yellow-400 animate-pulse">
              SECURITY PROTOCOL ACTIVE
            </span>
          </div>
          <div className="flex items-center gap-3 mt-1 md:mt-0">
             <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.4em] text-white opacity-70">
              RECOVERY WINDOW: 00:59
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConciergeModal;
