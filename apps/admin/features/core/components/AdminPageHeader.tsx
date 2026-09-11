"use client";

import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator, Heading, Text } from "@learnix/ui";
import { Button } from "@learnix/ui";
import { Plus } from "lucide-react";

interface BreadcrumbRoute {
  title: string;
  href?: string;
}

interface AdminPageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbRoute[];
  action?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
}

export function AdminPageHeader({ title, description, breadcrumbs, action }: AdminPageHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
      <div className="space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbs.map((crumb) => (
              <div key={crumb.title} className="flex items-center space-x-2">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {crumb.href ? (
                    <BreadcrumbLink href={crumb.href}>{crumb.title}</BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        
        <div>
          <Heading className="text-3xl font-bold tracking-tight text-foreground" level={1}>{title}</Heading>
          {description && (
            <Text className="text-muted-foreground mt-1">{description}</Text>
          )}
        </div>
      </div>

      {action && (
        <Button onClick={action.onClick} className="w-full md:w-auto shadow-sm">
          {action.icon ? action.icon : <Plus className="mr-2 h-4 w-4" />}
          {action.label}
        </Button>
      )}
    </div>
  );
}
