'use client'
import { Suspense, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getbacklinkData, getSummary } from '@/lib/actions/audit/auditActions'
import LoadingSkeleton from '@/components/shared/layout/loadingSkeleton'
import { BacklinkState } from '../../../../../types/type'

const BacklinkTable = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [backlinkData, setBacklinkData] = useState<BacklinkState | null>(null)

  useEffect(() => {
    const fetchBacklinkData = async () => {
      const summaryResponse = await getbacklinkData()
      setBacklinkData({
        data: summaryResponse,
        // metrics: metricsResponse,
        // historyBacklink: historyResponse,
        // backlinksMetrics: backlinksMetricsResponse
      })
    }

    fetchBacklinkData()
  }, [])

  const handleUpdateBacklink = async (urls: string, index: number) => {
    try {
      setLoading(true)
      setError(null)
      if (backlinkData) {
        const response = await getSummary([urls], true)
        // clone array
        const newData = [...backlinkData.data]

        // clone ONLY the object you are changing
        newData[index] = {
          ...newData[index],
          updatedAtFormatted: new Date()
            .toLocaleDateString('en-GB')
            .replace(/\//g, '-'),
        }

        setBacklinkData((prev) =>
          prev
            ? {
                ...prev,
                data: newData,
              }
            : prev,
        )
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (!backlinkData || loading) {
    return <LoadingSkeleton />
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Target</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead>Fetch New Data</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {backlinkData.data?.map((backlink, index) => (
            <TableRow key={index}>
              <TableCell>{backlink.target}</TableCell>
              <TableCell>{backlink.updatedAtFormatted}</TableCell>
              <TableCell>
                <Button
                  onClick={() => handleUpdateBacklink(backlink.target, index)}
                >
                  {loading ? 'Updating...' : 'Fetch new Data'}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Suspense>
  )
}

export default BacklinkTable
