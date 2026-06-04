export type Segment = "residential" | "commercial" | "industrial";

export type CalculatorInput = {
  monthlyBill: number;
  segment: Segment;
  city: string;
};

export type CalculatorResult = {
  estimatedSizeKw: number;
  estimatedAnnualGenerationKwh: number;
  estimatedAnnualSavings: number;
  installationMin: number;
  installationMax: number;
  disclaimer: string;
};

const SEGMENT_FACTOR: Record<Segment, number> = {
  residential: 1,
  commercial: 1.12,
  industrial: 1.22,
};

/** Illustrative ₹/kWh for sizing */
const ASSUMED_TARIFF = 8;

const PEAK_SUN_HOURS = 4.2;

/** kWh per kW per year (India average, illustrative) */
const KWH_PER_KW_YEAR = 1350;

const COST_PER_KW_MIN = 48000;
const COST_PER_KW_MAX = 68000;

const OFFSET_FRACTION = 0.72;

/** Minor city irradiance adjustment (UP-focused) */
const CITY_FACTOR: Record<string, number> = {
  lucknow: 1.02,
  kanpur: 1.01,
  noida: 1.03,
  ghaziabad: 1.02,
  varanasi: 0.98,
  agra: 1,
  meerut: 1.01,
  prayagraj: 0.99,
};

function cityFactor(city: string): number {
  const key = city.trim().toLowerCase();
  return CITY_FACTOR[key] ?? 1;
}

export function calculateSolarEstimate(
  input: CalculatorInput
): CalculatorResult | null {
  const { monthlyBill, segment, city } = input;

  if (!monthlyBill || monthlyBill <= 0) {
    return null;
  }

  const monthlyKwh = monthlyBill / ASSUMED_TARIFF;
  const dailyKwh = monthlyKwh / 30;
  const baseKw = dailyKwh / PEAK_SUN_HOURS;

  const estimatedSizeKw =
    Math.round(baseKw * SEGMENT_FACTOR[segment] * cityFactor(city) * 10) / 10;

  const safeKw = Math.max(estimatedSizeKw, 1);
  const cf = cityFactor(city);
  const estimatedAnnualGenerationKwh = Math.round(
    safeKw * KWH_PER_KW_YEAR * cf
  );
  const estimatedMonthlySavings = Math.round(monthlyBill * OFFSET_FRACTION);
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;
  const installationMin = Math.round(safeKw * COST_PER_KW_MIN);
  const installationMax = Math.round(safeKw * COST_PER_KW_MAX);

  return {
    estimatedSizeKw: safeKw,
    estimatedAnnualGenerationKwh,
    estimatedAnnualSavings,
    installationMin,
    installationMax,
    disclaimer:
      "These estimates are for informational purposes only and do not represent final project quotations. Actual pricing, subsidy eligibility, savings, and generation depend on site conditions, technical survey, location, and system design.",
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-IN").format(n);
}
