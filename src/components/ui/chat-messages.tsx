"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  content: string;
  timestamp?: string;
}

export interface ChatMessagesProps {
  messages?: ChatMessage[];
  autoPlay?: boolean;
  autoPlayDelay?: number;
  typingDuration?: number;
  showReplay?: boolean;
  interactive?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
}

const DEFAULT_MESSAGES: ChatMessage[] = [
  {
    id: "1",
    sender: "assistant",
    content:
      "Hi — I'm the BazaarBraker advisor. What cover are you looking at today?",
  },
  {
    id: "2",
    sender: "user",
    content: "Which term plan fits a 32-year-old with one child?",
  },
  {
    id: "3",
    sender: "assistant",
    content:
      "Start with ₹1 Cr cover to age 60. Next, compare claim ratios and riders side by side — I can walk you through.",
  },
  {
    id: "4",
    sender: "user",
    content: "What should I check before I buy?",
  },
  {
    id: "5",
    sender: "assistant",
    content:
      "Focus on claim settlement ratio, waiting periods, and exclusions in plain language — not just the premium.",
  },
  {
    id: "6",
    sender: "user",
    content: "Can you compare health plans the same way?",
  },
  {
    id: "7",
    sender: "assistant",
    content:
      "Yes — term, health, motor, and travel are live. Ask about a situation and I'll decode the options clearly.",
  },
];

const easeOut = [0.32, 0.72, 0, 1] as const;

function AdvisorMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--bb-primary)] font-[family-name:var(--font-outfit)] text-[10px] font-bold tracking-tight text-white",
        className
      )}
      aria-hidden
    >
      bb
    </span>
  );
}

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ duration: 0.28, ease: easeOut }}
      className="flex items-end gap-2.5"
    >
      <AdvisorMark className="size-7 text-[9px]" />
      <div className="inline-flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-[#eef1f6] px-4 py-3">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="size-1.5 rounded-full bg-[var(--bb-primary)]"
            animate={{ opacity: [0.25, 1, 0.25], y: [0, -3, 0] }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              delay: i * 0.14,
              ease: easeOut,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.sender === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: easeOut }}
      className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "flex max-w-[85%] items-end gap-2.5",
          isUser && "flex-row-reverse"
        )}
      >
        {!isUser && <AdvisorMark className="size-7 text-[9px]" />}
        <div
          className={cn(
            "rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed tracking-[-0.01em]",
            isUser
              ? "rounded-br-md bg-[var(--bb-primary)] text-white"
              : "rounded-bl-md bg-[#eef1f6] text-[var(--bb-ink)]"
          )}
        >
          {message.content}
        </div>
      </div>
    </motion.div>
  );
}

export function ChatMessages({
  messages = DEFAULT_MESSAGES,
  autoPlay = true,
  autoPlayDelay = 1800,
  typingDuration = 1400,
  showReplay = true,
  interactive = false,
  title = "BazaarBraker.ai",
  subtitle = "Cover questions, clearly",
  className,
}: ChatMessagesProps) {
  const [visibleCount, setVisibleCount] = useState(
    autoPlay ? 0 : messages.length
  );
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(messages);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isAutoPlaying = useRef(false);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  const revealNext = useCallback(
    async (index: number) => {
      if (index >= chatMessages.length) {
        isAutoPlaying.current = false;
        return;
      }

      const message = chatMessages[index];

      if (message.sender === "assistant") {
        setIsTyping(true);
        await new Promise((r) => setTimeout(r, typingDuration));
        setIsTyping(false);
      }

      setVisibleCount(index + 1);
      await new Promise((r) => setTimeout(r, 100));
      scrollToBottom();

      await new Promise((r) =>
        setTimeout(
          r,
          Math.max(
            400,
            autoPlayDelay -
              (message.sender === "assistant" ? typingDuration : 0) -
              100
          )
        )
      );

      if (isAutoPlaying.current) {
        void revealNext(index + 1);
      }
    },
    [chatMessages, autoPlayDelay, typingDuration, scrollToBottom]
  );

  const replay = useCallback(() => {
    setVisibleCount(0);
    setIsTyping(false);
    setChatMessages(messages);
    isAutoPlaying.current = true;
    setTimeout(() => void revealNext(0), 100);
  }, [messages, revealNext]);

  useEffect(() => {
    setChatMessages(messages);
    if (autoPlay) {
      setVisibleCount(0);
      isAutoPlaying.current = true;
      const timer = setTimeout(() => void revealNext(0), 500);
      return () => {
        clearTimeout(timer);
        isAutoPlaying.current = false;
      };
    }
    setVisibleCount(messages.length);
    return undefined;
  }, [messages, autoPlay, revealNext]);

  useEffect(() => {
    scrollToBottom();
  }, [visibleCount, isTyping, scrollToBottom]);

  const handleSend = useCallback(() => {
    if (!inputValue.trim() || !interactive) return;

    const newMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      content: inputValue.trim(),
    };

    setChatMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setVisibleCount((prev) => prev + 1);

    setTimeout(() => {
      const assistantReply: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: "assistant",
        content:
          "Good question — compare cover amount, claim ratios, and exclusions next. I can walk through a shortlist with you.",
      };
      setChatMessages((prev) => [...prev, assistantReply]);
      setVisibleCount((prev) => prev + 1);
    }, typingDuration + 500);
  }, [inputValue, interactive, typingDuration]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={cn("bb-shell", className)}>
      <div className="bb-shell__inner relative flex h-full min-h-[480px] flex-col overflow-hidden bg-[var(--bb-surface)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
        {/* Soft cobalt atmosphere — not purple mesh */}
        <div
          className="pointer-events-none absolute -top-24 -right-16 size-56 rounded-full bg-[var(--bb-primary)]/[0.07] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-10 size-48 rounded-full bg-[var(--bb-primary)]/[0.05] blur-3xl"
          aria-hidden
        />

        {/* Header */}
        <div className="relative z-[1] flex items-center justify-between gap-3 border-b border-[var(--bb-hairline-soft)] bg-[var(--bb-surface)]/90 px-4 py-3.5 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <AdvisorMark />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="truncate font-[family-name:var(--font-outfit)] text-sm font-semibold tracking-tight text-[var(--bb-ink)]">
                  {title}
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--bb-primary-soft)] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--bb-primary)] uppercase">
                  <span className="size-1.5 rounded-full bg-[var(--bb-semantic-up)]" />
                  Live
                </span>
              </div>
              <p className="mt-0.5 truncate text-xs text-[var(--bb-muted)]">
                {subtitle}
              </p>
            </div>
          </div>

          {showReplay && (
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={replay}
              aria-label="Replay conversation"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--bb-surface-soft)] px-3 py-1.5 text-xs font-medium text-[var(--bb-body)] ring-1 ring-[var(--bb-hairline)] transition-colors hover:bg-[var(--bb-primary-soft)] hover:text-[var(--bb-primary)]"
            >
              <RotateCcw className="size-3.5" strokeWidth={1.75} />
              Replay
            </motion.button>
          )}
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          role="log"
          aria-label="Chat messages"
          aria-live="polite"
          className="relative z-[1] flex-1 space-y-3.5 overflow-y-auto px-4 py-5 sm:px-5 [scrollbar-width:thin] [scrollbar-color:var(--bb-hairline)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--bb-hairline)] [&::-webkit-scrollbar-track]:bg-transparent"
        >
          {chatMessages.slice(0, visibleCount).map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          <AnimatePresence>{isTyping && <TypingIndicator />}</AnimatePresence>
        </div>

        {/* Input island */}
        <div className="relative z-[1] border-t border-[var(--bb-hairline-soft)] bg-[var(--bb-surface)] p-3 sm:p-4">
          <div className="flex items-center gap-2 rounded-full bg-[var(--bb-surface-soft)] py-1.5 pr-1.5 pl-4 ring-1 ring-[var(--bb-hairline)] transition-[box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-within:ring-[var(--bb-primary)]/25 focus-within:shadow-[0_0_0_3px_rgba(0,82,255,0.08)]">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={!interactive}
              placeholder={
                interactive
                  ? "Ask about cover..."
                  : "Demo — tap Replay to watch again"
              }
              aria-label={
                interactive ? "Type your message" : "Chat input (demo mode)"
              }
              className="min-w-0 flex-1 bg-transparent py-2 text-sm text-[var(--bb-ink)] outline-none placeholder:text-[var(--bb-muted-soft)] disabled:cursor-not-allowed"
            />
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleSend}
              disabled={!interactive || !inputValue.trim()}
              aria-label="Send message"
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                interactive && inputValue.trim()
                  ? "bg-[var(--bb-primary)] text-white"
                  : "bg-[var(--bb-surface)] text-[var(--bb-muted-soft)] ring-1 ring-[var(--bb-hairline)]"
              )}
            >
              <Send className="size-3.5" strokeWidth={1.75} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatMessages;
