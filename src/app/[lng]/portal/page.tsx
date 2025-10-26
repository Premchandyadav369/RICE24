
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PortalPage() {
    return (
        <div className="bg-background">
            {/* Hero Section for Portal */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-amber-50 to-background text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        Rural Entrepreneurship <span className="text-primary">Portal</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Information for youth to apply for franchise or startup collaboration.
                    </p>
                </div>
            </section>

            {/* Portal Content */}
            <section className="py-16 md:py-24">
                <div className="container grid md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader><CardTitle>Apply for a Franchise</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                Interested in running your own RICE Center? Apply to become a franchise partner.
                            </p>
                            <Button>Apply Now</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Startup Collaboration</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                Have an innovative idea for agriculture? Let's collaborate.
                            </p>
                            <Button>Contact Us</Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
