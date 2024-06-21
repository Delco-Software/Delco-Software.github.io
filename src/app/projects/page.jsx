import Image from 'next/image'
import { Card } from '@/components/Card'
import image1 from '@/images/photos/image-1.jpg'

function ProjectCard({ project }) {
  return (
    <Card as="article">
      <Image src={project.image} alt={project.title} />
      <Card.Title>{project.title}</Card.Title>
      <Card.Description>{project.description}</Card.Description>
    </Card>
  )
}

export default function ProjectsPage() {
  // Replace this with actual data
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is a description of Project 1.',
      image: image1,
    },
    {
      id: 1,
      title: 'Project 1',
      description: 'This is a description of Project 1.',
      image: image1,
    },
    {
      id: 1,
      title: 'Project 1',
      description: 'This is a description of Project 1.',
      image: image1,
    },
    {
      id: 1,
      title: 'Project 1',
      description: 'This is a description of Project 1.',
      image: image1,
    },
    // ... more projects
  ]

  return (
    <div className="container mx-auto max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">Work Showcase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}