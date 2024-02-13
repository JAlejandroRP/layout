import { Account } from "../pages/Account"
import { Forms } from "../pages/Forms"
import { Tables } from "../pages/Tables"

export const links = [
  { href: '/account-settings', label: 'Account settings', component: Account },
  { href: '/tables', label: 'Tables', component: Tables },
  { href: '/forms', label: 'Forms', component: Forms },
  { href: '/sign-out', label: 'Sign out' },
  // { href: '/support', label: 'Support' },
  // { href: '/license', label: 'License' },
]