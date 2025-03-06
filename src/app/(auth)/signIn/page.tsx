"use client";

import FormikInput from "@/src/components/formik/FormikInput";
// import { useAllPostsQuery } from "@/src/redux/features/post/postApi";
// import { useAppDispatch } from "@/src/redux/hooks";
import { Button } from "@heroui/button";
import { Form, Formik } from "formik";
import Link from "next/link";
// import { useRouter } from "next/navigation";

type TSignInValue = {
  email: string;
  password: string;
};

const Signin = () => {
  //   const [signin] = useAllPostsQuery("");
  //   const dispatch = useAppDispatch();
  //   const router = useRouter();

  const handleSubmit = (values: TSignInValue) => {
    console.log("data", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-slate-950 p-8 m-5 rounded-lg shadow-lg w-full max-w-md space-y-6">
        {/* Login Header */}
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Log in to your account
        </h1>

        {/* Formik Form */}
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-5">
              {/* Email */}
              <FormikInput label="Email" name="email" type="email" />

              {/* Password */}
              <FormikInput label="Password" name="password" type="password" />

              {/* Submit Button */}
              <Button
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
                type="submit"
              >
                Log In
              </Button>
            </Form>
          )}
        </Formik>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-5">
          Don&apos;t have an account?{" "}
          <Link className="text-blue-500 hover:underline" href="/registration">
            Sign up
          </Link>
        </p>
        <p className="text-center text-sm text-gray-400 mt-5">
          Forget your password?{" "}
          <Link className="text-blue-500 hover:underline" href="/recover">
            Recover now!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
