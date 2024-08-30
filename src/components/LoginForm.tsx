import { login } from "@/actions/userActions";
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

  function clearInputs() {
    setEmail("");
    setPassword("");
    setLoginError("");
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    const { done, error } = await login(email, password);
    setLoginError(error);
    if (done) {
      clearInputs();
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
      <div className="flex flex-col gap-3">
        <button
          disabled={pending}
          type="submit"
          className="flex-center bg-accent-green-100 hover:bg-accent-green-200 disabled:bg-zinc-400 p-2 sm:p-3 rounded-md font-bold text-white duration-300"
        >
          {pending ? <LoadingIndicator color="white" /> : "Login"}
        </button>
        <p className="font-semibold">
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
