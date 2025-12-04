'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to login page after animation completes (2 seconds)
        const timer = setTimeout(() => {
            router.push('/login');
        }, 2000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
            <Image
                height={400}
                width={600}
                src="/mockup.png"
                alt="Laptop"
                className="animate-zoom-in max-w-full h-auto"
            />
        </div>
    );
}
