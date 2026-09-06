import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Ar-Rashad collects, uses, and protects your information across our iOS and Android app.",
};

const sections = [
  { id: "who-we-are", label: "Who we are" },
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use-your-information", label: "How we use your information" },
  { id: "third-party-services", label: "Third-party services" },
  { id: "data-retention", label: "Data retention and deletion" },
  { id: "security", label: "Security" },
  { id: "childrens-privacy", label: "Children's privacy" },
  { id: "your-rights", label: "Your rights" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#faf8f3]/80 border-b border-gray-200/50">
        <div className="px-4 py-4 md:px-8 flex items-center justify-between max-w-5xl mx-auto">
          <Link href="/" className="flex items-center justify-center gap-2">
            <div className="text-2xl">
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
            </div>
            <span className="font-semibold text-gray-800">
              Ar-rashad Academy
            </span>
          </Link>
          <div className="hidden md:flex gap-6 text-sm text-gray-600">
            <Link href="/privacy" className="text-emerald-700 font-medium">
              Privacy Policy
            </Link>
            <a href="#" className="hover:text-gray-800">
              Terms of Use
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16"></div>

      {/* Hero */}
      <section className="px-4 md:px-8 py-12 md:py-16 max-w-3xl mx-auto">
        <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-6">Last updated: September 6, 2026</p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Ar-Rashad is an Islamic learning app that gives you access to the
          Qur&apos;an, trusted reciters, daily duas, and guided courses. This
          policy explains what information we collect when you use the Ar-Rashad
          app, why we collect it, and the choices you have. We try to keep this
          in plain language — if anything is unclear, reach out using the
          contact details below.
        </p>
      </section>

      {/* Table of contents */}
      <section className="px-4 md:px-8 max-w-3xl mx-auto mb-8">
        <div className="bg-white/60 border border-gray-200/70 rounded-xl p-6">
          <p className="text-sm font-semibold text-gray-900 mb-3">
            On this page
          </p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-gray-600 hover:text-emerald-700"
                >
                  {i + 1}. {s.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 md:px-8 pb-20 max-w-3xl mx-auto">
        <div className="space-y-14">
          <PolicySection id="who-we-are" title="1. Who we are">
            <p>
              Ar-Rashad (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is an
              Islamic learning platform available as a mobile app for iOS and
              Android, developed and operated by Rasheed Olatunde (geodevcodes).
              Ar-Rashad lets you read the Qur&apos;an, listen to reciters,
              explore duas, and take structured Islamic courses through our
              learning library.
            </p>
            <p>
              This policy applies to the Ar-Rashad mobile app and this website.
              It does not apply to third-party sites or services that we link to
              but do not control.
            </p>
          </PolicySection>

          <PolicySection
            id="information-we-collect"
            title="2. Information we collect"
          >
            <p>
              We collect only what we need to run the app and improve your
              learning experience. Depending on how you use Ar-Rashad, this can
              include:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-emerald-600">
              <li>
                <span className="font-medium text-gray-800">
                  Account information —
                </span>{" "}
                your name, email address, and profile photo when you sign up or
                sign in with email or Google. If you use social login, we
                receive the basic profile details that provider shares with us.
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  Learning activity —
                </span>{" "}
                your course progress, completed lessons, saved surahs and duas,
                reciter preferences, and assessment results, so we can let you
                pick up where you left off.
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  Location data (optional) —
                </span>{" "}
                if you grant permission, we may use approximate or precise
                location to personalize content such as local reminders. You can
                use most of the app without granting this permission.
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  Device and usage data —
                </span>{" "}
                device type, operating system, app version, crash logs, and
                general usage patterns, collected automatically to help us fix
                bugs and improve performance.
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  Payment information —
                </span>{" "}
                if you purchase a course or subscription, our payment partner,
                Paystack, processes your card or bank details directly. We never
                see or store your full card number.
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  Notification data —
                </span>{" "}
                a device token used to send you reminders about your recitation,
                duas, and course schedule, if you enable notifications.
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  Microphone access (optional) —
                </span>{" "}
                only requested for features that involve audio recording or
                playback controls, and only used while you are actively using
                that feature.
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  Advertising identifiers —
                </span>{" "}
                on iOS, we ask for permission (App Tracking Transparency) before
                using your device&apos;s advertising identifier to show more
                relevant ads. You can decline this at any time in your device
                settings.
              </li>
            </ul>
          </PolicySection>

          <PolicySection
            id="how-we-use-your-information"
            title="3. How we use your information"
          >
            <p>We use the information above to:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-emerald-600">
              <li>Create and maintain your account.</li>
              <li>
                Sync your Qur&apos;an reading progress, saved duas, and course
                activity across your devices.
              </li>
              <li>Process purchases and manage your subscription.</li>
              <li>Send reminders and updates you have opted in to receive.</li>
              <li>
                Diagnose crashes, fix bugs, and improve app performance and
                content.
              </li>
              <li>
                Personalize recommendations, such as courses or reciters you may
                be interested in.
              </li>
              <li>Keep the app secure and prevent fraud or abuse.</li>
              <li>
                Comply with legal obligations, such as tax and payment
                recordkeeping.
              </li>
            </ul>
            <p>
              We do not sell your personal information, and we do not use the
              content of your Qur&apos;an reading or duas for advertising.
            </p>
          </PolicySection>

          <PolicySection
            id="third-party-services"
            title="4. Third-party services"
          >
            <p>
              Ar-Rashad relies on a small number of trusted service providers to
              operate reliably. These providers only receive the data needed to
              perform their function:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-emerald-600">
              <li>
                <span className="font-medium text-gray-800">
                  Firebase (Google) —
                </span>{" "}
                push notifications, app infrastructure, and crash diagnostics.
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  Google Sign-In —
                </span>{" "}
                optional sign-in using your Google account.
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  Meta / Facebook —
                </span>{" "}
                optional social sign-in and analytics for how people find and
                use Ar-Rashad.
              </li>
              <li>
                <span className="font-medium text-gray-800">Paystack —</span>{" "}
                secure processing of course and subscription payments.
              </li>
            </ul>
            <p>
              Each of these providers has its own privacy policy governing how
              it handles data. We only work with providers that meet
              industry-standard security and privacy practices.
            </p>
          </PolicySection>

          <PolicySection
            id="data-retention"
            title="5. Data retention and deletion"
          >
            <p>
              We keep your account and learning data for as long as your account
              is active, so your progress and history remain available to you.
              If you delete your account, we remove your personal information
              and learning activity from our active systems within 30 days,
              except where we are required to retain certain records, such as
              payment records, for legal or accounting purposes.
            </p>
            <p>
              You can request deletion of your account and data at any time from
              within the app&apos;s profile settings, or by contacting us
              directly.
            </p>
          </PolicySection>

          <PolicySection id="security" title="6. Security">
            <p>
              We use industry-standard safeguards, including encrypted
              connections (HTTPS/TLS) and access controls, to protect your
              information. Payment details are handled entirely by our payment
              processor and are never stored on our servers. No method of
              transmission or storage is completely secure, but we work to
              continuously improve how we protect your data.
            </p>
          </PolicySection>

          <PolicySection id="childrens-privacy" title="7. Children's privacy">
            <p>
              Ar-Rashad is intended for general audiences learning about Islam,
              including younger learners under the guidance of a parent or
              guardian. We do not knowingly collect personal information from
              children without appropriate parental consent. If you believe a
              child has provided us with personal information without consent,
              please contact us and we will remove it promptly.
            </p>
          </PolicySection>

          <PolicySection id="your-rights" title="8. Your rights">
            <p>Depending on where you live, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-emerald-600">
              <li>Access the personal information we hold about you.</li>
              <li>Correct inaccurate or incomplete information.</li>
              <li>Request deletion of your account and associated data.</li>
              <li>
                Withdraw consent for optional features such as location,
                notifications, or advertising identifiers, at any time in your
                device settings.
              </li>
              <li>Request a copy of your data in a portable format.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us using the details
              below and we will respond within a reasonable timeframe.
            </p>
          </PolicySection>

          <PolicySection id="changes" title="9. Changes to this policy">
            <p>
              We may update this privacy policy from time to time as Ar-Rashad
              evolves. If we make material changes, we will update the
              &quot;Last updated&quot; date above and, where appropriate, notify
              you in the app. Continued use of Ar-Rashad after changes take
              effect means you accept the updated policy.
            </p>
          </PolicySection>

          <PolicySection id="contact" title="10. Contact">
            <p>
              If you have questions about this privacy policy or how your data
              is handled, reach out to us at{" "}
              <a
                href="mailto:support@ar-rashad.app"
                className="text-emerald-700 font-medium hover:underline"
              >
                support@ar-rashad.app
              </a>{" "}
              and we&apos;ll be glad to help.
            </p>
          </PolicySection>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-12 border-t border-gray-200 max-w-5xl mx-auto">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">© 2025 Ar-Rashad</p>
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

function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-4">{children}</div>
    </div>
  );
}
