
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
    return (
        <div className="bg-background">
            {/* Hero Section for Contact */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-amber-50 to-background text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        Contact & <span className="text-primary">Support</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Get in touch with us for partnerships, support, or any other inquiries.
                    </p>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-16 md:py-24">
                <div className="container grid md:grid-cols-2 gap-12">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
                        <p className="text-lg text-muted-foreground">
                            Email: <a href="mailto:rice14062024@gmail.com">rice14062024@gmail.com</a>
                        </p>
                        <p className="text-lg text-muted-foreground">
                            WhatsApp: <a href="https://wa.me/919030822369">+91 9030822369</a>
                        </p>
                        <p className="text-lg text-muted-foreground">
                            Address: Amaravathi, AP, India
                        </p>
                    </div>
                    <div>
                        <Card>
                            <CardHeader><CardTitle>Send us a Message</CardTitle></CardHeader>
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
                </div>
            </section>
        </div>
    );
}
