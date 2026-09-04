import { useEffect, useId, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

interface ChatQuestion {
  question: string
  answer: string
  action?: 'contact'
}

interface ChatMessage {
  id: string
  sender: 'bot' | 'user'
  text: string
}

const CONTACT_REDIRECT_DELAY_MS = 900

export const Chatbot = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const titleId = useId()

  const questions: ChatQuestion[] = t('chatbot.questions') || []
  const greeting: string = t('chatbot.greeting')

  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'greeting', sender: 'bot', text: greeting },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView?.({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  const handleQuestionClick = (item: ChatQuestion) => {
    const userMessage: ChatMessage = {
      id: `${Date.now()}-user`,
      sender: 'user',
      text: item.question,
    }
    const botMessage: ChatMessage = {
      id: `${Date.now()}-bot`,
      sender: 'bot',
      text: item.action === 'contact' ? `${item.answer} ${t('chatbot.contactRedirect')}` : item.answer,
    }

    setMessages((prev) => [...prev, userMessage, botMessage])

    if (item.action === 'contact') {
      window.setTimeout(() => {
        navigate('/contact')
        setIsOpen(false)
      }, CONTACT_REDIRECT_DELAY_MS)
    }
  }

  const handleRestart = () => {
    setMessages([{ id: 'greeting', sender: 'bot', text: greeting }])
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div
          role="dialog"
          aria-labelledby={titleId}
          className="mb-4 w-[calc(100vw-3rem)] max-w-sm flex flex-col overflow-hidden rounded-2xl border border-edge bg-surface shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-obsidian px-4 py-3">
            <div>
              <p id={titleId} className="font-display font-bold text-games-bright leading-tight">
                {t('chatbot.title')}
              </p>
              <p className="text-xs text-obsidian-dim">{t('chatbot.subtitle')}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label={t('chatbot.closeLabel')}
              className="text-obsidian-dim hover:text-games-bright transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 max-h-80 overflow-y-auto px-4 py-4 space-y-3 bg-bg">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm font-mono ${
                    message.sender === 'user'
                      ? 'bg-games text-ink rounded-br-sm'
                      : 'bg-surface text-ink border border-edge rounded-bl-sm'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="border-t border-edge px-4 py-3 space-y-2">
            <p className="text-2xs uppercase tracking-wide text-dim font-semibold">
              {t('chatbot.quickRepliesLabel')}
            </p>
            <div className="flex flex-wrap gap-2">
              {questions.map((item) => (
                <button
                  key={item.question}
                  onClick={() => handleQuestionClick(item)}
                  className="text-xs px-3 py-1.5 rounded-full border border-edge text-muted hover:border-games hover:text-games transition-colors"
                >
                  {item.question}
                </button>
              ))}
              <button
                onClick={handleRestart}
                className="text-xs px-3 py-1.5 rounded-full border border-edge text-dim hover:text-ink transition-colors"
              >
                {t('chatbot.restart')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? t('chatbot.closeLabel') : t('chatbot.openLabel')}
        className="w-14 h-14 rounded-full bg-obsidian border border-games-bright text-games-bright shadow-glow-games flex items-center justify-center hover:scale-105 transition-transform duration-300"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
        )}
      </button>
    </div>
  )
}

export default Chatbot
