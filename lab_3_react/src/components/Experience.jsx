import Section from './Section'
import JobItem from './JobItem'

const projects = [
  {
    title: 'Навчальні проєкти',
    items: ['Участь у хакатоні'],
  },
]

function Experience() {
  return (
    <Section id="experience" title="Досвід роботи">
      <p className="text-center">Комерційного досвіду роботи поки немає.</p>
      {projects.map((project) => (
        <JobItem key={project.title} {...project} />
      ))}
    </Section>
  )
}

export default Experience
