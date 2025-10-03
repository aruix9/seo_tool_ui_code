'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { AlertTriangle, FileText, Globe, User, Calendar, DollarSign, Clock, CheckCircle, AlertCircle, XCircle, BarChart3, Target, Link, Settings } from 'lucide-react'
import { Audit, formatCurrency } from '../data/auditMockData'

interface AuditActionModalsProps {
  type: 'view' | 'edit' | 'delete' | 'add' | null
  audit: Audit | null
  onClose: () => void
  onAdd: (audit: Omit<Audit, 'id'>) => void
  onUpdate: (audit: Audit) => void
  onDelete: (auditId: number) => void
}

export function AuditActionModals({
  type,
  audit,
  onClose,
  onAdd,
  onUpdate,
  onDelete
}: AuditActionModalsProps) {
  const [formData, setFormData] = useState<Partial<Audit>>({
    title: '',
    clientName: '',
    clientEmail: '',
    domain: '',
    status: 'pending',
    type: 'seo-audit',
    priority: 'medium',
    assignedTo: '',
    progress: 0,
    totalLinks: 0,
    healthyLinks: 0,
    toxicLinks: 0,
    suspiciousLinks: 0,
    findings: {
      issues: 0,
      recommendations: 0,
      criticalIssues: 0
    },
    price: 0,
    paid: false,
    deliveryDate: '',
    notes: ''
  })

  // Initialize form data when modal opens
  useEffect(() => {
    if ((type === 'edit' || type === 'view') && audit) {
      setFormData(audit)
    } else if (type === 'add') {
      const today = new Date()
      const deliveryDate = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000) // 14 days from now
      
      setFormData({
        title: '',
        clientName: '',
        clientEmail: '',
        domain: '',
        status: 'pending',
        type: 'seo-audit',
        priority: 'medium',
        assignedTo: '',
        progress: 0,
        totalLinks: 0,
        healthyLinks: 0,
        toxicLinks: 0,
        suspiciousLinks: 0,
        findings: {
          issues: 0,
          recommendations: 0,
          criticalIssues: 0
        },
        price: 0,
        paid: false,
        deliveryDate: deliveryDate.toISOString().split('T')[0],
        notes: ''
      })
    }
  }, [type, audit])

  const handleInputChange = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof Audit] as any || {}),
          [child]: value
        }
      }))
    } else {
      setFormData(prev => ({ ...prev, [field]: value }))
    }
  }

  const handleSave = () => {
    if (!formData.title || !formData.clientName || !formData.clientEmail || !formData.domain) {
      return
    }

    const auditData = {
      ...formData,
      createdAt: audit?.createdAt || new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      completedAt: formData.status === 'completed' ? new Date().toISOString().split('T')[0] : undefined
    }

    if (type === 'add') {
      onAdd(auditData as Omit<Audit, 'id'>)
    } else if (type === 'edit' && audit) {
      onUpdate({ ...auditData, id: audit.id } as Audit)
    }
    onClose()
  }

  const handleDelete = () => {
    if (audit) {
      onDelete(audit.id)
    }
    onClose()
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
        return <Link className="h-5 w-5 text-blue-500" />
      case 'seo-audit':
        return <BarChart3 className="h-5 w-5 text-green-500" />
      case 'competitor-analysis':
        return <Target className="h-5 w-5 text-purple-500" />
      case 'technical-audit':
        return <Settings className="h-5 w-5 text-orange-500" />
      default:
        return <FileText className="h-5 w-5 text-gray-500" />
    }
  }

  if (!type) return null

  return (
    <>
      {/* View Audit Modal */}
      <Dialog open={type === 'view'} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Audit Details
            </DialogTitle>
            <DialogDescription>
              Comprehensive audit information and progress tracking
            </DialogDescription>
          </DialogHeader>
          
          {audit && (
            <div className="space-y-6">
              {/* Header Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {getTypeIcon(audit.type)}
                    {audit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Status</Label>
                      <div className="flex items-center gap-2 mt-1">
                        {getStatusIcon(audit.status)}
                        <Badge variant={getStatusVariant(audit.status) as any}>
                          {audit.status.replace('-', ' ')}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Priority</Label>
                      <div className="mt-1">
                        <Badge variant={getPriorityVariant(audit.priority) as any}>
                          {audit.priority}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Progress</Label>
                      <div className="mt-2">
                        <Progress value={audit.progress} className="h-2" />
                        <span className="text-sm text-muted-foreground">{audit.progress}%</span>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Payment Status</Label>
                      <div className="mt-1">
                        <Badge variant={audit.paid ? 'default' : 'destructive'}>
                          {audit.paid ? '✓ Paid' : '✗ Unpaid'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Client Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Client Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Client Name</Label>
                      <p className="text-lg font-medium">{audit.clientName}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                      <p className="text-sm">{audit.clientEmail}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Domain</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span>{audit.domain}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Project Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Project Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Audit Type</Label>
                      <p className="capitalize">{audit.type.replace('-', ' ')}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Assigned To</Label>
                      <p>{audit.assignedTo}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Price</Label>
                      <p className="text-lg font-bold text-green-600">{formatCurrency(audit.price)}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Created Date</Label>
                      <p className="mt-1">{audit.createdAt}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Delivery Date</Label>
                      <p className="mt-1">{audit.deliveryDate}</p>
                    </div>
                    {audit.completedAt && (
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Completed Date</Label>
                        <p className="mt-1">{audit.completedAt}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Backlink Analysis (if applicable) */}
              {(audit.type === 'backlink-audit' && audit.totalLinks) && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Backlink Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{audit.totalLinks}</div>
                        <div className="text-sm text-muted-foreground">Total Links</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{audit.healthyLinks}</div>
                        <div className="text-sm text-muted-foreground">Healthy Links</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">{audit.toxicLinks}</div>
                        <div className="text-sm text-muted-foreground">Toxic Links</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-600">{audit.suspiciousLinks}</div>
                        <div className="text-sm text-muted-foreground">Suspicious Links</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Audit Findings */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Audit Findings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{audit.findings.criticalIssues}</div>
                      <div className="text-sm text-muted-foreground">Critical Issues</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{audit.findings.issues}</div>
                      <div className="text-sm text-muted-foreground">Total Issues</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{audit.findings.recommendations}</div>
                      <div className="text-sm text-muted-foreground">Recommendations</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Notes */}
              {audit.notes && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{audit.notes}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Add/Edit Audit Modal */}
      <Dialog open={type === 'add' || type === 'edit'} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              {type === 'add' ? 'Create New Audit' : 'Edit Audit'}
            </DialogTitle>
            <DialogDescription>
              {type === 'add' ? 'Set up a new audit project' : 'Update audit information'}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Audit Title *</Label>
                  <Input
                    id="title"
                    value={formData.title || ''}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Enter audit title"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="type">Audit Type</Label>
                    <Select
                      value={formData.type || 'seo-audit'}
                      onValueChange={(value) => handleInputChange('type', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="seo-audit">SEO Audit</SelectItem>
                        <SelectItem value="backlink-audit">Backlink Audit</SelectItem>
                        <SelectItem value="competitor-analysis">Competitor Analysis</SelectItem>
                        <SelectItem value="technical-audit">Technical Audit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="domain">Domain *</Label>
                    <Input
                      id="domain"
                      value={formData.domain || ''}
                      onChange={(e) => handleInputChange('domain', e.target.value)}
                      placeholder="example.com"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Client Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Client Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="clientName">Client Name *</Label>
                    <Input
                      id="clientName"
                      value={formData.clientName || ''}
                      onChange={(e) => handleInputChange('clientName', e.target.value)}
                      placeholder="Enter client name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="clientEmail">Client Email *</Label>
                    <Input
                      id="clientEmail"
                      type="email"
                      value={formData.clientEmail || ''}
                      onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                      placeholder="client@example.com"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Management */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Project Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={formData.status || 'pending'}
                      onValueChange={(value) => handleInputChange('status', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <Select
                      value={formData.priority || 'medium'}
                      onValueChange={(value) => handleInputChange('priority', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="progress">Progress (%)</Label>
                    <Input
                      id="progress"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.progress || 0}
                      onChange={(e) => handleInputChange('progress', parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="assignedTo">Assigned To</Label>
                    <Input
                      id="assignedTo"
                      value={formData.assignedTo || ''}
                      onChange={(e) => handleInputChange('assignedTo', e.target.value)}
                      placeholder="Team member name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="price">Price ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      min="0"
                      value={formData.price || 0}
                      onChange={(e) => handleInputChange('price', parseFloat(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="deliveryDate">Delivery Date</Label>
                    <Input
                      id="deliveryDate"
                      type="date"
                      value={formData.deliveryDate || ''}
                      onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="paid"
                    checked={formData.paid || false}
                    onCheckedChange={(checked) => handleInputChange('paid', checked)}
                  />
                  <Label htmlFor="paid">Payment Received</Label>
                </div>
              </CardContent>
            </Card>

            {/* Findings (for existing audits) */}
            {type === 'edit' && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Audit Findings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="criticalIssues">Critical Issues</Label>
                      <Input
                        id="criticalIssues"
                        type="number"
                        min="0"
                        value={formData.findings?.criticalIssues || 0}
                        onChange={(e) => handleInputChange('findings.criticalIssues', parseInt(e.target.value))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="issues">Total Issues</Label>
                      <Input
                        id="issues"
                        type="number"
                        min="0"
                        value={formData.findings?.issues || 0}
                        onChange={(e) => handleInputChange('findings.issues', parseInt(e.target.value))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="recommendations">Recommendations</Label>
                      <Input
                        id="recommendations"
                        type="number"
                        min="0"
                        value={formData.findings?.recommendations || 0}
                        onChange={(e) => handleInputChange('findings.recommendations', parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Notes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="notes">Project Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes || ''}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Enter any additional notes or requirements"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              {type === 'add' ? 'Create Audit' : 'Update Audit'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Audit Modal */}
      <Dialog open={type === 'delete'} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Delete Audit
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this audit? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          
          {audit && (
            <div className="py-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium">{audit.title}</p>
                <p className="text-sm text-muted-foreground">{audit.clientName} - {audit.domain}</p>
                <p className="text-sm text-muted-foreground">{audit.type.replace('-', ' ')}</p>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete Audit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}