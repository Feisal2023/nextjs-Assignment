import React, { Suspense } from "react";
import DeleteButton from "./DeleteButton";
import { getBaseUrl } from "../util/baseURL";

const PostList = async () => {
  const baseURL = getBaseUrl();
  const data = await fetch(`${baseURL}/api/posts`, { cache: "no-store" });
  const postsData = await data.json();
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-8 mb-4">Posts List</h1>
        {postsData.length > 0 ? (
          <div className="w-full md:w-2/3 lg:w-1/2">
            <ul>
              {postsData.map((post) => (
                <li
                  key={post.id}
                  className="mb-6 bg-white p-4 rounded-md shadow-lg flex justify-between items-center"
                >
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600">{post.content}</p>
                  </div>
                  <div className="space-x-2">
                    <DeleteButton id={post.id} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-2">No posts available</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;
