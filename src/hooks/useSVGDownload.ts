import { RefObject } from 'react';

const useSVGDownload = (ref: RefObject<SVGSVGElement>, number: number) => () => {
  if (!ref.current) return;

  const svgString = new XMLSerializer().serializeToString(ref.current);
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `cistercian-${number}.svg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default useSVGDownload;