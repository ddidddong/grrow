import { Book, Sparkles, Users, MessageSquareHeart, MessageCircleCode } from "lucide-react";
import { Link } from "react-router";

export default function Cooperation() {
  const features = [
    {
      title: "감정 책갈피",
      description: "너의 성찰 글에서 반짝이는 감정 단어들을 모아 책갈피로 만들어보자.",
      icon: Book,
      color: "#6B9F7F",
      bg: "#E8F5E9",
      tag: "정서 문해력",
      status: "32개 수집됨"
    },
    {
      title: "단짝 냥이 키우기",
      description: "너의 성장을 먹고 자라는 단짝 냥이! 활동 포인트로 냥이의 공간을 예쁘게 꾸며줘.",
      icon: Sparkles,
      color: "#FFB366",
      bg: "#FFF3E0",
      tag: "동기 부여",
      status: "Lv.12 성장 중",
      link: "/cooperation/character"
    },
    {
      title: "우리 반 캣타워",
      description: "친구들과 힘을 합쳐 거대한 캣타워(학급 퀘스트)를 완성하고 협동 역량을 키워봐!",
      icon: Users,
      color: "#8FBC8F",
      bg: "#F1F8F4",
      tag: "소통·협력",
      status: "퀘스트 진행 중"
    },
    {
      title: "핑크 젤리 응원",
      description: "친구에게 따스한 핑크 젤리 응원 메시지를 보내 건강한 정서 안전망을 만들어보자.",
      icon: MessageSquareHeart,
      color: "#FF9999",
      bg: "#FFE8E8",
      tag: "긍정 관계",
      status: "새 응원 5건"
    },
    {
      title: "대나무 숲",
      description: "누구에게도 말하지 못한 고민을 털어놓고, AI 챗봇의 누적 데이터 및 진단 결과 기반 정서적 지지와 공감을 받아보세요.",
      icon: MessageCircleCode,
      color: "#8FAADC",
      bg: "#EBF0FA",
      tag: "정서적 지지",
      status: "24시간 대기 중"
    }
  ];

  return (
    <div className="p-8 min-h-screen" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2 shadow-sm inline-block" style={{ color: '#3D4F3D' }}>Grrow 플레이</h1>
          <p className="text-lg" style={{ color: '#6B7F6B' }}>함께 성장하고 마음을 나누는 우리들의 공간</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div 
                key={i} 
                className="group bg-white rounded-[2.5rem] p-8 shadow-sm border border-[#6B9F7F]/10 transition-all hover:shadow-xl hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div 
                    className="w-16 h-16 rounded-3xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" 
                    style={{ backgroundColor: feature.bg }}
                  >
                    <Icon className="w-8 h-8" style={{ color: feature.color }} strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest" style={{ backgroundColor: `${feature.color}20`, color: feature.color }}>
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#3D4F3D' }}>{feature.title}</h3>
                  <p className="text-[#6B7F6B] text-sm leading-relaxed mb-8">
                    {feature.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-[#F9F3E8]">
                  <span className="text-xs font-bold" style={{ color: '#8B9A8B' }}>{feature.status}</span>
                  <Link 
                    to={feature.link || "#"}
                    className="px-5 py-2.5 rounded-xl text-white text-sm font-bold shadow-md transition-all hover:brightness-110"
                    style={{ backgroundColor: feature.color }}
                  >
                    입장하기
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Class Status Banner */}
        <div className="mt-12 bg-white rounded-[2.5rem] p-8 shadow-sm border border-[#6B9F7F]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-[#F1F8F4] rounded-full flex items-center justify-center border-4 border-white shadow-inner">
               <Users className="w-10 h-10 text-[#6B9F7F]" />
            </div>
            <div>
              <h4 className="text-xl font-bold" style={{ color: '#3D4F3D' }}>우리 반 협력 온도</h4>
              <p className="text-[#6B7F6B]">함께 미션을 완료하여 마음 온도를 높여보세요!</p>
            </div>
          </div>
          <div className="flex-1 max-w-md w-full">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-bold text-[#6B9F7F]">82% 목표 달성 중</span>
              <span className="text-sm font-bold text-[#8B9A8B]">Lv.5 협동 마스터</span>
            </div>
            <div className="w-full h-4 bg-[#F9F3E8] rounded-full overflow-hidden shadow-inner">
               <div className="h-full bg-gradient-to-r from-[#6B9F7F] to-[#8FBC8F]" style={{ width: '82%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
