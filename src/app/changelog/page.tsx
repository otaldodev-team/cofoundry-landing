import { Header } from "@/components/header";
import { Changelog } from "@/components/changelog";
import { Footer } from "@/components/footer";
import axios from "axios";
import { env } from "@/env";
import type { IChangelog } from "@/types/changelog";

async function fetchChangelogs(): Promise<IChangelog[]> {
  try {
    const { data: response } = await axios.post(
      env.NEXT_PUBLIC_HYGRAPH_ENDPOINT,
      {
        query: `
          query GetChangelogs {
            changelogs {
              id
              title
              description
              version
              type
              createdAt
            }
          }
        `,
      },
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    if (!response?.data?.changelogs) {
      console.error("Invalid changelog response format:", response);
      return [];
    }

    return response.data.changelogs;
  } catch (error) {
    console.error("Error fetching changelogs:", error);
    return [];
  }
}

export default async function ChangelogPage() {
  const changelogs = await fetchChangelogs();

  return (
    <>
      <Header />
      <Changelog changelogs={changelogs} />
      <Footer />
    </>
  );
}
