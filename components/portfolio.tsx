'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'education', title: 'Education' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'affiliations', title: 'Affiliations' },
]

const contactLinks = [
  { title: 'Email', href: 'mailto:vincentlc0805@gmail.com' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/vincent-la-a10003280/' },
  { title: 'GitHub', href: 'https://github.com/binniela' },
]

const certifications = [
  "CompTIA Security+",
  "AWS Certified Cloud Practitioner",
  "ISC2 Certified in Cybersecurity",
  "Google Cybersecurity Certificate",
  "CYB102 Cybersecurity Intermediate (Codepath)"
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  //const { scrollYProgress } = useScroll()
  // If smoothProgress is not used, you can safely remove this line.
  // const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20, restDelta: 0.001 })

  // Correctly typing the refs as HTMLElement | null
  const sectionRefs = useRef<(HTMLElement | null)[]>(sections.map(() => null))

  useEffect(() => {
    const currentSectionRefs = sectionRefs.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    currentSectionRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      currentSectionRefs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <div className="flex min-h-screen bg-white text-gray-800 font-sans">
      <nav className="fixed left-0 top-0 h-full w-64 p-8 flex flex-col justify-between z-10 border-r border-gray-200">
        <div>
          <h1 className="text-2xl font-light mb-12">=＾● ⋏ ●＾=</h1>
          <ul className="space-y-4">
            {sections.map(({ id, title }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`text-left transition-colors duration-200 ${
                    activeSection === id ? 'text-black' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-light mb-2 text-gray-400">CONTACT</h2>
          <ul className="space-y-2">
            {contactLinks.map(({ title, href }) => (
              <li key={title}>
                <a href={href} className="text-sm text-gray-400 hover:text-black transition-colors duration-200">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main className="ml-64 w-full">
        {sections.map(({ id}, index) => (
          <motion.section
            key={id}
            id={id}
            ref={(el) => {
              sectionRefs.current[index] = el;}}
            className="min-h-screen p-16 flex items-center border-b border-gray-100 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              className="max-w-3xl z-10"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              {id === 'home' && (
                <div className="text-left">
                  <h2 className="text-[12rem] font-light text-gray-800 mb-0 leading-none">Vincent</h2>
                  <h2 className="text-[12rem] font-light text-gray-800 mb-8 leading-none">La</h2>
                </div>
              )}
              {id === 'about' && (
                <>
                  <h2 className="text-6xl font-light text-gray-300 mb-8">About Me</h2>
                  <p className="text-lg mb-4">
                    Hi! I&apos;m driven by a commitment to continuous improvement in everything I do, especially in the fields of IT, cybersecurity, and cloud technologies. Whether I&apos;m honing my technical skills, learning new tools, or collaborating with others, I&apos;m always pushing myself to evolve and deliver the best results.
                  </p>
                  <h3 className="text-2xl font-light text-gray-600 mt-8 mb-4">My Core Values</h3>
                  <ul className="space-y-4">
                    <li>
                      <strong>Integrity:</strong> Honesty and transparency are at the heart of my work. I believe in doing what&apos;s right, even when no one is watching, ensuring ethical practices in every project.
                    </li>
                    <li>
                      <strong>Excellence:</strong> I aim for the highest standards, not just in the outcome of my work but in how I approach challenges. Every day is an opportunity to learn, improve, and deliver outstanding results.
                    </li>
                    <li>
                      <strong>Continuous Improvement:</strong> I&apos;m passionate about learning and self-growth. From new certifications in cloud computing and cybersecurity to mastering emerging technologies, I&apos;m always seeking ways to stay ahead in this fast-paced industry.
                    </li>
                    <li>
                      <strong>Teamwork:</strong> Success in IT and cybersecurity often depends on strong collaboration. I&apos;m a firm believer in the power of teamwork and enjoy working alongside talented professionals to achieve shared goals.
                    </li>
                  </ul>
                </>
              )}
              {id === 'education' && (
                <>
                  <h2 className="text-6xl font-light text-gray-300 mb-8">Education</h2>
                  <h3 className="text-2xl font-light mb-2">California State Polytechnic University Pomona</h3>
                  <p className="mb-4">B.S Business Administration - Computer Information Systems</p>
                  <p className="mb-4">Specialization: Information Security and Forensics</p>
                  <p className="mb-4">Cumulative GPA: 4.0/4.0</p>
                  <h4 className="text-xl font-light mt-8 mb-2">Relevant Coursework</h4>
                  <ul className="list-disc list-inside space-y-2 mb-8">
                    <li>Cloud Infrastructure - AWS (CIS2670)</li>
                    <li>Object Oriented Programming (CIS2900)</li>
                    <li>CodePath Intermediate Cybersecurity</li>
                    <li>Intro to Networking (Nvidia)</li>
                    <li>Intro to Personal Computing (CIS1010 - Microsoft Suites)</li>
                  </ul>
                  <h4 className="text-xl font-light mt-8 mb-2">Certifications</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </>
              )}
              {id === 'experience' && (
                <>
                  <h2 className="text-6xl font-light text-gray-300 mb-8">Experience</h2>
                  <div className="mb-8">
                    <h3 className="text-2xl font-light mb-2">Auxilium - Intern</h3>
                    <p className="text-gray-600 mb-4">Los Angeles | May 2024 – May 2024</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Formatted a dataset for machine learning algorithms, ensuring data integrity and compatibility.</li>
                      <li>Utilized Excel to organize and manipulate large amounts of insurance information.</li>
                      <li>Participated in team meetings to discuss progress and improvements in deadline management.</li>
                      <li>Demonstrated frontend website for Auxilium using Next.js.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light mb-2">Bambu - Shift Leader</h3>
                    <p className="text-gray-600 mb-4">Millbrae, 203 El Camino Real | August 2021 – May 2023</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Supervised a team to ensure smooth daily operations and high customer satisfaction.</li>
                      <li>Streamlined shift transitions, resulting in faster turnover and improved workflow.</li>
                      <li>Mentored and trained new employees, enhancing overall team performance.</li>
                    </ul>
                  </div>
                </>
              )}
              {id === 'projects' && (
                <>
                  <h2 className="text-6xl font-light text-gray-300 mb-8">Projects</h2>
                  <div className="mb-8">
                    <h3 className="text-2xl font-light mb-2">Avanade Hackers</h3>
                    <p className="mb-4">
                      Developed a machine learning tool with 99% accuracy to diagnose chronic disorders. Integrated Google Gemini for personalized treatment recommendations, complying with HIPAA.
                    </p>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-light mb-2">DDOS Mitigation Script</h3>
                    <p className="mb-4">
                      Configured NGINX server with DoS mitigation rules. Verified effectiveness through NGINX Amplify, showing reduced server stress.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light mb-2">Intrusion Detection Evaluation Dataset (CIC-IDS2017)</h3>
                    <p className="mb-4">
                      Utilized Splunk, Wireshark, and Catalyst to analyze datasets and identify cyber-attacks. Presented mitigation strategies in a capstone project.
                    </p>
                  </div>
                </>
              )}
              {id === 'affiliations' && (
                <>
                  <h2 className="text-6xl font-light text-gray-300 mb-8">Affiliations</h2>
                  <div className="mb-4">
                    <h3 className="text-2xl font-light mb-2">Cal Poly Fast | Blue Team Member</h3>
                    <p>Cal Poly Pomona, 2023</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light mb-2">GDSC (Google Developer Student Club) | Project Member</h3>
                    <p>Cal Poly Pomona, 2024</p>
                  </div>
                </>
              )}
            </motion.div>
          </motion.section>
        ))}
      </main>
    </div>
  )
}
