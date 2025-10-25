import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-600 to-yellow-500">
      <div className="text-center text-white p-8">
        <h1 className="text-6xl font-bold mb-4">✅ Ça fonctionne !</h1>
        <p className="text-2xl mb-8">Le serveur Next.js est opérationnel</p>
        <div className="space-y-4">
          <p className="text-xl">🇫🇷 Français : <Link href="/" className="underline hover:text-yellow-300">Accueil</Link></p>
          <p className="text-xl">🇬🇧 English : <Link href="/en" className="underline hover:text-yellow-300">Home</Link></p>
          <p className="text-xl">🇵🇹 Português : <Link href="/pt" className="underline hover:text-yellow-300">Início</Link></p>
        </div>
        <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur">
          <p className="text-sm">Port: 5000</p>
          <p className="text-sm">Next.js 15 + React 19</p>
        </div>
      </div>
    </div>
  );
}
