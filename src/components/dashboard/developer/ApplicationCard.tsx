import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckCircle2, XCircle } from "lucide-react";

interface ApplicationCardProps {
  ideaTitle: string;
  status: "pending" | "accepted" | "rejected";
  appliedDate: string;
  founderName?: string;
  whatsappNumber?: string;
}

export const ApplicationCard = ({
  ideaTitle,
  status,
  appliedDate,
  founderName,
  whatsappNumber
}: ApplicationCardProps) => {
  const statusConfig = {
    pending: { icon: Clock, color: "bg-yellow-500/10 text-yellow-500" },
    accepted: { icon: CheckCircle2, color: "bg-green-500/10 text-green-500" },
    rejected: { icon: XCircle, color: "bg-red-500/10 text-red-500" }
  };

  const StatusIcon = statusConfig[status].icon;

  return (
    <Card className="w-full bg-card/50 border-border/10">
      <CardHeader>
        <CardTitle className="text-lg flex items-center justify-between">
          <span>{ideaTitle}</span>
          <Badge 
            variant="secondary" 
            className={statusConfig[status].color}
          >
            <StatusIcon className="mr-2 h-4 w-4" />
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Applied on: {appliedDate}
        </p>
        {status === "accepted" && founderName && whatsappNumber && (
          <div className="space-y-2 p-4 bg-secondary/20 rounded-lg">
            <p className="text-sm font-medium">Contact Information:</p>
            <p className="text-sm">Founder: {founderName}</p>
            <p className="text-sm">WhatsApp: {whatsappNumber}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};