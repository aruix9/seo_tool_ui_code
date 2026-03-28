export interface NavigationLink {
  title: string;
  slug: string;
  icon?: string;
}

export interface APIError {
  success: boolean;
  message: string;
}

export interface BacklinkDataType {
  anchors: number;
  backlinks: number;
  target: string;

  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string

  dofollow_anchors: number;
  dofollow_backlinks: number;
  dofollow_from_home_page_backlinks: number;
  dofollow_refdomains: number;

  domain_inlink_rank: number;
  inlink_rank: number;

  edu_backlinks: number;
  edu_refdomains: number;

  gov_backlinks: number;
  gov_refdomains: number;

  from_home_page_backlinks: number;
  from_home_page_refdomains: number;

  ips: number;
  subnets: number;

  nofollow_backlinks: number;
  text_backlinks: number;

  pages_with_backlinks: number;
  refdomains: number;

  top_anchors_by_backlinks: TopAnchorByBacklinks[];
  top_anchors_by_refdomains: TopAnchorByRefdomains[];

  top_countries: TopCountry[];
  top_pages_by_backlinks: TopPageByBacklinks[];
  top_pages_by_refdomains: TopPageByRefdomains[];
  top_tlds: TopTld[];
}

export interface BacklinkState {
  data: BacklinkData;
}

export interface TopAnchorByBacklinks {
  anchor: string;
  backlinks: number;
}

export interface TopAnchorByRefdomains {
  anchor: string;
  refdomains: number;
}
export interface TopCountry {
  country: string; // e.g. "us"
  count: number;
}
export interface TopPageByBacklinks {
  url: string;
  backlinks: number;
}

export interface TopPageByRefdomains {
  url: string;
  refdomains: number;
}
export interface TopTld {
  tld: string; // e.g. "com"
  count: number;
}

export interface MetricsDataType {
  backlinks: number;
  dofollow_backlinks: number;
  edu_backlinks: number;
  gov_backlinks: number;
  ips: number;
  nofollow_backlinks: number;
  refdomains: number;
  subnets: number;
  target: string;
}

export interface AnchorDataType {
  anchor: string;
  backlinks: number;
  dofollow_backlinks: number;
  first_seen: string;
  last_visited: string;
  nofollow_backlinks: number;
  refdomains: number;
}

export interface RefDomainDataType {
  refdomain: string;
  backlinks: number;
  dofollow_backlinks: number;
  domain_inlink_rank: number;
  first_seen: string;
}

export interface auditDataType {
  summary: BacklinkDataType;
  metrics: MetricsDataType;
  anchors: AnchorDataType[];
  refDomains: RefDomainDataType[];
}

export interface RefdomainType {
  backlinks: number;
  brand: string;
  dofollow_backlinks: number;
  domain_inlink_rank: number;
  first_seen: string; // Date string (e.g., "2026-02-11")
  refdomain: string;
  target: string;
  type: string; // e.g., "refdomains"
}

export interface AnchorType {
  anchor: string;
  backlinks: number;
  brand: string;
  dofollow_backlinks: number;
  first_seen: string; // Date string (YYYY-MM-DD)
  last_visited: string; // Date string (YYYY-MM-DD)
  nofollow_backlinks: number;
  refdomains: number;
  target: string;
  type: "anchors"; // specific literal type
}
