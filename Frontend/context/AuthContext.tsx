"use client"
import { useState } from "react"

// const AuthContext = create

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>('')
}