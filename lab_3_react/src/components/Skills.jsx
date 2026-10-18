import Section from './Section'

// Чіпи по черзі отримують кольори палітри
const chipColors = [
  'bg-plum text-white ring-1 ring-white/20',
  'bg-wine text-white',
  'bg-crimson text-white',
  'bg-flame text-plum',
]

const skills = [
  'Python',
  'Java',
  'JavaScript, React',
  'Git, GitHub',
  'Docker',
  'Англійська — B2+',
]

function Skills() {
  return (
    <Section id="skills" title="Навички" wide>
      <ul className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <li
            key={skill}
            className={`rounded-full px-4 py-1 text-sm font-semibold ${chipColors[index % chipColors.length]}`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Skills
