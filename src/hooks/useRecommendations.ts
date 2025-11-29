import { getAllRecommendations, postRecommendation } from '@/services/recommendations.service'
import { useMutation, useQuery } from '@tanstack/vue-query'

export function useGetAllRecommendations() {
  const {
    data: recommendations,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['recommendations'],
    queryFn: getAllRecommendations,
  })

  return { recommendations, isLoading, isError }
}

export function useSendRecommendation() {
  const {
    mutate: sendRecommendation,
    isError,
    isPending,
  } = useMutation({ mutationFn: postRecommendation })
  return { sendRecommendation, isError, isPending }
}
