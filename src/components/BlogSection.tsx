import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search,
  Filter,
  BookOpen,
  MapPin,
  Camera,
  Heart,
  Users,
  Info,
  ArrowRight,
  Star
} from 'lucide-react';
import { BlogPost } from '@/lib/safari-details';
import { Link } from 'react-router-dom';
import nature2 from '@/assets/nature 2.jpg';
import animal3 from '@/assets/animal 3.jpg';
import fleet1 from '@/assets/fleet 1.jpg';

interface BlogSectionProps {
  posts: BlogPost[];
  showFilters?: boolean;
  maxPosts?: number;
}

const BlogSection = ({ posts, showFilters = true, maxPosts }: BlogSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Articles', icon: BookOpen },
    { id: 'tips', name: 'Tips & Tricks', icon: Info },
    { id: 'guides', name: 'Travel Guides', icon: MapPin },
    { id: 'destinations', name: 'Destinations', icon: MapPin },
    { id: 'wildlife', name: 'Wildlife', icon: Heart },
    { id: 'culture', name: 'Culture', icon: Users }
  ];

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    
    return matchesCategory && matchesSearch && matchesTag;
  });

  const displayPosts = maxPosts ? filteredPosts.slice(0, maxPosts) : filteredPosts;
  const featuredPosts = filteredPosts.filter(post => post.featured);

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  const getCategoryColor = (categoryId: string) => {
    const colors = {
      tips: 'bg-blue-100 text-blue-800 border-blue-200',
      guides: 'bg-green-100 text-green-800 border-green-200',
      destinations: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      wildlife: 'bg-orange-100 text-orange-800 border-orange-200',
      culture: 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return colors[categoryId as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Safari Travel Blog
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Expert tips, destination guides, and insider knowledge to help you plan the perfect African safari
        </p>
      </div>

      {/* Filters and Search */}
      {showFilters && (
        <div className="space-y-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* Search and Tag Filter */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Tag Filter */}
            {allTags.length > 0 && (
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">All Tags</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === 'all' && !searchTerm && !selectedTag && (
        <div className="space-y-6">
          <h3 className="font-display text-2xl font-bold">Featured Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </Badge>
                    <div className="text-xs text-muted-foreground">
                      {formatDate(post.publishedAt)}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min read
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <Button size="sm" variant="outline">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* All Posts */}
      <div className="space-y-6">
        {(selectedCategory !== 'all' || searchTerm || selectedTag) && (
          <h3 className="font-display text-2xl font-bold">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'Article' : 'Articles'} Found
          </h3>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map((post) => {
            const Icon = getCategoryIcon(post.category);
            
            return (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={getCategoryColor(post.category)}>
                      <Icon className="w-3 h-3 mr-1" />
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </Badge>
                    <div className="text-xs text-muted-foreground">
                      {formatDate(post.publishedAt)}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        <Tag className="w-2 h-2 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author.name}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime} min
                      </div>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <Button size="sm" variant="outline">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No articles found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria to find relevant travel content.
          </p>
        </div>
      )}

      {/* Load More (if maxPosts is set) */}
      {maxPosts && filteredPosts.length > maxPosts && (
        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogSection;
