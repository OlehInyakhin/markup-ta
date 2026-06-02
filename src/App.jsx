import { useMemo, useState } from 'react'
import 'react-day-picker/dist/style.css'
import './App.css'
import { FeedSection } from './components/FeedSection'
import { FiltersBar } from './components/FiltersBar'
import { ProfileHeader } from './components/ProfileHeader'
import { ViewTogglePanel } from './components/ViewTogglePanel'
import { posts, profile } from './data/posts'

const INITIAL_VISIBLE_COUNT = {
  list: 9,
  grid: 8,
}

function normalizeDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
}

function parseISODate(value) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function App() {
  const [view, setView] = useState('list')
  const [fromDate, setFromDate] = useState(null)
  const [toDate, setToDate] = useState(null)
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT.list)

  const handleViewChange = (nextView) => {
    setView(nextView)
    setVisibleCount(INITIAL_VISIBLE_COUNT[nextView])
  }

  const handleFromDateChange = (nextDate) => {
    setFromDate(nextDate)
    setVisibleCount(INITIAL_VISIBLE_COUNT[view])
  }

  const handleToDateChange = (nextDate) => {
    setToDate(nextDate)
    setVisibleCount(INITIAL_VISIBLE_COUNT[view])
  }

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const currentDate = normalizeDate(parseISODate(post.publishedAt))
      const from = fromDate ? normalizeDate(fromDate) : null
      const to = toDate ? normalizeDate(toDate) : null

      if (from && currentDate < from) {
        return false
      }

      if (to && currentDate > to) {
        return false
      }

      return true
    })
  }, [fromDate, toDate])

  const visiblePosts = filteredPosts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredPosts.length

  return (
    <div className="app-shell">
      <div className="app-page-decor" aria-hidden="true">
        <svg className="app-page-decor__item app-page-decor__item--top-left" viewBox="0 0 689 482" fill="none">
          <path
            d="M202 435.5C144.8 498.7 82.8333 484.167 59 469L0 392.5L5 86L346.5 0L689 81C641.4 96.2 630 107.5 623.5 136.5C612.49 185.62 584.333 240.5 570.5 254C516.5 327.5 422.5 300 366 299C309.5 298 271.5 314 250.5 355.5C234.499 387.122 213 422.667 202 435.5Z"
            fill="url(#topLeftGradient)"
          />
          <defs>
            <linearGradient id="topLeftGradient" x1="595.5" y1="0.5" x2="113.5" y2="482.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#40AF79" />
              <stop offset="1" stopColor="#124757" />
            </linearGradient>
          </defs>
        </svg>

        <svg className="app-page-decor__item app-page-decor__item--bottom-right" viewBox="1310 870 310 370" fill="none">
          <path
            d="M1410.93 909.703C1424.93 976.103 1437 988.703 1445.93 990.203C1494.28 998.322 1513.93 922.203 1569.93 970.703C1625.93 1019.2 1619.43 1282.2 1498.43 1231.7C1377.43 1181.2 1372.43 1120.2 1362.43 1096.2C1354.43 1077 1328.77 1054.54 1316.93 1045.7C1262.13 997.303 1300.43 928.87 1326.43 900.703C1348.77 876.037 1396.93 843.303 1410.93 909.703Z"
            fill="url(#bottomRightGradient)"
          />
          <defs>
            <linearGradient id="bottomRightGradient" x1="1407" y1="870.203" x2="1340.69" y2="1202.74" gradientUnits="userSpaceOnUse">
              <stop stopColor="#40AF79" />
              <stop offset="1" stopColor="#124757" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <main className="app-main relative mx-auto max-w-[836px] px-4 pb-16 pt-0 sm:px-6 lg:px-0">
        <div className="app-top-panel relative mb-4 min-h-[172px] py-4">
          <ProfileHeader
            profile={profile}
            filterBar={
              <FiltersBar
                fromDate={fromDate}
                toDate={toDate}
                onFromDateChange={handleFromDateChange}
                onToDateChange={handleToDateChange}
              />
            }
          />
        </div>

        <ViewTogglePanel view={view} onViewChange={handleViewChange} />

        <section className="app-posts-list">
          <FeedSection view={view} posts={visiblePosts} />

          {hasMore ? (
            <div className="mt-[33px] flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((current) => current + 4)}
                className="h-7 min-w-[111px] rounded-full border border-[#929292] px-5 text-[11px] font-medium tracking-[-0.03em] text-[#929292] transition hover:border-[#3d8eda] hover:text-[#3d8eda]"
              >
                LOAD MORE
              </button>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  )
}

export default App
