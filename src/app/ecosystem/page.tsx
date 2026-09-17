
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function EcosystemPage() {
    return (
        <div className="bg-background">
            {/* Hero Section for Ecosystem */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-amber-50 to-background text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        Mentorship & <span className="text-primary">Ecosystem</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Building credibility through a strong network of mentors and partners.
                    </p>
                </div>
            </section>

            {/* Mentors */}
            <section className="py-16 md:py-24">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Our <span className="text-primary">Mentors</span>
                    </h2>
                    <Card className="max-w-md mx-auto">
                        <CardHeader><CardTitle>Karthik Barma (Aura, Soul)</CardTitle></CardHeader>
                    </Card>
                </div>
            </section>

            {/* Programs */}
            <section className="py-16 md:py-24 bg-amber-50/50">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Programs <span className="text-primary">Participated In</span>
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <Badge variant="outline">Wadhwani</Badge>
                        <Badge variant="outline">PW SOS</Badge>
                        <Badge variant="outline">VLaunchpad</Badge>
                    </div>
                </div>
            </section>

            {/* Logos */}
            <section className="py-16 md:py-24">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Our <span className="text-primary">Partners</span>
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <p className="text-muted-foreground">Google DevFest Logo</p>
                        <p className="text-muted-foreground">PW Logo</p>
                        <p className="text-muted-foreground">Wadhwani Logo</p>
                        <p className="text-muted-foreground">VLaunchpad Logo</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
