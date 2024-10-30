import Link from 'next/link'

export default function Header({l}: any) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">{l?.header.links.home}</Link>
          </li>
          <li>
            <Link href="/about">{l?.header.links.about}</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
