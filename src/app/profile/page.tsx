import { redirect } from "next/navigation";

export default function ProfileRedirect() {
  // Redirect to the new profile location
  redirect("/account/profile");

  // This won't be rendered
  return null;
}
