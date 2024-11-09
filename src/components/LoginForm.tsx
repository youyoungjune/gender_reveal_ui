"use client";

import { Input } from "@/components/ui/input";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { loginFormSchema, LoginValidationSchemaType } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

export const LoginForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const form = useForm<LoginValidationSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const handleLogin = useCallback(
    async (formValues: { name: string; password: string }) => {
      try {
        const loginResponse = await signIn("credentials", {
          redirect: false,
          callbackUrl: "/",
          ...formValues,
        });

        if (loginResponse && loginResponse?.status > 300) {
          toast.error("Incorrect login info.");
        } else {
          toast("Hello!");
        }
      } catch (e) {
        toast.error("Incorrect login info.");
      }
    },
    []
  );

  return (
    <div className="p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="First and Last Name"
                    className="text-[#954f36] bg-[#fef6ed]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Password"
                      type={visiblePassword ? "text" : "password"}
                      className="text-[#954f36] bg-[#fef6ed]"
                      {...field}
                    />
                    {visiblePassword ? (
                      <EyeIcon
                        className="absolute right-4 top-2 z-10 cursor-pointer text-[#954f36]"
                        onClick={() => setVisiblePassword(false)}
                      />
                    ) : (
                      <EyeClosedIcon
                        className="absolute right-4 top-2 z-10 cursor-pointer text-[#954f36]"
                        onClick={() => setVisiblePassword(true)}
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-[#bed0d8] hover:bg-[#bad5c6] text-[#fef6ed]"
          >
            Enter
          </Button>
        </form>
      </Form>
    </div>
  );
};
