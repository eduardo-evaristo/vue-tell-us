import api from '@/lib/axiosClient'
import type { Recommendation } from '@/models/models'

export async function postRecommendation({
  videoId,
  note,
}: {
  videoId: string
  note: string | null
}) {
  const res = await api.post<Recommendation>('/recommendations', { videoId, note })
  const data = res.data
  return data
}

export async function getAllRecommendations() {
  const res = await api.get<Recommendation[]>('/recommendations')
  const data = res.data
  return data
}
