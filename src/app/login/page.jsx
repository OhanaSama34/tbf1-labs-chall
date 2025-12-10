'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { setCookie } from "cookies-next";

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        setCookie('admin', email + password)
        router.push('/admin')
      } else {
        const data = await response.json()
        setError(data.error || 'Login failed')
      }
    } catch (err) {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "whiteSmoke",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px"
      }}
    >
      <div
        style={{
          background: "white",
          width: "100%",
          maxWidth: "420px",
          padding: "32px",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "22px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "20px",
            fontFamily: "system-ui"
          }}
        >
          Login
        </h1>

        
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "14px"
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "14px"
            }}
          />

          {error && (
            <div
              style={{
                color: "red",
                fontSize: "14px",
                textAlign: "center",
                marginTop: "-8px"
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              background: loading ? "#7db4ff" : "#0070f3",
              color: "#fff",
              borderRadius: "8px",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.2s",
              fontSize: "15px"
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  )
}
