import React, { ReactNode } from 'react'
import { Header } from 'components/common/layouts/header'
import { Footer } from 'components/common/layouts/footer'
import { Hero } from 'components/domain/hero'
import css from './default.module.scss'

type LayoutProps = {
  children: ReactNode
}

export default function Default({ children }: LayoutProps) {
  return (
    <div className={css['layout-default']}>
      <Header withStrip withHero />
      <Hero />

      {children}

      <Footer />
    </div>
  )
}
