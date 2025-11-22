import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui-lib/Card';
import { Button } from '../ui-lib/Button';

export const Blog: React.FC = () => {
  const posts = [
    {
      title: "Building Accessible Components",
      excerpt: "Learn the best practices for building accessible UI components with React and Tailwind.",
      date: "Oct 24, 2023",
      readTime: "5 min read"
    },
    {
      title: "The Future of Frontend Development",
      excerpt: "Explore the emerging trends and technologies shaping the future of web development.",
      date: "Nov 12, 2023",
      readTime: "8 min read"
    },
    {
      title: "Optimizing React Performance",
      excerpt: "Tips and tricks to keep your React applications running smoothly and efficiently.",
      date: "Dec 05, 2023",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">From the Blog</h2>
           <p className="text-muted-foreground md:text-xl max-w-[700px]">
             Insights, tutorials, and updates from our team.
           </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Card key={i} className="flex flex-col h-full">
              <div className="aspect-video w-full bg-muted rounded-t-lg" />
              <CardHeader>
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                 <p className="text-muted-foreground line-clamp-3">
                   {post.excerpt}
                 </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="ghost" className="w-full justify-start p-0 hover:bg-transparent hover:underline">Read More →</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
