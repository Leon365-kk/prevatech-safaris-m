import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Heart } from 'lucide-react';
import { blogPosts } from '@/lib/safari-details';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const renderContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('# ')) {
        return <h1 key={index} className="font-display text-4xl font-bold mt-8 mb-4 text-foreground">{paragraph.slice(2)}</h1>;
      } else if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="font-display text-3xl font-bold mt-6 mb-3 text-foreground">{paragraph.slice(3)}</h2>;
      } else if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="font-display text-2xl font-bold mt-4 mb-2 text-foreground">{paragraph.slice(4)}</h3>;
      } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return <p key={index} className="text-lg font-semibold mt-4 mb-3 text-foreground">{paragraph.slice(2, -2)}</p>;
      } else if (paragraph.startsWith('- ')) {
        return <li key={index} className="ml-6 mb-1 text-muted-foreground">{paragraph.slice(2)}</li>;
      } else if (paragraph.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index} className="mb-4 text-muted-foreground leading-relaxed">{paragraph}</p>;
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Hero Image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </Badge>
            {post.featured && (
              <Badge className="bg-yellow-500 text-white">
                <Heart className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                <Tag className="w-2 h-2 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-8">
          {renderContent(post.content)}
        </div>

        {/* Author Bio */}
        <div className="bg-muted/50 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">{post.author.name}</h3>
              <p className="text-muted-foreground">{post.author.bio}</p>
            </div>
          </div>
        </div>

        {/* Share & Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              Like
            </Button>
          </div>
          
          <Link to="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Related Posts */}
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="font-display text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map(relatedPost => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group">
                  <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {relatedPost.category.charAt(0).toUpperCase() + relatedPost.category.slice(1)}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(relatedPost.publishedAt)}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {relatedPost.readTime} min read
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
