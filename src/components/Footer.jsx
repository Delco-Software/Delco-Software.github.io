import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <a href="tel:+14848028125">+1 (484) 802-8125</a>
                <a href="mailto:lairdremediation@gmail.com" >lairdremediation@gmail.com</a>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500 text-right">
                &copy; {new Date().getFullYear()} Laird Construction & Remediation. All rights
                reserved.<br>
                </br>
                Website developed by <a href="https://www.delcosoftware.com" className="text-red-500 dark:text-red-400">Delco Software</a>
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
