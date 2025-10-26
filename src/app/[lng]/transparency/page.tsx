
export default function TransparencyPage() {
    return (
        <div className="bg-background">
            {/* Hero Section for Transparency */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-amber-50 to-background text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        Data <span className="text-primary">Transparency</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        How we protect and anonymize farmer data.
                    </p>
                </div>
            </section>

            {/* Transparency Content */}
            <section className="py-16 md:py-24">
                <div className="container max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Our Commitment to Data Privacy</h2>
                    <p className="text-muted-foreground">
                        At RICE, we are committed to protecting the privacy and security of our farmers' data. We believe that data transparency is essential for building trust and ensuring that our platform is used ethically and responsibly.
                    </p>
                    <h3 className="text-xl font-bold mt-8 mb-4">How We Protect Your Data</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                        <li>We use industry-standard encryption to protect your data in transit and at rest.</li>
                        <li>We have strict access controls in place to ensure that only authorized personnel can access your data.</li>
                        <li>We regularly review and update our security practices to protect against new and emerging threats.</li>
                    </ul>
                    <h3 className="text-xl font-bold mt-8 mb-4">How We Anonymize Your Data</h3>
                    <p className="text-muted-foreground">
                        We use a variety of techniques to anonymize your data, including data masking, generalization, and aggregation. This allows us to use your data to improve our services without compromising your privacy.
                    </p>
                </div>
            </section>
        </div>
    );
}
