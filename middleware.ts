import { NextRequest, NextResponse } from "next/server";
import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Redirect to login if no session exists
  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Check if the user is in the AllowedUsers table
  const { data: allowedUser, error } = await supabase
    .from("AllowedUsers")
    .select("*")
    .eq("email", session.user.email)
    .single();

  if (error || !allowedUser) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/orderinput/:path*", "/orderlist/:path*", "/orders/:path*"],
};
