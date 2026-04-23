'use client'

import { useState, useEffect, useRef } from 'react'
import GhostIcon from '@/components/icons/GhostIcon'

type Role = 'user' | 'duppy'
type Message = { role: Role; text: string }

const conversation: Message[] = [
  { role: 'user',  text: 'Check half-inch drywall at Burnaby.' },
  { role: 'duppy', text: '16 units in stock at Burnaby — $8.40/sheet. Shall I draft an order?' },
  { role: 'user',  text: 'Yes — Pacific Coast Builders, 24 sheets.' },
  { role: 'duppy', text: 'Done. Order #4821 in BisTrack. Invoice to Jim: $201.60 + tax. Delivery set for Friday. Anything else?' },
]

const CHAR_DELAY = 22
const THINK_DELAY = 900
const USER_PAUSE = 800
const END_PAUSE = 4200

function delay(ms: number) {
  return new Promise<void>((res) => setTimeout(res, ms))
}

export default function DuppyTerminal() {
  const [messages, setMessages] = useState<Message[]>([])
  const [typing, setTyping] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const cancelRef = useRef(false)

  useEffect(() => {
    cancelRef.current = false

    const run = async () => {
      while (!cancelRef.current) {
        setMessages([])
        setTyping('')
        setIsThinking(false)
        await delay(1200)

        for (const msg of conversation) {
          if (cancelRef.current) return

          if (msg.role === 'user') {
            await delay(USER_PAUSE)
            if (cancelRef.current) return
            setMessages((prev) => [...prev, msg])
          } else {
            setIsThinking(true)
            await delay(THINK_DELAY)
            if (cancelRef.current) return
            setIsThinking(false)

            let built = ''
            for (const char of msg.text) {
              if (cancelRef.current) return
              built += char
              setTyping(built)
              await delay(CHAR_DELAY)
            }
            setMessages((prev) => [...prev, msg])
            setTyping('')
            await delay(600)
          }
        }

        await delay(END_PAUSE)
      }
    }

    run()
    return () => { cancelRef.current = true }
  }, [])

  useEffect(() => {
    const el = messagesContainerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, typing, isThinking])

  return (
    <div
      data-testid="phone-placeholder"
      className="relative mx-auto w-full max-w-[340px]"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-[40px] blur-3xl scale-90 pointer-events-none glow-pulse"
        style={{ background: 'radial-gradient(ellipse, rgba(232,148,58,0.35) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Phone shell */}
      <div className="relative rounded-[36px] bg-duppy-dark border border-white/10 overflow-hidden shadow-2xl" style={{ minHeight: '580px' }}>

        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-5 pb-2">
          <span className="text-white/30 text-[10px] font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <span className="w-3 h-1 bg-white/30 rounded-full" />
            <span className="w-1.5 h-1.5 rounded-full bg-duppy-amber/80" />
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-3 border-b border-white/8">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-duppy-card flex items-center justify-center">
              <GhostIcon size={20} color="#E8943A" />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-duppy-dark" />
          </div>
          <div>
            <p className="text-white text-sm font-semibold">Duppy</p>
            <p className="text-green-400/80 text-[10px]">Connected to Crown OS</p>
          </div>
        </div>

        {/* Messages */}
        <div ref={messagesContainerRef} className="flex flex-col gap-3 px-4 py-4 overflow-y-auto" style={{ minHeight: '420px', maxHeight: '420px' }}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start items-end gap-2'}`}
            >
              {msg.role === 'duppy' && (
                <div className="w-6 h-6 rounded-full bg-duppy-card flex items-center justify-center shrink-0 mb-1">
                  <GhostIcon size={12} color="#E8943A" />
                </div>
              )}
              <div
                className={`rounded-2xl px-3.5 py-2.5 max-w-[76%] text-xs leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-duppy-amber text-white rounded-br-sm'
                    : 'bg-duppy-card text-white/90 rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Thinking dots */}
          {isThinking && (
            <div className="flex justify-start items-end gap-2">
              <div className="w-6 h-6 rounded-full bg-duppy-card flex items-center justify-center shrink-0">
                <GhostIcon size={12} color="#E8943A" />
              </div>
              <div className="bg-duppy-card rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-duppy-amber/70 dot-1" />
                <span className="w-1.5 h-1.5 rounded-full bg-duppy-amber/70 dot-2" />
                <span className="w-1.5 h-1.5 rounded-full bg-duppy-amber/70 dot-3" />
              </div>
            </div>
          )}

          {/* Active typing */}
          {typing && (
            <div className="flex justify-start items-end gap-2">
              <div className="w-6 h-6 rounded-full bg-duppy-card flex items-center justify-center shrink-0">
                <GhostIcon size={12} color="#E8943A" />
              </div>
              <div className="bg-duppy-card text-white/90 rounded-2xl rounded-bl-sm px-3.5 py-2.5 max-w-[76%] text-xs leading-relaxed">
                {typing}
                <span className="inline-block w-0.5 h-3 bg-duppy-amber ml-0.5 cursor-blink align-text-bottom" />
              </div>
            </div>
          )}

        </div>

        {/* Input bar */}
        <div className="px-4 pb-6 pt-2 border-t border-white/8">
          <div className="flex items-center gap-2 bg-duppy-card rounded-full px-4 py-2.5">
            <span className="text-duppy-muted/40 text-xs flex-1">Say something…</span>
            <div className="w-6 h-6 rounded-full bg-duppy-amber/20 flex items-center justify-center">
              <GhostIcon size={12} color="#E8943A" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
