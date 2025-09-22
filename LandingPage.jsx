import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function LandingPage() {
  const [currentReview, setCurrentReview] = useState(0);
  const [showTOS, setShowTOS] = useState(false);
  const [showPP, setShowPP] = useState(false);

  const reviews = [
    { name: "Sarah Johnson", title: "Sales Manager", text: "AI 360° completely changed how I approach clients. It's like having a secret weapon in every meeting." },
    { name: "David Lee", title: "Account Executive", text: "The contract checker saved me from missing a critical clause. Worth every penny!" },
    { name: "Maria Gomez", title: "Business Development Lead", text: "Meeting Memory means I never forget client needs. It's incredible for follow-ups." },
    { name: "James Carter", title: "Founder", text: "Client Intel gave me insights I could never find on my own. Closed deals faster!" },
    { name: "Emily White", title: "Sales Consultant", text: "This tool is now essential in my workflow. Highly recommend!" },
  ];

  const nextReview = () => setCurrentReview((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentReview + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow">
        <h1 className="text-2xl font-bold text-indigo-600">AI 360°</h1>
        <a href="https://ai-360-begin.created.app/account/signin" className="text-indigo-600 hover:underline">Log in</a>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl font-extrabold">
          Close <span className="text-indigo-600">3x More Deals</span> with <span className="text-pink-500">AI Sales Intelligence</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700">Your unfair advantage in sales and contracts.</p>
        <Button asChild className="mt-6 rounded-full px-6 py-3 text-lg bg-indigo-600 hover:bg-indigo-700">
          <a href="https://buy.stripe.com/aFa9ASbfw5qQ3pL0pA3cc04">Get Lifetime Access – One Time Payment of $150</a>
        </Button>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-6 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-indigo-600">Client Intel</h3>
            <p className="mt-2 text-gray-700">Instant insights on your prospects from just a LinkedIn or company website link.</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-pink-500">Meeting Memory</h3>
            <p className="mt-2 text-gray-700">After uploading a meeting recording, get summaries of key points and a ready-to-send follow-up email to all meeting participants.</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-indigo-600">Contract Checker</h3>
            <p className="mt-2 text-gray-700">Scan contracts for red flags and get improved negotiation points instantly.</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-pink-500">Contract Generator</h3>
            <p className="mt-2 text-gray-700">Generate ready-to-use contracts tailored to your needs in seconds.</p>
          </CardContent>
        </Card>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">What Our Users Say</h3>
        <div className="relative flex items-center justify-center">
          <Button variant="ghost" onClick={prevReview} className="absolute left-0">
            <ChevronLeft />
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {getVisibleReviews().map((review, idx) => (
              <Card key={idx} className="shadow-md">
                <CardContent className="p-6">
                  <p className="italic text-gray-700">“{review.text}”</p>
                  <p className="mt-4 font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="ghost" onClick={nextReview} className="absolute right-0">
            <ChevronRight />
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6">
        <Button asChild className="rounded-full px-6 py-3 text-lg bg-indigo-600 hover:bg-indigo-700">
          <a href="https://buy.stripe.com/aFa9ASbfw5qQ3pL0pA3cc04">Get Lifetime Access – One Time Payment of $150</a>
        </Button>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">FAQs</h3>
        <div className="space-y-4">
          {[ 
            { q: "What is AI 360°?", a: "AI 360° is a suite of AI-powered tools for sales professionals, including Client Intel, Meeting Memory, Contract Checker, and Contract Generator." },
            { q: "How much does AI 360° cost?", a: "You get lifetime access for a one-time payment of $150." },
            { q: "How does the 30-day ROI guarantee work?", a: "If you don’t see a return on investment in 30 days, you can request a full refund." },
            { q: "Can I trust AI 360° with sensitive data?", a: "Yes, AI 360° uses secure encryption and data protection measures to keep your information safe." },
            { q: "What’s included in the value breakdown?", a: "You get access to all four tools: Client Intel, Meeting Memory, Contract Checker, and Contract Generator, which together replace thousands of dollars in consultant and legal fees." },
            { q: "Do I get access to future updates?", a: "Yes, purchasing lifetime access also includes all future updates and improvements to AI 360°." },
          ].map((faq, idx) => (
            <details key={idx} className="p-4 border rounded-lg shadow-sm bg-white">
              <summary className="font-semibold cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-600">
        <p className="mb-2 cursor-pointer underline" onClick={() => setShowTOS(true)}>Terms of Service</p>
        <p className="cursor-pointer underline" onClick={() => setShowPP(true)}>Privacy Policy</p>
      </footer>

      {/* Terms of Service Modal */}
      {showTOS && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative max-h-[80vh] overflow-y-auto">
            <button onClick={() => setShowTOS(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">📜 Terms of Service – AI 360°</h2>
            <p className="text-sm text-gray-700 mb-2">Effective Date: September 8, 2025</p>
            <p className="text-gray-700 mb-2">Welcome to AI 360°. By using our app, you agree to the following terms:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
              <li>Use of Service: AI 360° provides AI-powered tools and features for personal and professional use.</li>
              <li>You agree not to misuse the app, attempt to hack it, or use it for unlawful purposes.</li>
              <li>Accounts: You are responsible for maintaining the confidentiality of your login information. You must be at least 18 years old to use this app.</li>
              <li>Intellectual Property: All app content, branding, and features belong to AI 360°. You may not copy, sell, or distribute our technology without permission.</li>
              <li>Disclaimer: AI 360° provides information and tools “as is” without guarantees. We are not liable for losses or damages.</li>
              <li>Termination: We may suspend or terminate accounts that violate these terms.</li>
              <li>Changes: We may update these terms at any time. Continued use means you accept the new terms.</li>
            </ul>
            <div className="mt-4 flex justify-center">
              <Button onClick={() => setShowTOS(false)} className="rounded-full bg-indigo-600 text-white px-6 py-2 hover:bg-indigo-700">Close</Button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPP && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative max-h-[80vh] overflow-y-auto">
            <button onClick={() => setShowPP(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">🔒 Privacy Policy – AI 360°</h2>
            <p className="text-sm text-gray-700 mb-2">Effective Date: September 8, 2025</p>
            <p className="text-gray-700 mb-2">Your privacy is important to us. This policy explains how AI 360° handles your data:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
              <li>Information We Collect: Account details (such as email and username) and usage data. We do not sell your personal information.</li>
              <li>How We Use Your Data: To provide and improve services, communicate updates or support, and ensure security.</li>
              <li>Data Storage & Security: We use secure methods to protect your information, though no system is 100% secure.</li>
              <li>Third-Party Services: We may use trusted third-party providers (like cloud hosting) with limited access to data.</li>
              <li>Your Rights: You can request deletion of your account and data anytime by contacting us.</li>
              <li>Changes: We may update this Privacy Policy when needed. Updates will be reflected in the app.</li>
            </ul>
            <div className="mt-4 flex justify-center">
              <Button onClick={() => setShowPP(false)} className="rounded-full bg-indigo-600 text-white px-6 py-2 hover:bg-indigo-700">Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}