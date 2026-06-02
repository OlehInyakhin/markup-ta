import { useEffect, useRef, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { CalendarIcon, DoubleArrowIcon, PlusIcon } from './Icons'

const CALENDAR_MONTH = new Date(2016, 11)

function formatDate(date) {
  if (!date) {
    return ''
  }

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${day}_${month}_${year}`
}

function formatCaption(date) {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

function formatWeekdayName(date) {
  return date.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 2)
}

function CalendarChevron({ orientation, className }) {
  return (
    <DoubleArrowIcon
      className={className}
      direction={orientation === 'left' ? 'left' : 'right'}
    />
  )
}

export function DateRangeField({ label, placeholder, value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={ref}>
      {label && <div className="mb-[3px] px-2 text-[13px] leading-none text-[#636264]">{label}</div>}

      <div className="flex h-7 min-w-[162px] items-center overflow-hidden rounded-[4px] border border-[#dedede] bg-white text-left transition hover:border-[#3d8eda]">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label="Select date range"
          className="flex-1 px-3 text-left text-[13px] font-normal leading-none tracking-[0.01em] text-[#636264]"
        >
          {value ? formatDate(value) : placeholder}
        </button>

        {value && (
          <button
            type="button"
            onClick={() => {
              onChange(null)
              setOpen(false)
            }}
            aria-label="Clear date range"
            className="flex h-full w-[27px] items-center justify-center border-r border-[#dedede] bg-[#ebebeb] text-[#5f5f5f]"
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        )}

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label="Select date range"
          className="flex h-full w-[27px] items-center justify-center border-l border-[#dedede] bg-[#ebebeb] text-[#5f5f5f]"
        >
          <CalendarIcon className="h-6 w-6" />
        </button>
      </div>

      {open ? (
        <div className="datepicker-popover absolute left-0 top-full z-20 mt-[5px] pb-[8px] w-[201px] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <DayPicker
            mode="single"
            defaultMonth={CALENDAR_MONTH}
            selected={value ?? undefined}
            onSelect={(date) => {
              onChange(date ?? null)
              setOpen(false)
            }}
            fixedWeeks
            formatters={{
              formatCaption,
              formatWeekdayName,
            }}
            components={{
              Chevron: CalendarChevron,
            }}
            showOutsideDays
            className="datepicker"
          />
        </div>
      ) : null}
    </div>
  )
}
