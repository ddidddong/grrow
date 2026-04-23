import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ChevronLeft, Wind, Music, Sparkles } from "lucide-react";

export default function SweetSong() {
  const [breathingPhase, setBreathingPhase] = useState<"in" | "hold" | "out">("in");
  const [timer, setTimer] = useState(4);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            if (breathingPhase === "in") {
              setBreathingPhase("hold");
              return 4;
            } else if (breathingPhase === "hold") {
              setBreathingPhase("out");
              return 6;
            } else {
              setBreathingPhase("in");
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, breathingPhase]);

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#F5F5FF' }}>
       {/* Background Animated Gradients */}
       <div className={`absolute inset-0 transition-all duration-[4000ms] ${breathingPhase === 'in' ? 'bg-blue-100/50' : breathingPhase === 'hold' ? 'bg-indigo-100/50' : 'bg-purple-100/50'}`}></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/20 blur-[150px] rounded-full"></div>

      <div className="max-w-2xl w-full relative z-10">
        <Link to="/activity" className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-8 hover:-translate-x-1 transition-transform">
          <ChevronLeft className="w-5 h-5" />
          루틴 목록으로
        </Link>

        <div className="bg-white/60 backdrop-blur-2xl rounded-[4rem] p-16 shadow-2xl border border-white/40 text-center">
          <div className="mb-12">
            <h1 className="text-4xl font-black mb-4 text-indigo-900 tracking-tight">평온의 골골송</h1>
            <p className="text-indigo-600 font-medium">따뜻한 고양이가 곁에서 골골대는 것처럼 편안한 숨을 쉬어봐요.</p>
          </div>

          <div className="relative flex items-center justify-center mb-16 h-64">
             {/* Breathing Ring */}
             <div 
               className={`absolute rounded-full border-4 border-indigo-400/30 transition-all duration-[4000ms] ease-in-out
                 ${breathingPhase === 'in' ? 'w-64 h-64 opacity-100' : breathingPhase === 'hold' ? 'w-64 h-64 opacity-80 scale-105' : 'w-32 h-32 opacity-40'}`}
             ></div>
             <div 
               className={`absolute rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 shadow-2xl transition-all duration-[4000ms] ease-in-out
                 ${breathingPhase === 'in' ? 'w-60 h-60' : breathingPhase === 'hold' ? 'w-60 h-60' : 'w-28 h-28'}`}
             ></div>
             
             <div className="relative z-10">
                <span className="text-6xl font-black text-white drop-shadow-md">{timer}</span>
             </div>
          </div>

          <div className="mb-16">
             <h2 className="text-2xl font-bold text-indigo-800 mb-2 uppercase tracking-widest">
                {breathingPhase === 'in' ? '숨을 들이마셔요' : breathingPhase === 'hold' ? '잠시 멈춰요' : '천천히 내뱉어요'}
             </h2>
             <p className="text-indigo-400 font-bold">코로 깊게 들이마시고, 입으로 얇고 길게 내보내세요.</p>
          </div>

          <button
            onClick={() => setIsActive(!isActive)}
            className={`px-12 py-6 rounded-3xl font-black text-xl shadow-xl transition-all active:scale-95
              ${isActive ? 'bg-white text-indigo-500 border-2 border-indigo-100' : 'bg-indigo-500 text-white hover:bg-indigo-600 shadow-indigo-200'}`}
          >
            {isActive ? '휴식 멈추기' : '골골송 시작하기'}
          </button>

          <div className="mt-12 flex justify-center gap-8">
             <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                   <Music className="w-6 h-6 text-indigo-400" />
                </div>
                <span className="text-[10px] font-bold text-indigo-400">명상 음악</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                   <Wind className="w-6 h-6 text-indigo-400" />
                </div>
                <span className="text-[10px] font-bold text-indigo-400">환경음</span>
             </div>
          </div>
        </div>
        
        <div className="mt-10 bg-indigo-500/10 backdrop-blur-md rounded-3xl p-6 border border-indigo-500/10 flex items-center gap-5">
           <Sparkles className="w-8 h-8 text-indigo-400" />
           <p className="text-sm text-indigo-800 leading-relaxed font-medium">
             고양이의 골골송 주파수는 긴장을 완화하고 치유를 돕는 효과가 있습니다. <br/>
             편안하게 몸을 맡겨보세요.
           </p>
        </div>
      </div>
    </div>
  );
}
