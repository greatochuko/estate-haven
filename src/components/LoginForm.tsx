import { login } from "@/actions/authActions";
import React, { useState } from "react";
import LoadingIndicator from "./LoadingIndicator";

export default function LoginForm({
  switchModal,
  closeModal,
}: {
  switchModal: (type: string) => void;
  closeModal: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [pending, setPending] = useState(false);

  const cannotSubmit = !email || !password || pending;

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    const { done, error } = await login(email, password);
    setLoginError(error);
    if (done) {
      (e.target as HTMLFormElement).reset();
      closeModal();
    }
    setPending(false);
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          required
          className="p-2 sm:p-3 border rounded-md"
        />
      </div>
      {loginError ? (
        <p className="mt-[-2px] text-red-500 text-sm">{loginError}</p>
      ) : null}
      <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center gap-2">
        <button
          disabled={cannotSubmit}
          type="submit"
          className="flex-center bg-accent-green-100 hover:bg-accent-green-200 disabled:bg-zinc-400 px-4 py-2 rounded-md w-full sm:w-20 font-bold text-white duration-300 disabled:cursor-not-allowed"
        >
          {pending ? <LoadingIndicator /> : "Login"}
        </button>
        <p className="font-medium">
          Don&apos;t have and account?{" "}
          <button
            type="button"
            onClick={() => switchModal("signup")}
            className="text-accent-green-100 hover:underline duration-300"
          >
            Signup
          </button>
        </p>
      </div>
    </form>
  );
}
