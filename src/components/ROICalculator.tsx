import { useState } from 'react';
import { Calculator, Hourglass, TrendingUp } from 'lucide-react';

export default function ROICalculator() {
  const [messagesPerDay, setMessagesPerDay] = useState<number>(50);

  // Assumptions
  const minsPerMessage = 3; // 3 minutes spent replying to an average message manually
  const daysPerMonth = 30;
  const staffCostPerHour = 30000; // 30k VND/hour

  const totalMinsSavedPerDay = messagesPerDay * minsPerMessage;
  const hoursSavedPerMonth = (totalMinsSavedPerDay * daysPerMonth) / 60;
  const moneySavedPerMonth = hoursSavedPerMonth * staffCostPerHour;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 mb-6">
            <Calculator className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white as-h1 mb-4">
            Cỗ máy tính tiền tự động
          </h2>
          <p className="text-slate-400 text-lg">
            Kéo thanh trượt để xem một hệ thống Bot tối ưu giúp bạn tiết kiệm bao nhiêu nguồn lực.
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="mb-12">
            <div className="flex justify-between items-end mb-4">
              <label className="text-lg font-medium text-white">Số tin nhắn khách hỏi mỗi ngày</label>
              <span className="text-3xl font-bold text-cyan-400 font-mono">{messagesPerDay}</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="1000" 
              step="10"
              value={messagesPerDay} 
              onChange={(e) => setMessagesPerDay(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400 transition-all"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
              <span>10</span>
              <span>1000+</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-900/30 text-blue-400 rounded-lg">
                  <Hourglass className="w-5 h-5" />
                </div>
                <h4 className="text-slate-400 font-medium">Thời gian giải phóng</h4>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold text-white font-mono">{Math.round(hoursSavedPerMonth)}</span>
                <span className="text-slate-500">giờ / tháng</span>
              </div>
              <p className="text-sm text-slate-500 mt-4">Tương đương {Math.round(hoursSavedPerMonth / 8)} ngày công rảnh tay.</p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[40px]"></div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="p-2 bg-emerald-900/30 text-emerald-400 rounded-lg">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="text-slate-400 font-medium">Chi phí tiết kiệm</h4>
              </div>
              <div className="flex items-baseline gap-2 relative z-10">
                <span className="text-4xl md:text-5xl font-bold text-emerald-400 font-mono tracking-tighter">
                  {formatCurrency(moneySavedPerMonth).replace('₫', '')}
                </span>
                <span className="text-slate-500">VNĐ</span>
              </div>
              <p className="text-sm text-slate-500 mt-4 relative z-10">Dòng tiền chảy thẳng về túi thay vì trả lương chăm sóc KH.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
