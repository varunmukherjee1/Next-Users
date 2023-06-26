'use client'

import { Provider } from "react-redux"
import { Toaster } from "react-hot-toast"

import "@/styles/globals.css"

import {inter} from '@/styles/fonts'
import store from "@/store/store"

// export const metadata = {
//   title: 'Next Users',
//   description: 'Fetch and add random users to your profile',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className = {inter.className}>
        <Toaster
          position="top-center"
          reverseOrder= {false}
          toastOptions={{
            style: {
              fontSize: "1.5rem"
            }
          }}
        />
        <Provider store = {store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
