import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CareerDetailPage } from './pages/CareerDetailPage'
import { CareersPage } from './pages/CareersPage'
import { HomePage } from './pages/HomePage'
import { PulsePage } from './pages/PulsePage'
import { RoadmapPage } from './pages/RoadmapPage'
import { TeamPage } from './pages/TeamPage'
import { pages } from './pages/pageContent'
import { SubPage } from './pages/SubPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/pulse" element={<PulsePage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/:slug" element={<CareerDetailPage />} />
        {pages.map((page) => (
          <Route key={page.path} path={page.path} element={<SubPage page={page} />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
