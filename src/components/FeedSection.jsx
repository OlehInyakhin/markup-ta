import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { PostGridCard } from './PostGridCard'
import { PostListItem } from './PostListItem'

gsap.registerPlugin(useGSAP)

export function FeedSection({ view, posts }) {
  const containerRef = useRef(null)
  const previousIdsRef = useRef([])
  const previousViewRef = useRef(view)
  const animationKey = `${view}:${posts.map((post) => post.id).join('-')}`

  useGSAP(
    () => {
      const currentIds = posts.map((post) => String(post.id))

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        previousIdsRef.current = currentIds
        previousViewRef.current = view
        return
      }

      const items = gsap.utils.toArray('[data-post-item]', containerRef.current)
      const previousIds = previousIdsRef.current
      const isAppendOnly =
        previousViewRef.current === view &&
        previousIds.length > 0 &&
        currentIds.length > previousIds.length &&
        previousIds.every((id, index) => currentIds[index] === id)
      const targets = isAppendOnly
        ? items.filter((item) => !previousIds.includes(item.dataset.postId ?? ''))
        : items

      if (targets.length > 0) {
        gsap.killTweensOf(targets)
        gsap.set(targets, { autoAlpha: 0, y: 24 })
        gsap.to(targets, {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: 'power2.out',
          stagger: 0.08,
          clearProps: 'opacity,visibility,transform',
        })
      }

      previousIdsRef.current = currentIds
      previousViewRef.current = view
    },
    { scope: containerRef, dependencies: [animationKey] },
  )

  if (posts.length === 0) {
    return (
      <div className="border border-dashed border-[#d9d9de] bg-white px-6 py-12 text-center text-[15px] text-[#636264]">
        No posts found for the selected range.
      </div>
    )
  }

  if (view === 'grid') {
    return (
      <div ref={containerRef} className="grid gap-y-4 sm:grid-cols-2 sm:gap-x-2 lg:grid-cols-4">
        {posts.map((post) => (
          <div key={post.id} data-post-id={post.id} data-post-item>
            <PostGridCard post={post} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div ref={containerRef} className="space-y-2">
      {posts.map((post) => (
        <div key={post.id} data-post-id={post.id} data-post-item>
          <PostListItem post={post} />
        </div>
      ))}
    </div>
  )
}
