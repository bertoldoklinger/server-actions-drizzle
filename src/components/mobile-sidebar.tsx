'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { NavItems } from '@/constants/side-nav'
import { MenuIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SideNav } from './side-nav'

export const MobileSidebar = () => {
  const [open, setOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div className="flex items-center justify-center gap-2">
            <MenuIcon />
            <h1 className="text-lg font-semibold">T3 app template</h1>
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="w-72">
          <div className="px-1 py-6 pt-16">
            <SideNav items={NavItems} setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
