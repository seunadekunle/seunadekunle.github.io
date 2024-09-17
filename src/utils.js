export function getUrl(path) {
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://seunadekunle.github.io'
      : 'http://localhost:3000';
    
    return `${baseUrl}/#${path}`;
  }