"use client"

import { useEffect, useState } from "react"
import styles from "./styles.module.css"

const name = "Luqman Yusuff"
const shuffleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function shuffleName(resolvedCharacters: number) {
  return name
    .split("")
    .map((character, index) => {
      if (character === " ") return " "
      if (index < resolvedCharacters) return character

      return shuffleCharacters[Math.floor(Math.random() * shuffleCharacters.length)]
    })
    .join("")
}

export default function IntroLoader() {
  const [displayedName, setDisplayedName] = useState("")
  const [isLeaving, setIsLeaving] = useState(false)
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const timers: number[] = []
    const intervals: number[] = []

    document.body.style.overflow = "hidden"

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayedName(name)
      timers.push(
        window.setTimeout(() => setIsLeaving(true), 500),
        window.setTimeout(() => setIsMounted(false), 700),
      )

      return () => {
        timers.forEach(window.clearTimeout)
        intervals.forEach(window.clearInterval)
        document.body.style.overflow = previousOverflow
      }
    }

    const shuffleStartsAt = 320
    const letterLockDelay = 115
    const startedAt = performance.now()

    setDisplayedName(shuffleName(0))

    const shuffleInterval = window.setInterval(() => {
      const elapsed = performance.now() - startedAt
      const resolvedCharacters = Math.max(0, Math.floor((elapsed - shuffleStartsAt) / letterLockDelay))

      if (resolvedCharacters >= name.length) {
        setDisplayedName(name)
        window.clearInterval(shuffleInterval)
        return
      }

      setDisplayedName(shuffleName(resolvedCharacters))
    }, 48)

    intervals.push(shuffleInterval)

    const shuffleEndsAt = shuffleStartsAt + name.length * letterLockDelay

    timers.push(
      window.setTimeout(() => setIsLeaving(true), shuffleEndsAt + 950),
      window.setTimeout(() => setIsMounted(false), shuffleEndsAt + 1650),
    )

    return () => {
      timers.forEach(window.clearTimeout)
      intervals.forEach(window.clearInterval)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    if (!isMounted) {
      document.body.style.overflow = ""
    }
  }, [isMounted])

  if (!isMounted) return null

  return (
    <div
      className={`${styles["intro-loader"]} ${isLeaving ? styles["intro-loader-leaving"] : ""}`}
      role="status"
      aria-label="Welcome to Luqman Yusuff"
    >
      <div className={styles["intro-grid"]} aria-hidden="true" />
      <div className={styles["intro-content"]}>
        <p className={styles["intro-eyebrow"]}>Welcome to</p>
        <h1 className={styles["intro-name"]} aria-hidden="true">
          <span>{displayedName}</span>
        </h1>
      </div>
    </div>
  )
}
