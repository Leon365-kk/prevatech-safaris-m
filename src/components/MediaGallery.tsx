import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Maximize2, 
  Heart, 
  Share2, 
  Download,
  Camera,
  MapPin,
  Clock,
  X
} from 'lucide-react';
import { MediaAsset } from '@/lib/safari-details';

interface MediaGalleryProps {
  media: MediaAsset[];
  title?: string;
  description?: string;
  showFilters?: boolean;
}

const MediaGallery = ({ media, title, description, showFilters = true }: MediaGalleryProps) => {
  const [selectedMedia, setSelectedMedia] = useState<MediaAsset | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [isPlaying, setIsPlaying] = useState(false);

  const categories = [
    { id: 'all', name: 'All Media' },
    { id: 'wildlife', name: 'Wildlife' },
    { id: 'landscape', name: 'Landscapes' },
    { id: 'accommodation', name: 'Accommodation' },
    { id: 'activities', name: 'Activities' },
    { id: 'culture', name: 'Culture' }
  ];

  const filteredMedia = filter === 'all' 
    ? media 
    : media.filter(item => item.category === filter);

  const featuredMedia = media.filter(item => item.featured);
  const displayMedia = featuredMedia.length > 0 ? featuredMedia : filteredMedia;

  const openLightbox = (mediaItem: MediaAsset) => {
    setSelectedMedia(mediaItem);
    setIsPlaying(false);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    setIsPlaying(false);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="space-y-6">
      {title && (
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>
          )}
        </div>
      )}

      {/* Category Filters */}
      {showFilters && (
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={filter === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      )}

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {displayMedia.map((mediaItem) => (
          <Card 
            key={mediaItem.id} 
            className="overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300"
            onClick={() => openLightbox(mediaItem)}
          >
            <div className="relative aspect-video">
              {mediaItem.type === 'image' ? (
                <img
                  src={mediaItem.url}
                  alt={mediaItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={mediaItem.thumbnail || mediaItem.url}
                    alt={mediaItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Media Type Badge */}
              <div className="absolute top-2 left-2">
                <Badge variant="secondary" className="text-xs">
                  {mediaItem.type === 'video' ? (
                    <><Play className="w-3 h-3 mr-1" /> Video</>
                  ) : (
                    <><Camera className="w-3 h-3 mr-1" /> Photo</>
                  )}
                </Badge>
              </div>

              {/* Featured Badge */}
              {mediaItem.featured && (
                <div className="absolute top-2 right-2">
                  <Badge className="text-xs bg-yellow-500 text-white">
                    <Heart className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white w-full">
                  <div className="font-semibold text-sm mb-1">{mediaItem.title}</div>
                  <div className="text-xs opacity-90 line-clamp-2">{mediaItem.description}</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Lightbox */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Media Content */}
            <div className="bg-black rounded-lg overflow-hidden">
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              ) : (
                <div className="relative aspect-video">
                  <video
                    src={selectedMedia.url}
                    controls
                    autoPlay={isPlaying}
                    className="w-full h-full"
                    onPlay={handleVideoPlay}
                  />
                </div>
              )}
            </div>

            {/* Media Info */}
            <div className="bg-white text-gray-900 p-6 rounded-b-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{selectedMedia.title}</h3>
                  <p className="text-gray-600 mb-4">{selectedMedia.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedMedia.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge variant="outline" className="text-xs">
                        {selectedMedia.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Heart className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                  {selectedMedia.type === 'image' && (
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* No Media Message */}
      {filteredMedia.length === 0 && (
        <div className="text-center py-12">
          <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No media found</h3>
          <p className="text-muted-foreground">
            Try selecting a different category or check back later for new content.
          </p>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
