'use client'

// import { useState } from "react";

import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form"
import { signUpSchema } from "../../../../schemas/zodsignupSchema";
import Logo from "@/components/shared/header/logo";
import { Form } from "@/components/ui/form";
import NameField from "@/components/shared/form/nameField";
import EmailField from "@/components/shared/form/emailField";
import PasswordField from "@/components/shared/form/passwordField";
import { Button } from "@/components/ui/button";

const SignUp = () => {

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    console.log(values)
  }

  return (
    <main className="flex max-xl:flex-col grow">
      <div className="2xl:w-1/2 max-xl:items-center flex flex-col grow gap-4 justify-center px-16 bg-purple-50">
        <Logo />
        <h2 className="text-4xl font-bold mt-4">Signup Page Title</h2>
        <p className="text-xl max-xl:text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit facilis quaerat possimus dolores voluptatibus repudiandae, molestias ut eligendi cum eos veritatis tempore dolorem corporis asperiores neque iste. Nulla, similique alias!</p>
      </div>

      <div className="2xl:w-1/2 flex flex-col grow items-center justify-center">  
        <h2 className="text-3xl mb-6 font-[900]">Sign Up</h2>
        <Form {...form}>
          <form
            onSubmit= {form.handleSubmit(onSubmit)}
            className="space-y-4 bg-blue-50 p-8 rounded-lg w-sm"
          >
            <NameField field={form.register('name')} error={form.formState.errors?.name} />
            <EmailField field={form.register('email')} error={form.formState.errors?.email} />
            <PasswordField field={form.register('password')} error={form.formState.errors?.password} />
            <Button
              type="submit"
              size="lg"
              className="bg-blue-600 text-blue-50 h-10 w-full cursor-pointer"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}

export default SignUp;