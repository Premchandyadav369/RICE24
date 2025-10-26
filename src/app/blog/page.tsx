
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const blogPosts = [
    { title: 'Why Bharat Needs Smart Crop Planning', href: '#' },
    { title: 'AI in Agriculture: From Guesswork to Growth', href: '#' },
    { title: 'How Rural Entrepreneurs Can Lead India’s Agri Revolution', href: '#' },
];

export default function BlogPage() {
    return (
        <div className="bg-background">
            {/* Hero Section for Blog */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-amber-50 to-background text-center">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                        Blog & <span className="text-primary">Insights</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Thought leadership on the future of agriculture in India.
                    </p>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8">
                        {blogPosts.map(post => (
                            <Link key={post.title} href={post.href}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{post.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">Read more...</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
