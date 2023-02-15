import { getContributors, getContributorsTotalPages } from "@/lib/contributors";
import { Table } from "@/components/table";

export default async function Home() {
  const contributors = await getContributors({
    owner: "facebook",
    repo: "react",
  });

  const totalPages = await getContributorsTotalPages({
    owner: "facebook",
    repo: "react",
  });

  return <Table users={contributors} pageCount={totalPages} />;
}
