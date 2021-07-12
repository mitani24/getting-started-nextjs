import remark from "remark";
import html from "remark-html";

const posts: { id: string; title: string; date: string; content: string }[] = [
  {
    id: "pre-rendering",
    title: "Two Forms of Pre-rendering",
    date: "2020-01-01",
    content:
      "Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.",
  },
  {
    id: "ssg-ssr",
    title: "When to Use Static Generation v.s. Server-side Rendering",
    date: "2020-01-02",
    content:
      "We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.",
  },
];

export const getSortedPostsData = () => {
  const allPostData = posts.map((post) => {
    const { id, title, date } = post;
    return { id, title, date };
  });
  return allPostData.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
};

export const getPostData = async (id: string) => {
  const post = posts.find((post) => post.id === id);
  if (!post) {
    throw new Error("Post not found");
  }

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();
  console.log(contentHtml);
  return {
    id,
    title: post.title,
    date: post.date,
    contentHtml,
  };
};
