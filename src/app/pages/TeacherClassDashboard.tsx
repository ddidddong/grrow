import { BarChart3, TrendingUp, Users, Heart, Calendar, ArrowRight } from "lucide-react";

export default function TeacherClassDashboard() {
  const classStats = [
    { label: "평균 행복지수", value: "78%", change: "+5%", icon: Heart, color: "#6B9F7F" },
    { label: "활동 참여율", value: "92%", change: "+2%", icon: Users, color: "#FFB366" },
    { label: "오늘의 평균 온도", value: "36.8°", change: "-0.2°", icon: TrendingUp, color: "#FF8A80" },
  ];

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#6B9F7F]/10 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-[#6B9F7F]" />
            </div>
            <h1 className="text-4xl font-black text-[#3D4F3D] tracking-tight">우리반 대시보드</h1>
          </div>
          <p className="text-lg text-[#6B7F6B]">학급 전체의 정서 흐름과 활동 통계를 데이터로 확인하세요.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {classStats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-[#6B9F7F]/10 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${stat.color}15` }}>
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <span className={`text-sm font-black px-3 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-sm font-bold text-[#8B9A8B] mb-1">{stat.label}</p>
              <p className="text-4xl font-black text-[#3D4F3D]">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mood Trend Chart Placeholder */}
          <div className="bg-white rounded-[3rem] p-10 border border-[#6B9F7F]/10 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-[#3D4F3D] flex items-center gap-3">
                <Calendar className="w-6 h-6 text-[#6B9F7F]" />
                주간 정서 온도 추이
              </h3>
            </div>
            <div className="aspect-[16/9] bg-[#6B9F7F]/5 rounded-[2.5rem] border-2 border-dashed border-[#6B9F7F]/20 flex items-center justify-center flex-col gap-4">
               <div className="flex items-end gap-3 h-32">
                  {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                    <div key={i} className="w-8 bg-[#6B9F7F] rounded-t-lg transition-all hover:opacity-80" style={{ height: `${h}%` }}></div>
                  ))}
               </div>
               <p className="text-[#8B9A8B] font-bold">최근 7일간의 데이터입니다.</p>
            </div>
          </div>

          {/* Activity Breakdown */}
          <div className="bg-white rounded-[3rem] p-10 border border-[#6B9F7F]/10 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-[#3D4F3D] flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#FFB366]" />
                인기 활동 순위
              </h3>
              <button className="text-[#6B9F7F] font-bold text-sm flex items-center gap-1">전체보기 <ArrowRight className="w-4 h-4" /></button>
            </div>
            <div className="space-y-6">
              {[
                { title: "달콤 명상", count: "142회", percent: 85, color: "#6B9F7F" },
                { title: "마음 연못", count: "98회", percent: 65, color: "#FFB366" },
                { title: "감정 실타래", count: "76회", percent: 45, color: "#FF8A80" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm font-black">
                    <span className="text-[#3D4F3D]">{item.title}</span>
                    <span className="text-[#8B9A8B]">{item.count}</span>
                  </div>
                  <div className="w-full h-3 bg-[#F9F3E8] rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${item.percent}%`, backgroundColor: item.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
