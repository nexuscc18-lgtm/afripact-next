'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectData {
  title: string;
  location: string;
  challenge: string;
  solution: string;
  timeline: string;
  outcome: string;
  images: Array<{ src: string; caption: string }>;
}

const projectsData: Record<string, ProjectData> = {
  'driveway-tar-resurfacing': {
    title: 'Driveway Paving and Tar Resurfacing',
    location: 'Durban, South Africa',
    challenge: 'The driveway was severely worn with potholes and water pooling, creating an unsafe and unattractive surface.',
    solution: 'Removed the damaged layer, rebuilt the base with crusher stone compacted to 95 Mod AASHTO, added bitumen for waterproofing, and installed a hot laid 9.5mm tar finish. Water runoff was redesigned to prevent future potholes and stagnation.',
    timeline: '3 days',
    outcome: 'A renewed driveway with a durable tar surface, improved drainage, and long-term protection.',
    images: [
      { src: '/project1-before.jpg', caption: 'Before' },
      { src: '/project1-after.jpg', caption: 'After' },
    ],
  },
  'pavement-excavation': {
    title: 'Excavation, Weed Removal, and Pavement Preparation',
    location: 'Durban',
    challenge: 'The pavement area was overgrown with weeds, cost money to maintain, risked scratching vehicles, and retained water.',
    solution: 'Excavated to 200mm depth, 1m width, 80m length. Removed weeds, applied herbicide, compacted soil, installed SABS-approved DPC plastic, added crusher, and graded the area to improve drainage.',
    timeline: '7 days',
    outcome: 'A stable and waterproof pavement foundation with no future weed growth and improved water management.',
    images: [
      { src: '/project2-before.jpg', caption: 'Before' },
      { src: '/project2-after.jpg', caption: 'After' },
    ],
  },
  'aluminium-doors-windows': {
    title: 'Aluminium Doors and Windows Installation',
    location: 'Durban',
    challenge: 'New door and window openings were required, including aluminium frame installation and lock replacements.\n\nClient: KZN Trade & Investment Office Building',
    solution: 'Opened new structural spaces, installed aluminium frames with frosted glass, and replaced locks. Work was aligned to industry precision standards.',
    timeline: '2 days',
    outcome: 'Fully functional and visually clean aluminium doors and windows with improved security and aesthetics.',
    images: [
      { src: '/project3-door.jpg', caption: 'Door Frame Installation' },
    ],
  },
};

export default function ProjectDetailContent({ projectId }: { projectId: string }) {
  const router = useRouter();
  const project = projectsData[projectId];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-orange-500 hover:text-orange-600 font-semibold">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-96 md:h-[500px] bg-black overflow-hidden group">
        <img src={project.images[currentImageIndex].src}
          alt={`${project.title} - ${project.images[currentImageIndex].caption}`}
          className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        {project.images.length > 1 && (
          <>
            <button onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image">
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full">
          <p className="text-white font-semibold text-lg">{project.images[currentImageIndex].caption}</p>
        </div>
        {project.images.length > 1 && (
          <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
            <p className="text-white font-medium">{currentImageIndex + 1} / {project.images.length}</p>
          </div>
        )}
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm flex items-center gap-2 text-gray-500">
            <Link href="/" className="hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2 py-1">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2 py-1">Projects</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{project.title}</span>
          </nav>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
                <p className="text-xl text-gray-600">{project.location}</p>
              </div>
              {[
                { label: 'Client Challenge', content: project.challenge },
                { label: 'Afripact Solution', content: project.solution },
                { label: 'Timeline', content: project.timeline },
                { label: 'Outcome', content: project.outcome },
              ].map(({ label, content }) => (
                <div key={label}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{label}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{content}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-1">
              <div className="bg-gray-100 rounded-xl p-6 space-y-6 sticky top-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Gallery</h3>
                {project.images.map((image, index) => (
                  <div key={index} className="space-y-2">
                    <img src={image.src} alt={`${project.title} - ${image.caption}`}
                      className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                      onClick={() => setCurrentImageIndex(index)} />
                    <p className="text-sm text-gray-600 font-medium text-center">{image.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let us bring the same level of quality and professionalism to your next civil engineering project.
          </p>
          <button onClick={() => router.push('/contact')}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
