'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import {
  FileText,
  Plus,
  Search,
  Download,
  Eye,
  Edit,
  Trash2,
  Image,
  Video,
  FileIcon,
  TrendingUp,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Layout,
  Folder,
  ExternalLink,
  Copy,
  MoreHorizontal
} from 'lucide-react'
import {
  contentPages,
  mediaFiles,
  contentTemplates,
  seoAnalyses,
  contentCategories,
  contentStats
} from '../data/contentMockData'

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState('pages')
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const formatFileSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    if (bytes === 0) return '0 Byte'
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i]
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'draft':
        return <Edit className="w-4 h-4 text-gray-600" />
      case 'scheduled':
        return <Clock className="w-4 h-4 text-blue-600" />
      case 'archived':
        return <XCircle className="w-4 h-4 text-red-600" />
      default:
        return <AlertCircle className="w-4 h-4 text-yellow-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
      published: "default",
      draft: "secondary",
      scheduled: "outline",
      archived: "destructive"
    }
    return variants[status] || "outline"
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page':
        return <FileText className="w-4 h-4 text-blue-600" />
      case 'blog':
        return <Edit className="w-4 h-4 text-green-600" />
      case 'landing':
        return <Layout className="w-4 h-4 text-purple-600" />
      case 'legal':
        return <FileIcon className="w-4 h-4 text-gray-600" />
      case 'help':
        return <Users className="w-4 h-4 text-orange-600" />
      default:
        return <FileText className="w-4 h-4 text-gray-600" />
    }
  }

  const getMediaIcon = (mimeType: string) => {
    if (mimeType.startsWith('image/')) {
      return <Image className="w-4 h-4 text-green-600" />
    } else if (mimeType.startsWith('video/')) {
      return <Video className="w-4 h-4 text-red-600" />
    } else {
      return <FileIcon className="w-4 h-4 text-blue-600" />
    }
  }

  const getSEOScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const filteredPages = contentPages.filter(page => {
    const matchesSearch = page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         page.slug.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || page.status === statusFilter
    const matchesType = typeFilter === 'all' || page.type === typeFilter
    return matchesSearch && matchesStatus && matchesType
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
          <p className="text-gray-600">Manage pages, blog posts, and media content</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Create Content
          </Button>
        </div>
      </div>

      {/* Content Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Pages</p>
                <p className="text-2xl font-bold text-gray-900">{contentStats.totalPages}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Published</p>
                <p className="text-2xl font-bold text-green-600">{contentStats.publishedPages}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-purple-600">{contentStats.totalViews.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">SEO Score</p>
                <p className="text-2xl font-bold text-orange-600">{contentStats.seoScore}%</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'pages', label: 'Pages', icon: FileText },
            { id: 'media', label: 'Media Library', icon: Image },
            { id: 'templates', label: 'Templates', icon: Layout },
            { id: 'categories', label: 'Categories', icon: Folder },
            { id: 'seo', label: 'SEO Analysis', icon: TrendingUp }
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Content Based on Active Tab */}
      {activeTab === 'pages' && (
        <div className="space-y-6">
          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search pages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="page">Page</SelectItem>
                <SelectItem value="blog">Blog</SelectItem>
                <SelectItem value="landing">Landing</SelectItem>
                <SelectItem value="legal">Legal</SelectItem>
                <SelectItem value="help">Help</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Pages Table */}
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Last Modified</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPages.map((page) => (
                      <TableRow key={page.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            {getTypeIcon(page.type)}
                            <div>
                              <p className="font-medium text-sm">{page.title}</p>
                              <p className="text-xs text-gray-500">/{page.slug}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">
                            {page.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(page.status)}
                            <Badge variant={getStatusBadge(page.status)} className="capitalize">
                              {page.status}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm font-medium">{page.author.name}</p>
                            <p className="text-xs text-gray-500">{page.author.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4 text-gray-400" />
                            <span className="text-sm">{page.views.toLocaleString()}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">
                          {formatDate(page.updatedAt)}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'media' && (
        <div className="space-y-6">
          {/* Media Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Files</p>
                    <p className="text-lg font-semibold">{contentStats.mediaFiles}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Image className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Storage Used</p>
                    <p className="text-lg font-semibold">{contentStats.mediaStorage}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Recent Uploads</p>
                    <p className="text-lg font-semibold">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Media Library */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Media Library</CardTitle>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Upload Files
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mediaFiles.map((file) => (
                  <div key={file.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {getMediaIcon(file.mimeType)}
                        <span className="text-sm font-medium truncate">{file.originalName}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    {file.mimeType.startsWith('image/') && (
                      <div className="aspect-video bg-gray-100 rounded mb-3 flex items-center justify-center">
                        <Image className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    
                    <div className="space-y-2 text-xs text-gray-600">
                      <p>Size: {formatFileSize(file.size)}</p>
                      <p>Uploaded: {formatDate(file.uploadedAt)}</p>
                      <p>Used: {file.usageCount} times</p>
                    </div>
                    
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Copy className="w-3 h-3 mr-1" />
                        Copy URL
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'templates' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contentTemplates.map((template) => (
                  <div key={template.id} className="border rounded-lg p-4">
                    <div className="aspect-video bg-gray-100 rounded mb-4 flex items-center justify-center">
                      <Layout className="w-8 h-8 text-gray-400" />
                    </div>
                    
                    <h3 className="font-semibold mb-2">{template.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="capitalize">
                        {template.type}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        Used {template.usageCount} times
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1">
                        Use Template
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'categories' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Content Categories</CardTitle>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Category
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentCategories.map((category) => (
                  <div key={category.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Folder className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-gray-600">{category.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {category.pageCount} pages • /{category.slug}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge variant={category.isVisible ? "default" : "secondary"}>
                        {category.isVisible ? 'Visible' : 'Hidden'}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'seo' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                SEO Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {seoAnalyses.map((analysis) => {
                  const page = contentPages.find(p => p.id === analysis.pageId)
                  if (!page) return null
                  
                  return (
                    <div key={analysis.pageId} className="border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold">{page.title}</h3>
                          <p className="text-sm text-gray-600">/{page.slug}</p>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${getSEOScoreColor(analysis.score)}`}>
                            {analysis.score}
                          </div>
                          <p className="text-xs text-gray-500">SEO Score</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <Progress value={analysis.score} className="h-2" />
                      </div>
                      
                      {analysis.issues.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Issues Found</h4>
                          <div className="space-y-2">
                            {analysis.issues.map((issue, index) => (
                              <div key={index} className="flex items-start gap-2 text-sm">
                                <AlertCircle className={`w-4 h-4 mt-0.5 ${
                                  issue.type === 'error' ? 'text-red-500' :
                                  issue.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'
                                }`} />
                                <span>{issue.message}</span>
                                <Badge variant="outline" className="ml-auto text-xs">
                                  {issue.priority}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {analysis.suggestions.length > 0 && (
                        <div>
                          <h4 className="font-medium mb-2">Suggestions</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {analysis.suggestions.map((suggestion, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="w-1 h-1 bg-gray-400 rounded-full mt-2"></span>
                                {suggestion}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="flex justify-between items-center mt-4 pt-4 border-t">
                        <span className="text-xs text-gray-500">
                          Last analyzed: {formatDate(analysis.lastAnalyzed)}
                        </span>
                        <Button variant="outline" size="sm">
                          Re-analyze
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}