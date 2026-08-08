"use client";

import { useState, useRef, useEffect } from "react";
import { Mic, X, Send, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const suggestions = [
  "How much does apartment painting cost?",
  "What paints do you use?",
  "Can I upload photos for a quote?",
  "Do you serve my city?",
  "Start a free quote",
];

export function AICopilot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; text: string }[]
  >([
    {
      role: "assistant",
      text: "Hi! I'm your Paint Line Pro Voice Copilot. Ask me anything about painting, our process, or get a quote started. You can also speak to me!",
    },
  ]);
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");

    setTimeout(() => {
      let reply =
        "I'd be happy to help! For the most accurate quote, please use our AI Visualizer or multi-step quote form. You can also schedule a free contractor call.";
      const lower = text.toLowerCase();
      if (lower.includes("cost") || lower.includes("price") || lower.includes("quote")) {
        reply =
          "Pricing depends on square footage, surface condition, and scope. Most apartment units range $3.50–$6.50 per sq ft. Start the free quote wizard for an instant estimate!";
      } else if (lower.includes("sherwin") || lower.includes("benjamin") || lower.includes("paint")) {
        reply =
          "We exclusively partner with Sherwin-Williams and Benjamin Moore for premium durability and color accuracy on every project.";
      } else if (lower.includes("city") || lower.includes("area") || lower.includes("serve")) {
        reply =
          "We cover the entire Southeast — Atlanta, Charlotte, Nashville, Charleston, Miami, Birmingham, Jacksonville, Orlando and more with local partners.";
      } else if (lower.includes("upload") || lower.includes("photo") || lower.includes("visual")) {
        reply =
          "Yes! Head to the AI Visualizer page to upload photos of your space and see real Sherwin-Williams & Benjamin Moore colors applied instantly.";
      } else if (lower.includes("start") || lower.includes("quote") || lower.includes("begin")) {
        reply =
          "Great! Click 'Get Free Quote' in the nav or go to /quote. It only takes 2 minutes and you'll get an approximate quote + ability to schedule a contractor call.";
      }
      setMessages((m) => [...m, { role: "assistant", text: reply }]);
    }, 600);
  };

  const startVoice = () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Voice recognition not supported in this browser. Try Chrome.");
      return;
    }
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      send(transcript);
    };
    recognition.start();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-teal-500 text-white shadow-2xl shadow-teal-500/40 flex items-center justify-center hover:scale-110 transition-transform animate-pulse-glow",
          open && "hidden"
        )}
        aria-label="Open AI Voice Copilot"
      >
        <Mic className="w-7 h-7" />
      </button>

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-2rem)] max-w-md h-[70vh] max-h-[600px] glass rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-navy-100">
          <div className="bg-navy-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold">AI Voice Copilot</p>
                <p className="text-xs text-teal-300">Always ready to help</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-2 hover:bg-white/10 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm",
                  msg.role === "user"
                    ? "ml-auto bg-teal-500 text-white"
                    : "bg-navy-50 text-navy-900"
                )}
              >
                {msg.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {messages.length < 3 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs bg-navy-100 hover:bg-navy-200 text-navy-700 px-3 py-1.5 rounded-full transition"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="p-3 border-t border-navy-100 flex gap-2">
            <button
              onClick={startVoice}
              className={cn(
                "p-3 rounded-xl transition",
                listening
                  ? "bg-red-500 text-white animate-pulse"
                  : "bg-navy-100 text-navy-700 hover:bg-navy-200"
              )}
              title="Speak"
            >
              <Mic className="w-5 h-5" />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Ask anything..."
              className="flex-1 bg-navy-50 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              onClick={() => send(input)}
              className="p-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
