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
              title
              sections {
                id
                title
                description
                items {
                  ... on Member {
                    id
                    name
                    job
                    bio
                    links {
                      id
                      title
                      url
                      icon
                    }
                  }
                  ... on Section {
                    id
                    title
                    description
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
      <About about={about[0]} />
      <Footer />
    </>
  );
}
