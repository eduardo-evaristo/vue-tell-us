import api from '@/lib/axiosClient'
import type { Recommendation } from '@/models/models'

export async function postVideo() {
  // const user =
  await api.post('/recommendations', {})
}

export async function getAllRecommendations() {
  const recommendations = await api.get<Recommendation[]>('/recommendations')
  return recommendations
}
