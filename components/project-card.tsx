"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import type { ProjectMeta } from "@/lib/types"

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="project-card rounded-2xl overflow-hidden border bg-card">
        {/* Thumbnail */}
        <div
          className="aspect-[4/3] relative overflow-hidden"
          style={{ backgroundColor: project.color }}
        >
          {/* Placeholder content — swap with real images */}
          <div className="w-full h-full flex items-center justify-center p-6">
            <span className="text-white/80 text-sm font-medium text-center">
              {project.title} thumbnail
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-xs">
              {project.year}
            </Badge>
          </div>
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
            <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-foreground" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-xs text-primary border-primary/30">
              {project.categoryLabel}
            </Badge>
          </div>
          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {project.subtitle}
          </p>
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-xs text-muted-foreground">+{project.tags.length - 3}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
