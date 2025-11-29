import axiosInstance from '@/lib/axiosClient'
import type { User } from '@/models/models'

export async function getMe() {
  try {
    const res = await axiosInstance.get<User>('/auth/me', { withCredentials: true })
    const data = res.data
    return data
  } catch (err: unknown) {
    console.log(err)
  }
}
