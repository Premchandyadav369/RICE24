
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MarketPrices from '@/components/shared/market-prices';

export default function FarmersPage() {
    return (
        <div className="bg-background">
            {/* Hero Section for Farmers */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-amber-50 to-background text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        For <span className="text-primary">Farmers</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Grow better, earn better, and sell smarter with RICE.
                    </p>
                </div>
            </section>

            {/* Why Farmers Love RICE */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Why Farmers <span className="text-primary">Love RICE</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Testimonial Cards */}
                        <Card>
                            <CardHeader><CardTitle>Increased Profits</CardTitle></CardHeader>
                            <CardContent><p className="text-muted-foreground">"RICE helped me connect with new buyers and get a better price for my crops."</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle>Smarter Farming</CardTitle></CardHeader>
                            <CardContent><p className="text-muted-foreground">"The AI crop planner is a game-changer. I know exactly what to plant and when."</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle>Easy to Use</CardTitle></CardHeader>
                            <CardContent><p className="text-muted-foreground">"The app is so simple, even my grandfather can use it."</p></CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Mandi Price & Weather */}
            <section className="py-16 md:py-24 bg-amber-50/50">
                <div className="container grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-center">Real-Time Mandi Prices</h3>
                        <MarketPrices />
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Weather Forecast</h3>
                        <div className="p-8 bg-slate-100 rounded-lg">
                            <p className="text-muted-foreground">Weather forecast section placeholder</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join RICE */}
            <section className="py-16 md:py-24 text-center">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Join <span className="text-primary">RICE</span> Today
                    </h2>
                    <Button size="lg">Join via WhatsApp</Button>
                </div>
            </section>
        </div>
    );
}
