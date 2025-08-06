import { NextRequest, NextResponse } from 'next/server';

interface SearchResult {
  id: string;
  title: string;
  url: string;
  snippet: string;
  relevance: number;
  category: string;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  const words = query.trim().split(/\s+/);
  
  if (words.length !== 2) {
    return NextResponse.json({ error: 'Exactly two words are required' }, { status: 400 });
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock search results
  const mockResults: SearchResult[] = [
    {
      id: "1",
      title: `${query} - Exploring the Connection`,
      url: "https://example.com/connection",
      snippet: `Discover how ${query} relates to modern trends and innovative applications. This combination reveals unique insights into the intersection of these concepts.`,
      relevance: 0.95,
      category: "Analysis"
    },
    {
      id: "2", 
      title: `${query} in Contemporary Context`,
      url: "https://example.com/contemporary",
      snippet: `The intersection of ${query} represents a growing trend in creative industries and technological innovation, offering new perspectives on traditional approaches.`,
      relevance: 0.88,
      category: "Trend"
    },
    {
      id: "3",
      title: `${query} - A New Perspective`,
      url: "https://example.com/perspective", 
      snippet: `How ${query} challenges traditional boundaries and creates new opportunities for exploration and discovery across various domains.`,
      relevance: 0.82,
      category: "Innovation"
    },
    {
      id: "4",
      title: `${query} Applications and Use Cases`,
      url: "https://example.com/applications",
      snippet: `Practical applications of ${query} across various industries and domains, from technology to creative arts and beyond.`,
      relevance: 0.78,
      category: "Applications"
    },
    {
      id: "5",
      title: `${query} - Future Implications`,
      url: "https://example.com/future",
      snippet: `Exploring the future implications of ${query} and how this combination might shape upcoming trends and developments.`,
      relevance: 0.75,
      category: "Future"
    }
  ];

  return NextResponse.json({
    query,
    results: mockResults,
    totalResults: mockResults.length,
    searchTime: Math.random() * 500 + 200 // Random time between 200-700ms
  });
} 