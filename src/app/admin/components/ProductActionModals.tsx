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
import { AlertTriangle, Package, Globe, TrendingUp, Clock, Star, CheckCircle, AlertCircle, Edit } from 'lucide-react'
import { Product, formatCurrency } from '../data/productMockData'

interface ProductActionModalsProps {
  type: 'view' | 'edit' | 'delete' | 'add' | null
  product: Product | null
  onClose: () => void
  onAdd: (product: Omit<Product, 'id'>) => void
  onUpdate: (product: Product) => void
  onDelete: (productId: number) => void
}

export function ProductActionModals({
  type,
  product,
  onClose,
  onAdd,
  onUpdate,
  onDelete
}: ProductActionModalsProps) {
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    description: '',
    category: 'Guest Posts',
    price: 0,
    stock: 0,
    status: 'draft',
    domain: '',
    domainAuthority: 0,
    domainRating: 0,
    monthlyTraffic: 0,
    turnaroundTime: 1,
    features: [],
    specifications: {
      linkType: 'dofollow',
      contentType: '',
      wordCount: 0,
      language: 'English',
      niches: []
    }
  })

  const [featuresInput, setFeaturesInput] = useState('')
  const [nichesInput, setNichesInput] = useState('')

  // Initialize form data when modal opens
  useEffect(() => {
    if ((type === 'edit' || type === 'view') && product) {
      setFormData(product)
      setFeaturesInput(product.features.join(', '))
      setNichesInput(product.specifications.niches.join(', '))
    } else if (type === 'add') {
      setFormData({
        name: '',
        description: '',
        category: 'Guest Posts',
        price: 0,
        stock: 0,
        status: 'draft',
        domain: '',
        domainAuthority: 0,
        domainRating: 0,
        monthlyTraffic: 0,
        turnaroundTime: 1,
        features: [],
        specifications: {
          linkType: 'dofollow',
          contentType: '',
          wordCount: 0,
          language: 'English',
          niches: []
        }
      })
      setFeaturesInput('')
      setNichesInput('')
    }
  }, [type, product])

  const handleInputChange = (field: string, value: string | number) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      setFormData(prev => {
        const parentValue = prev[parent as keyof Product]
        return {
          ...prev,
          [parent]: {
            ...(typeof parentValue === 'object' && parentValue !== null ? parentValue : {}),
            [child]: value
          }
        }
      })
    } else {
      setFormData(prev => ({ ...prev, [field]: value }))
    }
  }

  const handleSave = () => {
    if (!formData.name || !formData.description || !formData.domain) {
      return
    }

    const features = featuresInput.split(',').map(f => f.trim()).filter(Boolean)
    const niches = nichesInput.split(',').map(n => n.trim()).filter(Boolean)

    const productData = {
      ...formData,
      features,
      specifications: {
        ...formData.specifications!,
        niches
      },
      createdAt: product?.createdAt || new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    }

    if (type === 'add') {
      onAdd(productData as Omit<Product, 'id'>)
    } else if (type === 'edit' && product) {
      onUpdate({ ...productData, id: product.id } as Product)
    }
    onClose()
  }

  const handleDelete = () => {
    if (product) {
      onDelete(product.id)
    }
    onClose()
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'inactive':
        return <AlertCircle className="h-4 w-4 text-red-500" />
      case 'draft':
        return <Edit className="h-4 w-4 text-yellow-500" />
      default:
        return <Package className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'active':
        return 'default'
      case 'inactive':
        return 'destructive'
      case 'draft':
        return 'secondary'
      default:
        return 'outline'
    }
  }

  if (!type) return null

  return (
    <>
      {/* View Product Modal */}
      <Dialog open={type === 'view'} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Product Details
            </DialogTitle>
            <DialogDescription>
              Comprehensive information about this product
            </DialogDescription>
          </DialogHeader>
          
          {product && (
            <div className="space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Product Name</Label>
                      <p className="text-lg font-medium">{product.name}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Status</Label>
                      <div className="flex items-center gap-2 mt-1">
                        {getStatusIcon(product.status)}
                        <Badge variant={getStatusVariant(product.status)}>
                          {product.status}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Category</Label>
                      <p className="mt-1">
                        <Badge variant="outline">{product.category}</Badge>
                      </p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Domain</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span>{product.domain}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Description</Label>
                    <p className="mt-1 text-sm">{product.description}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing and Inventory */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pricing & Inventory</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Price</Label>
                      <p className="text-2xl font-bold text-green-600">{formatCurrency(product.price)}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Stock Available</Label>
                      <p className={`text-2xl font-bold ${product.stock <= 10 ? 'text-red-600' : 'text-blue-600'}`}>
                        {product.stock} units
                      </p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Turnaround Time</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-lg font-medium">{product.turnaroundTime} days</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Domain Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Domain Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Domain Authority</Label>
                      <p className="text-2xl font-bold text-purple-600">{product.domainAuthority}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Domain Rating</Label>
                      <p className="text-2xl font-bold text-orange-600">{product.domainRating}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Monthly Traffic</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        <span className="text-lg font-medium">
                          {product.monthlyTraffic.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features and Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Specifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Link Type</Label>
                      <p className="mt-1">
                        <Badge variant={product.specifications.linkType === 'dofollow' ? 'default' : 'secondary'}>
                          {product.specifications.linkType}
                        </Badge>
                      </p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Content Type</Label>
                      <p className="mt-1">{product.specifications.contentType}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Word Count</Label>
                      <p className="mt-1">{product.specifications.wordCount} words</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Language</Label>
                      <p className="mt-1">{product.specifications.language}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Niches</Label>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {product.specifications.niches.map((niche, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {niche}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Dates */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Created Date</Label>
                      <p className="mt-1">{product.createdAt}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Last Updated</Label>
                      <p className="mt-1">{product.updatedAt}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Add/Edit Product Modal */}
      <Dialog open={type === 'add' || type === 'edit'} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              {type === 'add' ? 'Add New Product' : 'Edit Product'}
            </DialogTitle>
            <DialogDescription>
              {type === 'add' ? 'Create a new product in your catalog' : 'Update product information'}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Product Name *</Label>
                    <Input
                      id="name"
                      value={formData.name || ''}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter product name"
                    />
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
                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description || ''}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Enter product description"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={formData.category || 'Guest Posts'}
                      onValueChange={(value) => handleInputChange('category', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Guest Posts">Guest Posts</SelectItem>
                        <SelectItem value="Link Insertions">Link Insertions</SelectItem>
                        <SelectItem value="Directory">Directory</SelectItem>
                        <SelectItem value="Sponsored">Sponsored</SelectItem>
                        <SelectItem value="Press Release">Press Release</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={formData.status || 'draft'}
                      onValueChange={(value) => handleInputChange('status', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="turnaroundTime">Turnaround (days)</Label>
                    <Input
                      id="turnaroundTime"
                      type="number"
                      min="1"
                      value={formData.turnaroundTime || 1}
                      onChange={(e) => handleInputChange('turnaroundTime', parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing and Inventory */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pricing & Inventory</CardTitle>
              </CardHeader>
              <CardContent>
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
                    <Label htmlFor="stock">Stock Quantity</Label>
                    <Input
                      id="stock"
                      type="number"
                      min="0"
                      value={formData.stock || 0}
                      onChange={(e) => handleInputChange('stock', parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Domain Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Domain Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="domainAuthority">Domain Authority</Label>
                    <Input
                      id="domainAuthority"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.domainAuthority || 0}
                      onChange={(e) => handleInputChange('domainAuthority', parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="domainRating">Domain Rating</Label>
                    <Input
                      id="domainRating"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.domainRating || 0}
                      onChange={(e) => handleInputChange('domainRating', parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="monthlyTraffic">Monthly Traffic</Label>
                    <Input
                      id="monthlyTraffic"
                      type="number"
                      min="0"
                      value={formData.monthlyTraffic || 0}
                      onChange={(e) => handleInputChange('monthlyTraffic', parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features and Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <Label htmlFor="features">Features (comma-separated)</Label>
                    <Textarea
                      id="features"
                      value={featuresInput}
                      onChange={(e) => setFeaturesInput(e.target.value)}
                      placeholder="Editorial review, Social media promotion, Newsletter inclusion"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Link Type</Label>
                      <Select
                        value={formData.specifications?.linkType || 'dofollow'}
                        onValueChange={(value) => handleInputChange('specifications.linkType', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dofollow">Dofollow</SelectItem>
                          <SelectItem value="nofollow">Nofollow</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="wordCount">Word Count</Label>
                      <Input
                        id="wordCount"
                        type="number"
                        min="0"
                        value={formData.specifications?.wordCount || 0}
                        onChange={(e) => handleInputChange('specifications.wordCount', parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="contentType">Content Type</Label>
                    <Input
                      id="contentType"
                      value={formData.specifications?.contentType || ''}
                      onChange={(e) => handleInputChange('specifications.contentType', e.target.value)}
                      placeholder="Editorial article, Review, Press release, etc."
                    />
                  </div>
                  <div>
                    <Label htmlFor="language">Language</Label>
                    <Input
                      id="language"
                      value={formData.specifications?.language || 'English'}
                      onChange={(e) => handleInputChange('specifications.language', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="niches">Niches (comma-separated)</Label>
                    <Textarea
                      id="niches"
                      value={nichesInput}
                      onChange={(e) => setNichesInput(e.target.value)}
                      placeholder="Technology, Business, Finance, Healthcare"
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              {type === 'add' ? 'Add Product' : 'Update Product'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Product Modal */}
      <Dialog open={type === 'delete'} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Delete Product
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this product? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          
          {product && (
            <div className="py-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-muted-foreground">{product.domain}</p>
                <p className="text-sm text-muted-foreground">{product.category}</p>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete Product
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}