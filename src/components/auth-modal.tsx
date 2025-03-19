"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AuthModal() {
  const isUser = false;

  return isUser ? (
    <Button className="text-base" asChild>
      <Link href="https://app.cofoundry.tech/dashboard" target="_self">
        Dashboard
      </Link>
    </Button>
  ) : (
    <>
      <Button variant="outline" className="text-base" asChild>
        <Link href="https://app.cofoundry.tech/entrar" target="_self">
          Entrar
        </Link>
      </Button>
      <Button className="text-base" asChild>
        <Link href="https://app.cofoundry.tech/cadastrar" target="_self">
          Cadastre-se
        </Link>
      </Button>
    </>
  );
}
