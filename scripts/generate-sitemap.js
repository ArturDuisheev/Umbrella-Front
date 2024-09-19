const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about-us', changefreq: 'weekly', priority: 0.8 },
  { url: '/#our-approach', changefreq: 'weekly', priority: 0.8 },
  { url: '/form', changefreq: 'weekly', priority: 0.8 },


];

const stream = new SitemapStream({ hostname: 'https://umbrella.com.kz' });

Readable.from(links).pipe(stream);

streamToPromise(stream).then((data) => {
  fs.writeFileSync('public/sitemap.xml', data.toString());
});