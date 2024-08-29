import React, { useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import { signup } from "@/actions/userActions";

export default function SignupForm({
  switchModal,
  closeModal,
}: {
  switchModal: (type: string) => void;
  closeModal: () => void;
}) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pending, setPending] = useState(false);

  const confirmPasswordError = confirmPassword && password !== confirmPassword;
  const passwordError =
    password && password.length < 8
      ? "Password must be at least 8 characters long"
      : "";
  const cannotSubmit =
    !firstname ||
    !lastname ||
    !email ||
    !password ||
    !confirmPassword ||
    !!passwordError ||
    !!confirmPasswordError;

  function clearInputs() {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    const { done, error } = await signup(firstname, lastname, email, password);
    if (!done && error) {
      setEmailError(error);
    } else {
      clearInputs();
      closeModal();
    }
    setPending(false);
  }

  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="flex flex-col flex-1 gap-2">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="John"
            required
            className="p-2 sm:p-3 border rounded-md w-full"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Doe"
            required
            className="p-2 sm:p-3 border rounded-md w-full"
          />
        </div>
      </div>
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
        {emailError ? (
          <p className="mt-[-2px] text-red-500 text-sm">{emailError}</p>
        ) : null}
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
        {passwordError ? (
          <p className="mt-[-2px] text-red-500 text-sm">{passwordError}</p>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="********"
          required
          className="p-2 sm:p-3 border rounded-md"
        />
        {confirmPasswordError ? (
          <p className="mt-[-2px] text-red-500 text-sm">
            Passwords do not match
          </p>
        ) : null}
      </div>
      <div className="flex flex-col gap-3">
        <button
          disabled={cannotSubmit || pending}
          type="submit"
          className="flex-center bg-accent-green-100 hover:bg-accent-green-200 disabled:bg-zinc-400 p-2 sm:p-3 rounded-md font-bold text-white duration-300"
        >
          {pending ? <LoadingIndicator color="white" /> : "Signup"}
        </button>
        <p className="font-semibold">
          Already have and account?{" "}
          <button
            type="button"
            onClick={() => switchModal("login")}
            className="text-accent-green-100 hover:text-accent-green-200 duration-300"
          >
            Login
          </button>
        </p>
      </div>
    </form>
  );
}
