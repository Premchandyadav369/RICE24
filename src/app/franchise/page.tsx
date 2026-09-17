
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function FranchisePage() {
    return (
        <div className="bg-background">
            {/* Hero Section for Franchise */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-amber-50 to-background text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        Become a <span className="text-primary">RICE Center Partner</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Join our network of rural entrepreneurs and lead the agri-revolution in your community.
                    </p>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 md:py-24">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        How the RICE Franchise Model <span className="text-primary">Works</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        We provide the branding, training, technology, and buyer network you need to succeed. You bring the local expertise and entrepreneurial spirit.
                    </p>
                </div>
            </section>

            {/* Income Opportunities */}
            <section className="py-16 md:py-24 bg-amber-50/50">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Income <span className="text-primary">Opportunities</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our model offers multiple revenue streams, from service fees to a share in the profits from market linkages.
                    </p>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <Card className="max-w-2xl mx-auto">
                        <CardHeader>
                            <CardTitle>Become a RICE Center Partner</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="grid gap-4">
                                <Input placeholder="Your Name" />
                                <Input type="email" placeholder="Your Email" />
                                <Textarea placeholder="Tell us about yourself" />
                                <Button>Apply Now</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
