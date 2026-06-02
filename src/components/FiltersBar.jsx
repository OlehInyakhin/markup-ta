import { DateRangeField } from './DateRangeField'

export function FiltersBar({ fromDate, toDate, onFromDateChange, onToDateChange }) {
  return (
    <div className="mt-[18px] px-0 md:mt-[17px] w-full">
      <div className="flex justify-center flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:gap-x-[22px] md:justify-start">
        <div className="min-w-[44px] text-[16px] leading-none text-black sm:pb-[7px]">Date</div>

        <DateRangeField placeholder="from" value={fromDate} onChange={onFromDateChange} />
        <DateRangeField placeholder="to" value={toDate} onChange={onToDateChange} />
      </div>
    </div>
  )
}
