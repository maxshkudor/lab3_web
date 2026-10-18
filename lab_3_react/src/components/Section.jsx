// Спільна обгортка секції: усі утилітарні класи оголошено в одному місці
function Section({ id, title, wide = false, children }) {
  return (
    <section
      id={id}
      className={`rounded-xl border border-t-4 border-line border-t-crimson p-4 sm:p-6 dark:border-night-line dark:border-t-crimson ${
        wide ? 'md:col-span-2' : ''
      }`}
    >
      <h2 className="mb-4 text-center text-xl font-bold text-plum after:mx-auto after:mt-2 after:block after:h-1 after:w-10 after:rounded-full after:bg-flame dark:text-white">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default Section
