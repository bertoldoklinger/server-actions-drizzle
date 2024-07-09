import { type NavItem } from '@/types'
import {
  CircleDollarSign,
  Landmark,
  Plus,
  User,
  UsersRound,
} from 'lucide-react'

export const NavItems: NavItem[] = [
  {
    title: 'Transações',
    icon: CircleDollarSign,
    href: '/transactions',
    color: 'text-emerald-500',
  },
  {
    title: 'Bancos',
    icon: Landmark,
    href: '/banks',
    color: 'text-emerald-500',
  },
  {
    title: 'Clientes',
    icon: User,
    href: '/clients',
    color: 'text-emerald-500',
    isChidren: true,
    children: [
      {
        title: 'Cadastrar',
        icon: Plus,
        href: '/clients/create',
        color: 'text-emerald-700',
      },
      {
        title: 'Listar',
        icon: UsersRound,
        href: '/clients',
        color: 'text-emerald-700',
      },
    ],
  },
]
