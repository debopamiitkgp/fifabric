import { NextRequest, NextResponse } from "next/server";

const SITE_PASSWORD = process.env.SITE_PASSWORD || "fifabric2026";

export function middleware(request: NextRequest) {
  // Skip password check for API routes and static assets
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/api") ||
    request.nextUrl.pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Check for auth cookie
  const authCookie = request.cookies.get("fifabric-auth");
  if (authCookie?.value === "authenticated") {
    return NextResponse.next();
  }

  // Check for password in query param (login form submission)
  const password = request.nextUrl.searchParams.get("password");
  if (password === SITE_PASSWORD) {
    const url = request.nextUrl.clone();
    url.searchParams.delete("password");
    const response = NextResponse.redirect(url);
    response.cookies.set("fifabric-auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    return response;
  }

  // Show password page
  return new NextResponse(passwordPage(), {
    status: 401,
    headers: { "Content-Type": "text/html" },
  });
}

function passwordPage() {
  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>FiFabric — Access Required</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: Inter, system-ui, sans-serif;
      background: #0A0F1C;
      color: #E8E6E3;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container {
      text-align: center;
      max-width: 400px;
      padding: 2rem;
    }
    .logo {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }
    .logo span { color: #C9A84C; }
    .subtitle {
      color: #9A9590;
      font-size: 0.875rem;
      margin-bottom: 2rem;
    }
    form { display: flex; gap: 0.75rem; }
    input {
      flex: 1;
      padding: 0.625rem 1rem;
      border-radius: 0.375rem;
      border: 1px solid #1e293b;
      background: #111827;
      color: #E8E6E3;
      font-size: 0.875rem;
      outline: none;
    }
    input:focus { border-color: #C9A84C; }
    button {
      padding: 0.625rem 1.5rem;
      border-radius: 0.375rem;
      border: none;
      background: #C9A84C;
      color: #0A0F1C;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
    }
    button:hover { opacity: 0.9; }
    .error { color: #C4614E; font-size: 0.8rem; margin-top: 1rem; display: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo"><span>Fi</span>Fabric</div>
    <p class="subtitle">This site is under development. Enter the access code to continue.</p>
    <form method="GET">
      <input type="password" name="password" placeholder="Access code" required autofocus />
      <button type="submit">Enter</button>
    </form>
  </div>
</body>
</html>`;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
