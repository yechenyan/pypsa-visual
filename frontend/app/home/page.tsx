"use client"
import dynamic from 'next/dynamic'
 
const DynamicComponentWithNoSSR = dynamic(
  () => import('./index'),
  { ssr: false }
)
 
export default function Page() {
  return (
      <DynamicComponentWithNoSSR />
  )
}