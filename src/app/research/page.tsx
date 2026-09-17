
export default function ResearchPage() {
    return (
        <div className="bg-background">
            {/* Hero Section for Research */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-amber-50 to-background text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        AI & <span className="text-primary">Research</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Leveraging cutting-edge technology to solve agricultural challenges.
                    </p>
                </div>
            </section>

            {/* AI Pipeline */}
            <section className="py-16 md:py-24">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Our AI <span className="text-primary">Pipeline</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Our models are trained on the AgDex dataset and run on a robust AI pipeline using Vertex AI, Gemini, and Firebase Cloud.
                    </p>
                </div>
            </section>

            {/* Analytics Dashboard */}
            <section className="py-16 md:py-24 bg-amber-50/50">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Crop Data Analytics <span className="text-primary">Dashboard</span>
                    </h2>
                    <div className="max-w-4xl mx-auto p-8 bg-slate-100 rounded-lg">
                        <p className="text-muted-foreground">Live demo or mockup placeholder</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
