"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

export function AuthModal() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
      } else {
        setUser(user);
      }
    };

    fetchUser();

    // Optional: Listen for authentication state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          setUser(session?.user ?? null);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
        }
      },
    );

    // Cleanup the listener on component unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase]);

  return user ? (
    <Button>Dashboard</Button>
  ) : (
    <>
      <Dialog open={isSignUpOpen} onOpenChange={setIsSignUpOpen}>
        <DialogTrigger asChild>
          <RainbowButton
            className="text-base"
            onClick={() => setIsSignUpOpen(true)}
          >
            Cadastre-se
          </RainbowButton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl font-bold">
              Criar uma conta
            </DialogTitle>
            <DialogDescription>
              Junte-se à nossa comunidade de profissionais e comece a colaborar
            </DialogDescription>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@exemplo.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" />
                <Button className="w-full">Cadastrar-se</Button>
              </div>
            </div>
          </DialogHeader>
          <div className="mt-4 text-center">
            <p className="text-muted-foreground text-sm">
              Já tem uma conta?{" "}
              <Button
                variant="link"
                className="p-0"
                onClick={() => {
                  setIsSignUpOpen(false);
                  setIsSignInOpen(true);
                }}
              >
                Entrar
              </Button>
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isSignInOpen} onOpenChange={setIsSignInOpen}>
        <DialogTrigger asChild>
          <RippleButton
            className="text-base"
            onClick={() => setIsSignInOpen(true)}
            rippleColor="#FFFFFF"
          >
            Entrar
          </RippleButton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl font-bold">
              Faça login na sua conta
            </DialogTitle>
            <DialogDescription>
              Acesse seus projetos e sua rede profissional
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="email-login">E-mail</Label>
              <Input
                id="email-login"
                type="email"
                placeholder="email@exemplo.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-login">Senha</Label>
              <Input id="password-login" type="password" />
            </div>
            <div className="flex items-center justify-end">
              <Button variant="link" className="p-0 text-xs">
                Esqueceu a senha?
              </Button>
            </div>
          </div>
          <div className="mt-4 space-y-4">
            <Button className="w-full">Entrar</Button>
            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                Não tem uma conta?{" "}
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => {
                    setIsSignInOpen(false);
                    setIsSignUpOpen(true);
                  }}
                ></Button>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
