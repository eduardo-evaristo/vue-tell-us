import axiosInstance from '@/lib/axiosClient'

export async function login(email: string, password: string) {
  try {
    await axiosInstance.post('/auth/login', { email, password })
  } catch (err) {
    console.log(err)
  }
}
