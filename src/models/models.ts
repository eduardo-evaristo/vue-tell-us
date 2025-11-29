export type Recommendation = {
  id: string
  videoId: string
  note: string | null
  userId: string
  createdAt: string // or Date if you convert it
  updatedAt: string // or Date if you convert it
}

export type User = {
  createdAt: string
  email: string
  id: string
  profilePic?: string | null
  updatedAt: string
  username: string
}
