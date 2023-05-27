import React from "react";
import Card from "../components/Card";
function Home() {
  const data = [
    {
      title: "Noteworthy technology acquisitions 2021",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far,in reverse chronological order.",
      value: "Read more",
    },
    {
      title: "technology acquisitions 2021",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far,in reverse chronological order.",
      value: "Read more",
    },
  ];
  return (
    <div className="justify-center">
      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card header={item.title} content={item.content} value={item.value} />
        ))}
      </div>
    </div>
  );
}

export default Home;
