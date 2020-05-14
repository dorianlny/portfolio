export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
  common: {
    image: '/images/dorian-lannay-meta-image.jpg',
  },
  index: {
    title: 'Dorian Lannay | Interdisciplinary product owner',
    description: 'Dorian Lannay, interdisciplinary product owner based in Amsterdam, Netherlands. I focus primarily on building user interfaces that are usable and scalable.'
  },
  profile: {
    title: 'Dorian Lannay | Profile',
    description: 'Over the last 6+ years, I have been working with small- and medium-size companies all over Europe.'
  },
  works: {
    title: 'Dorian Lannay | Works',
    description: 'A selection of the work carried out over 6+ years of work. Among which: Websites, Web applications, coordinated images and more.'
  }
}
