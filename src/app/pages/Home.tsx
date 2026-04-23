import { Link } from "react-router";
import { Battery, Sparkles, Target, TrendingUp, Award, Users, Star, ChevronRight, CheckCircle2, Circle, Heart } from "lucide-react";

export default function Home() {
  const favoriteActivities = [
    { title: "평온의 골골송", desc: "호흡에 집중하며 마음을 안정시켜요", icon: "🧘", time: "10분", color: "#E0F2F1" },
    { title: "마음 연못", desc: "오늘 하루를 돌아보며 생각을 정리해요", icon: "✍️", time: "15분", color: "#F3E5F5" },
    { title: "행복 꾹꾹이", desc: "오늘 감사했던 일들을 기록해요", icon: "🙏", time: "10분", color: "#FFF3E0" },
  ];

  const todayActivities = [
    { title: "무지개 일기", completed: true, type: "정서" },
    { title: "실타래 풀기", completed: true, type: "Grrow 루틴" },
    { title: "Grrow 에피소드 1", completed: false, type: "학습" },
  ];

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative mb-12 bg-white rounded-[2.5rem] p-10 overflow-hidden shadow-sm border border-[#6B9F7F]/10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B4D4C3]/30 text-[#4A634A] text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              오늘의 Grrow 지수 상위 10%
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: '#3D4F3D' }}>
              안녕하세요 서영님, <br />
              <span style={{ color: '#6B9F7F' }}>평온한 하루</span> 되세요! 👋
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#6B7F6B' }}>
              Grrow 버디 '말랑이'와 함께 오늘의 Grrow 성장을 향해 <br />
              한 걸음 더 나아가 볼까요?
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-[#6B9F7F] text-white rounded-2xl font-bold hover:shadow-lg transition-all transform hover:-translate-y-1">
                감정 체크인 시작하기
              </button>
              <button className="px-8 py-4 bg-white border-2 border-[#6B9F7F] text-[#6B9F7F] rounded-2xl font-bold hover:bg-[#6B9F7F]/5 transition-all">
                말랑이와 대화하기
              </button>
            </div>
          </div>
          <div className="relative w-full max-w-[400px]">
            <div className="absolute inset-0 bg-[#6B9F7F]/10 blur-[100px] rounded-full"></div>
            <img 
              src="/grrow/assets/character.png" 
              alt="Mind Buddy" 
              className="relative z-10 w-full h-auto drop-shadow-2xl animate-bounce-slow"
              style={{ animation: 'bounce-slow 3s ease-in-out infinite' }}
            />
          </div>
        </div>

        {/* Main Menu Shortcuts (1-Row Section) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Grrow 루틴", icon: Heart, color: "#6B9F7F", bg: "#E8F5E9", path: "/activity", desc: "나를 돌보는 다양한 활동" },
            { title: "Grrow 클래스", icon: TrendingUp, color: "#8FBC8F", bg: "#F1F8F4", path: "/growth", desc: "나의 정서 성장 기록 확인" },
            { title: "Grrow 플레이", icon: Users, color: "#FFB366", bg: "#FFF3E0", path: "/cooperation", desc: "함께 나누는 마음 공동체" },
          ].map((menu, i) => (
            <Link 
              key={i} 
              to={menu.path}
              className="group bg-white p-8 rounded-[2rem] border border-[#6B9F7F]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-6"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110" 
                style={{ backgroundColor: menu.bg }}
              >
                <menu.icon className="w-8 h-8" style={{ color: menu.color }} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1" style={{ color: '#3D4F3D' }}>{menu.title}</h3>
                <p className="text-sm" style={{ color: '#6B7F6B' }}>{menu.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Favorites Section */}
          <div className="xl:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2" style={{ color: '#3D4F3D' }}>
                <Star className="w-6 h-6 text-[#FFD4A8] fill-[#FFD4A8]" />
                나의 즐겨 찾기
              </h2>
              <button className="text-sm font-medium flex items-center gap-1" style={{ color: '#6B9F7F' }}>
                전체보기 <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {favoriteActivities.map((act, i) => (
                <div key={i} className="group bg-white p-6 rounded-3xl border border-[#6B9F7F]/10 hover:shadow-xl transition-all cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl text-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: act.color }}>
                    {act.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#3D4F3D' }}>{act.title}</h3>
                  <p className="text-sm mb-4 line-clamp-2" style={{ color: '#6B7F6B' }}>{act.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2 py-1 rounded-lg bg-[#F9F3E8]" style={{ color: '#6B9F7F' }}>{act.time}</span>
                    <button className="w-8 h-8 rounded-full bg-[#6B9F7F] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Checklist */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2" style={{ color: '#3D4F3D' }}>
                <Target className="w-6 h-6 text-[#6B9F7F]" />
                오늘의 활동
              </h2>
              <span className="text-sm font-bold bg-[#6B9F7F]/10 px-3 py-1 rounded-full" style={{ color: '#6B9F7F' }}>
                2/3 완료
              </span>
            </div>
            <div className="space-y-4 bg-white p-6 rounded-3xl border border-[#6B9F7F]/10 shadow-sm">
              {todayActivities.map((activity, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${activity.completed ? 'opacity-60 grayscale-[0.5]' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.completed ? 'bg-[#6B9F7F] text-white' : 'bg-[#F9F3E8]'}`}>
                    {activity.completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6 text-[#6B9F7F]/30" />}
                  </div>
                  <div className="flex-1">
                    <p className={`font-bold transition-all ${activity.completed ? 'line-through text-[#6B7F6B]' : 'text-[#3D4F3D]'}`}>
                      {activity.title}
                    </p>
                    <span className="text-xs font-medium" style={{ color: '#8B9A8B' }}>{activity.type}</span>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-[#F9F3E8]">
                <div className="flex justify-between text-sm mb-2">
                  <span style={{ color: '#6B7F6B' }}>일일 미션 달성도</span>
                  <span className="font-bold" style={{ color: '#6B9F7F' }}>66%</span>
                </div>
                <div className="w-full h-2 bg-[#F9F3E8] rounded-full overflow-hidden">
                  <div className="h-full bg-[#6B9F7F] transition-all" style={{ width: '66.6%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Activities Grid */}
        <div className="mt-12">
           <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#3D4F3D' }}>
            <Award className="w-6 h-6 text-[#FFB366]" />
            지금 추천하는 Grrow 루틴
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "유리병 편지", tag: "위로", bg: "bg-orange-50" },
              { title: "실타래 풀기", tag: "인지", bg: "bg-blue-50" },
              { title: "마음 식탁", tag: "감각", bg: "bg-green-50" },
              { title: "마음 피트니스", tag: "운동", bg: "bg-purple-50" },
            ].map((rec, i) => (
              <div key={i} className={`p-6 rounded-3xl border border-[#6B9F7F]/10 hover:shadow-lg transition-all cursor-pointer ${rec.bg}`}>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-lg mb-4 inline-block shadow-sm" style={{ color: '#6B9F7F' }}>
                  {rec.tag}
                </span>
                <h4 className="font-bold text-lg mb-2" style={{ color: '#3D4F3D' }}>{rec.title}</h4>
                <div className="flex items-center gap-2 text-sm" style={{ color: '#6B7F6B' }}>
                   55명이 오늘 완료함
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

