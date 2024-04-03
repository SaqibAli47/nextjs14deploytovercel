"use client"
import React from "react"
type ClientSideProviderProps = {
    children: React.ReactNode
}
const ClientSideProviderTest = ({children}: ClientSideProviderProps) => {
    return (
        <div>
            {children}
        </div>
    )
}
export default ClientSideProviderTest