document.getElementById('year').textContent = new Date().getFullYear();
// Preserve links to sections from the former single-page site.
if (location.pathname.endsWith('/') || location.pathname.endsWith('/index.html')) {
  const oldSections = ['services', 'publications', 'team'];
  const section = location.hash.slice(1);
  if (oldSections.includes(section)) location.replace(`${section}.html#${section}`);
}
