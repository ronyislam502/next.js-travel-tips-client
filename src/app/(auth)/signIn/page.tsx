import Link from "next/link";

const Signin = () => {
  return (
    <div>
      <h2>Please Login</h2>
      <p className="text-center text-sm text-gray-400 mt-5">
        Don&apos;t have an account?{" "}
        <Link className="text-blue-500 hover:underline" href="/signUp">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Signin;
