export default function Footer() {
    return (
        <footer className="py-8 border-t border-[var(--card-border)] bg-black text-center relative z-10">
            <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} GUDDEMMAGAI HAREESWAR REDDY. All rights reserved.
            </p>
        </footer>
    );
}
