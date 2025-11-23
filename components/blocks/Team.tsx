import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui-lib/Avatar';
import { Card, CardContent, CardHeader, CardTitle } from '../ui-lib/Card';

export const Team: React.FC = () => {
  const team = [
    { name: "Alice Smith", role: "CEO & Founder", image: "https://i.pravatar.cc/150?u=alice" },
    { name: "Bob Jones", role: "CTO", image: "https://i.pravatar.cc/150?u=bob" },
    { name: "Charlie Brown", role: "Lead Designer", image: "https://i.pravatar.cc/150?u=charlie" },
    { name: "Diana Prince", role: "Marketing Lead", image: "https://i.pravatar.cc/150?u=diana" },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet the Team</h2>
          <p className="text-muted-foreground md:text-xl max-w-[700px]">
            The creative minds behind the project.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center space-y-4 text-center">
               <Avatar className="h-32 w-32">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
               </Avatar>
               <div className="space-y-1">
                 <h3 className="text-lg font-bold">{member.name}</h3>
                 <p className="text-sm text-muted-foreground">{member.role}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
