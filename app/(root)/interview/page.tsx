import { redirect } from "next/navigation";
import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  // Ensure we have a user (double-check authentication)
  if (!user || !user.id) {
    // This should not normally happen due to the layout's auth check,
    // but we're adding it as an additional safeguard
    redirect("/sign-in");
  }

  return (
    <>
      <h3>Interview generation</h3>

      <Agent userName={user.name || "Guest"} userId={user.id} type="generate" />
    </>
  );
};

export default Page;
