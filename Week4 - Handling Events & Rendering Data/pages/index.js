import ClickCounter from "@/components/ClickCounter";
import FlintstonesTable from "@/components/FintstonesTable";
import Post from "@/components/Post";
import PostsTable from "@/components/PostsTable";
import RandomConsole from "@/components/RandomConsole";

export function getStaticProps() {
  // invoked during the build to obtain static data for rendering in components

  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        resolve({ props: { staticPost: data } });
      });
  });
}

export default function Home({ staticPost }) {
  return (
    <>
      <PostsTable />
      <hr />
      <FlintstonesTable />
      <hr />
      <Post data={staticPost} />
      <hr />
      <ClickCounter /> <br />
      <hr />
      <ClickCounter start={5} />
      <hr />
      <RandomConsole />
    </>
  );
}
