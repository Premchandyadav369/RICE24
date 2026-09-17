
export default function MapPage() {
    return (
        <div className="bg-background">
            {/* Hero Section for Map */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-amber-50 to-background text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        Interactive Crop Forecast <span className="text-primary">Map</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        A state-wise visualization of crop demand and prices.
                    </p>
                </div>
            </section>

            {/* Map Content */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="max-w-4xl mx-auto h-96 bg-slate-100 rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Interactive map placeholder</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
