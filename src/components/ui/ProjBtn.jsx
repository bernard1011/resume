

import NeonButton from "./NeonButton";
import { ArrowRight } from "lucide-react";

const ProjBtn = () => {
  return (
    <NeonButton variant="primary" size="sm">
      View Project <ArrowRight size={13} />
    </NeonButton>
  );
};

export default ProjBtn;
