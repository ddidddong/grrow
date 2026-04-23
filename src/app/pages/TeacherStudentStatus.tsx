import { UserCheck, Search, Filter, ArrowUpRight, MessageSquare, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function TeacherStudentStatus() {
  const [searchTerm, setSearchTerm] = useState("");

  const students = [
    { id: 1, name: "이정서", mood: "맑음", moodEmoji: "☀️", lastActivity: "에피소드 4 완료", status: "stable", score: 85 },
    { id: 2, name: "이민우", mood: "흐림", moodEmoji: "☁️", lastActivity: "마음연못 일기 작성", status: "warning", score: 42 },
    { id: 3, name: "박지성", mood: "비", moodEmoji: "🌧️", lastActivity: "감정 실타래 풀기 중", status: "danger", score: 28 },
    { id: 4, name: "최유진", mood: "맑음", moodEmoji: "☀️", lastActivity: "에피소드 4 완료", status: "stable", score: 92 },
    { id: 5, name: "정다은", mood: "맑음", moodEmoji: "☀️", lastActivity: "달콤 명상 완료", status: "stable", score: 78 },
    { id: 6, name: "강현우", mood: "안개", moodEmoji: "🌫️", lastActivity: "활동 미참여 (3일)", status: "warning", score: 55 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return '#6B9F7F';
      case 'warning': return '#FFB366';
      case 'danger': return '#FF8A80';
      default: return '#8B9A8B';
    }
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#6B9F7F]/10 flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-[#6B9F7F]" />
              </div>
              <h1 className="text-4xl font-black text-[#3D4F3D] tracking-tight">학생별 활동 현황</h1>
            </div>
            <p className="text-lg text-[#6B7F6B]">우리 반 학생들의 실시간 정서 상태와 활동 참여도를 확인하세요.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B9A8B]" />
              <input 
                type="text" 
                placeholder="학생 이름 검색..." 
                className="pl-12 pr-6 py-3 bg-white rounded-2xl border border-[#6B9F7F]/10 focus:outline-none focus:ring-2 focus:ring-[#6B9F7F]/20 w-64 font-bold text-[#3D4F3D]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="p-3 bg-white rounded-2xl border border-[#6B9F7F]/10 hover:bg-[#6B9F7F]/5 transition-colors">
              <Filter className="w-5 h-5 text-[#6B7F6B]" />
            </button>
          </div>
        </header>

        {/* Student Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <div key={student.id} className="bg-white rounded-[2.5rem] p-8 border border-[#6B9F7F]/10 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5" style={{ backgroundColor: `${getStatusColor(student.status)}20` }}>
                <div className="h-full" style={{ backgroundColor: getStatusColor(student.status), width: `${student.score}%` }}></div>
              </div>

              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#F9F3E8] flex items-center justify-center text-2xl">
                    {student.moodEmoji}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#3D4F3D] mb-1">{student.name}</h3>
                    <p className="text-sm font-bold" style={{ color: getStatusColor(student.status) }}>
                      마음 온도: {student.score}점
                    </p>
                  </div>
                </div>
                <button className="p-2 rounded-xl bg-[#6B9F7F]/5 text-[#6B9F7F] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#F9F3E8]/50 border border-[#6B9F7F]/5">
                  <p className="text-xs font-black text-[#8B9A8B] mb-1">최근 활동</p>
                  <p className="font-bold text-[#3D4F3D]">{student.lastActivity}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#6B9F7F] text-white font-bold text-sm shadow-sm hover:bg-[#5a8a6d] transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    마음 전하기
                  </button>
                  {student.status !== 'stable' && (
                    <button className="p-3 rounded-xl bg-[#FF8A80]/10 text-[#FF8A80] hover:bg-[#FF8A80]/20 transition-colors">
                      <AlertCircle className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
