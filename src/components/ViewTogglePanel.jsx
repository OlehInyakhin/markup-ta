import { ViewToggle } from './ViewToggle'

export function ViewTogglePanel({ view, onViewChange }) {
  return (
    <section className="mb-[17px] flex justify-end pt-[10px]">
      <ViewToggle view={view} onChange={onViewChange} />
    </section>
  )
}
