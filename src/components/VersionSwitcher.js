import { tailwindVersion } from '@/utils/tailwindVersion'
import clsx from 'clsx'
import { useRef } from 'react'

export function VersionSwitcher({ className }) {
  let selectRef = useRef()

  function submit(e) {
    e.preventDefault()
    if (selectRef.current.value === 'v1') {
      window.location = 'https://v1.tailwindcss.ru/'
    }
  }

  return (
    <form onSubmit={submit} className={clsx('relative', className)}>
      <label>
        <span className="sr-only">Версия Tailwind CSS</span>
        <select
          ref={selectRef}
          className="appearance-none block bg-transparent pr-7 py-1 text-gray-500 font-medium text-sm focus:outline-none focus:text-gray-900 transition-colors duration-200"
          onChange={submit}
        >
          <option value="v2">v{tailwindVersion}</option>
          {/* <option value="v1">v1.9.6</option> */}
        </select>
      </label>
      <svg
        className="w-5 h-5 text-gray-400 absolute top-1/2 right-0 -mt-2.5 pointer-events-none"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        />
      </svg>
    </form>
  )
}
