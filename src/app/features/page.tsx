
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Bot, Languages, BarChart, Gem, Wind } from 'lucide-react';

const coreFeatures = [
    { title: 'AI Smart Crop Planner', description: 'Recommends crops using soil, weather & mandi APIs.', icon: <Bot /> },
    { title: 'Climate Advisory', description: 'Drought/flood predictions + risk alerts.', icon: <Wind /> },
    { title: 'Market Access (B2B)', description: 'Connects farmers to verified buyers.', icon: <BarChart /> },
    { title: 'Microcredit System', description: 'In partnership with NBFCs, post-harvest repayment model.', icon: <CheckCircle2 /> },
];

const wowFeatures = [
    { title: 'Multilingual Interface', description: '12+ languages supported.', icon: <Languages /> },
    { title: 'WhatsApp Chatbot', description: 'n8n integrated for crop help, pricing, or support.', icon: <Bot /> },
    { title: 'RICE Token Rewards', description: 'For sustainable farming & on-time credit repayment.', icon: <Gem /> },
];

export default function FeaturesPage() {
    return (
        <div className="bg-background">
            {/* Hero Section for Features */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-amber-50 to-background text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        Product <span className="text-primary">Features</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        A super app ecosystem for the modern farmer.
                    </p>
                </div>
            </section>

            {/* Core Features */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Core <span className="text-primary">Features</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreFeatures.map(feature => (
                            <Card key={feature.title}>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        {feature.icon}
                                        <CardTitle>{feature.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* "Wow" Features */}
            <section className="py-16 md:py-24 bg-amber-50/50">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        "Wow" <span className="text-primary">Features</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {wowFeatures.map(feature => (
                            <Card key={feature.title}>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        {feature.icon}
                                        <CardTitle>{feature.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
