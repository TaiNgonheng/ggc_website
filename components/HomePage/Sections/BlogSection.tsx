import React from "react";
import Section from "../../Section";
import BlogCard from "../BlogCard";
const blogs = [
  {
    title: "5 Ways to Solve Waste Disposal Problems",
    subtitle:
      "Much daily waste ends up in landfills, but it doesn't have to. Simple waste management methods can reduce this. Here are five tips to help make the world greener",
    image: "/assets/BlogImage/solid.png",
  },
  {
    title: "Type Of Waste Management",
    subtitle:
      "A significant amount of waste ends up in landfills daily, but this doesn't have to be the case. Simple waste management methods can greatly reduce landfill waste. Here are five tips to help make the world greener",
    image: "/assets/BlogImage/typeOfwaste.png",
  },
  {
    title: "Waste Management pays $3 billion for Advanced Disposal",
    subtitle:
      "Recycling is crucial for preserving the environment and sustaining the planet. Its benefits outweigh those of raw production. While many people recognize recycling as beneficial, they may not fully grasp its importance. Here are some key reasons why recycling matters.",
    image: "/assets/BlogImage/cintry.png",
  },
];

const BlogSection = () => {
  return (
    <Section title="Our Blogs">
      <div className="flex flex-col items-center justify-center gap-x-8 gap-y-12 xl:flex-row xl:items-stretch">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            subtitle={blog.subtitle}
            image={`${blog.image}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default BlogSection;
