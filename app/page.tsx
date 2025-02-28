import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <nav className="container mx-auto px-4 py-6">
          <ul className="flex justify-center space-x-8 md:space-x-12">
            <li>
              <Link href="#" className="text-zinc-400 hover:text-amber-300 transition-colors text-sm md:text-base">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-zinc-400 hover:text-amber-300 transition-colors text-sm md:text-base">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-zinc-400 hover:text-amber-300 transition-colors text-sm md:text-base">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="text-zinc-400 hover:text-amber-300 transition-colors text-sm md:text-base">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Logo Centered and Fullscreen */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-12 lg:p-24">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/create%20a%20new%20logo%20for%20grandmegas%20without%20any%20additional%20words%20and%20letters.%20come%20up%20with%20creativity%20and%20nice%20design.jpg-FGyWAvhEiYYPedKw4AErIDBVdh8bsa.jpeg"
          alt="Grand Megas Logo"
          width={1200}
          height={450}
          priority
          className="max-w-full h-auto object-contain"
        />
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-4 border-t border-zinc-800/30">
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

