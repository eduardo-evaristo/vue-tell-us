import api from '@/lib/axiosClient'
import type { Recommendation } from '@/models/models'

export async function postVideo() {
  // const user =
  await api.post('/recommendations', {})
}

export async function getAllRecommendations() {
  const res = await api.get<Recommendation[]>('/recommendations')
  const data = res.data
  return data
}
