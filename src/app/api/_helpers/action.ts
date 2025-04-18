"use server";
export const handleLogin = async (message: string, formData: FormData) => {
  // useAction logic here
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username.trim() || !password.trim()) {
    return "Please fill your username or password";
  }
  return message;
};
