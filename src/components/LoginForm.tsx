import { login } from "@/actions/userActions";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import LoadingIndicator from "./LoadingIndicator";

export default function LoginForm({
  switchModal,
}: {
  switchModal: (type: string) => void;
}) {
  const [state, loginAction] = useFormState(login, { done: null, error: "" });

  const { done, error } = state;
  console.log(error);

  return (
    <form action={loginAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@example.com"
          required
          className="p-2 sm:p-3 border rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          required
          className="p-2 sm:p-3 border rounded-md"
        />
      </div>
      {error ? <p className="mt-[-2px] text-red-500 text-sm">{error}</p> : null}
      <div className="flex flex-col gap-2">
        <SubmitButton />
        <p className="font-semibold text-sm">
          Don&apos;t have and account?{" "}
          <button
            type="button"
            onClick={() => switchModal("signup")}
            className="text-accent-green-100 hover:text-accent-green-200 duration-300"
          >
            Signup
          </button>
        </p>
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="flex-center bg-accent-green-100 hover:bg-accent-green-200 p-2 sm:p-3 rounded-md font-bold text-white duration-300"
    >
      {pending ? <LoadingIndicator color="white" /> : "Login"}
    </button>
  );
}
