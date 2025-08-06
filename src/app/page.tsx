"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Count words in real-time
  useEffect(() => {
    const words = searchQuery.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  }, [searchQuery]);

  const handleSearch = async () => {
    if (wordCount !== 2) return;
    
    setIsSearching(true);
    
    // Add to search history
    setSearchHistory(prev => [searchQuery, ...prev.slice(0, 4)]);
    
    // Navigate to search results page
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && wordCount === 2) {
      handleSearch();
    }
  };

  const handleWordClick = (word: string) => {
    setSearchQuery(word);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            Two Words
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A minimalist search engine for focused discovery. 
            Enter exactly two words to explore connections and find inspiration.
          </p>
        </div>

        {/* Main Search Card */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Search with Two Words
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter exactly two words..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="text-lg h-14 px-4"
                disabled={isSearching}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Badge 
                  variant={wordCount === 2 ? "default" : wordCount > 2 ? "destructive" : "secondary"}
                  className="text-xs"
                >
                  {wordCount}/2
                </Badge>
              </div>
            </div>
            
            <Button 
              onClick={handleSearch}
              disabled={wordCount !== 2 || isSearching}
              className="w-full h-12 text-lg"
            >
              {isSearching ? "Searching..." : "Search"}
            </Button>
          </CardContent>
        </Card>

        {/* Search History */}
        {searchHistory.length > 0 && (
          <Card className="max-w-2xl mx-auto mb-8">
            <CardHeader>
              <CardTitle className="text-lg">Recent Searches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {searchHistory.map((search, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700"
                    onClick={() => handleWordClick(search)}
                  >
                    {search}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Example Searches */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-lg">Example Searches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {[
                "decentralized education",
                "eco luxury", 
                "brutalist nature",
                "machine empathy",
                "urban nostalgia",
                "fintech trust"
              ].map((example, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 text-center"
                  onClick={() => handleWordClick(example)}
                >
                  {example}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
}
