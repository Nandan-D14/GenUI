import React from 'react';
import { SidebarSection } from '../types';
import { NavLink } from 'react-router-dom';

export const sidebarNav: SidebarSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Installation", href: "/installation" },
    ]
  },
  {
    title: "AI Tools",
    items: [
      { title: "Component Generator", href: "/ai-generator" },
    ]
  },
  {
    title: "Forms",
    items: [
      { title: "Button", href: "/components/button" },
      { title: "Input", href: "/components/input" },
      { title: "Switch", href: "/components/switch" },
    ]
  },
  {
    title: "Display",
    items: [
      { title: "Card", href: "/components/card" },
      { title: "Badge", href: "/components/badge" },
      { title: "Avatar", href: "/components/avatar" },
      { title: "Accordion", href: "/components/accordion" },
      { title: "Skeleton", href: "/components/skeleton" },
    ]
  },
  {
    title: "Layout",
    items: []
  },
  {
    title: "Navigation",
    items: [
       { title: "Tabs", href: "/components/tabs" },
    ]
  },
  {
    title: "Feedback",
    items: [
       { title: "Alert", href: "/components/alert" },
       { title: "Dialog", href: "/components/dialog" },
    ]
  }
];

export const Sidebar: React.FC<{ mobileOpen: boolean; setMobileOpen: (v: boolean) => void }> = ({ mobileOpen, setMobileOpen }) => {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden" 
          onClick={() => setMobileOpen(false)}
        />
      )}
      
      <aside className={`
        fixed top-14 z-50 h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-border bg-background py-6 pr-6 
        md:sticky md:block md:w-64
        ${mobileOpen ? 'block left-0 px-6' : 'hidden'}
      `}>
        <div className="flex flex-col space-y-6">
          {sidebarNav.map((section, i) => (
            section.items.length > 0 ? (
              <div key={i} className="flex flex-col space-y-3">
                <h4 className="font-mono text-sm font-semibold text-foreground tracking-wider uppercase">
                  {section.title}
                </h4>
                <div className="flex flex-col space-y-1">
                  {section.items.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) => `
                        block rounded-md px-3 py-2 text-sm font-medium transition-colors
                        ${isActive 
                          ? "bg-secondary text-secondary-foreground" 
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }
                      `}
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : null
          ))}
        </div>
      </aside>
    </>
  );
};