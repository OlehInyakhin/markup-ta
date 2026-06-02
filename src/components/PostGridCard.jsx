import { PostStats } from './PostStats'

export function PostGridCard({ post }) {
  return (
    <article className="h-[341px] overflow-hidden bg-white">
      <img
        src={post.image}
        alt={post.title}
        className="h-[203px] w-full object-cover"
      />

      <div className="grid h-[138px] grid-rows-[auto_auto_1fr] px-3 pb-3 pt-3">
        <div className="grid grid-cols-2 items-start gap-3">
          <p className="text-[16px] font-medium leading-none text-black">{post.dayLabel}</p>
          <p className="text-right text-[16px] font-medium leading-none text-black">{post.dateLabel}</p>
        </div>

        <div className="mt-4 grid grid-cols-2 items-start gap-3">
          <PostStats stats={post.statsPrimary} compact />
          <PostStats stats={post.statsSecondary} align="right" compact />
        </div>

        <div className="mt-auto grid grid-cols-[1fr_auto] items-end gap-3">
          <p className="text-[14px] font-medium leading-none text-black">{post.title}</p>
          <p className="text-[12px] leading-none text-black">{post.uploadedAt}</p>
        </div>
      </div>
    </article>
  )
}
