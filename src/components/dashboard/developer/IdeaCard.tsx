import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users } from "lucide-react";

interface IdeaCardProps {
  title: string;
  description: string;
  requiredSkills: string[];
  equity: string;
  compensationType: string;
  onApply: () => void;
}

export const IdeaCard = ({
  title,
  description,
  requiredSkills,
  equity,
  compensationType,
  onApply
}: IdeaCardProps) => {
  return (
    <Card className="w-full bg-card/50 border-border/10">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <Badge variant="secondary" className="ml-2">
            {compensationType}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center gap-2 text-sm">
          <Briefcase className="h-4 w-4" />
          <span>Equity: {equity}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {requiredSkills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onApply} className="w-full">
          <Users className="mr-2" />
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
};