
'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MarketData {
    market: string;
    commodity: string;
    variety: string;
    min_price: string;
    max_price: string;
}

export default function MarketPrices({ apiKey }: { apiKey: string }) {
    const [data, setData] = useState<MarketData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${apiKey}&format=json&offset=0&limit=10`);
                const result = await response.json();
                setData(result.records);
            } catch (error) {
                console.error('Error fetching market data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [apiKey]);

    if (loading) {
        return <p>Loading market prices...</p>;
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Live Market Prices</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Market</th>
                                <th scope="col" className="px-6 py-3">Commodity</th>
                                <th scope="col" className="px-6 py-3">Min Price</th>
                                <th scope="col" className="px-6 py-3">Max Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className="bg-white border-b">
                                    <td className="px-6 py-4">{item.market}</td>
                                    <td className="px-6 py-4">{item.commodity}</td>
                                    <td className="px-6 py-4">{item.min_price}</td>
                                    <td className="px-6 py-4">{item.max_price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}
