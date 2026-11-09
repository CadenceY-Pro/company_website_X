import { Outlet } from 'react-router-dom'
import { MegaNav } from './MegaNav'
import { PartnerMarquee } from './PartnerMarquee'
import { ScrollToTop } from './ScrollToTop'
import { Seo } from './Seo'
import { SiteFooter } from './SiteFooter'

export function Layout() {
  return (
    <div className="page">
      <Seo />
      <ScrollToTop />
      <MegaNav />
      <Outlet />
      <PartnerMarquee />
      <SiteFooter />
    </div>
  )
}
