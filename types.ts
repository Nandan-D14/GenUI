import { ReactNode } from 'react';

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface SidebarSection {
  title: string;
  items: NavItem[];
}

export interface ComponentDocProps {
  title: string;
  description: string;
  usage: string;
  preview: ReactNode;
}

export interface GeneratedComponent {
  code: string;
  description: string;
}
