import React from "react";

export default function LoginForm({
  switchModal,
}: {
  switchModal: (type: string) => void;
}) {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@example.com"
          required
          className="p-3 border rounded-md"
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
          className="p-3 border rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <button
          type="submit"
          className="bg-accent-green-100 hover:bg-accent-green-200 p-3 rounded-md font-bold text-white duration-300"
        >
          Login
        </button>
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
