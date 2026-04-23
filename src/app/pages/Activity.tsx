import { Heart, BookOpen, Wind, Smile, PenLine, Mail, UtensilsCrossed, Dumbbell, ChevronRight, Sparkles, Clock, Search } from "lucide-react";

export default function Activity() {
  const activities = [
    {
      title: "걱정 비우기",
      description: "마음속 걱정을 글로 적어 하늘로 날려보내요",
      icon: <Heart className="w-6 h-6" />,
      color: "#FF8A8A",
      bg: "#FFF0F0",
      duration: "10분",
      category: "내면 집중"
    },
    {
      title: "성찰 글쓰기",
      description: "오늘 하루의 조각들을 모아 마음을 정리해요",
      icon: <BookOpen className="w-6 h-6" />,
      color: "#6B9F7F",
      bg: "#F0F7F2",
      duration: "15분",
      category: "성찰"
    },
    {
      title: "마음 챙김 명상",
      description: "깊은 호흡과 함께 현재의 나에게 집중해요",
      icon: <Wind className="w-6 h-6" />,
      color: "#4DB6AC",
      bg: "#E0F2F1",
      duration: "5-20분",
      category: "내면 집중"
    },
    {
      title: "감사 일기",
      description: "일상 속 작은 행복들을 찾아 기록해봐요",
      icon: <Smile className="w-6 h-6" />,
      color: "#FFB74D",
      bg: "#FFF8E1",
      duration: "10분",
      category: "기록"
    },
    {
      title: "나에게 편지 쓰기",
      description: "따뜻한 응원이 필요한 나에게 편지를 써요",
      icon: <Mail className="w-6 h-6" />,
      color: "#BA68C8",
      bg: "#F3E5F5",
      duration: "20분",
      category: "기록"
    },
    {
      title: "감정 일기",
      description: "지금 내 마음이 어떤 색인지 그려보세요",
      icon: <PenLine className="w-6 h-6" />,
      color: "#4FC3F7",
      bg: "#E1F5FE",
      duration: "15분",
      category: "기록"
    },
    {
      title: "마음 챙김 식사",
      description: "한 입 한 입 맛을 느끼며 오감을 깨워요",
      icon: <UtensilsCrossed className="w-6 h-6" />,
      color: "#AED581",
      bg: "#F1F8E9",
      duration: "25분",
      category: "감각"
    },
    {
      title: "마음 챙김 운동",
      description: "몸의 움직임 속에서 평온함을 찾아요",
      icon: <Dumbbell className="w-6 h-6" />,
      color: "#90A4AE",
      bg: "#ECEFF1",
      duration: "30분",
      category: "운동"
    }
  ];

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2" style={{ color: '#3D4F3D' }}>마음 활동 센터</h1>
              <p className="text-lg" style={{ color: '#6B7F6B' }}>오늘 당신의 마음에 가장 필요한 활동은 무엇인가요?</p>
            </div>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="어떤 활동을 찾으시나요?" 
                className="w-full md:w-80 pl-12 pr-4 py-4 rounded-2xl bg-white border border-[#6B9F7F]/10 focus:ring-2 focus:ring-[#6B9F7F]/20 focus:border-[#6B9F7F] outline-none transition-all shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B9A8B]" />
            </div>
          </div>
        </header>

        {/* Featured Card */}
        <div className="mb-12 bg-white rounded-[2.5rem] p-8 border border-[#6B9F7F]/10 shadow-sm relative overflow-hidden group cursor-pointer">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6B9F7F]/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 transition-all group-hover:scale-110"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-3xl bg-[#6B9F7F] flex items-center justify-center shadow-xl shadow-[#6B9F7F]/20">
              <Sparkles className="w-12 h-12 text-white animate-pulse" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#3D4F3D' }}>오늘의 특별 추천: "깊은 명상과 이완"</h2>
              <p className="text-[#6B7F6B] mb-4">현재 분석된 심박수와 활동 기록을 바탕으로 휴식이 권장됩니다.</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <span className="px-4 py-2 bg-[#6B9F7F]/10 text-[#6B9F7F] rounded-full text-sm font-bold">집중력 향상</span>
                <span className="px-4 py-2 bg-[#BA68C8]/10 text-[#BA68C8] rounded-full text-sm font-bold">스트레스 완화</span>
              </div>
            </div>
            <button className="px-10 py-4 bg-[#6B9F7F] text-white rounded-2xl font-bold transition-all hover:shadow-lg hover:-translate-y-1">
              지금 시작하기
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-[2rem] p-8 border border-[#6B9F7F]/10 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col h-full"
            >
              <div 
                className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-sm"
                style={{ backgroundColor: activity.bg, color: activity.color }}
              >
                {activity.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#8B9A8B]">{activity.category}</span>
                  <div className="w-1 h-1 rounded-full bg-[#6B9F7F]/30" />
                  <div className="flex items-center gap-1 text-[10px] font-bold text-[#8B9A8B]">
                    <Clock className="w-3 h-3" />
                    {activity.duration}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 transition-colors group-hover:text-[#6B9F7F]" style={{ color: '#3D4F3D' }}>{activity.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7F6B' }}>{activity.description}</p>
              </div>
              <div className="mt-auto flex items-center justify-between pt-6 border-t border-[#F9F3E8]">
                <span className="text-xs font-bold text-[#6B9F7F]">2.4k 명 참여 중</span>
                <div className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center group-hover:bg-[#6B9F7F] group-hover:text-white transition-all">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

