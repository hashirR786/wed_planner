import React from 'react';
import { X, MapPin, Users, Camera } from 'lucide-react';
import type { PortfolioItem } from '../../config/siteConfig';
import { getAssetUrl } from '../../utils/asset';

interface ImageModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative max-w-5xl w-full bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-2xl border border-white/20 grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="lg:col-span-7 bg-black flex items-center justify-center overflow-hidden min-h-[300px] lg:min-h-[500px]">
          <img
            src={getAssetUrl(item.image)}
            alt={item.title}
            className="w-full h-full object-cover max-h-[70vh] lg:max-h-[85vh]"
          />
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-5 p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C87D65] font-semibold">
                {item.category} Celebration
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2A29] mt-1">
                {item.title}
              </h3>
            </div>

            <div className="space-y-3 border-y border-[#2C4A3E]/10 py-4 text-xs text-[#65605C]">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-[#2C4A3E]" />
                <span className="font-medium text-[#2C2A29]">{item.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={15} className="text-[#2C4A3E]" />
                <span>{item.guestCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera size={15} className="text-[#2C4A3E]" />
                <span>Photography by {item.photographer}</span>
              </div>
            </div>

            <p className="text-sm text-[#65605C] leading-relaxed font-light">
              {item.description}
            </p>
          </div>

          <div className="pt-6 border-t border-[#2C4A3E]/10">
            <button
              onClick={onClose}
              className="w-full btn-primary justify-center py-3 text-xs"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
