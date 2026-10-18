const linkClass =
  'text-crimson hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson dark:text-coral dark:focus-visible:outline-coral'

function Footer({ name }) {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t-4 border-flame pt-6 text-center">
      <h2 className="mb-4 text-xl font-bold text-plum after:mx-auto after:mt-2 after:block after:h-1 after:w-10 after:rounded-full after:bg-flame dark:text-white">
        Контакти
      </h2>
      <address className="flex flex-wrap justify-center gap-x-6 gap-y-1 not-italic">
        <p>Email: <a className={linkClass} href="mailto:mshkudor091@gmail.com">mshkudor091@gmail.com</a></p>
        <p>GitHub: <a className={linkClass} href="https://github.com/maxshkudor" target="_blank" rel="noopener noreferrer">github.com/maxshkudor</a></p>
        <p>LinkedIn: <a className={linkClass} href="https://www.linkedin.com/in/max-shkudor-17036b37b" target="_blank" rel="noopener noreferrer">linkedin.com/in/max-shkudor-17036b37b</a></p>
      </address>
      <p className="mt-4 text-muted dark:text-mist/70"><small>&copy; {year} {name}</small></p>
    </footer>
  )
}

export default Footer
