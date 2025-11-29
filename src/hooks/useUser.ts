import { getMe } from '@/services/user.service'
import { useQuery } from '@tanstack/vue-query'

export function useMe() {
  const { data: user, isLoading, isError } = useQuery({ queryKey: ['me'], queryFn: getMe })
  return { user, isLoading, isError }
}
