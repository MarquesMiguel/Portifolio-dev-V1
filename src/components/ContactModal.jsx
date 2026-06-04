import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import vars from '../styles/vars'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const INITIAL = { name: '', email: '', message: '' }

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm]     = useState(INITIAL)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  function validate() {
    const e = {}
    if (!form.name.trim())    e.name    = 'Nome obrigatório'
    if (!form.email.trim())   e.email   = 'Email obrigatório'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email inválido'
    if (!form.message.trim()) e.message = 'Mensagem obrigatória'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit() {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  function handleReset() {
    setStatus('idle')
    setErrors({})
  }

  return (
    <>
      {/* overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)',
          zIndex: 200,
          animation: 'fadein 0.2s both',
        }}
      />

      {/* modal centralizado */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 201,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: '100%',
          maxWidth: 520,
          animation: 'fadein 0.25s both',
          pointerEvents: 'auto',
          background: vars.bg2,
          border: `1px solid ${vars.border}`,
          borderRadius: 6,
          padding: '40px 40px 36px',
          position: 'relative',
        }}>
          {/* glow */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 6,
            background: 'radial-gradient(ellipse at 50% 0%, rgba(200,240,96,0.05) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />

          {/* botão fechar */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 16, right: 16,
              background: 'transparent', border: 'none',
              color: vars.muted, fontSize: 20, cursor: 'pointer',
              lineHeight: 1, padding: 4,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = vars.text}
            onMouseLeave={e => e.target.style.color = vars.muted}
          >
            ✕
          </button>

          {status === 'success' ? (
            <SuccessState onClose={onClose} />
          ) : status === 'error' ? (
            <ErrorState onReset={handleReset} />
          ) : (
            <FormState
              form={form}
              errors={errors}
              status={status}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </>
  )
}

function FormState({ form, errors, status, onChange, onSubmit }) {
  return (
    <>
      <p style={{
        fontFamily: "'DM Mono', monospace", fontSize: 11,
        color: vars.accent, letterSpacing: '0.1em',
        textTransform: 'uppercase', marginBottom: 10,
      }}>
        contato
      </p>
      <h2 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: 28, fontWeight: 400, marginBottom: 28, lineHeight: 1.2,
      }}>
        Conta sobre seu projeto
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Field
          label="Nome" name="name" type="text"
          value={form.name} error={errors.name}
          onChange={onChange} placeholder="Seu nome"
        />
        <Field
          label="Email" name="email" type="email"
          value={form.email} error={errors.email}
          onChange={onChange} placeholder="seu@email.com"
        />
        <Field
          label="Mensagem" name="message" type="textarea"
          value={form.message} error={errors.message}
          onChange={onChange} placeholder="Descreva o que você precisa..."
        />
      </div>

      <button
        onClick={onSubmit}
        disabled={status === 'sending'}
        style={{
          marginTop: 24, width: '100%',
          padding: '13px 24px',
          background: status === 'sending' ? vars.bg3 : vars.accent,
          color: '#0e0f0d', border: 'none', borderRadius: 3,
          fontSize: 14, fontWeight: 500,
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          transition: 'background 0.2s',
        }}
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar mensagem →'}
      </button>
    </>
  )
}

function Field({ label, name, type, value, error, onChange, placeholder }) {
  const inputStyle = {
    width: '100%',
    background: vars.bg3,
    border: `1px solid ${error ? vars.accent2 : vars.border}`,
    borderRadius: 3,
    padding: '11px 14px',
    color: vars.text,
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s',
    resize: 'vertical',
  }

  return (
    <div>
      <label style={{
        display: 'block', fontSize: 12,
        color: vars.muted, marginBottom: 6,
        fontFamily: "'DM Mono', monospace",
        letterSpacing: '0.06em',
      }}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          name={name} value={value} onChange={onChange}
          placeholder={placeholder} rows={4}
          style={inputStyle}
          onFocus={e => e.target.style.borderColor = vars.accent}
          onBlur={e => e.target.style.borderColor = error ? vars.accent2 : vars.border}
        />
      ) : (
        <input
          type={type} name={name} value={value}
          onChange={onChange} placeholder={placeholder}
          style={inputStyle}
          onFocus={e => e.target.style.borderColor = vars.accent}
          onBlur={e => e.target.style.borderColor = error ? vars.accent2 : vars.border}
        />
      )}
      {error && (
        <p style={{ fontSize: 11, color: vars.accent2, marginTop: 4 }}>{error}</p>
      )}
    </div>
  )
}

function SuccessState({ onClose }) {
  return (
    <div style={{ textAlign: 'center', padding: '16px 0' }}>
      <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
      <h2 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: 26, fontWeight: 400, marginBottom: 12,
      }}>
        Mensagem enviada
      </h2>
      <p style={{ color: vars.muted, fontSize: 14, marginBottom: 28 }}>
        Vou responder em até 24 horas.
      </p>
      <button
        onClick={onClose}
        style={{
          padding: '11px 28px', background: vars.accent,
          color: '#0e0f0d', border: 'none', borderRadius: 3,
          fontSize: 14, fontWeight: 500, cursor: 'pointer',
        }}
      >
        Fechar
      </button>
    </div>
  )
}

function ErrorState({ onReset }) {
  return (
    <div style={{ textAlign: 'center', padding: '16px 0' }}>
      <div style={{ fontSize: 40, marginBottom: 16 }}>✕</div>
      <h2 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: 26, fontWeight: 400, marginBottom: 12,
      }}>
        Algo deu errado
      </h2>
      <p style={{ color: vars.muted, fontSize: 14, marginBottom: 28 }}>
        Tente novamente ou me mande email direto.
      </p>
      <button
        onClick={onReset}
        style={{
          padding: '11px 28px', background: vars.accent,
          color: '#0e0f0d', border: 'none', borderRadius: 3,
          fontSize: 14, fontWeight: 500, cursor: 'pointer',
        }}
      >
        Tentar novamente
      </button>
    </div>
  )
}