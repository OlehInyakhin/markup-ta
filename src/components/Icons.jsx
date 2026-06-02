export function CalendarIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z"
        fill="currentColor"
      />
      <path
        d="M5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22ZM19 8L19.001 20H5V8H19Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function PlusIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M17.6569 16.2426L13.4142 12L17.6569 7.75736L16.2426 6.34315L12 10.5858L7.75736 6.34315L6.34315 7.75736L10.5858 12L6.34315 16.2426L7.75736 17.6569L12 13.4142L16.2426 17.6569L17.6569 16.2426Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function DoubleArrowIcon({ className = '', direction = 'right' }) {
  const rotation = direction === 'left' ? 'rotate(180 7 7)' : undefined

  return (
    <svg className={className} fill="none" viewBox="0 0 14 14" aria-hidden="true">
      <g transform={rotation}>
        <path d="M3.73917 3.5L2.91667 4.3225L5.58833 7L2.91667 9.6775L3.73917 10.5L7.23917 7L3.73917 3.5Z" fill="currentColor" />
        <path d="M7.5833 3.5L6.7608 4.3225L9.43246 7L6.7608 9.6775L7.5833 10.5L11.0833 7L7.5833 3.5Z" fill="currentColor" />
      </g>
    </svg>
  )
}

export function HeartIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21.35 10.55 20C5.4 15.24 2 12.09 2 8.25 2 5.1 4.42 2.75 7.5 2.75c1.74 0 3.41.81 4.5 2.09a6 6 0 0 1 4.5-2.09c3.08 0 5.5 2.35 5.5 5.5 0 3.84-3.4 6.99-8.55 11.76L12 21.35Z" />
    </svg>
  )
}

export function CommentIcon({ className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M16.5 3C16.5 2.175 15.825 1.5 15 1.5H3C2.175 1.5 1.5 2.175 1.5 3V12C1.5 12.825 2.175 13.5 3 13.5H13.5L16.5 16.5V3Z" fill="black"/>
    </svg>
  )
}

export function ListIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8 7h12M8 12h12M8 17h12M4.5 7h.01M4.5 12h.01M4.5 17h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  )
}

export function GridIcon({ className = '' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4.75 4.75h5.75v5.75H4.75zm8.75 0h5.75v5.75H13.5zm-8.75 8.75h5.75v5.75H4.75zm8.75 0h5.75v5.75H13.5z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  )
}
