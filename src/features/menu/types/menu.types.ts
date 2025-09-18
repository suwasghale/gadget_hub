import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface Section {
  title: string;
  items: string[];
}

export interface MenuItem {
  title: string;
  icon: LucideIcon | ReactNode;
  color: string;
  sections: Section[];
  subMenus?: Record<string, MenuItem>; // optional nested menus
}

export type MenuData = Record<string, MenuItem>;
