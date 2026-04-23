import { ClipboardList, Plus, Play, Clock, Users, MoreVertical } from "lucide-react";

export default function TeacherSELProgram() {
  const programs = [
    { 
      id: 1, 
      title: "에피소드 4: 경청의 기적", 
      status: "진행 중", 
      students: "24/24명 참여", 
      time: "20분",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400",
      active: true
    },
    { 
      id: 2, 
      title: "에피소드 5: 갈등 해결의 실타래", 
      status: "예정", 
      students: "0/24명 참여", 
      time: "15분",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400",
      active: false
    },
    { 
      id: 3, 
      title: "에피소드 6: 나를 사랑하는 방법", 
      status: "완료", 
      students: "24/24명 참여", 
      time: "25분",
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=400",
      active: false
    }
  ];

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#FFFBF5' }}>
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#6B9F7F]/10 flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-[#6B9F7F]" />
              </div>
              <h1 className="text-4xl font-black text-[#3D4F3D] tracking-tight">SEL 교육 프로그램 관리</h1>
            </div>
            <p className="text-lg text-[#6B7F6B]">학급의 사회정서학습(SEL) 커리큘럼을 관리하고 배포하세요.</p>
          </div>

          <button className="flex items-center gap-2 px-8 py-4 bg-[#6B9F7F] text-white rounded-[1.5rem] font-black shadow-lg shadow-[#6B9F7F]/30 hover:scale-[1.02] transition-transform active:scale-[0.98]">
            <Plus className="w-5 h-5" />
            새 프로그램 추가
          </button>
        </header>

        {/* Program Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-[3rem] p-8 border border-[#6B9F7F]/10 shadow-sm flex flex-col md:flex-row gap-8 group">
              <div className="w-full md:w-48 h-48 rounded-[2rem] overflow-hidden flex-shrink-0">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="flex-1 flex flex-col justify-between py-2">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black ${
                      program.status === '진행 중' ? 'bg-[#6B9F7F]/10 text-[#6B9F7F]' : 
                      program.status === '예정' ? 'bg-[#FFB366]/10 text-[#FFB366]' : 
                      'bg-[#8B9A8B]/10 text-[#8B9A8B]'
                    }`}>
                      {program.status}
                    </span>
                    <button className="p-2 text-[#8B9A8B] hover:text-[#3D4F3D] transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="text-2xl font-black text-[#3D4F3D] mb-4">{program.title}</h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#6B7F6B]">
                      <Clock className="w-4 h-4" />
                      {program.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-[#6B7F6B]">
                      <Users className="w-4 h-4" />
                      {program.students}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-8">
                  <button className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-black transition-all ${
                    program.active ? 'bg-[#6B9F7F] text-white shadow-lg shadow-[#6B9F7F]/20' : 'bg-[#F9F3E8] text-[#8B9A8B]'
                  }`}>
                    {program.active ? <Play className="w-5 h-5 fill-current" /> : null}
                    {program.active ? '지금 배포 중' : '프로그램 시작'}
                  </button>
                  <button className="px-6 py-4 rounded-2xl bg-[#6B9F7F]/5 text-[#6B9F7F] font-black hover:bg-[#6B9F7F]/10 transition-colors">
                    상세보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
