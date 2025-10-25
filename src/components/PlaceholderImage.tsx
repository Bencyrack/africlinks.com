'use client';

interface PlaceholderImageProps {
  gradient: string;
  icon?: string;
  text?: string;
}

export default function PlaceholderImage({ gradient, icon, text }: PlaceholderImageProps) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        {icon && (
          <div className="text-6xl mb-4 opacity-80">
            {icon}
          </div>
        )}
        {text && (
          <p className="text-xl font-semibold opacity-90">{text}</p>
        )}
      </div>
    </div>
  );
}
