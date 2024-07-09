import { cn } from '@/lib/utils'
import Link from 'next/link'
import { MobileSidebar } from './mobile-sidebar'

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-4">
        <Link
          href={'/'}
          className="hidden items-center justify-between gap-2 md:flex"
        >
          <span className="text-2xl font-bold text-white tracking-tighter px-3 py-1 rounded-sm bg-[#36D7A1]">
            WEE
          </span>{' '}
          <span className=" text-2xl font-extrabold tracking-tighter bg-white rounded-sm text-[#36D7A1]">
            PAY
          </span>
        </Link>
        <div className={cn('block md:!hidden')}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <h1>Olá Bertoldo Klinger!</h1>
        </div>
      </nav>
    </div>
  )
}
