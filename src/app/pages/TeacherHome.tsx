import { LayoutDashboard, Users, MessageSquare, Heart, GraduationCap, ClipboardCheck, BarChart3, Settings } from "lucide-react";

export default function TeacherHome() {
  const stats = [
    { label: "전체 학생 수", value: "24명", icon: Users, color: "#6B9F7F" },
    { label: "평균 정서 온도", value: "36.5°", icon: Heart, color: "#FF8A80" },
    { label: "미답변 고민", value: "3건", icon: MessageSquare, color: "#FFB366" },
  ];

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-[#3D4F3D] mb-2 tracking-tight">선생님 안녕하세요! 👋</h1>
          <p className="text-lg text-[#6B7F6B]">오늘 우리 반 학생들의 마음 날씨는 맑음입니다.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-[#6B9F7F]/10 shadow-sm flex items-center gap-6">
                <div className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center" style={{ backgroundColor: `${stat.color}15` }}>
                  <Icon className="w-8 h-8" style={{ color: stat.color }} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#8B9A8B] mb-1">{stat.label}</p>
                  <p className="text-3xl font-black text-[#3D4F3D]">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Dashboard Preview */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="bg-white rounded-[3rem] p-10 border border-[#6B9F7F]/10 shadow-sm">
             <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-[#3D4F3D] flex items-center gap-3">
                   <BarChart3 className="w-6 h-6 text-[#6B9F7F]" />
                   우리 반 정서 통계
                </h3>
                <button className="text-sm font-bold text-[#6B9F7F]">상세보기</button>
             </div>
             <div className="h-64 bg-[#B4D4C3]/10 rounded-[2.5rem] flex items-center justify-center border-2 border-dashed border-[#B4D4C3]/30">
                <p className="text-[#8B9A8B] font-bold">통계 데이터 로딩 중...</p>
             </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 border border-[#6B9F7F]/10 shadow-sm">
             <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-[#3D4F3D] flex items-center gap-3">
                   <ClipboardCheck className="w-6 h-6 text-[#FFB366]" />
                   미완료 SEL 교육
                </h3>
                <button className="text-sm font-bold text-[#6B9F7F]">목록보기</button>
             </div>
             <div className="space-y-4">
                {[
                  { title: "에피소드 4: 경청의 기적", studentCount: "12/24 완료" },
                  { title: "오늘의 Grrow 글쓰기", studentCount: "18/24 완료" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-[#F9F3E8]/30">
                     <p className="font-bold text-[#3D4F3D]">{item.title}</p>
                     <span className="text-sm font-black text-[#6B9F7F]">{item.studentCount}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
