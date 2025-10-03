'use client'

import { useState, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Search, Plus, Filter, Download, Eye, Edit, Trash2, Clock, CheckCircle, AlertTriangle, XCircle, TrendingUp, DollarSign, FileText, Users, Link, BarChart3, Target, Settings } from 'lucide-react'
import { auditMockData, type Audit, formatCurrency, getAuditStats } from '../data/auditMockData'
import { AuditActionModals } from '../components/AuditActionModals'
import { toast } from 'sonner'

export default function AuditsPage() {
  const [audits, setAudits] = useState<Audit[]>(auditMockData)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [priorityFilter, setPriorityFilter] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedAudit, setSelectedAudit] = useState<Audit | null>(null)
  const [modalType, setModalType] = useState<'view' | 'edit' | 'delete' | 'add' | null>(null)
  const itemsPerPage = 10

  const stats = getAuditStats(audits)

  const filteredAudits = useMemo(() => {
    return audits.filter(audit => {
      const matchesSearch = audit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           audit.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           audit.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           audit.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === 'all' || audit.status === statusFilter
      const matchesType = typeFilter === 'all' || audit.type === typeFilter
      const matchesPriority = priorityFilter === 'all' || audit.priority === priorityFilter
      
      return matchesSearch && matchesStatus && matchesType && matchesPriority
    })
  }, [audits, searchTerm, statusFilter, typeFilter, priorityFilter])

  const paginatedAudits = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredAudits.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredAudits, currentPage, itemsPerPage])

  const totalPages = Math.ceil(filteredAudits.length / itemsPerPage)

  const handleOpenModal = (type: typeof modalType, audit?: Audit) => {
    setSelectedAudit(audit || null)
    setModalType(type)
  }

  const handleCloseModal = () => {
    setSelectedAudit(null)
    setModalType(null)
  }

  const handleAddAudit = (newAudit: Omit<Audit, 'id'>) => {
    const audit: Audit = {
      ...newAudit,
      id: Math.max(...audits.map(a => a.id)) + 1,
    }
    setAudits(prev => [audit, ...prev])
    toast.success('Audit created successfully')
  }

  const handleUpdateAudit = (updatedAudit: Audit) => {
    setAudits(prev => prev.map(a => a.id === updatedAudit.id ? updatedAudit : a))
    toast.success('Audit updated successfully')
  }

  const handleDeleteAudit = (auditId: number) => {
    setAudits(prev => prev.filter(a => a.id !== auditId))
    toast.success('Audit deleted successfully')
  }

  const handleExportCSV = () => {
    const csvHeaders = 'ID,Title,Client,Domain,Status,Type,Priority,Progress,Price,Assigned To,Created Date,Delivery Date\n'
    const csvData = filteredAudits.map(audit => 
      `${audit.id},"${audit.title}","${audit.clientName}","${audit.domain}",${audit.status},${audit.type},${audit.priority},${audit.progress}%,${audit.price},"${audit.assignedTo}","${audit.createdAt}","${audit.deliveryDate}"`
    ).join('\n')
    
    const blob = new Blob([csvHeaders + csvData], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `audits_${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
    toast.success('Audits exported successfully')
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'in-progress':
        return <Clock className="h-4 w-4 text-blue-500" />
      case 'pending':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case 'cancelled':
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <FileText className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'completed':
        return 'default'
      case 'in-progress':
        return 'secondary'
      case 'pending':
        return 'outline'
      case 'cancelled':
        return 'destructive'
      default:
        return 'outline'
    }
  }

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'destructive'
      case 'high':
        return 'default'
      case 'medium':
        return 'secondary'
      case 'low':
        return 'outline'
      default:
        return 'outline'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'backlink-audit':
        return <Link className="h-4 w-4 text-blue-500" />
      case 'seo-audit':
        return <BarChart3 className="h-4 w-4 text-green-500" />
      case 'competitor-analysis':
        return <Target className="h-4 w-4 text-purple-500" />
      case 'technical-audit':
        return <Settings className="h-4 w-4 text-orange-500" />
      default:
        return <FileText className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Audits</h1>
          <p className="text-muted-foreground">Manage SEO audits and backlink analysis projects</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExportCSV}>
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
          <Button onClick={() => handleOpenModal('add')}>
            <Plus className="h-4 w-4 mr-2" />
            New Audit
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Audits</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">
              {stats.inProgress} in progress
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completed}</div>
            <p className="text-xs text-muted-foreground">
              {((stats.completed / stats.total) * 100).toFixed(1)}% completion rate
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats.totalRevenue)}</div>
            <p className="text-xs text-muted-foreground">
              {formatCurrency(stats.pendingRevenue)} pending
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Urgent Tasks</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.urgentAudits}</div>
            <p className="text-xs text-muted-foreground">
              Require immediate attention
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search audits by title, client, domain, or assignee..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="backlink-audit">Backlink Audit</SelectItem>
                  <SelectItem value="seo-audit">SEO Audit</SelectItem>
                  <SelectItem value="competitor-analysis">Competitor Analysis</SelectItem>
                  <SelectItem value="technical-audit">Technical Audit</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Audits Table */}
      <Card>
        <CardHeader>
          <CardTitle>Audits ({filteredAudits.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Audit Details</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedAudits.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-8">
                      <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">No audits found</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedAudits.map((audit) => (
                    <TableRow key={audit.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{audit.title}</div>
                          <div className="text-sm text-muted-foreground">{audit.domain}</div>
                          <div className="text-xs text-muted-foreground">Due: {audit.deliveryDate}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{audit.clientName}</div>
                          <div className="text-sm text-muted-foreground">{audit.clientEmail}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getTypeIcon(audit.type)}
                          <span className="text-sm capitalize">{audit.type.replace('-', ' ')}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(audit.status)}
                          <Badge variant={getStatusVariant(audit.status) as any}>
                            {audit.status.replace('-', ' ')}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getPriorityVariant(audit.priority) as any}>
                          {audit.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="w-24">
                          <Progress value={audit.progress} className="h-2" />
                          <span className="text-xs text-muted-foreground">{audit.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{formatCurrency(audit.price)}</div>
                          <div className={`text-xs ${audit.paid ? 'text-green-600' : 'text-red-600'}`}>
                            {audit.paid ? '✓ Paid' : '✗ Unpaid'}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{audit.assignedTo}</div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleOpenModal('view', audit)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleOpenModal('edit', audit)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleOpenModal('delete', audit)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between space-x-2 py-4">
              <div className="text-sm text-muted-foreground">
                Showing {((currentPage - 1) * itemsPerPage) + 1} to{' '}
                {Math.min(currentPage * itemsPerPage, filteredAudits.length)} of{' '}
                {filteredAudits.length} audits
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="w-8"
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Audit Action Modals */}
      <AuditActionModals
        type={modalType}
        audit={selectedAudit}
        onClose={handleCloseModal}
        onAdd={handleAddAudit}
        onUpdate={handleUpdateAudit}
        onDelete={handleDeleteAudit}
      />
    </div>
  )
}