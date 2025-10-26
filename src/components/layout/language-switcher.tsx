
'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { languages } from '@/i18n/settings';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSwitcher({ lng }: { lng: string }) {
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = (newLng: string) => {
        const newPath = pathname.replace(`/${lng}`, `/${newLng}`);
        router.push(newPath);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Languages className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {languages.map((loc) => (
                    <DropdownMenuItem key={loc} onClick={() => changeLanguage(loc)}>
                        <Link href={pathname.replace(`/${lng}`, `/${loc}`)}>{loc.toUpperCase()}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
