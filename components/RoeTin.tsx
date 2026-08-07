type Size = "sm" | "md" | "lg" | "xl";

interface RoeTinProps {
  size?: Size;
}

const SIZE_CONFIG: Record<
  Size,
  {
    tinWidth: string;
    tinHeight: string;
    clusterWidth: string;
    pearlW: string;
    pearlH: string;
    pearl3nW: string;
    pearl3nH: string;
    pearl5nW: string;
    pearl5nH: string;
  }
> = {
  sm: {
    tinWidth: "96px",
    tinHeight: "96px",
    clusterWidth: "56px",
    pearlW: "8px",
    pearlH: "8px",
    pearl3nW: "6px",
    pearl3nH: "6px",
    pearl5nW: "9px",
    pearl5nH: "9px",
  },
  md: {
    tinWidth: "120px",
    tinHeight: "120px",
    clusterWidth: "70px",
    pearlW: "9px",
    pearlH: "9px",
    pearl3nW: "7px",
    pearl3nH: "7px",
    pearl5nW: "10px",
    pearl5nH: "10px",
  },
  lg: {
    tinWidth: "220px",
    tinHeight: "220px",
    clusterWidth: "130px",
    pearlW: "15px",
    pearlH: "15px",
    pearl3nW: "12px",
    pearl3nH: "12px",
    pearl5nW: "17px",
    pearl5nH: "17px",
  },
  xl: {
    tinWidth: "62%",
    tinHeight: "auto",
    clusterWidth: "58%",
    pearlW: "11px",
    pearlH: "11px",
    pearl3nW: "9px",
    pearl3nH: "9px",
    pearl5nW: "12px",
    pearl5nH: "12px",
  },
};

export default function RoeTin({ size = "md" }: RoeTinProps) {
  const cfg = SIZE_CONFIG[size];

  return (
    <div
      className="roe-tin"
      style={{ width: cfg.tinWidth, height: cfg.tinHeight }}
      aria-hidden="true"
    >
      <div className="cluster" style={{ width: cfg.clusterWidth }}>
        {Array.from({ length: 12 }).map((_, i) => {
          const n = i + 1;
          let w = cfg.pearlW;
          let h = cfg.pearlH;
          if (n % 5 === 0) { w = cfg.pearl5nW; h = cfg.pearl5nH; }
          else if (n % 3 === 0) { w = cfg.pearl3nW; h = cfg.pearl3nH; }
          return (
            <span key={i} className="pearl" style={{ width: w, height: h }} />
          );
        })}
      </div>
    </div>
  );
}
