import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa6";
import Image from "next/image";

export default function Showcase() {
  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#faf8f3]/80 border-b border-gray-200/50">
        <div className="px-4 py-4 md:px-8 flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="text-2xl">
              <Image
                src={"/brandlogo.png"}
                width={100}
                height={100}
                alt="brandlogo image"
                priority
                className="w-full h-10 object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              />
            </div>
            <span className="font-semibold text-gray-800">GTWorld-Clone</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-800">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-800">
              Terms of Use
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
              💳 Digital Banking • iOS & Android App
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Manage your finances, securely and instantly.
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With GTWorld-Clone, you can transfer funds, pay bills, manage
              cards, and monitor your account activity – all from the palm of
              your hand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button className="cursor-pointer bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                <FaApple size={20} />
                Download for iOS
              </button>
              <button className="cursor-pointer bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-emerald-700 transition">
                <BiLogoPlayStore size={20} />
                Get it on Google Play
              </button>
            </div>
            <p className="text-sm text-gray-500">
              iOS & Android • Secure Access • Bank Smarter Today
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/showcase1.png"
              alt="GTWorld-Clone phone mockup"
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
          Powerful banking with simplicity
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">💸</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Instant Transfers
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Send money to accounts across all banks instantly with secure,
              biometric authorization.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">🧾</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Bill Payments
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Easily pay utility bills, airtime, and subscriptions from one
              convenient place.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">🔒</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Card Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Freeze, unfreeze, and block your debit and credit cards instantly
              for enhanced security.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">📊</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Account Monitoring
            </h3>
            <p className="text-gray-600 leading-relaxed">
              View your transaction history, account balance, and get real-time
              alerts on your spending.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Play Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Everyday banking essentials
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Quick Feature 1 */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">
              Quick Login & Security
            </h3>
            <p className="text-gray-600">
              Access your accounts fast with Face ID or fingerprint
              authentication.
            </p>
          </div>

          {/* Quick Feature 2 */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">
              Savings Goals
            </h3>
            <p className="text-gray-600">
              Set and track personalized savings targets directly within the
              app.
            </p>
          </div>

          {/* Quick Feature 3 */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">
              Customer Support
            </h3>
            <p className="text-gray-600">
              Get instant help via in-app chat or find nearest branch/ATM
              locations.
            </p>
          </div>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg max-w-5xl mx-auto">
          <p className="text-gray-700 italic">
            GTWorld-Clone is designed for your busy life – bank when you need
            it, wherever you are. No queues, no hassle.
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
            { label: "Accounts Dashboard", imageUrl: "/showcase1.png" },
            { label: "Bill Payment", imageUrl: "/showcase2.png" },
            { label: "Products", imageUrl: "/showcase3.png" },
            { label: "Card Services", imageUrl: "/showcase1.png" },
          ].map((screen, idx) => (
            <div key={idx} className="text-center">
              <div className="rounded-3xl lg:aspect-[9/19] mb-2 flex items-center justify-center">
                <Image
                  src={screen.imageUrl}
                  alt="gtbank-clone showcase image"
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
          Built for modern banking
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          GT-Clone is a demonstration of how a digital banking platform can
          offer fast, secure, and user-friendly services. It’s designed for
          customers who want full control over their money management and a
          seamless banking experience on the go.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-12 border-t border-gray-200 max-w-5xl mx-auto">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">© 2025 GT-Clone Demo</p>
          <div className="flex justify-center gap-6 text-sm text-gray-600 mb-4">
            <a href="#" className="hover:text-gray-800">
              Privacy Policy
            </a>
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
