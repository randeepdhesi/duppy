import React from 'react'

const motion = {
  div: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <div ref={ref} {...props}>{children}</div>
  )),
  section: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <section ref={ref} {...props}>{children}</section>
  )),
  nav: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <nav ref={ref} {...props}>{children}</nav>
  )),
}

const useInView = () => true
const AnimatePresence = ({ children }: any) => <>{children}</>

module.exports = { motion, useInView, AnimatePresence }
