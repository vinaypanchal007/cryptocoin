import { useEffect, useState } from "react";

export default function CryptoNews() {
  const [news, setNews] = useState([]);
  const API_URL =
    "https://cryptopanic.com/api/free/v1/posts/?auth_token=d5066c0debf0a397b7ecd68d0cae523080a76df5";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.results || []);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Latest Crypto News</h1>

      {news.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4">
          {news.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white rounded-lg hover:bg-gray-300 transition"
            >
              <p className="text-sm text-black">
                Posted At: {new Date(article.created_at).toLocaleTimeString()}
              </p>
              <h2 className=" text-black text-lg font-semibold mt-1">{article.title}</h2>
              <p className="text-sm text-blue-500 mt-1">{article.domain}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
