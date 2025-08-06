import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
              Two Words
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              A minimalist search engine for focused discovery
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 text-sm text-slate-600 dark:text-slate-400">
            <a 
              href="#" 
              className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              About
            </a>
            <a 
              href="#" 
              className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="text-center text-xs text-slate-500 dark:text-slate-500">
          <p>
            © 2024 Two Words. Where constraint meets creativity.
          </p>
        </div>
      </div>
    </footer>
  );
} 