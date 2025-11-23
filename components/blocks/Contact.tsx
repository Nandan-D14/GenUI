import React from 'react';
import { Button } from '../ui-lib/Button';
import { Input } from '../ui-lib/Input';
import { Textarea } from '../ui-lib/Textarea';
import { Label } from '../ui-lib/Label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui-lib/Card';

export const Contact: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Contact Us</CardTitle>
            <CardDescription>
              Have a question? Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Max" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Robinson" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="m@example.com" required type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea className="min-h-[100px]" id="message" placeholder="Your message..." />
              </div>
              <Button className="w-full" type="submit">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
