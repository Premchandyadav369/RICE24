
import TeamSection from '@/components/sections/team-section';
import { Badge } from '@/components/ui/badge';

export default function AboutUsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section for About Us */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-amber-50 to-background text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            About <span className="text-primary">RICE</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Digitizing and democratizing agriculture for Bharat.
          </p>
        </div>
      </section>

      {/* Story of RICE */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Story of <span className="text-primary">RICE</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center text-muted-foreground text-lg">
            <p className="mb-4">
              RICE was born from a simple observation by its student founders: the immense struggle of small farmers due to crop waste and unpredictable price crashes. This firsthand experience sparked a mission to build a more equitable and efficient agricultural ecosystem for Bharat.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-amber-50/50">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold">Our Mission</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              To digitize and democratize agriculture for Bharat.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold">Vision 2028</h3>
            <p className="mt-4 text-lg text-muted-foreground">
              1M+ farmers, 500+ centers, ₹1,000 Cr+ income enabled.
            </p>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Recognition</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Badge variant="outline">PW SOS Top 20</Badge>
            <Badge variant="outline">Wadhwani Ignite</Badge>
            <Badge variant="outline">Google DevFest Participant</Badge>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </div>
  );
}
