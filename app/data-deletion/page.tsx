import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Data Deletion",
  description:
    "Request deletion of your Ar-Rashad Academy account and data.",
};

export default function DataDeletion() {
  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <Navbar />

      {/* Hero */}
      <section className="px-4 md:px-8 pt-4 pb-8 md:pb-12 max-w-3xl mx-auto">
        <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Delete your account and data
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          You can delete your Ar-Rashad account and everything associated
          with it at any time. This page explains how, and what gets
          removed.
        </p>
      </section>

      {/* Content */}
      <section className="px-4 md:px-8 pb-20 max-w-3xl mx-auto">
        <div className="space-y-6">
          <div className="bg-white/60 border border-gray-200/70 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The fastest way: in the app
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you can still sign in, you don&apos;t need to ask us — you
              can delete your account yourself:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 marker:text-emerald-600">
              <li>
                Open Ar-Rashad and go to the{" "}
                <strong className="text-gray-800">Profile</strong> tab
              </li>
              <li>
                Tap <strong className="text-gray-800">Settings</strong>
              </li>
              <li>
                Tap <strong className="text-gray-800">Delete Account</strong>{" "}
                and confirm
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              We start removing your data right away and complete the
              process within 30 days, as described below.
            </p>
          </div>

          <div className="bg-white/60 border border-gray-200/70 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Or ask us by email
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you can no longer access the app, email us from the address
              linked to your Ar-Rashad account and we&apos;ll take it from
              there.
            </p>
            <a
              href="mailto:olatunde336@gmail.com?subject=Delete%20my%20Ar-Rashad%20account&body=Please%20delete%20my%20Ar-Rashad%20account%20and%20associated%20data.%0A%0AAccount%20email%3A%20"
              className="inline-block bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-lg hover:bg-emerald-800 transition"
            >
              Request data deletion
            </a>
            <p className="text-gray-600 leading-relaxed mt-4">
              Please include the email address associated with your account.
              We&apos;ll confirm your request by replying to that address,
              complete the deletion within 30 days, and send you a final
              confirmation when it&apos;s done.
            </p>
          </div>

          <div className="bg-white/60 border border-gray-200/70 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What gets deleted
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 marker:text-emerald-600">
              <li>
                <span className="font-medium text-gray-800">
                  Account information —
                </span>{" "}
                your name, email address, and profile photo.
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  Learning activity —
                </span>{" "}
                your course progress, completed lessons, saved surahs and
                duas, reciter preferences, and assessment results.
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  Notification data —
                </span>{" "}
                any device tokens registered for reminders and alerts.
              </li>
              <li>
                <span className="font-medium text-gray-800">
                  Device and usage data —
                </span>{" "}
                crash logs and usage data tied to your account.
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Preferences that live only on your device, such as app
              settings, are removed automatically when you uninstall
              Ar-Rashad. Records we&apos;re required to keep for legal or
              accounting purposes, such as payment records, are retained
              only as long as the law requires and are not used for any
              other purpose. If you never signed in, there is no account
              data on our servers to delete. For the full picture, see our{" "}
              <Link
                href="/privacy"
                className="text-emerald-700 font-medium hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
