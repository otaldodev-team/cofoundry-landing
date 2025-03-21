import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import axios from "axios";
import { env } from "@/env";
import type { IAbout } from "@/types/about";

async function fetchAbout(): Promise<IAbout[]> {
  try {
    const { data: response } = await axios.post(
      env.NEXT_PUBLIC_HYGRAPH_ENDPOINT,
      {
        query: `
          query GetAbout {
            page(where: {title: "Sobre"}) {
              id
              sections {
                id
                title
                description
                items {
                  ... on Member {
                    id
                    name
                    bio
                    job
                    links {
                      id
                      title
                      url
                      icon
                    }
                  }
                }
              }
            }
          }
        `,
      },
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    if (!response?.data?.page) {
      console.error("Invalid page response format:", response);
      return [];
    }

    return response.data.page;
  } catch (error) {
    console.error("Error fetching page:", error);
    return [];
  }
}

export default async function AboutPage() {
  const about = await fetchAbout();

  return (
    <>
      <Header />
      <About about={about} />
      <Footer />
    </>
  );
}
