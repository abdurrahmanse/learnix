"use client"

import { useState } from "react"
import { User, Image as ImageIcon, Shield } from "lucide-react"

import { UpdateProfileForm } from "./UpdateProfileForm"
import { AvatarUpload } from "./AvatarUpload"
import { ChangePasswordForm } from "./ChangePasswordForm"
import { Heading, Text } from "@learnix/ui";

type Tab = "general" | "avatar" | "security"

export function ProfileLayout() {
  const [activeTab, setActiveTab] = useState<Tab>("general")

  const tabs = [
    { id: "general", label: "General", icon: User },
    { id: "avatar", label: "Avatar", icon: ImageIcon },
    { id: "security", label: "Security", icon: Shield },
  ]

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 shrink-0">
        <nav className="flex space-x-2 md:flex-col md:space-x-0 md:space-y-2 overflow-x-auto pb-4 md:pb-0">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                {tab.label}
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
          {activeTab === "general" && (
            <>
              <div>
                <Heading className="text-2xl font-bold tracking-tight" level={2}>General Settings</Heading>
                <Text className="text-muted-foreground">Manage your account details and personal info.</Text>
              </div>
              <UpdateProfileForm />
            </>
          )}

          {activeTab === "avatar" && (
            <>
              <div>
                <Heading className="text-2xl font-bold tracking-tight" level={2}>Profile Avatar</Heading>
                <Text className="text-muted-foreground">Update your profile picture.</Text>
              </div>
              <AvatarUpload />
            </>
          )}

          {activeTab === "security" && (
            <>
              <div>
                <Heading className="text-2xl font-bold tracking-tight" level={2}>Security</Heading>
                <Text className="text-muted-foreground">Update your password to keep your account secure.</Text>
              </div>
              <ChangePasswordForm />
            </>
          )}
        </div>
      </main>
    </div>
  )
}
