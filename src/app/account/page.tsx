import { redirect } from "next/navigation";

export default function AccountPage() {
  // Redirect to the profile page
  redirect("/account/profile");

  // This won't be rendered
  return null;
}
