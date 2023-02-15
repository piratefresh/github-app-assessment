import { Avatar } from "@/components/avatar";
import { Text } from "@/components/text";
import { UserMap } from "@/components/usermap";
import { getContributors } from "@/lib/contributors";
import { getUser } from "@/lib/getUser";
import { getUserRepos } from "@/lib/getUserRepos";
import Link from "next/link";
import { Container, CardContainer, RepoCard, UserInfo } from "./styles";

interface UserPageProps {
  params: { username: string };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = getContributors({ owner: "facebook", repo: "react" });

  const usernames = (await res).map((user) => ({ username: user.login }));

  return usernames;
}

export default async function UserPage({ params }: UserPageProps) {
  const { username } = params;
  const user = await getUser({ username });
  const repos = await getUserRepos({ username });
  return (
    <Container>
      <UserInfo>
        <Avatar
          rounded
          src={user.avatar_url as string}
          height={180}
          width={180}
          alt={`avatar of ${user.login}`}
        />
        <Link href={user.html_url} target="_blank">
          <h1>{user.login}</h1>
        </Link>
        <p>{user.bio}</p>
        <p>{user.email}</p>
        <p>{user.location}</p>
        <p>Folowers: {user.followers}</p>
        <p>Following: {user.following}</p>
        {user.location && <UserMap location={user.location} />}
      </UserInfo>
      <div>
        <Text size="2xl" weight="semibold" as="h2">
          Last updated repositories
        </Text>
        <CardContainer>
          {repos.map((repo) => (
            <Link href={repo.html_url} key={repo.id} target="_blank">
              <RepoCard>
                <Text size="4xl" as="h3">
                  {repo.name}
                </Text>
                <Text size="sm" as="p">
                  {repo.description}
                </Text>
              </RepoCard>
            </Link>
          ))}
        </CardContainer>
      </div>
    </Container>
  );
}
