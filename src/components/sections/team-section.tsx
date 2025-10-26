
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  line: string;
  avatarUrl?: string;
  initials: string;
  linkedinUrl?: string;
}

const coreTeamMembers: TeamMember[] = [
  { name: "Premchand Yadav", role: "Founder & CEO", line: "Student Founder,Futuristic Technocrat, bold vision", avatarUrl: "https://i.postimg.cc/Kztrs6nc/premphoto1-removebg-preview.png", initials: "PY", linkedinUrl: "#" },
  { name: "Kiran Kumar Reddy", role: "COO", line: "Ops, finance, agri networks expert", avatarUrl: "https://i.postimg.cc/ncWzYcdf/image.png", initials: "KR", linkedinUrl: "#" },
  { name: "Stephen", role: "Tech Lead", line: "Backend & mobile systems builder", avatarUrl: "https://i.postimg.cc/CL4bLY5y/Whats-App-Image-2025-05-20-at-16-28-23-deeb7ad2.jpg", initials: "S", linkedinUrl: "#" },
  { name: "SriHarsha Vardhan", role: "UI/UX Lead", line: "Vernacular-first designer", avatarUrl: "https://i.postimg.cc/BQpW4LGx/harsha1.jpg", initials: "SV", linkedinUrl: "#" },
  { name: "Praneeth", role: "Marketing", line: "Rural-urban outreach & GTM expert", avatarUrl: "https://i.postimg.cc/VsqTTTRV/praneeth.jpg", initials: "P", linkedinUrl: "#" },
  { name: "Suheb", role: "UI/UX Designer", line: "Detail-driven. Clean. Adaptive. Empathetic. Visual.", avatarUrl: "https://i.postimg.cc/J4ZLv2n1/Whats-App-Image-2025-05-21-at-17-06-54-5b7b43d0.jpg", initials: "SU", linkedinUrl: "#" },
];

const mentorMember: TeamMember = { name: "Karthik Barma", role: "Mentor", line: "Serial founder, innovation advisor", avatarUrl: "https://i.postimg.cc/C5DV6H7p/karthik.jpg", initials: "KB", linkedinUrl: "#" };

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Meet the <span className="text-primary">Driving Force</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate team dedicated to revolutionizing agriculture for small farmers in India.
          </p>
        </div>

        {/* Core Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {coreTeamMembers.map((member) => (
            <Card key={member.name} className="flex flex-col text-center bg-card shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader className="items-center pt-8">
                <Avatar className="w-28 h-28 mb-4 border-4 border-primary/50">
                  <AvatarImage src={member.avatarUrl} alt={member.name} data-ai-hint="profile person" />
                  <AvatarFallback className="text-3xl bg-muted text-muted-foreground">{member.initials}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-semibold mt-1">{member.role}</CardDescription>
                <p className="text-sm text-muted-foreground mt-3">{member.line}</p>
              </CardContent>
              <CardFooter className="justify-center pb-6">
                <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <Link href={member.linkedinUrl!} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Mentor Section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-8">
            Our <span className="text-primary">Mentor</span>
          </h3>
          <div className="flex justify-center">
            <Card key={mentorMember.name} className="flex flex-col text-center bg-card shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 max-w-sm border-2 border-primary/20">
              <CardHeader className="items-center pt-8">
                <Avatar className="w-32 h-32 mb-4 border-4 border-primary">
                  <AvatarImage src={mentorMember.avatarUrl} alt={mentorMember.name} data-ai-hint="profile person mentor" />
                  <AvatarFallback className="text-4xl bg-muted text-muted-foreground">{mentorMember.initials}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-2xl">{mentorMember.name}</CardTitle>
                <CardDescription className="text-primary font-semibold text-lg mt-1">{mentorMember.role}</CardDescription>
                <p className="text-base text-muted-foreground mt-3">{mentorMember.line}</p>
              </CardContent>
              <CardFooter className="justify-center pb-6">
                 <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                  <Link href={mentorMember.linkedinUrl!} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
