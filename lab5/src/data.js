// Dummy data for the Udemy-like landing page

export const hero = {
  title: 'Learn anything. Teach anyone.',
  subtitle:
    'Explore a variety of fresh topics and expand your career with new skills.',
  ctaPrimary: 'Get Started',
  ctaSecondary: 'Browse courses',
}

export const courses = [
  {
    id: 1,
    title: 'The Complete JavaScript Course',
    author: 'John Doe',
    rating: 4.7,
    students: '42,321',
    price: '$12.99',
  },
  {
    id: 2,
    title: 'React - The Complete Guide',
    author: 'Jane Smith',
    rating: 4.6,
    students: '31,002',
    price: '$14.99',
  },
  {
    id: 3,
    title: 'Python for Beginners',
    author: 'Alex Johnson',
    rating: 4.5,
    students: '85,410',
    price: '$9.99',
  },
  {
    id: 4,
    title: 'UI/UX Design Fundamentals',
    author: 'Sara Lee',
    rating: 4.4,
    students: '12,005',
    price: '$11.99',
  },
]

export const companies = [
  { id: 'c1', name: 'Google' },
  { id: 'c2', name: 'Amazon' },
  { id: 'c3', name: 'Microsoft' },
  { id: 'c4', name: 'Airbnb' },
  { id: 'c5', name: 'Spotify' },
]

export default { hero, courses, companies }
