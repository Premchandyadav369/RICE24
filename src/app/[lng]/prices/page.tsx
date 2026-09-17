
import MarketPrices from '@/components/shared/market-prices';

export default function PricesPage() {
    return (
        <div className="bg-background">
            {/* Hero Section for Prices */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-amber-50 to-background text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        Live Commodity <span className="text-primary">Price Ticker</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Integrating Agmarknet API or NCDEX feed for real-time price information.
                    </p>
                </div>
            </section>

            {/* Prices Content */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <MarketPrices />
                </div>
            </section>
        </div>
    );
}
