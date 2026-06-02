export function ViewToggle({ view, onChange }) {
  return (
    <div className="inline-flex items-center gap-[19px] pb-2">
      <button
        type="button"
        aria-label="Grid view"
        aria-pressed={view === 'grid'}
        onClick={() => onChange('grid')}
        className="grid h-[24px] w-[24px] grid-cols-3 grid-rows-3 gap-[2px] [&_span]:transition-all"
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} className={view === 'grid' ? 'bg-[#3d8eda]' : 'bg-[#c8c7c7]'} />
        ))}
      </button>

      <button
        type="button"
        aria-label="List view"
        aria-pressed={view === 'list'}
        onClick={() => onChange('list')}
        className="grid h-[24px] w-[24px] grid-cols-[6px_15px] grid-rows-3 items-center gap-x-[3px] gap-y-[2px] [&_span]:transition-all"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="contents">
            <span className={view === 'list' ? 'h-[6px] w-[6px] bg-[#3d8eda]' : 'h-[6px] w-[6px] bg-[#c8c7c7]'} />
            <span className={view === 'list' ? 'h-[2px] w-[15px] bg-[#3d8eda]' : 'h-[2px] w-[15px] bg-[#c8c7c7]'} />
          </div>
        ))}
      </button>
    </div>
  )
}
