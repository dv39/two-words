"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Footer } from "@/components/footer";
import Link from "next/link";

interface SearchResult {
  id: string;
  title: string;
  url: string;
  snippet: string;
  relevance: number;
  category: string;
}

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTime, setSearchTime] = useState(0);

  useEffect(() => {
    if (!query) return;

    const performSearch = async () => {
      setIsLoading(true);
      const startTime = Date.now();

      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 1500));

      const mockResults: SearchResult[] = [
        {
          id: "1",
          title: `${query} - Exploring the Connection`,
          url: "https://example.com/connection",
          snippet: `Discover how ${query} relates to modern trends and innovative applications. This combination reveals unique insights into...`,
          relevance: 0.95,
          category: "Analysis"
        },
        {
          id: "2", 
          title: `${query} in Contemporary Context`,
          url: "https://example.com/contemporary",
          snippet: `The intersection of ${query} represents a growing trend in creative industries and technological innovation...`,
          relevance: 0.88,
          category: "Trend"
        },
        {
          id: "3",
          title: `${query} - A New Perspective`,
          url: "https://example.com/perspective", 
          snippet: `How ${query} challenges traditional boundaries and creates new opportunities for exploration and discovery...`,
          relevance: 0.82,
          category: "Innovation"
        },
        {
          id: "4",
          title: `${query} Applications and Use Cases`,
          url: "https://example.com/applications",
          snippet: `Practical applications of ${query} across various industries and domains, from technology to creative arts...`,
          relevance: 0.78,
          category: "Applications"
        }
      ];

      setResults(mockResults);
      setSearchTime(Date.now() - startTime);
      setIsLoading(false);
    };

    performSearch();
  }, [query]);

  const words = query.split(" ");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 mb-4 inline-block">
            ← Back to Two Words
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
              Search Results
            </h1>
            <Badge variant="outline" className="text-lg px-3 py-1">
              {words[0]} {words[1]}
            </Badge>
          </div>

          {!isLoading && (
            <p className="text-slate-600 dark:text-slate-400">
              Found {results.length} results in {searchTime}ms
            </p>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <LoadingSpinner size="lg" className="mb-4" />
              <p className="text-slate-600 dark:text-slate-400">
                Searching for connections between &ldquo;{words[0]}&rdquo; and &ldquo;{words[1]}&rdquo;...
              </p>
            </CardContent>
          </Card>
        )}

        {/* Results */}
        {!isLoading && results.length > 0 && (
          <div className="space-y-6 max-w-4xl mx-auto">
            {results.map((result) => (
              <Card key={result.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        <a 
                          href={result.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {result.title}
                        </a>
                      </CardTitle>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {result.url}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {Math.round(result.relevance * 100)}% match
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {result.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {result.snippet}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && results.length === 0 && (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                No results found for &ldquo;{query}&rdquo;
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Try different word combinations or explore our example searches for inspiration.
              </p>
              <Link href="/">
                <Button>Try Another Search</Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Related Searches */}
        {!isLoading && results.length > 0 && (
          <Card className="max-w-4xl mx-auto mt-8">
            <CardHeader>
              <CardTitle className="text-lg">Related Two-Word Searches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  `${words[0]} innovation`,
                  `${words[1]} future`,
                  `creative ${words[0]}`,
                  `digital ${words[1]}`,
                  `${words[0]} trends`,
                  `${words[1]} applications`
                ].map((relatedSearch, index) => (
                  <Link key={index} href={`/search?q=${encodeURIComponent(relatedSearch)}`}>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700"
                    >
                      {relatedSearch}
                    </Badge>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      
      <Footer />
    </div>
  );
} 