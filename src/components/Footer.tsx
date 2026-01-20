export default function Footer() {
  return (
    <footer className="py-12 bg-warmGray-900 text-warmGray-400">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold text-white mb-1">
              Down Boy
            </p>
            <p className="font-body text-sm">
              A <a href="https://jabrium.com" className="text-amber-400 hover:text-amber-300 transition-colors">Jabrium</a> Engage Property
            </p>
          </div>

          {/* Mini dog - sitting politely */}
          <div className="hidden md:block">
            <div className="relative w-12 h-10 opacity-60">
              <div className="w-10 h-7 bg-warmGray-600 rounded-xl relative mx-auto">
                <div className="absolute -top-1.5 left-1 w-2 h-3 bg-warmGray-500 rounded-full transform -rotate-6" />
                <div className="absolute -top-1.5 right-1 w-2 h-3 bg-warmGray-500 rounded-full transform rotate-6" />
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <div className="w-1 h-0.5 bg-warmGray-400 rounded-full" />
                  <div className="w-1 h-0.5 bg-warmGray-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 font-body text-sm">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-warmGray-800 text-center">
          <p className="font-body text-xs text-warmGray-500">
            Free with Jabrium · No AI dogs were harmed in the making of this product
          </p>
        </div>
      </div>
    </footer>
  );
}
