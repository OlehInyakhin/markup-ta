import { PostStats } from './PostStats'

export function PostListItem({ post }) {
  return (
    <article className="overflow-hidden bg-white sm:grid sm:h-[86px] sm:grid-cols-[86px_minmax(0,1fr)_minmax(0,1fr)_minmax(140px,1fr)] sm:items-start sm:gap-x-[30px] min-[836px]:grid-cols-[86px_240px_243px_177px]">
      <img
        src={post.image}
        alt={post.title}
        className="h-[220px] w-full object-cover sm:h-[86px] sm:w-[86px]"
      />

      <div className="grid gap-3 px-3 pb-3 pt-3 sm:contents">
        <div className="min-w-0 grid gap-[9px] sm:py-4">
          <p className="text-[16px] font-medium leading-none text-black">{post.dayLabel}</p>
          <PostStats stats={post.statsPrimary} />
        </div>

        <div className="min-w-0 grid gap-[9px] sm:py-4">
          <p className="text-[16px] font-medium leading-none text-black">{post.dateLabel}</p>
          <PostStats stats={post.statsSecondary} />
        </div>

        <div className="min-w-0 grid gap-[9px] sm:py-4">
          <p className="text-[16px] font-medium leading-none text-black">{post.title}</p>
          <p className="text-[14px] font-medium leading-none text-black">{post.uploadedAt}</p>
        </div>
      </div>
    </article>
  )
}
