import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Download, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';

interface HeroDemoProps {
  onScrollToPricing: () => void;
}

export default function HeroDemo({ onScrollToPricing }: HeroDemoProps) {
  const [industry, setIndustry] = useState('');
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [demoStage, setDemoStage] = useState(0); // 0: Input, 1: Typing, 2: Chatting, 3: Lead Gen
  const [chatMessages, setChatMessages] = useState<{ sender: 'bot' | 'user', text: string }[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const startDemo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry.trim()) return;
    setIsDemoActive(true);
    setDemoStage(1);

    // Simulate chat flow sequence
    setTimeout(() => {
      setChatMessages([{ sender: 'user', text: `Tôi quan tâm đến sản phẩm bên dịch vụ ${industry} của bạn.` }]);
    }, 500);

    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        sender: 'bot', 
        text: `Chào bạn! Cảm ơn bạn đã quan tâm đến dịch vụ ${industry}. Bên mình hiện đang có ưu đãi 30% cho khách hàng mới trong hôm nay. Bạn muốn nhận tư vấn chi tiết chứ?` 
      }]);
    }, 2000);

    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: 'user', text: `Gửi mình bảng giá nhé.` }]);
    }, 4500);

    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        sender: 'bot', 
        text: `Dạ vâng, mình đã gửi bảng giá chi tiết qua tin nhắn. Để quy trình đăng ký nhanh chóng hơn, bạn vui lòng để lại số điện thoại nhé, hệ thống sẽ tự động tạo đơn ưu đãi cho bạn.` 
      }]);
    }, 6500);

    setTimeout(() => {
      setDemoStage(3); // Trigger Lead Gen
    }, 9000);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        {!isDemoActive ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Product-Led Growth Engine by Retion.ai
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Đừng xây Bot <span className="text-slate-500 line-through">trống rỗng</span>.<br/>
              Hãy để Kịch bản Sát thủ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zelimora</span> chốt đơn thay bạn.
            </h1>
            
            <p className="text-lg text-slate-400 mb-10">
              Trải nghiệm ma thuật chốt đơn tự động ngay tức thì. Không cần tài khoản. Không cần thẻ tín dụng.
            </p>

            <form onSubmit={startDemo} className="relative max-w-2xl mx-auto w-full group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-md opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative flex items-center bg-slate-900 border border-slate-700 rounded-2xl p-2 shadow-2xl transition-all focus-within:border-cyan-500/50 focus-within:ring-2 focus-within:ring-cyan-500/20">
                <input
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="Nhập ngành nghề của bạn... (VD: Bất động sản, Spa, Mỹ phẩm)"
                  className="flex-1 bg-transparent border-none text-white px-4 py-4 md:py-5 text-lg outline-none placeholder:text-slate-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-slate-950 hover:bg-slate-200 transition-colors px-6 py-4 md:py-5 rounded-xl font-bold flex items-center gap-2 whitespace-nowrap"
                >
                  Thử Ngay <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Mock Phone View */}
            <div className="relative mx-auto w-full max-w-[340px] aspect-[9/19] bg-slate-950 border-[8px] border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
              {/* Phone Header */}
              <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">Zelimora Bot ({industry || 'Demo'})</h3>
                  <p className="text-cyan-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Online
                  </p>
                </div>
              </div>

              {/* Chat Area */}
              <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                <AnimatePresence>
                  {chatMessages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                        msg.sender === 'user' 
                          ? 'bg-blue-600 text-white rounded-br-sm' 
                          : 'bg-slate-800 text-slate-200 rounded-bl-sm'
                      }`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  {demoStage > 0 && demoStage < 3 && chatMessages.length < 4 && chatMessages.length % 2 !== 0 && (
                     <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                   >
                     <div className="max-w-[85%] rounded-2xl px-4 py-3 text-sm bg-slate-800 text-slate-400 rounded-bl-sm flex gap-1 items-center">
                       <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                       <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                       <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                     </div>
                   </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Fake Input */}
              <div className="bg-slate-900 p-4 border-t border-slate-800">
                <div className="bg-slate-800 rounded-full h-10 px-4 flex items-center text-slate-500 text-sm">
                  Nhập tin nhắn...
                </div>
              </div>
            </div>

            {/* Gated Value / Context Panel */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {demoStage < 3 ? (
                  <motion.div
                    key="analyzing"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="inline-block px-4 py-2 rounded-lg bg-blue-900/30 text-blue-400 border border-blue-800/50 text-sm font-medium">
                      Live Simulation Active
                    </div>
                    <h2 className="text-3xl font-bold text-white">Bot đang tự động chốt deal 24/7.</h2>
                    <p className="text-slate-400 text-lg">
                      Đây là luồng kịch bản đã được tối ưu chuyển đổi riêng cho ngành <span className="text-white font-medium">{industry}</span>. Khách hàng cảm thấy như đang nói chuyện với người thật.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-emerald-500" /> Phản hồi trong 0.2s
                      </li>
                      <li className="flex items-center gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-emerald-500" /> Tự động xin SĐT/Data
                      </li>
                      <li className="flex items-center gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-emerald-500" /> Cập nhật thẳng vào Google Sheets
                      </li>
                    </ul>
                  </motion.div>
                ) : (
                  <motion.div
                    key="gated-value"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px]"></div>
                    
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                      <Download className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Thích kịch bản này?</h3>
                    <p className="text-slate-400 leading-relaxed mb-8">
                      Tôi đã soạn sẵn file JSON cấu trúc kịch bản chốt đơn cho mảng <strong className="text-white">{industry}</strong>. Bạn có thể Import trực tiếp vào tài khoản Retion ngay bây giờ.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Nhập SĐT / Zalo để nhận File ngay</label>
                        <div className="flex gap-2">
                          <input 
                            type="tel" 
                            placeholder="09xx xxx xxx" 
                            className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                          />
                          <button className="bg-white text-slate-950 font-semibold px-4 py-3 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap">
                            Nhận File JSON
                          </button>
                        </div>
                      </div>
                      
                      <div className="relative py-4 flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-slate-800"></div>
                        </div>
                        <span className="relative bg-slate-900 px-4 text-xs text-slate-500 uppercase tracking-wider">Hoặc quét mã QR</span>
                      </div>

                      <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://zalo.me/zelimora" alt="Zalo QR" className="w-14 h-14" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-300 font-medium tracking-tight">Trợ lý Zalo Zelimora</p>
                          <p className="text-xs text-slate-500 mt-1">Hệ thống sẽ gửi file tự động ngay khi kết nối.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
