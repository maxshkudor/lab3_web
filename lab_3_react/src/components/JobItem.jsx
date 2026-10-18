// Компонент для повторного використання: один запис про проєкт або досвід
function JobItem({ title, items }) {
  return (
    <article className="mt-3 rounded-xl bg-blush-alt p-4 dark:bg-night-alt">
      <h3 className="mb-2 text-center text-lg font-semibold text-plum dark:text-white">
        {title}
      </h3>
      <ul className="mx-auto w-fit list-disc ps-6">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export default JobItem
