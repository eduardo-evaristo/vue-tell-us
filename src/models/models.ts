export type Recommendation = {
  id: string
  videoId: string
  note: string | null
  userId: string
  createdAt: string // or Date if you convert it
  updatedAt: string // or Date if you convert it
}
