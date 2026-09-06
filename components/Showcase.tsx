import Image from "next/image";
import Link from "next/link";

export default function Showcase() {
  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#faf8f3]/80 border-b border-gray-200/50">
        <div className="px-4 py-4 md:px-8 flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <Image
              src="/brandlogo.png"
              width={100}
              height={158}
              alt="Ar-rashad brandlogo image"
              priority
              className="h-12 w-auto"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
            />
            <span className="font-semibold text-gray-800">Ar-rashad Academy</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-gray-800">
              Privacy Policy
            </Link>
            <a href="#" className="hover:text-gray-800">
              Terms of Use
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
              📖 Islamic Learning • iOS & Android App
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Read, learn, and grow in your deen every day.
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ar-Rashad brings guided Islamic courses, the Qur&apos;an, trusted
              reciters, and daily duas, together in one app. So you can learn at
              your own pace, wherever you are.
            </p>

            <div className="flex flex-row flex-wrap items-center gap-4 mb-4">
              <a
                href="#"
                aria-label="Download on the App Store"
                className="inline-block h-13 transition hover:opacity-80"
              >
                <Image
                  src="/appstore-badge.svg"
                  alt="Download on the App Store"
                  width={155}
                  height={52}
                  className="h-full w-auto"
                />
              </a>
              <a
                href="#"
                aria-label="Get it on Google Play"
                className="inline-block h-13 transition hover:opacity-80"
              >
                <Image
                  src="/googleplay-badge.png"
                  alt="Get it on Google Play"
                  width={174}
                  height={52}
                  className="h-full w-auto"
                />
              </a>
            </div>
            <p className="text-sm text-gray-500">
              iOS & Android • Offline-friendly Recitations • Learn Anywhere
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/showcase/showcase3.png"
              alt="Ar-rashad app phone mockup"
              width={250}
              height={250}
              className="w-full max-w-sm md:max-w-xs"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 md:px-8 py-16 md:py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Everything you need to learn and connect with the Qur&apos;an
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">🎓</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Guided Courses
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Learn from structured Islamic courses and a growing library, at a
              pace that suits you.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">📖</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Qur&apos;an Reader
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Read every surah with a clean, distraction-free reader designed
              for daily recitation.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">🎧</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Trusted Reciters
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Listen to your favorite reciters with background audio playback,
              wherever you are.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">🤲</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Daily Duas
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Access authentic duas for every moment of your day, organized and
              easy to find.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Play Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Built for consistent, everyday learning
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Quick Feature 1 */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">
              Islamic Calendar
            </h3>
            <p className="text-gray-600">
              Keep track of important Islamic dates and stay on top of your
              learning schedule.
            </p>
          </div>

          {/* Quick Feature 2 */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">
              Personalized Learning
            </h3>
            <p className="text-gray-600">
              Save your progress, pick up where you left off, and get
              recommendations tailored to you.
            </p>
          </div>

          {/* Quick Feature 3 */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">
              Reminders & Notifications
            </h3>
            <p className="text-gray-600">
              Gentle reminders to keep your recitation, duas, and courses part
              of your daily routine.
            </p>
          </div>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg max-w-5xl mx-auto">
          <p className="text-gray-700 italic">
            Ar-Rashad is designed to make Islamic learning simple and consistent
            — a companion for your Qur&apos;an, duas, and studies, wherever life
            takes you.
          </p>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          In-App preview
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Screenshot placeholders */}
          {[
            { label: "Home", imageUrl: "/showcase/showcase3.png" },
            { label: "Qur'an Reader", imageUrl: "/showcase/showcase8.png" },
            { label: "Library", imageUrl: "/showcase/showcase7.png" },
            { label: "Learn", imageUrl: "/showcase/showcase4.png" },
          ].map((screen, idx) => (
            <div key={idx} className="text-center">
              <div className="rounded-3xl lg:aspect-[9/19] mb-2 flex items-center justify-center">
                <Image
                  src={screen.imageUrl}
                  alt="Ar-rashad app showcase image"
                  width={200}
                  height={200}
                  className="-full"
                />
              </div>
              <p className="text-gray-600 text-sm">{screen.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Made with Care Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Built for modern Islamic learning
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Ar-Rashad brings the Qur&apos;an, reciters, duas, and guided courses
          into one thoughtfully designed app. It&apos;s built for Muslims who
          want a reliable companion for daily recitation and learning, with a
          simple, distraction-free experience on the go.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-12 border-t border-gray-200 max-w-5xl mx-auto">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">© 2026 Ar-Rashad</p>
          <div className="flex justify-center gap-6 text-sm text-gray-600 mb-4">
            <Link href="/privacy" className="hover:text-gray-800">
              Privacy Policy
            </Link>
            <span className="text-gray-400">•</span>
            <a href="#" className="hover:text-gray-800">
              Terms of Use
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Made with 💚 by Rasheed Olatunde
          </p>
        </div>
      </footer>
    </div>
  );
}
