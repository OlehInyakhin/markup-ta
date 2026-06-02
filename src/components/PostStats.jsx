import { CommentIcon, HeartIcon } from './Icons'

export function PostStats({ stats, align = 'left', compact = false }) {
  const wrapperClass = compact
    ? align === 'right'
      ? 'flex-col items-end gap-[7px]'
      : 'flex-col items-start gap-[7px]'
    : align === 'right'
      ? 'flex-row justify-end gap-[18px]'
      : 'flex-row gap-[18px]'
  const itemClass = compact ? 'text-[14px]' : 'text-[14px]'

  return (
    <div className={['flex', wrapperClass].join(' ')}>
      <div className={['flex items-center gap-[6px] text-black leading-none', itemClass].join(' ')}>
        <HeartIcon className="h-[18px] w-[18px]" />
        <span className="font-medium">{stats.likes}</span>
      </div>

      <div className={['flex items-center gap-[6px] text-black leading-none', itemClass].join(' ')}>
        <CommentIcon className="h-[18px] w-[18px]" />
        <span className="font-medium">{stats.comments}</span>
      </div>
    </div>
  )
}
