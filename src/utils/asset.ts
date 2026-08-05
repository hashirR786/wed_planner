/**
 * Utility function to resolve static asset paths correctly across environment deployments.
 * Handles sub-folder base paths (e.g. GitHub Pages /wed_planner/) as well as standard root paths (Vercel / local).
 */
export const getAssetUrl = (path: string | undefined): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : base + '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return cleanBase + cleanPath;
};
