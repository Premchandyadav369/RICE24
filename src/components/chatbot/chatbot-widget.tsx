
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Button onClick={() => setIsOpen(!isOpen)} size="icon" className="rounded-full w-14 h-14">
                <MessageSquare className="h-6 w-6" />
            </Button>
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-80 h-96 bg-white rounded-lg shadow-lg border">
                    <iframe
                        src="YOUR_N8N_CHATBOT_URL"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                    ></iframe>
                </div>
            )}
        </div>
    );
}
