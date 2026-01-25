export interface NavigationLink {
  title: string
  slug: string
  icon?: string
}

export interface APIError {
  success: boolean
  message: string
}

export interface BacklinkDataType {
  anchors: number
  backlinks: number

  createdAt: string // ISO date string
  updatedAt: string // ISO date string

  dofollow_anchors: number
  dofollow_backlinks: number
  dofollow_from_home_page_backlinks: number
  dofollow_refdomains: number

  domain_inlink_rank: number
  inlink_rank: number

  edu_backlinks: number
  edu_refdomains: number

  gov_backlinks: number
  gov_refdomains: number

  from_home_page_backlinks: number
  from_home_page_refdomains: number

  ips: number
  subnets: number

  nofollow_backlinks: number
  text_backlinks: number

  pages_with_backlinks: number
  refdomains: number

  top_anchors_by_backlinks: TopAnchorByBacklinks[]
  top_anchors_by_refdomains: TopAnchorByRefdomains[]

  top_countries: TopCountry[]
  top_pages_by_backlinks: TopPageByBacklinks[]
  top_pages_by_refdomains: TopPageByRefdomains[]
  top_tlds: TopTld[]
}

export interface BacklinkState {
  data: BacklinkData
}

export interface TopAnchorByBacklinks {
  anchor: string
  backlinks: number
}

export interface TopAnchorByRefdomains {
  anchor: string
  refdomains: number
}
export interface TopCountry {
  country: string // e.g. "us"
  count: number
}
export interface TopPageByBacklinks {
  url: string
  backlinks: number
}

export interface TopPageByRefdomains {
  url: string
  refdomains: number
}
export interface TopTld {
  tld: string // e.g. "com"
  count: number
}
