const links = [
  { href: '#about', label: 'Про мене' },
  { href: '#experience', label: 'Досвід' },
  { href: '#education', label: 'Освіта' },
  { href: '#skills', label: 'Навички' },
]

function Header({ name, role }) {
  return (
    <header className="rounded-xl border-b-4 border-flame bg-linear-to-br from-plum via-wine via-55% to-crimson px-4 py-6 text-center text-white">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {name}
      </h1>
      <p className="mt-1 mb-4 text-white/80">{role}</p>
      <nav>
        <ul className="flex flex-wrap justify-center gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white transition-colors hover:bg-flame hover:text-plum focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
