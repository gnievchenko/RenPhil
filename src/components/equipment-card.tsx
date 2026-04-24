import Link from "next/link";
import { type Equipment, formatGBP } from "@/lib/equipment";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function EquipmentCard({ item }: { item: Equipment }) {
  return (
    <Link href={`/equipment/${item.slug}`} className="group">
      <Card className="h-full overflow-hidden pt-0 transition group-hover:shadow-lg">
        <div
          className="aspect-[4/3] w-full"
          style={{
            backgroundImage: `linear-gradient(135deg, ${item.gradient[0]}, ${item.gradient[1]})`,
          }}
          aria-hidden="true"
        />
        <CardContent className="space-y-3 px-5 pb-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold leading-tight">{item.title}</h3>
            <Badge variant="secondary" className="shrink-0 text-[11px]">
              {item.city}
            </Badge>
          </div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {item.category}
          </p>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {item.tagline}
          </p>
          <div className="flex items-end justify-between pt-1">
            <p className="text-sm">
              <span className="font-semibold text-foreground">
                {formatGBP(item.pricePerDay)}
              </span>{" "}
              <span className="text-muted-foreground">/ day</span>
            </p>
            <p className="text-sm text-muted-foreground">
              ★ {item.rating.toFixed(2)}{" "}
              <span className="text-xs">({item.reviews})</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
