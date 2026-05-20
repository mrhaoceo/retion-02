import { Check, Star, Zap } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-slate-950 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Bảng Giá Đòn Bẩy.</h2>
          <p className="text-slate-400 text-lg">
            Khởi đầu nhỏ, dòng tiền ngay. Thanh toán 1-chạm, hệ thống tự động kích hoạt và bàn giao kịch bản.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start my-8">
          {/* Plan 1 */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-medium text-slate-300 mb-2">Gói 1: Thử Nghiệm</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-white">1.000.000</span>
              <span className="text-slate-500 font-medium">đ/tháng</span>
            </div>
            <p className="text-sm text-slate-400 mb-8 h-10">Bắt đầu áp dụng tự động hóa cơ bản cho Fanpage/Zalo.</p>
            
            <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl transition-colors mb-8 border border-slate-700">
              Quét QR Thanh Toán
            </button>

            <ul className="space-y-4">
              {['Tích hợp 1 kênh (FB hoặc Zalo)', 'Tối đa 1,000 tin nhắn/tháng', 'Kịch bản cơ bản (Không file JSON gốc)', 'Hỗ trợ Email'].map((ft, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <Check className="w-5 h-5 text-slate-500 shrink-0" /> {ft}
                </li>
              ))}
            </ul>
          </div>

          {/* Plan 2 - Recommended */}
          <div className="bg-slate-900 border-2 border-cyan-500/50 rounded-3xl p-8 relative shadow-2xl shadow-cyan-900/20 md:-mt-4 backdrop-blur-xl pb-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg">
                <Star className="w-3 h-3 fill-slate-950" /> Cỗ Máy Chốt Đơn
              </span>
            </div>
            
            <h3 className="text-xl font-medium text-white mb-2 pt-2">Gói 2: Best Choice</h3>
            <div className="mb-6">
              <div className="flex items-baseline gap-1 text-slate-400 line-through text-sm mb-1">
                20.000.000 đ
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white tracking-tight">12tr</span>
                <span className="text-slate-400 font-medium">setup</span>
              </div>
              <div className="text-cyan-400 font-medium text-sm mt-2">+ 2.000.000 đ / tháng phí nền tảng</div>
            </div>
            <p className="text-sm text-slate-400 mb-8 h-10">Hệ thống bàn giao 100%. Nhận Full quyền truy cập Kịch bản Sát thủ.</p>
            
            <button className="w-full bg-white text-slate-950 hover:bg-slate-200 shadow-xl font-bold py-4 rounded-xl transition-colors mb-8 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" /> Nhận Chuyển Giao Trọn Bộ
            </button>

            <ul className="space-y-4">
              {[
                'Nhận File JSON chuyên sâu riêng nghiệp vụ',
                'Tích hợp Đa kênh (FB, Zalo, Insta, Web)',
                '10,000 tin nhắn AI/tháng',
                'Tự động đồng bộ Data về Google Sheets',
                'Support trực tiếp Zalo 1:1',
                'Video Hướng dẫn tuỳ chỉnh Bot'
              ].map((ft, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-5 h-5 text-cyan-400 shrink-0 shadow-cyan-400" /> <span className="font-medium">{ft}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Plan 3 */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-medium text-slate-300 mb-2">Gói 3: Di Sản Doanh Nghiệp</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-white">30.000.000</span>
              <span className="text-slate-500 font-medium">trọn gói</span>
            </div>
            <p className="text-sm text-slate-400 mb-8 h-10">Giải pháp Customize. Build riêng hệ thống cho doanh nghiệp lớn.</p>
            
            <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl transition-colors mb-8 border border-slate-700">
              Đặt Lịch Tư Vấn 1:1
            </button>

            <ul className="space-y-4">
              {['May đo luồng kịch bản 100%', 'Tích hợp API ERP/CRM nội bộ', 'Huấn luyện team nội bộ vận hành', 'Bảo trì hệ thống 1 năm', 'Unlimited Users'].map((ft, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <Check className="w-5 h-5 text-slate-500 shrink-0" /> {ft}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
