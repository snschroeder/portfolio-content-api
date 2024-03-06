export interface User {
  id: number
  email: string
}

export interface GalleryItem {
  title: string
  img_link: string
  tagline: string
  description: string
  stack: string
}

export interface HomepageItem {
  header: string
  portfolio_description: string
  dust_callout: string
  dust_joke: string
}

declare global {
  namespace Express {
    interface Request {
      user: User
    }
  }
  interface Error {
    status: number | undefined
  }
}
