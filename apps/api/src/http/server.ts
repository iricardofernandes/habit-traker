import { fastify } from 'fastify'
import fastifyCors from '@fastify/cors'
import {
  // jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { createAccount } from './routes/auth/create-account'
import { createGoalRoute } from './routes/goals/create-goal'
import { getPendingGoalsRoute } from './routes/goals/get-pending-goals'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, {
  origin: '*',
})

// Routes
app.register(createAccount)
app.register(createGoalRoute)
app.register(getPendingGoalsRoute)

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on port 3333')
})
