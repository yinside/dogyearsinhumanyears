import { NextResponse } from 'next/server';
import { getArticles } from '@/lib/contentful';

export async function GET() {
  try {
    const articles = await getArticles();
    
    return NextResponse.json({
      success: true,
      articles: articles || [],
      count: articles?.length || 0
    });
  } catch (error: any) {
    console.error('API route: Error fetching articles:', error);
    
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to fetch articles',
      articles: []
    }, { status: 500 });
  }
}