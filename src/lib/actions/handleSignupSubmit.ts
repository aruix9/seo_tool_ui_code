import axios, { AxiosError } from 'axios'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'
import { ApiResponse } from '../../../types/ApiResponse'
import { signUpSchema } from '@/schemas/zodSignupSchema'
import { z } from 'zod'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const handleSignUpSumit = async (
  values: z.infer<typeof signUpSchema>,
  router: AppRouterInstance
) => {
  try {
    const response = await axios.post('/api/auth/signup', values)

    toast.success('Sign Up Success', {
      description: response.data.message,
    })

    // Auto-login with NextAuth
    const result = await signIn('credentials', {
      redirect: true, // Redirect after successful login
      email: values.email,
      password: values.password,
      callbackUrl: '/', // Redirect URL after login
    })

    if (result?.error) {
      console.error('Login error:', result.error)
    }

    router.replace('/')
  } catch (error) {
    console.error('Error during sign up:', error)
    const axiosError = error as AxiosError<ApiResponse>

    const errorMessage = axiosError.response?.data.message
    // ('There was a problem with your sign up. Please try again.');

    toast.error('Sign Up Failed', {
      description: errorMessage,
      className: 'bg-red-200 text-red-900',
    })
  }
}
