import { getWeekPendingGoals } from '@/functions/get-week-pending-goals'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'

export async function getPendingGoalsRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get('/pending-goals', async () => {
    const { pendingGoals } = await getWeekPendingGoals()

    return { pendingGoals }
  })
}
