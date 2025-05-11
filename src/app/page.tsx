import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Users,
  Zap,
  Edit,
  Layout,
  FileText,
  Palette,
  Rocket,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful CMS Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to create high-converting affiliate landing
              pages that comply with network requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Layout className="w-6 h-6" />,
                title: "Dashboard Interface",
                description:
                  "Clean project listing with thumbnails and quick actions",
              },
              {
                icon: <Edit className="w-6 h-6" />,
                title: "Block-Based Editor",
                description:
                  "Intuitive content blocks for headlines, paragraphs, and CTAs",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Dynamic Content",
                description: "Spintax support for unique content variations",
              },
              {
                icon: <Palette className="w-6 h-6" />,
                title: "Trust Elements Library",
                description: "Drag-and-drop compliance components",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Intuitive Dashboard Experience
              </h2>
              <p className="text-gray-600 mb-6">
                Manage all your landing page projects from a clean, organized
                dashboard. See status at a glance, preview your work, and make
                quick edits.
              </p>
              <ul className="space-y-3">
                {[
                  "Project thumbnails with status indicators",
                  "Quick action buttons (Edit, Preview, Clone, Delete)",
                  "One-click export to static files",
                  "Direct deployment options to hosting platforms",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-gray-400 text-sm">Dashboard</div>
              </div>
              <div className="bg-white p-4">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400">Dashboard Preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Editor Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-gray-400 text-sm">Page Editor</div>
              </div>
              <div className="bg-white p-4">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400">Editor Preview</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Powerful Page Editor</h2>
              <p className="text-gray-600 mb-6">
                Create professional landing pages with our block-based editor.
                Add headlines, paragraphs, images, lists, and compelling CTAs
                with just a few clicks.
              </p>
              <ul className="space-y-3">
                {[
                  "Drag-and-drop block arrangement",
                  "Rich text formatting options",
                  "Image optimization built-in",
                  "Mobile-responsive design preview",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10x</div>
              <div className="text-blue-100">Faster Page Creation</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Compliance Ready</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1-Click</div>
              <div className="text-blue-100">Deployment</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your First Landing Page?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join affiliate marketers who are saving time and increasing
            conversions with WhitePage Pro.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Now
            <Rocket className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
