import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { sub } from "date-fns";

const postsDirectory = join(process.cwd(), "_posts");

export type Post = {
  date?: string;
  slug?: string;
  content?: string;
};

export type FilePath2Md = {
  filePath: string;
  md: string;
};

const slugToFilePath = new Map();

function getPostSlugs(directory: string): string[] {
  let files = fs.readdirSync(directory);
  const re = [] as string[];
  for (let f of files) {
    if (!f.endsWith(".md")) {
      re.push(...getPostSlugs(join(directory, f)));
    } else {
      re.push(f);
      slugToFilePath.set(f, join(directory, f))
    }
  }
  return re;
}

export function getMDFullPath(realSlug: string, directory: string) {
  if (findMrd(realSlug, directory)) {
    return join(directory, realSlug);
  }
  let files = fs.readdirSync(directory);
  const subDs = files.filter((f) => !f.endsWith(".md"));
  for (let subD of subDs) {
    const re = getMDFullPath(realSlug, join(directory, subD));
    if (re !== "") {
      return re;
    }
  }
  return "";
}

function findMrd(realSlug: string, directory:string) {
  let files = fs.readdirSync(directory);
  const matched = files.filter(f => f.endsWith(".md")).find(f => f === realSlug)
  return matched !== undefined ? true : false
}

export function getPostBySlug(slug: string, fields = []): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = getMDFullPath(realSlug.concat(".md"), postsDirectory)
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs(postsDirectory)
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
