import { signInSchema } from '@/schemas/zodSigninSchema'
import { signIn } from 'next-auth/react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { toast } from 'sonner'
import { z } from 'zod'

export const handleSignInSumit = async (
  values: z.infer<typeof signInSchema>,
  router: AppRouterInstance
) => {
  const result = await signIn('credentials', {
    redirect: false,
    email: values.email,
    password: values.password,
  })

  if (result?.error) {
    if (result.error === 'CredentialsSignin') {
      toast.error('Login Failed', {
        description: 'Invalid email or password',
      })
    } else {
      toast.error('Login Failed', {
        description: result.error,
      })
    }
  }

  if (result?.url) {
    router.replace('/')
  }
}
