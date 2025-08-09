import { NextResponse } from 'next/server';
import { getArticleBySlug } from '@/lib/contentful';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);
    
    if (!article) {
      return NextResponse.json({
        success: false,
        error: 'Article not found',
        article: null
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      article: article
    });
  } catch (error: any) {
    console.error('API route: Error fetching article:', error);
    
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to fetch article',
      article: null
    }, { status: 500 });
  }
}