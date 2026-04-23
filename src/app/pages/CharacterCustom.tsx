import { useState } from "react";
import { ChevronLeft, Gift, ClipboardList, User as UserIcon, Palette, Droplets, ToyBrick, Utensils, Zap } from "lucide-react";
import { Link } from "react-router";

export default function CharacterCustom() {
  const [energy, setEnergy] = useState(855);
  const [experience, setExperience] = useState(30.35);
  const [foodCount, setFoodCount] = useState(157);
  const [toyCount, setToyCount] = useState(25);

  const menuItems = [
    { icon: Gift, label: "매일 뽑기", sub: "하루 1번 선물" },
    { icon: ClipboardList, label: "매일 미션", sub: "사료&장난감" },
    { icon: UserIcon, label: "집사 미션", sub: "활동 보상" },
    { icon: Palette, label: "꾸미기", sub: "아이템 장착" },
  ];

  return (
    <div className="min-h-screen bg-[#EBEFFF] flex flex-col items-center p-6 relative overflow-hidden">
      {/* Header */}
      <div className="w-full max-w-lg flex items-center justify-between mb-8 z-10">
        <Link to="/cooperation" className="p-3 bg-white/50 backdrop-blur-md rounded-2xl border border-white">
          <ChevronLeft className="w-6 h-6 text-[#3D4F3D]" />
        </Link>
        <h1 className="text-xl font-bold text-[#3D4F3D]">말랑이 가꾸기</h1>
        <div className="w-12"></div>
      </div>

      {/* Top Menu Icons */}
      <div className="w-full max-w-lg grid grid-cols-4 gap-4 mb-12 z-10">
        {menuItems.map((item, i) => (
          <button key={i} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-white transition-transform hover:scale-110">
              <item.icon className="w-7 h-7 text-[#6B9F7F]" strokeWidth={1.5} />
            </div>
            <span className="text-xs font-bold text-[#3D4F3D]">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Character Stage */}
      <div className="relative flex-1 flex flex-col items-center justify-center w-full max-w-lg mb-8">
        {/* Decorative elements */}
        <div className="absolute top-[10%] left-[-20%] w-[400px] h-[400px] bg-white/20 blur-[100px] rounded-full"></div>
        
        {/* Cat Tree Background */}
        <div className="relative w-full aspect-square flex items-center justify-center">
            <img 
               src="/grrow/assets/growth_tree.png" 
               className="absolute w-full opacity-20 filter grayscale blur-sm" 
               alt="bg"
            />
            {/* The Main Character */}
            <div className="relative z-20 group">
                <div className="absolute inset-0 bg-white/40 blur-[80px] rounded-full group-hover:scale-125 transition-transform"></div>
                <img 
                    src="/grrow/assets/character.png" 
                    alt="Mallangi" 
                    className="w-64 h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-bounce-slow" 
                />
                
                {/* Accessory Overlay (Example: Ribbon) */}
                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-16 h-8 bg-red-400 rounded-full blur-[2px] opacity-60"></div>
            </div>
            
            {/* Floor Items */}
            <div className="absolute bottom-10 flex gap-4">
                <div className="w-12 h-12 bg-white/80 backdrop-blur rounded-full shadow-sm flex items-center justify-center">🧶</div>
                <div className="w-12 h-12 bg-white/80 backdrop-blur rounded-full shadow-sm flex items-center justify-center">🐟</div>
            </div>
        </div>
        
        <h2 className="text-3xl font-black text-[#3D4F3D] tracking-tight mt-4">말랑이</h2>
      </div>

      {/* Status & Control Panel */}
      <div className="w-full max-w-md bg-white rounded-[3rem] p-8 shadow-xl shadow-[#6B9F7F]/10 z-20 mb-6">
        {/* Level & Energy Bar */}
        <div className="mb-8">
           <div className="flex items-center justify-between mb-3 px-2">
              <div className="flex items-center gap-2">
                 <span className="bg-[#6B9F7F] text-white text-[10px] font-black px-2 py-0.5 rounded-lg">레벨 12</span>
                 <span className="text-sm font-bold text-[#6B9F7F]">에너지 {energy} · 경험치 3배 &gt;</span>
              </div>
              <span className="text-sm font-black text-[#3D4F3D]">{experience}%</span>
           </div>
           <div className="w-full h-5 bg-[#F9F3E8] rounded-full overflow-hidden shadow-inner p-1">
              <div 
                className="h-full bg-gradient-to-r from-[#6B9F7F] to-[#A5D6A7] rounded-full transition-all duration-1000" 
                style={{ width: `${experience}%` }}
              ></div>
           </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
           <button 
             onClick={() => setFoodCount(f => Math.max(0, f - 1))}
             className="bg-[#F1F8F4] p-6 rounded-[2.5rem] flex flex-col items-center gap-3 transition-all hover:scale-105 active:scale-95 group"
           >
              <div className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center shadow-sm group-hover:shadow-md">
                 <Utensils className="w-7 h-7 text-[#6B9F7F]" />
              </div>
              <div className="text-center">
                 <p className="text-sm font-black text-[#3D4F3D]">밥 주기</p>
                 <p className="text-xs font-bold text-[#8B9A8B]">{foodCount}개 보유</p>
              </div>
           </button>
           <button 
             onClick={() => setToyCount(t => Math.max(0, t - 1))}
             className="bg-[#FFF8F1] p-6 rounded-[2.5rem] flex flex-col items-center gap-3 transition-all hover:scale-105 active:scale-95 group"
           >
              <div className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center shadow-sm group-hover:shadow-md">
                 <ToyBrick className="w-7 h-7 text-[#FFB366]" />
              </div>
              <div className="text-center">
                 <p className="text-sm font-black text-[#3D4F3D]">놀아주기</p>
                 <p className="text-xs font-bold text-[#8B9A8B]">{toyCount}개 보유</p>
              </div>
           </button>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
