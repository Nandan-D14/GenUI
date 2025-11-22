import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { AiBuilder } from './pages/AiBuilder';
import { DocPage } from './pages/DocPage';
import { Button } from './components/ui-lib/Button';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui-lib/Card';
import { Input } from './components/ui-lib/Input';
import { Badge } from './components/ui-lib/Badge';
import { Avatar } from './components/ui-lib/Avatar';
import { Alert } from './components/ui-lib/Alert';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui-lib/Tabs';

import { Footer } from './components/Footer';
import { Menu, X, Github, Layers, Search } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { SearchDialog } from './components/SearchDialog';

// Example Code Snippets
const BUTTON_CODE = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Button</Button>
}`;

const INPUT_CODE = `import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}`;

const CARD_CODE = `import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Deploy your new project in one-click.</p>
      </CardContent>
    </Card>
  )
}`;

const BADGE_CODE = `import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}`;

const AVATAR_CODE = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`;

const ALERT_CODE = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}`;

const TABS_CODE = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  )
}`;

const AppContent: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col text-foreground transition-colors duration-300">
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4 sm:px-8 mx-auto max-w-screen-2xl">
          <div className="mr-4 hidden md:flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <Layers className="h-6 w-6 text-primary" />
              <span className="hidden font-bold sm:inline-block text-lg tracking-tight">
                NextUI Gen
              </span>
            </Link>
          </div>
          
          <button 
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent md:hidden mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle Menu</span>
          </button>

          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              {/* Search Button */}
              <button 
                onClick={() => setSearchOpen(true)}
                className="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 text-sm text-muted-foreground shadow-sm h-9 w-full justify-start md:w-64"
              >
                <Search className="mr-2 h-4 w-4" />
                <span className="hidden lg:inline-flex">Search documentation...</span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </button>
            </div>
            <nav className="flex items-center gap-2">
               <a href="#" className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                 <Github className="h-5 w-5" />
               </a>
               <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      <div className="flex-1 container flex-row md:flex mx-auto max-w-screen-2xl items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 px-4 sm:px-8">
        <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        
        <main className="relative py-6 lg:gap-10 lg:py-8 w-full min-w-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/installation" element={
              <div className="max-w-3xl space-y-6">
                 <h1 className="text-4xl font-bold text-foreground">Installation</h1>
                 <p className="text-muted-foreground text-lg">
                   This library is not a dependency you install. It is a set of components you copy and paste into your project.
                 </p>
                 <div className="p-4 bg-zinc-950 rounded-md border border-border">
                   <h3 className="font-mono text-sm text-zinc-400 mb-2">Add utilities</h3>
                   <pre className="text-sm text-zinc-300">npm install tailwindcss-animate class-variance-authority clsx tailwind-merge</pre>
                 </div>
              </div>
            } />
            <Route path="/ai-generator" element={<AiBuilder />} />
            
            {/* Component Routes */}
            <Route path="/components/button" element={
              <DocPage 
                title="Button" 
                description="Displays a button or a component that looks like a button."
                component={
                  <div className="flex gap-4 flex-wrap justify-center">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                }
                code={BUTTON_CODE}
              />
            } />
            
            <Route path="/components/input" element={
              <DocPage 
                title="Input" 
                description="Displays a form input field or a component that looks like an input field."
                component={
                  <div className="w-full max-w-sm space-y-4">
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" label="Password" />
                  </div>
                }
                code={INPUT_CODE}
              />
            } />

            <Route path="/components/card" element={
              <DocPage 
                title="Card" 
                description="Displays a card with header, content, and footer."
                component={
                  <Card className="w-[350px]">
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">You have 3 unread messages.</p>
                      <div className="mt-4 flex gap-2">
                         <div className="h-2 w-2 mt-2 rounded-full bg-sky-500"></div>
                         <div className="text-sm">
                           <p className="font-medium">Your subscription expires soon</p>
                           <p className="text-xs text-muted-foreground">2 hours ago</p>
                         </div>
                      </div>
                    </CardContent>
                  </Card>
                }
                code={CARD_CODE}
              />
            } />

            <Route path="/components/badge" element={
              <DocPage
                title="Badge"
                description="Displays a badge or a component that looks like a badge."
                component={
                  <div className="flex gap-4 flex-wrap justify-center">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                }
                code={BADGE_CODE}
              />
            } />

            <Route path="/components/avatar" element={
              <DocPage
                title="Avatar"
                description="An image element with a fallback for representing the user."
                component={
                  <div className="flex gap-4 flex-wrap justify-center items-center">
                    <Avatar src="https://github.com/shadcn.png" alt="@shadcn" />
                    <Avatar fallback="CN" />
                  </div>
                }
                code={AVATAR_CODE}
              />
            } />

            <Route path="/components/alert" element={
              <DocPage
                title="Alert"
                description="Displays a callout for user attention."
                component={
                  <div className="w-full max-w-xl space-y-4">
                     <Alert title="Heads up!">
                       You can add components to your app using the cli.
                     </Alert>
                     <Alert variant="destructive" title="Error">
                       Your session has expired. Please log in again.
                     </Alert>
                     <Alert variant="success" title="Success">
                       Your changes have been saved successfully.
                     </Alert>
                  </div>
                }
                code={ALERT_CODE}
              />
            } />

            <Route path="/components/tabs" element={
              <DocPage
                title="Tabs"
                description="A set of layered sections of content—known as tab panels—that are displayed one at a time."
                component={
                  <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                      <Card>
                        <CardHeader>
                          <CardTitle>Account</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="space-y-1">
                            <label className="text-sm font-medium">Name</label>
                            <Input defaultValue="Pedro Duarte" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-sm font-medium">Username</label>
                            <Input defaultValue="@peduarte" />
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="password">
                       <Card>
                        <CardHeader>
                          <CardTitle>Password</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="space-y-1">
                            <label className="text-sm font-medium">Current Password</label>
                            <Input type="password" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-sm font-medium">New Password</label>
                            <Input type="password" />
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                }
                code={TABS_CODE}
              />
            } />

          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
