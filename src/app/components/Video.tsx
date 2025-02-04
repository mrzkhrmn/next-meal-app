import React from "react";

export const Video = ({ embedUrl }: { embedUrl: string }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 overflow-hidden rounded-lg">
      <iframe
        width="100%"
        height="600"
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
