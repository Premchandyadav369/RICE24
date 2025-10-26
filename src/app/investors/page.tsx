
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function InvestorsPage() {
    return (
        <div className="bg-background">
            {/* Hero Section for Investors */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-amber-50 to-background text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        For <span className="text-primary">Investors & Partners</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Join us in revolutionizing agriculture for a brighter, more sustainable future.
                    </p>
                </div>
            </section>

            {/* Market Opportunity */}
            <section className="py-16 md:py-24">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Impact-Driven Market <span className="text-primary">Opportunity</span>
                    </h2>
                    <div className="max-w-3xl mx-auto p-8 bg-slate-100 rounded-lg">
                        <p className="text-muted-foreground">TAM/SAM/SOM graphic placeholder</p>
                    </div>
                </div>
            </section>

            {/* Franchise Model */}
            <section className="py-16 md:py-24 bg-amber-50/50">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Franchise Model <span className="text-primary">Explainer</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our franchise model is designed for sustainable growth, with a revenue split of 65:35.
                    </p>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <Card className="max-w-2xl mx-auto">
                        <CardHeader>
                            <CardTitle>Partner With Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="grid gap-4">
                                <Input placeholder="Your Name" />
                                <Input type="email" placeholder="Your Email" />
                                <Textarea placeholder="Your Message" />
                                <Button>Submit</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
