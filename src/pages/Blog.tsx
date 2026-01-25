import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BlogSection from '@/components/BlogSection';
import { blogPosts } from '@/lib/safari-details';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24">
        <div className="relative h-[40vh] min-h-[300px] bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                Safari Travel Blog
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Expert tips, destination guides, and insider knowledge for your perfect African adventure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <BlogSection posts={blogPosts} />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
