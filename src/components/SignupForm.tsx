import React from "react";

export default function SignupForm({
  switchModal,
}: {
  switchModal: (type: string) => void;
}) {
  return (
    <form className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="flex flex-col flex-1 gap-2">
          <label htmlFor="first-name">Firstname</label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="John"
            required
            className="p-2 sm:p-3 border rounded-md w-full"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <label htmlFor="last-name">Lastname</label>
          <input
            type="text"
            name="last-name"
            id="last-name"
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
      <div className="flex flex-col gap-2">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="confirm-password"
          name="confirm-password"
          id="confirm-password"
          placeholder="********"
          required
          className="p-2 sm:p-3 border rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <button
          type="submit"
          className="bg-accent-green-100 hover:bg-accent-green-200 p-2 sm:p-3 rounded-md font-bold text-white duration-300"
        >
          Signup
        </button>
        <p className="font-semibold text-sm">
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
