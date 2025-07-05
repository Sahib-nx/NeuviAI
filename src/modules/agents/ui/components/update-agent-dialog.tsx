import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentForm } from "./agent-form";
import { AgentsGetOne } from "../../types";

interface UpdateAgentDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialValues: AgentsGetOne;
};

export const UpdateAgentDialog = ({
    open,
    onOpenChange,
    initialValues,
}: UpdateAgentDialogProps) => {
    return (
        <ResponsiveDialog title="Edit Agent" description="Create the agent details" open={open} onOpenChange={onOpenChange}>
            <AgentForm
                onSuccess={() => onOpenChange(false)}
                onCancel={() => onOpenChange(false)}
                initialValues={initialValues}

            />
        </ResponsiveDialog>
    );
};