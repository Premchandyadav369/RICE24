
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage() {
    return (
        <div className="bg-background">
            {/* Hero Section for Dashboard */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-amber-50 to-background text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        Farmer <span className="text-primary">Dashboard Demo</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        A real-time view of your crop planning and income tracking.
                    </p>
                </div>
            </section>

            {/* Dashboard Content */}
            <section className="py-16 md:py-24">
                <div className="container grid md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader><CardTitle>Crop Planning</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Placeholder for crop planning visualization.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Income Tracking</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Placeholder for income tracking charts.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
