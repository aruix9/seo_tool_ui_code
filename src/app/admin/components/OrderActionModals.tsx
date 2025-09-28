'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Order, formatCurrency, formatDate } from '../data/orderMockData'
import {
  Package,
  Truck,
  CheckCircle,
  XCircle,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Calendar,
  Hash,
  User,
  DollarSign,
} from 'lucide-react'

interface OrderActionModalsProps {
  selectedOrder: Order | null
  isViewModalOpen: boolean
  isStatusModalOpen: boolean
  isEmailModalOpen: boolean
  isRefundModalOpen: boolean
  onViewModalChange: (open: boolean) => void
  onStatusModalChange: (open: boolean) => void
  onEmailModalChange: (open: boolean) => void
  onRefundModalChange: (open: boolean) => void
  onUpdateStatus: (orderId: string, newStatus: Order['status']) => void
  onSendEmail: (orderId: string, subject: string, message: string) => void
  onProcessRefund: (orderId: string, amount: number, reason: string) => void
}

export function OrderActionModals({
  selectedOrder,
  isViewModalOpen,
  isStatusModalOpen,
  isEmailModalOpen,
  isRefundModalOpen,
  onViewModalChange,
  onStatusModalChange,
  onEmailModalChange,
  onRefundModalChange,
  onUpdateStatus,
  onSendEmail,
  onProcessRefund,
}: OrderActionModalsProps) {
  const [newStatus, setNewStatus] = useState<Order['status']>('pending')
  const [emailSubject, setEmailSubject] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [refundAmount, setRefundAmount] = useState(0)
  const [refundReason, setRefundReason] = useState('')

  const handleStatusUpdate = () => {
    if (!selectedOrder) return
    
    onUpdateStatus(selectedOrder.id, newStatus)
    onStatusModalChange(false)
    setNewStatus('pending')
  }

  const handleSendEmail = () => {
    if (!selectedOrder || !emailSubject || !emailMessage) return
    
    onSendEmail(selectedOrder.id, emailSubject, emailMessage)
    onEmailModalChange(false)
    setEmailSubject('')
    setEmailMessage('')
  }

  const handleProcessRefund = () => {
    if (!selectedOrder || refundAmount <= 0 || !refundReason) return
    
    onProcessRefund(selectedOrder.id, refundAmount, refundReason)
    onRefundModalChange(false)
    setRefundAmount(0)
    setRefundReason('')
  }

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Package className="h-4 w-4" />
      case 'processing':
        return <RefreshCw className="h-4 w-4" />
      case 'shipped':
        return <Truck className="h-4 w-4" />
      case 'delivered':
        return <CheckCircle className="h-4 w-4" />
      case 'cancelled':
        return <XCircle className="h-4 w-4" />
      case 'refunded':
        return <RefreshCw className="h-4 w-4" />
      default:
        return <Package className="h-4 w-4" />
    }
  }

  return (
    <>
      {/* View Order Details Modal */}
      <Dialog open={isViewModalOpen} onOpenChange={onViewModalChange}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Order Details - {selectedOrder?.orderNumber}
            </DialogTitle>
            <DialogDescription>
              Complete order information and status
            </DialogDescription>
          </DialogHeader>
          
          {selectedOrder && (
            <div className="space-y-6">
              {/* Order Header */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Hash className="h-4 w-4" />
                    Order Number
                  </div>
                  <p className="text-lg font-semibold">{selectedOrder.orderNumber}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Calendar className="h-4 w-4" />
                    Order Date
                  </div>
                  <p>{formatDate(selectedOrder.orderDate)}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    {getStatusIcon(selectedOrder.status)}
                    Status
                  </div>
                  <Badge variant="secondary" className={`${getStatusColor(selectedOrder.status)} capitalize`}>
                    {selectedOrder.status}
                  </Badge>
                </div>
              </div>

              {/* Customer Information */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Customer Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg">
                  <div className="space-y-2">
                    <p className="font-medium">{selectedOrder.customer.name}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="h-4 w-4" />
                      {selectedOrder.customer.email}
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Order Items</h3>
                <div className="space-y-3">
                  {selectedOrder.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-4 border rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{item.productName}</p>
                        <p className="text-sm text-gray-600">SKU: {item.sku}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatCurrency(item.totalPrice)}</p>
                        <p className="text-sm text-gray-600">{formatCurrency(item.unitPrice)} each</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Order Summary
                </h3>
                <div className="p-4 border rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>{formatCurrency(selectedOrder.subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>{formatCurrency(selectedOrder.tax)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>{formatCurrency(selectedOrder.shipping)}</span>
                  </div>
                  {selectedOrder.discount && selectedOrder.discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount:</span>
                      <span>-{formatCurrency(selectedOrder.discount)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span>{formatCurrency(selectedOrder.total)}</span>
                  </div>
                </div>
              </div>

              {/* Payment & Shipping Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Payment Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Information
                  </h3>
                  <div className="p-4 border rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span>Method:</span>
                      <span>{selectedOrder.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <Badge variant="secondary" className={getPaymentStatusColor(selectedOrder.paymentStatus)}>
                        {selectedOrder.paymentStatus}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Shipping Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Shipping Address
                  </h3>
                  <div className="p-4 border rounded-lg">
                    <p>{selectedOrder.shippingAddress.street}</p>
                    <p>
                      {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state}{' '}
                      {selectedOrder.shippingAddress.zipCode}
                    </p>
                    <p>{selectedOrder.shippingAddress.country}</p>
                    {selectedOrder.trackingNumber && (
                      <div className="mt-2 pt-2 border-t">
                        <p className="text-sm text-gray-600">
                          Tracking: <span className="font-medium">{selectedOrder.trackingNumber}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Notes */}
              {selectedOrder.notes && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Order Notes</h3>
                  <div className="p-4 border rounded-lg bg-yellow-50">
                    <p className="text-sm">{selectedOrder.notes}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Update Status Modal */}
      <Dialog open={isStatusModalOpen} onOpenChange={onStatusModalChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Order Status</DialogTitle>
            <DialogDescription>
              Change the status for order {selectedOrder?.orderNumber}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="status">New Status</Label>
              <Select value={newStatus} onValueChange={(value: Order['status']) => setNewStatus(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => onStatusModalChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleStatusUpdate}>Update Status</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Send Email Modal */}
      <Dialog open={isEmailModalOpen} onOpenChange={onEmailModalChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send Email to Customer</DialogTitle>
            <DialogDescription>
              Send an email to {selectedOrder?.customer.name} ({selectedOrder?.customer.email})
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                placeholder="Enter email subject"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={emailMessage}
                onChange={(e) => setEmailMessage(e.target.value)}
                placeholder="Enter your message"
                rows={5}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => onEmailModalChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleSendEmail} disabled={!emailSubject || !emailMessage}>
              <Mail className="h-4 w-4 mr-2" />
              Send Email
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Process Refund Modal */}
      <Dialog open={isRefundModalOpen} onOpenChange={onRefundModalChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Process Refund</DialogTitle>
            <DialogDescription>
              Process a refund for order {selectedOrder?.orderNumber}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Order Total:</strong> {selectedOrder && formatCurrency(selectedOrder.total)}
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="refundAmount">Refund Amount</Label>
              <Input
                id="refundAmount"
                type="number"
                step="0.01"
                value={refundAmount}
                onChange={(e) => setRefundAmount(parseFloat(e.target.value))}
                placeholder="0.00"
                max={selectedOrder?.total}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="refundReason">Reason for Refund</Label>
              <Textarea
                id="refundReason"
                value={refundReason}
                onChange={(e) => setRefundReason(e.target.value)}
                placeholder="Enter reason for refund"
                rows={3}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => onRefundModalChange(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleProcessRefund} 
              variant="destructive"
              disabled={!refundAmount || refundAmount <= 0 || !refundReason}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Process Refund
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

// Helper function for payment status colors (imported from orderMockData)
const getPaymentStatusColor = (status: Order['paymentStatus']) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'paid':
      return 'bg-green-100 text-green-800'
    case 'failed':
      return 'bg-red-100 text-red-800'
    case 'refunded':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

// Helper function for order status colors (imported from orderMockData)
const getStatusColor = (status: Order['status']) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'processing':
      return 'bg-blue-100 text-blue-800'
    case 'shipped':
      return 'bg-purple-100 text-purple-800'
    case 'delivered':
      return 'bg-green-100 text-green-800'
    case 'cancelled':
      return 'bg-gray-100 text-gray-800'
    case 'refunded':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}