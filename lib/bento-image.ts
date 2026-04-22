/**
 * Home Bento + Section 3 showcase hero image naming:
 * - default: /projects/<slug>/bento.jpg
 * - Playdates (wide slot): bento-wide.jpg
 * - PetCard (tall slot): bento-tall.jpg
 * Use CSS background stacking with thumb.jpg as fallback (same as Section 2).
 */
export function getBentoImage(slug: string) {
  const base = `/projects/${slug}`
  if (slug === "playdates") return `${base}/bento-wide.jpg`
  if (slug === "petcard") return `${base}/bento-tall.jpg`
  return `${base}/bento.jpg`
}
