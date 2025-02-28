import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header with proper styling */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-black/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-6">
          <ul className="flex justify-center space-x-8 md:space-x-12">
            {[
              { href: "#", label: "Home" },
              { href: "#", label: "About" },
              { href: "#", label: "Services" },
              { href: "#", label: "Contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-zinc-400 hover:text-amber-300 transition-colors text-sm md:text-base no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Logo Centered */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-12 lg:p-24">
        <div className="w-full max-w-[800px] mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/create%20a%20new%20logo%20for%20grandmegas%20without%20any%20additional%20words%20and%20letters.%20come%20up%20with%20creativity%20and%20nice%20design.jpg-FGyWAvhEiYYPedKw4AErIDBVdh8bsa.jpeg"
            alt="Grand Megas Logo"
            width={1200}
            height={450}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 border-t border-zinc-800/30 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-zinc-500 text-xs md:text-sm">
              © {new Date().getFullYear()} Grand Megas. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

